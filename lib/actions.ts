'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { prisma } from '@/lib/prisma'; // I need to create this singleton
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

// --- Auth Actions ---

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut();
}

// --- Project Actions ---

const ProjectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.string().min(1),
  technologies: z.string().min(1), // Expecting comma separated or similar
  liveUrl: z.string().optional(),
  githubUrl: z.string().optional(),
});

export async function createProject(prevState: any, formData: FormData) {
  const rawFormData = {
    title: formData.get('title'),
    description: formData.get('description'),
    image: formData.get('image'),
    technologies: formData.get('technologies'),
    liveUrl: formData.get('liveUrl'),
    githubUrl: formData.get('githubUrl'),
  };

  const validatedFields = ProjectSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Project.',
    };
  }

  // Convert technologies string to JSON string array for storage if needed, 
  // but schema says JSON string. 
  // Let's assume input is comma separated "React, Node" -> ["React", "Node"] -> JSON
  const techs = (validatedFields.data.technologies as string).split(',').map(t => t.trim());
  
  try {
    await prisma.project.create({
      data: {
        title: validatedFields.data.title,
        description: validatedFields.data.description,
        image: validatedFields.data.image,
        technologies: JSON.stringify(techs),
        liveUrl: validatedFields.data.liveUrl || null,
        githubUrl: validatedFields.data.githubUrl || null,
      },
    });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Project.',
    };
  }

  revalidatePath('/admin/projects');
  revalidatePath('/');
  redirect('/admin/projects');
}

export async function updateProject(id: string, prevState: any, formData: FormData) {
  const rawFormData = {
    title: formData.get('title'),
    description: formData.get('description'),
    image: formData.get('image'),
    technologies: formData.get('technologies'),
    liveUrl: formData.get('liveUrl'),
    githubUrl: formData.get('githubUrl'),
  };
  
  const validatedFields = ProjectSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Project.',
    };
  }

  const techs = (validatedFields.data.technologies as string).split(',').map(t => t.trim());

  try {
    await prisma.project.update({
      where: { id },
      data: {
        title: validatedFields.data.title,
        description: validatedFields.data.description,
        image: validatedFields.data.image,
        technologies: JSON.stringify(techs),
        liveUrl: validatedFields.data.liveUrl || null,
        githubUrl: validatedFields.data.githubUrl || null,
      },
    });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Project.',
    };
  }

  revalidatePath('/admin/projects');
  revalidatePath('/');
  redirect('/admin/projects');
}

export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({
      where: { id },
    });
    revalidatePath('/admin/projects');
    revalidatePath('/');
    return { message: 'Deleted Project.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Project.' };
  }
}
