'use client';

import { useFormState } from 'react-dom';
import { updateProject } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Project } from '@prisma/client';

export function EditProjectForm({ project }: { project: Project }) {
  const updateProjectWithId = updateProject.bind(null, project.id);
  const [state, dispatch] = useFormState(updateProjectWithId, undefined);
  const technologiesString = JSON.parse(project.technologies).join(', ');

  return (
    <form action={dispatch} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" defaultValue={project.title} required />
          {state?.errors?.title && (
            <p className="text-sm text-red-500">{state.errors.title}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image URL</Label>
          <Input id="image" name="image" defaultValue={project.image} required />
          {state?.errors?.image && (
            <p className="text-sm text-red-500">{state.errors.image}</p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" defaultValue={project.description} required />
        {state?.errors?.description && (
            <p className="text-sm text-red-500">{state.errors.description}</p>
          )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="technologies">Technologies (comma separated)</Label>
        <Input 
          id="technologies" 
          name="technologies" 
          defaultValue={technologiesString} 
          placeholder="React, Node.js, Prisma" 
          required 
        />
        {state?.errors?.technologies && (
            <p className="text-sm text-red-500">{state.errors.technologies}</p>
          )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="liveUrl">Live URL</Label>
          <Input id="liveUrl" name="liveUrl" defaultValue={project.liveUrl || ''} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="githubUrl">GitHub URL</Label>
          <Input id="githubUrl" name="githubUrl" defaultValue={project.githubUrl || ''} />
        </div>
      </div>

      {state?.message && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}

      <div className="flex justify-end">
        <Button type="submit">Update Project</Button>
      </div>
    </form>
  );
}
