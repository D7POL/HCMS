// 02_seed.js
// Seed-Daten für HCMS
// Ausführen mit: mongosh --file 02_seed.js

db.doctor_letters.insertOne({
  user_id: 1,
  appointment_id: 1,
  title: "Hausarztbericht",
  body: "Patientin in gutem Zustand.",
  createdAt: new Date()
});