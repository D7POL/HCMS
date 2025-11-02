// 01_init.js
// Initialisiert die Datenbank-Struktur für HCMS
// Ausführen mit: mongosh --file 01_init.js

db = db.getSiblingDB('enabiz');

db.createCollection('doctor_letters');
db.createCollection('lab_results');