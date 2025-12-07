import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CreateProjectForm } from '@/components/create-project-form';
import { Card, CardContent } from '@/components/ui/card';

export default function CreateProjectPage() {
  return (
    <main>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Create Project</h1>
        <Button variant="outline" asChild>
          <Link href="/admin/projects">Cancel</Link>
        </Button>
      </div>
      <Card>
        <CardContent className="pt-6">
          <CreateProjectForm />
        </CardContent>
      </Card>
    </main>
  );
}
