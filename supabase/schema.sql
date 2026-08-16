create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'customer' check (role in ('customer','admin')),
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name) values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.email)) on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(), slug text not null unique, name text not null, category text, description text not null, price numeric(12,2), currency text not null default 'KES', image text, is_active boolean not null default true, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(), order_number text not null unique, customer_id uuid references auth.users(id) on delete set null, customer_name text not null, customer_email text, customer_phone text not null, delivery_address text, notes text, subtotal numeric(12,2) not null default 0, shipping_fee numeric(12,2) not null default 0, total_amount numeric(12,2) not null default 0, currency text not null default 'KES', payment_status text not null default 'quote_required' check (payment_status in ('quote_required','unpaid','pending','paid','failed','refunded')), payment_provider text, payment_reference text, payment_tracking_id text, order_status text not null default 'new' check (order_status in ('new','confirmed','processing','shipped','delivered','completed','cancelled','refunded')), created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(), order_id uuid not null references public.orders(id) on delete cascade, product_id uuid references public.products(id) on delete set null, name text not null, quantity integer not null check (quantity > 0 and quantity <= 99), unit_price numeric(12,2), created_at timestamptz not null default now()
);

create index if not exists orders_created_at_idx on public.orders(created_at desc);
create index if not exists orders_status_idx on public.orders(order_status);
create index if not exists orders_payment_status_idx on public.orders(payment_status);
create index if not exists order_items_order_id_idx on public.order_items(order_id);

alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

drop policy if exists "Public can read active products" on public.products;
create policy "Public can read active products" on public.products for select using (is_active = true);

insert into public.products (slug,name,category,description,image) values
('body-cleansing','Body Cleansing','Body Cleansing','Traditional herbal preparation presented around cleansing, detox, renewal and restorative wellness practices.','/images/body-cleansing.jpg'),
('digestive-health','Digestive Health','Digestive Health','Traditional herbal preparation presented around digestive balance, cleansing, nourishment and restorative wellness.','/images/digestive-health.jpg'),
('removal-of-majini','Removal of Majini','Spiritual & Traditional Preparation','Traditional preparation presented within spiritual and ancestral practices associated with protection, freedom, peace and cultural ritual.','/images/removal-of-majini.jpg'),
('memory-boost','Memory Boost','Mind & Learning','Traditional herbal preparation presented for children and adults around focus, clarity, learning, memory and mental wellness.','/images/memory-boost.jpg'),
('weight-loss','Weight Loss','Weight Management','Traditional herbal preparation presented as slimming support for healthy weight management, metabolism, digestion and wellness.','/images/weight-loss.jpg'),
('business-attraction','Business Attraction','Prosperity & Growth','Traditional herbal preparation presented around opportunity, business protection, prosperity, growth and stability.','/images/business-attraction.jpg'),
('land-issues','Land Issues','Land & Heritage','Traditional herbal preparation presented around land disputes, ownership, boundaries, cleansing, peace and harmony.','/images/land-issues.jpg'),
('court-cases','Court Cases','Justice & Protection','Traditional herbal preparation presented around clarity, justice, protection and cultural spiritual practices.','/images/court-cases.jpg'),
('man-power','Man Power','Men’s Traditional Preparation','Traditional herbal vitality blend presented around male vitality, strength, stamina and reproductive wellness.','/images/man-power.jpg'),
('fibroids-support','Fibroids Support','Women’s Traditional Preparation','Traditional herbal preparation presented around womb wellness, feminine balance and reproductive well-being.','/images/fibroids-support.jpg')
on conflict (slug) do update set name=excluded.name,category=excluded.category,description=excluded.description,image=excluded.image,updated_at=now();

-- After creating the administrator in Supabase Auth, promote that account:
-- update public.profiles set role='admin' where id='YOUR-AUTH-USER-UUID';
