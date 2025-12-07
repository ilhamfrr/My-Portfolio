import Link from 'next/link';
import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, FolderKanban, LogOut } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 bg-slate-900 text-white p-4">
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="mb-8 p-2">
              <h1 className="text-xl font-bold">Portfolio Admin</h1>
            </div>
            <nav className="space-y-2">
              <Link
                href="/admin"
                className="flex items-center space-x-2 p-2 hover:bg-slate-800 rounded"
              >
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/admin/projects"
                className="flex items-center space-x-2 p-2 hover:bg-slate-800 rounded"
              >
                <FolderKanban size={20} />
                <span>Projects</span>
              </Link>
            </nav>
          </div>
          <div>
            <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
              >
                <LogOut size={20} className="mr-2" />
                Sign Out
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-gray-50 text-black">
        {children}
      </div>
    </div>
  );
}
