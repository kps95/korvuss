-- Enable Row Level Security
alter table public.profiles enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.messages enable row level security;
alter table public.applications enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.puppies enable row level security;
alter table public.studs enable row level security;
alter table public.products enable row level security;
alter table public.gallery_items enable row level security;

-- Profiles: users manage their own row
create policy "Profiles are readable by self" on public.profiles
  for select using (auth.uid() = id or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));
create policy "Profiles are updatable by self" on public.profiles
  for update using (auth.uid() = id);

-- Orders + order_items: user or admin
create policy "Orders are readable by owner" on public.orders
  for select using (user_id = auth.uid() or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));
create policy "Order items are readable by owner" on public.order_items
  for select using (exists (select 1 from public.orders o where o.id = order_items.order_id and (o.user_id = auth.uid() or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))));

-- Messages: owner or admin
create policy "Messages read" on public.messages
  for select using (user_id = auth.uid() or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));
create policy "Messages insert" on public.messages
  for insert with check (true);

-- Applications: owner or admin
create policy "Applications read" on public.applications
  for select using (user_id = auth.uid() or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));
create policy "Applications insert" on public.applications
  for insert with check (true);

-- Newsletter: readable by admin or service role
create policy "Newsletter select admin" on public.newsletter_subscribers
  for select using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));
create policy "Newsletter insert anyone" on public.newsletter_subscribers
  for insert with check (true);

-- Public tables readable by everyone, write by service role/admin
create policy "Puppies read all" on public.puppies for select using (true);
create policy "Studs read all" on public.studs for select using (true);
create policy "Products read all" on public.products for select using (true);
create policy "Gallery read all" on public.gallery_items for select using (true);

-- Writes only for service role or admin
create policy "Admin writes puppies" on public.puppies
  for all using (auth.role() = 'service_role' or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))
  with check (auth.role() = 'service_role' or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

create policy "Admin writes studs" on public.studs
  for all using (auth.role() = 'service_role' or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))
  with check (auth.role() = 'service_role' or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

create policy "Admin writes products" on public.products
  for all using (auth.role() = 'service_role' or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))
  with check (auth.role() = 'service_role' or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

create policy "Admin writes gallery" on public.gallery_items
  for all using (auth.role() = 'service_role' or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))
  with check (auth.role() = 'service_role' or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));
