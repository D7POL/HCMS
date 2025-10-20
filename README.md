# e-Nabız Frontend - Healthcare Management System

Ein modernes Angular Frontend für ein Gesundheitsdaten-Dashboard, inspiriert von der türkischen e-Nabız Plattform.

## 🚀 Schnellstart

### Voraussetzungen
- **Node.js** (Version 18.x oder höher) - [Download hier](https://nodejs.org/)
- **npm** (kommt mit Node.js)

### Installation & Start

1. **Repository klonen:**
```bash
git clone https://github.com/D7POL/HCMS.git
cd HCMS
```

2. **Dependencies installieren:**
```bash
npm install
```

3. **Development Server starten:**
```bash
npm start
# oder
npx ng serve --open
```

4. **Browser öffnen:**
- URL: `http://localhost:4200/auth/login`

## 🔐 Test-Logins

| Benutzername | Passwort |
|-------------|----------|
| `ayse`      | `ayse123` |
| `mehmet`    | `mehmet123` |

## 🛠️ Technologien

- **Angular 18** mit TypeScript
- **TailwindCSS** für Styling
- **Material Icons** für UI-Elemente
- **Angular Router** mit lazy loading
- **Reactive Forms** für Login

## 🐳 Dockerisierte Full-Stack-Variante

Schnellstart (Docker Desktop erforderlich):

1. Stack starten:
   - PowerShell: `./scripts/start.ps1`
2. Frontend: `http://localhost:8080`
3. API-Health: `http://localhost:3000/health`

Enthaltene Services (docker-compose.yml):
- Frontend: Angular Build via Nginx
- API: Node.js + Express (TypeScript)
- Datenbanken: Postgres 16, MongoDB 7

Lokale Entwicklung:
- Angular Dev-Server: `npm start`
- API Dev (im Ordner `backend`): `npm run start:dev`

## 📱 Features

- ✅ **Mock Authentication** mit 2 Test-Usern
- ✅ **Responsive Dashboard** mit Side-Navigation
- ✅ **News Carousel** mit Navigation
- ✅ **Terminübersicht** (nächste 3 Termine)
- ✅ **Hausarzt-Informationen**
- ✅ **Kollabierbare Navigation** (Icons ↔ Namen)
- ✅ **Modern UI** mit Hover-Effekten

## 🗂️ Projektstruktur

```
src/
├── app/
│   ├── core/           # Services, Models, Guards
│   ├── features/       # Feature Modules
│   │   ├── auth/       # Login/Authentication
│   │   └── dashboard/  # Dashboard & Home
│   └── shared/         # Wiederverwendbare Komponenten
│       └── components/ # Header, SideNav, Logo
```

## 🎨 Design

- **Farbschema**: Türkische Gesundheitsfarben (Blau/Grün)
- **Layout**: Header + Sidebar + Main Content
- **Icons**: Material Design Icons
- **Responsive**: Mobile-first Ansatz

## 🔧 Entwicklung

### Verfügbare Scripts

```bash
npm start          # Development Server
npm run build      # Production Build
npm run test       # Unit Tests
npm run watch      # Build mit Watch Mode
```

### PowerShell Probleme (Windows)

Falls PowerShell Skript-Ausführung blockiert:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
```

## 📋 TODO / Roadmap

- [ ] Backend Integration (Node.js/Express)
- [ ] Datenbankanbindung (PostgreSQL + MongoDB)
- [ ] Echte API-Endpoints
- [ ] Weitere Dashboard-Features
- [ ] Mobile App (Ionic/Capacitor)

## 🤝 Beitragen

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Committe deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📞 Support

Bei Problemen:
1. Prüfe die [Issues](https://github.com/D7POL/HCMS/issues)
2. Erstelle ein neues Issue mit Fehlerbeschreibung
3. Kontaktiere das Team

---

**Entwickelt mit ❤️ für das HCMS Projekt**