-- 01_init.sql
-- Initialisiert die PostgreSQL-Datenbankstruktur für HCMS
-- Ausführen mit: psql -f 01_init.sql -d <database> -U <user>

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  national_id VARCHAR(20) UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE doctors (
  doctor_id SERIAL PRIMARY KEY,
  name TEXT,
  specialty TEXT
);

CREATE TABLE appointments (
  appointment_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  doctor_id INT REFERENCES doctors(doctor_id),
  date DATE,
  description TEXT
);

-- Hinweis:
-- In Produktion Passwörter nicht im Klartext speichern. Nutze ein Hashing-Verfahren (bcrypt/argon2) in der Anwendung
-- oder die PostgreSQL-Extension pgcrypto (z.B. gen_salt, crypt) falls gewünscht.
