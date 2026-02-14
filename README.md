# YouTube Battle Tracker 🏆

Een interactieve dashboard om YouTube kanalen te vergelijken en de race naar monetizatie te volgen!

**Vincent (Monte & Spyff) vs Tibbe**

## Features ✨

- 📊 **1v1 Battle Overzicht** - Vergelijk elk kanaal individueel
- 📈 **Grafieken** - Views, subscribers en groeisnelheid over tijd
- 📜 **Historische Data** - Zie alle oude statistieken en veranderingen
- 🎯 **Monetizatie Progress** - Track voortgang naar 18M views
- ⚡ **Groeisnelheid** - Zie hoeveel views/subs per dag elk kanaal groeit
- 💾 **GitHub Data Storage** - Data wordt opgeslagen in GitHub voor gedeelde toegang
- 📱 **Responsive** - Werkt op desktop, tablet en mobiel

## Deployment op Netlify 🚀

### Stap 1: GitHub Repository Setup

1. Maak een nieuwe GitHub repository (bijvoorbeeld `youtube-battle-tracker`)
2. Upload deze bestanden naar de repo:
   - `index.html`
   - `data.json`
   - `netlify.toml`
   - `README.md`
   - `.gitignore`
   - `package.json`

### Stap 2: Netlify Deployment

1. Ga naar [Netlify](https://www.netlify.com)
2. Klik op "Add new site" → "Import an existing project"
3. Selecteer GitHub en kies jullie repository
4. Deploy settings:
   - Build command: (leeg laten)
   - Publish directory: `.`
5. Klik op "Deploy site"

Je site is nu live op een URL zoals: `https://jouw-app-naam.netlify.app`

### Stap 3: Auto-deployment instellen

Netlify zal automatisch re-deployen wanneer jullie pushen naar GitHub. Dit betekent:
- Push naar main branch → Automatische deployment binnen 1 minuut
- Ververs de browser om nieuwe data te zien

## Dagelijkse Workflow 📝

### Data Toevoegen (Vincent of Tibbe):

1. Open de live site: `https://jouw-app-naam.netlify.app`
2. Klik op **"Nieuwe Stats Toevoegen"**
3. Vul subscribers en views in voor alle kanalen
4. Klik op **"Export Data (voor GitHub)"**
5. Dit downloadt een nieuwe `data.json` file

### Data Pushen naar GitHub:

```bash
# In je lokale repo folder:
# Vervang de oude data.json met de nieuwe gedownloade versie

git add data.json
git commit -m "Update stats - [datum]"
git push
```

### Data Ophalen (de ander):

1. Wacht ~1 minuut tot Netlify deployed
2. Open de site en klik op **"Reload van GitHub"**
3. Je ziet nu de nieuwste stats!

**Of** gewoon de pagina refreshen (F5) - de data wordt automatisch opnieuw geladen.

## File Structuur 📁

```
youtube-battle-tracker/
├── index.html          # De main app
├── data.json          # Alle stats & kanaal config
├── netlify.toml       # Netlify configuratie
├── README.md          # Deze file
├── .gitignore         # Git ignore rules
└── package.json       # Project metadata
```

## Data Format (`data.json`)

```json
{
  "channels": [
    {
      "id": "channel1",
      "name": "K1 - Monte",
      "owner": "vincent",
      "color": "#3B82F6"
    },
    ...
  ],
  "stats": [
    {
      "id": 1234567890,
      "channelId": "channel1",
      "subs": 1500,
      "views": 250000,
      "date": "2025-02-14",
      "timestamp": 1739491200000
    },
    ...
  ]
}
```

## Gebruik 🎮

1. Klik op "Nieuwe Stats Toevoegen"
2. Kies het kanaal (Monte, Spyff, of Tibbe)
3. Vul subscribers en views in
4. Kies de datum
5. Klik op "Opslaan"
6. Export data en push naar GitHub

## Tabs

- **📊 Overzicht** - Battle cards en monetizatie progress
- **📈 Grafieken** - Alle visualisaties en trends
- **📜 Historiek** - Complete data tabel

## Technologie Stack 💻

- React 18
- Recharts (grafieken)
- Tailwind CSS
- GitHub (data storage)
- Netlify (hosting + auto-deployment)

## Tips 💡

- **Auto-deployment**: Elke push naar GitHub triggert een nieuwe deployment (duurt ~1 min)
- **Refresh**: Druk F5 of klik "Reload van GitHub" om nieuwe data te zien
- **Dagelijkse ritual**: 1x per dag stats toevoegen en pushen
- **Data backup**: GitHub is automatisch je backup - alle history is bewaard in commits

## Troubleshooting 🔧

**"Kon data niet laden van GitHub"**
- Controleer of `data.json` bestaat in de repo
- Wacht tot Netlify klaar is met deployen

**"Ik zie oude data"**
- Klik op "Reload van GitHub"
- Of refresh de pagina (F5)
- Check of je laatste push succesvol was

**Lokale wijzigingen niet zichtbaar**
- Vergeet niet te exporteren en pushen naar GitHub!
- De gele waarschuwing toont of je dit nog moet doen

## Browser Compatibiliteit

- ✅ Chrome/Edge (laatste 2 versies)
- ✅ Firefox (laatste 2 versies)
- ✅ Safari (laatste 2 versies)

## License

MIT - Gebruik het zoals je wilt!
