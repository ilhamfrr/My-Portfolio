'use client';

import { useFormState } from 'react-dom';
import { createProject } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function CreateProjectForm() {
  const [state, dispatch] = useFormState(createProject, undefined);

  return (
    <form action={dispatch} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" required />
          {state?.errors?.title && (
            <p className="text-sm text-red-500">{state.errors.title}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image URL</Label>
          <Input id="image" name="image" required />
          {state?.errors?.image && (
             <p className="text-sm text-red-500">{state.errors.image}</p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" required />
         {state?.errors?.description && (
             <p className="text-sm text-red-500">{state.errors.description}</p>
          )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="technologies">Technologies (comma separated)</Label>
        <Input id="technologies" name="technologies" placeholder="React, Node.js, Prisma" required />
         {state?.errors?.technologies && (
             <p className="text-sm text-red-500">{state.errors.technologies}</p>
          )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="liveUrl">Live URL</Label>
          <Input id="liveUrl" name="liveUrl" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="githubUrl">GitHub URL</Label>
          <Input id="githubUrl" name="githubUrl" />
        </div>
      </div>

      {state?.message && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}

      <div className="flex justify-end">
        <Button type="submit">Save Project</Button>
      </div>
    </form>
  );
}
