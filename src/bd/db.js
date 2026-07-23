/*-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.galerias (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  autor text NOT NULL,
  titulo text NOT NULL,
  categoria text NOT NULL,
  categoria_color text NOT NULL,
  fecha timestamp without time zone DEFAULT now(),
  cloudinary_tag text NOT NULL,
  created_by uuid,
  CONSTRAINT galerias_pkey PRIMARY KEY (id)
);
CREATE TABLE public.upload_logs (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  client_id text NOT NULL,
  autor text,
  titulo text,
  categoria text,
  file_count integer,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT upload_logs_pkey PRIMARY KEY (id)
);

create table public.galerias (
  id uuid not null default gen_random_uuid (),
  autor text not null,
  titulo text not null,
  categoria text not null,
  categoria_color text not null,
  fecha timestamp without time zone null default now(),
  cloudinary_tag text not null,
  created_by uuid null,
  constraint galerias_pkey primary key (id)
) TABLESPACE pg_default;

create index IF not exists galerias_created_by_idx on public.galerias using btree (created_by) TABLESPACE pg_default;


create table public.upload_logs (
  id uuid not null default gen_random_uuid (),
  client_id text not null,
  autor text null,
  titulo text null,
  categoria text null,
  file_count integer null,
  created_at timestamp with time zone null default now(),
  constraint upload_logs_pkey primary key (id)
) TABLESPACE pg_default;

create index IF not exists upload_logs_client_id_created_at_idx on public.upload_logs using btree (client_id, created_at) TABLESPACE pg_default;

*/