-- Base schema for Korvus Kennels
-- Run in Supabase SQL editor
create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text,
  phone text,
  is_admin boolean default false,
  created_at timestamp with time zone default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price numeric not null,
  image_url text,
  is_active boolean default true,
  created_at timestamp with time zone default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id),
  stripe_session_id text,
  total_amount numeric,
  currency text default 'usd',
  status text default 'pending',
  created_at timestamp with time zone default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references public.orders(id) on delete cascade,
  product_id uuid references public.products(id),
  product_name text,
  quantity integer,
  unit_price numeric
);

create table if not exists public.studs (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  image_url text,
  description text,
  color text,
  dna text,
  fee numeric,
  is_active boolean default true
);

create table if not exists public.puppies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  sex text,
  dob date,
  color text,
  dna text,
  price numeric,
  status text default 'available',
  image_url text,
  description text
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id),
  name text,
  email text,
  phone text,
  reason text,
  subject text,
  body text,
  status text default 'open',
  is_read boolean default false,
  created_at timestamp with time zone default now()
);

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id),
  name text,
  email text,
  phone text,
  location text,
  experience text,
  home_type text,
  other_pets text,
  preferred_sex text,
  preferred_color text,
  budget numeric,
  timeline text,
  puppy_id uuid references public.puppies(id),
  status text default 'new',
  created_at timestamp with time zone default now()
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique,
  created_at timestamp with time zone default now()
);

create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  image_url text,
  caption text,
  created_at timestamp with time zone default now()
);
