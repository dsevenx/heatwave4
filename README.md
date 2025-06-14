# Next.js TypeScript Tailwind Starter

Ein modernes, produktionsreifes Starter-Template für React-Anwendungen mit Next.js 14, TypeScript und Tailwind CSS.

## 🚀 Features

- **Next.js 14** - Neueste Version mit App Router und Server Components
- **TypeScript** - Vollständige Typsicherheit
- **Tailwind CSS** - Utility-first CSS-Framework
- **ESLint** - Code-Qualität und Konsistenz
- **Inter Font** - Moderne, professionelle Typografie
- **Responsive Design** - Mobile-first Ansatz

## 📁 Projektstruktur

```
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── FeatureCard.tsx
│       └── CodeBlock.tsx
├── public/
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🛠️ Installation

1. **Repository klonen oder Dateien herunterladen**

2. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```

4. **Browser öffnen:**
   Navigieren Sie zu [http://localhost:3000](http://localhost:3000)

## 📜 Verfügbare Scripts

- `npm run dev` - Startet den Entwicklungsserver
- `npm run build` - Erstellt die Produktionsversion
- `npm run start` - Startet die Produktionsversion
- `npm run lint` - Führt ESLint aus
- `npm run type-check` - Überprüft TypeScript-Typen

## 🎨 Tailwind CSS Konfiguration

Das Projekt enthält eine vorkonfigurierte Tailwind-Setup mit:

- Custom Primary-Farbpalette
- Inter-Schriftart
- Nützliche Component-Klassen (`.btn-primary`, `.btn-secondary`, `.card`)
- Responsive Breakpoints

## 📱 Komponenten

### Header
Zentraler Header mit Titel und Feature-Tags.

### FeatureCard
Wiederverwendbare Karte für die Darstellung von Features.

### CodeBlock
Komponente zur Anzeige von Code-Snippets mit Syntax-Highlighting.

## 🔧 Anpassung

### Farben ändern
Bearbeiten Sie die `primary`-Farben in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Ihre Farben hier
  }
}
```

### Neue Komponenten hinzufügen
Erstellen Sie neue Komponenten in `src/components/` und exportieren Sie sie entsprechend.

### Routing
Nutzen Sie das neue App Router System von Next.js 13+. Erstellen Sie neue Seiten in `src/app/`.

## 📦 Empfohlene Erweiterungen

- **Framer Motion** - Animationen
- **React Hook Form** - Formular-Management
- **Zustand** - State Management
- **React Query** - Server State Management
- **Radix UI** - Headless UI Components

## 🚀 Deployment

### Vercel (empfohlen)
```bash
npm run build
```
Dann deployen Sie auf [Vercel](https://vercel.com).

### Andere Plattformen
Das Projekt kann auf jeder Plattform deployed werden, die Node.js unterstützt.

## 📄 Lizenz

MIT License - siehe LICENSE Datei für Details.

## 🤝 Beitragen

Pull Requests sind willkommen! Für größere Änderungen öffnen Sie bitte zuerst ein Issue.

---

**Viel Spaß beim Entwickeln! 🎉**