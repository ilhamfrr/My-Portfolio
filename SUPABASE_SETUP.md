# Supabase Setup Guide

The backend is now configured to use Supabase (PostgreSQL) instead of SQLite. However, since I cannot create the project for you, you need to provide the connection strings.

## Steps to Fix "Can't reach database server"

1.  **Create a Supabase Project**:
    *   Go to [supabase.com](https://supabase.com/) and create a new project.
    *   Remember the **Database Password** you set.

2.  **Get Connection Strings**:
    *   In your Supabase project dashboard, go to **Project Settings** -> **Database**.
    *   Under **Connection String**, select **URI**.
    *   Copy the string. It looks like: `postgresql://postgres.your-ref:[YOUR-PASSWORD]@aws-0-region.pooler.supabase.com:6543/postgres`

3.  **Update `.env` File**:
    *   Open `.env` file in your project root.
    *   Update `DATABASE_URL` with the **Transaction Pooler** URL (port 6543, usually has `pgbouncer=true` query param if using pooler mode, or just use the main connection string provided by Supabase).
        *   Example: `postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true`
    *   Update `DIRECT_URL` with the **Session Mode** URL (port 5432).
        *   Example: `postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres`

    **IMPORTANT**: Replace `[YOUR-PASSWORD]` with the actual password you set in step 1.

4.  **Run Migration**:
    *   Run `npx prisma migrate deploy` to create the tables in Supabase.
    *   Run `npx ts-node prisma/seed.ts` to seed the initial data.

## Troubleshooting
If you see `P1001: Can't reach database server`, it means the URL in `.env` is incorrect or the password is wrong.
