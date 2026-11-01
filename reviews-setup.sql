-- Supabase SQL Editor: create the public course review table.
-- Public reviews contain no name, email, or other identifying fields.
create table if not exists public.course_reviews (
  id bigint generated always as identity primary key,
  course_code text not null check (char_length(course_code) between 1 and 32),
  stars smallint not null check (stars between 1 and 5),
  review text not null check (char_length(trim(review)) between 1 and 1200),
  created_at timestamptz not null default now()
);

alter table public.course_reviews enable row level security;
revoke all on table public.course_reviews from anon, authenticated;
grant select, insert on table public.course_reviews to anon;
grant usage, select on sequence public.course_reviews_id_seq to anon;

drop policy if exists "Anyone can read public course reviews" on public.course_reviews;
create policy "Anyone can read public course reviews"
  on public.course_reviews for select to anon using (true);

drop policy if exists "Anyone can submit a course review" on public.course_reviews;
create policy "Anyone can submit a course review"
  on public.course_reviews for insert to anon
  with check (
    stars between 1 and 5
    and char_length(trim(review)) between 1 and 1200
    and char_length(course_code) between 1 and 32
  );
