DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

CREATE TABLE notes (
  id             serial PRIMARY KEY,
  title          text NOT NULL,
  content        text,
  created_at     timestamptz NOT NULL DEFAULT NOW()
);
