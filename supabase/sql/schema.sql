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

create table if not exists public.kennel_sections (
  id uuid primary key default gen_random_uuid(),
  section_key text unique not null,
  title text not null,
  body text,
  bullets text[] default '{}',
  cta_label text,
  cta_href text,
  sort_order integer default 0,
  is_published boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table if not exists public.faq_entries (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  sort_order integer default 0,
  is_published boolean default true,
  created_at timestamp with time zone default now()
);

create table if not exists public.dog_profiles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  profile_type text not null,
  name text not null,
  call_name text,
  registered_name text,
  sex text,
  status text,
  kennel_name text,
  camp_name text,
  date_of_birth date,
  color text,
  trait_tags text[] default '{}',
  weight text,
  height text,
  compactness_notes text,
  temperament_notes text,
  description text,
  structure_summary text,
  stack_notes text,
  front_rear_notes text,
  movement_notes text,
  topline_notes text,
  muzzle_head_rope_notes text,
  body_proportion_notes text,
  breeder_commentary text,
  judge_commentary text,
  dna_panel_summary text,
  price numeric,
  stud_fee numeric,
  deposit_status text,
  availability_status text,
  delivery_options text,
  puppy_package_summary text,
  sire_id uuid references public.dog_profiles(id),
  dam_id uuid references public.dog_profiles(id),
  is_featured boolean default false,
  sort_order integer default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table if not exists public.litters (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  sire_id uuid references public.dog_profiles(id),
  dam_id uuid references public.dog_profiles(id),
  breeding_date date,
  birth_date date,
  litter_count integer default 0,
  available_count integer default 0,
  reserved_count integer default 0,
  sold_count integer default 0,
  breeder_notes text,
  dna_summary text,
  expected_traits text[] default '{}',
  growth_timeline jsonb default '[]'::jsonb,
  is_featured boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table if not exists public.litter_puppies (
  id uuid primary key default gen_random_uuid(),
  litter_id uuid not null references public.litters(id) on delete cascade,
  dog_id uuid not null references public.dog_profiles(id) on delete cascade,
  sort_order integer default 0,
  unique (litter_id, dog_id)
);

create table if not exists public.transparency_badges (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  label text not null,
  description text,
  is_public boolean default true,
  created_at timestamp with time zone default now()
);

create table if not exists public.dog_profile_badges (
  id uuid primary key default gen_random_uuid(),
  dog_profile_id uuid not null references public.dog_profiles(id) on delete cascade,
  badge_id uuid not null references public.transparency_badges(id) on delete cascade,
  unique (dog_profile_id, badge_id)
);

create table if not exists public.document_assets (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  document_type text not null,
  summary text,
  file_url text,
  preview_url text,
  issue_date date,
  visibility text default 'public',
  is_verified boolean default false,
  is_internal_only boolean default false,
  is_public boolean default true,
  notes text,
  uploaded_by uuid references public.profiles(id),
  uploaded_at timestamp with time zone default now()
);

create table if not exists public.document_links (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references public.document_assets(id) on delete cascade,
  dog_profile_id uuid references public.dog_profiles(id) on delete cascade,
  litter_id uuid references public.litters(id) on delete cascade
);

create table if not exists public.media_assets (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  media_type text not null,
  angle text,
  file_url text not null,
  thumbnail_url text,
  source_label text,
  photographer_credit text,
  is_raw boolean default false,
  breeder_provided boolean default true,
  puppy_age_at_capture text,
  annotations jsonb default '[]'::jsonb,
  notes text,
  captured_at timestamp with time zone,
  uploaded_at timestamp with time zone default now(),
  sort_order integer default 0,
  dog_profile_id uuid references public.dog_profiles(id) on delete cascade,
  litter_id uuid references public.litters(id) on delete cascade
);

create table if not exists public.inquiry_submissions (
  id uuid primary key default gen_random_uuid(),
  dog_profile_id uuid references public.dog_profiles(id),
  litter_id uuid references public.litters(id),
  name text,
  email text,
  phone text,
  preferred_contact_method text,
  budget_range text,
  timeline text,
  transport_needs text,
  message text,
  status text default 'new',
  created_at timestamp with time zone default now()
);
