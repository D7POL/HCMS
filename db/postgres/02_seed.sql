-- 02_seed.sql
-- Fügt Beispiel-Rollen und Beispiel-Benutzer ein
-- Ausführen mit: psql -f 02_seed.sql -d <database> -U <user>

INSERT INTO users (national_id, email, password_hash)
VALUES
('12345678900', 'alice@example.com', 'hashed_pw');

INSERT INTO doctors (name, specialty)
VALUES ('Dr. Meier', 'Allgemeinmedizin');

INSERT INTO appointments (user_id, doctor_id, date, description)
VALUES (1, 1, '2025-11-03', 'Routineuntersuchung');


-- Hinweis: In Produktion Passwörter vorher in der Anwendung hashen (bcrypt/argon2).
