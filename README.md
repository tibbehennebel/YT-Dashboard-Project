# YouTube Battle Tracker 🏆

Een interactieve dashboard om YouTube kanalen te vergelijken en de race naar monetizatie te volgen!

## Features ✨

- 📊 **1v1 Battle Overzicht** - Vergelijk elk kanaal individueel
- 📈 **Grafieken** - Views, subscribers en groeisnelheid over tijd
- 📜 **Historische Data** - Zie alle oude statistieken en veranderingen
- 🎯 **Monetizatie Progress** - Track voortgang naar 18M views
- ⚡ **Groeisnelheid** - Zie hoeveel views/subs per dag elk kanaal groeit
- 📱 **Responsive** - Werkt op desktop, tablet en mobiel

## Deployment op Netlify 🚀

### Via GitHub

1. Push deze repo naar GitHub
2. Ga naar [Netlify](https://www.netlify.com)
3. Klik op "Add new site" → "Import an existing project"
4. Selecteer GitHub en kies deze repository
5. Deploy settings:
   - Build command: (leeg laten)
   - Publish directory: `.`
6. Klik op "Deploy site"

Je site is nu live op een URL zoals: `https://jouw-app-naam.netlify.app`

### Custom Domain (optioneel)

In Netlify dashboard:
1. Ga naar "Domain settings"
2. Klik op "Add custom domain"
3. Volg de instructies

## Gebruik 📝

1. Klik op "Nieuwe Stats Toevoegen"
2. Kies het kanaal
3. Vul subscribers en views in
4. Kies de datum
5. Klik op "Opslaan"

Data wordt automatisch bewaard in je browser!

## Tabs

- **📊 Overzicht** - Battle cards en monetizatie progress
- **📈 Grafieken** - Alle visualisaties en trends
- **📜 Historiek** - Complete data tabel

## Technologie Stack 💻

- React 18
- Recharts (grafieken)
- Tailwind CSS
- localStorage (data opslag)

## Belangrijk ⚠️

**Data Opslag**: Deze versie gebruikt localStorage, wat betekent dat data alleen lokaal in je browser wordt opgeslagen. Als je de app op een ander apparaat opent, zie je die data niet.

Voor gedeelde data tussen meerdere gebruikers/apparaten, heb je een backend nodig (zoals Firebase of Supabase).

## Kanalen Aanpassen

Open `index.html` en zoek naar deze regel (rond regel 60):

```javascript
const [channels, setChannels] = useState([
  { id: 'channel1', name: 'K1 - Monte', owner: 'vc', color: '#3B82F6' },
  { id: 'channel2', name: 'K2 - Spyff', owner: 'vc', color: '#8B5CF6' },
  { id: 'channel3', name: 'Kanaal Tibbe', owner: 'th', color: '#EF4444' }
]);
```

Pas de namen aan naar je eigen kanalen!

## Browser Compatibiliteit

- ✅ Chrome/Edge (laatste 2 versies)
- ✅ Firefox (laatste 2 versies)
- ✅ Safari (laatste 2 versies)

## License

MIT - Gebruik het zoals je wilt!
