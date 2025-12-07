import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { EditProjectForm } from '@/components/edit-project-form';
import { Card, CardContent } from '@/components/ui/card';

export default async function EditProjectPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const project = await prisma.project.findUnique({
    where: { id },
  });

  if (!project) {
    notFound();
  }

  return (
    <main>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Edit Project</h1>
        <Button variant="outline" asChild>
          <Link href="/admin/projects">Cancel</Link>
        </Button>
      </div>
      <Card>
        <CardContent className="pt-6">
          <EditProjectForm project={project} />
        </CardContent>
      </Card>
    </main>
  );
}
