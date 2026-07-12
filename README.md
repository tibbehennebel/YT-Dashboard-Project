# YouTube Battle Tracker 🏆

Dashboard voor de YouTube-battle **Team Goud (Vincent) vs Team Zilver (Tibbe)** — 6v6 kanalen, race naar 16M views (monetisatie).

Eén statisch HTML-bestand (`dashboard/index.html`) + één databestand (`dashboard/data.json`). Geen build, geen frameworks, geen CDN's — werkt razendsnel, ook op gsm.

## Tabs ✨

- ⚔️ **Battle** — scorebord Goud vs Zilver, verdeling views/subs, voorsprong-grafiek, prognose wie wanneer inhaalt, teamkaarten met mini-grafiekjes
- 📈 **Grafieken** — team-totalen, groei per dag, voorsprong over tijd en leaderboard; filter op views/subs en periode (alles / 30 / 14 dagen); elke grafiek heeft een 📋 tabel-knop
- 📊 **Kanalen** — race naar 16M per kanaal met geschatte datum, mini-grafiek per kanaal, head-to-head vergelijker (kies 2 kanalen)
- 🏅 **Mijlpalen** — records (grootste sprong, snelste groeier, eerste naar 1M), leiderschapswissels en alle gepasseerde mijlpalen
- 📜 **Historiek** — alle updates als tabel met verschillen, plus beheer van nog-niet-gepushte invoer

## Stats updaten 📝

1. Open de site en klik **➕ Stats invoeren** (of open direct `…/index.html#invoer`)
2. Vul in "Alle kanalen"-modus alle nieuwe cijfers in één keer in (lege velden worden overgeslagen; huidige waarden staan als voorbeeld in de vakjes)
3. Klik **💾 Opslaan** — de invoer wordt lokaal bewaard (je raakt niets kwijt bij sluiten!)
4. Klik **⬇️ Export data.json** en vervang `dashboard/data.json` in GitHub → push
5. Netlify deployt automatisch (±1 min); de ander klikt **🔄 Herladen**

Zolang invoer alleen lokaal staat, zie je een gele 🕐-badge. Na een geslaagde push verdwijnt die vanzelf bij herladen.

## Data-formaat (`dashboard/data.json`)

```json
{
  "channels": [
    { "id": "channel1", "name": "FlaroClips", "owner": "tibbe", "team": "zilver", "color": "#C0C0C0" }
  ],
  "stats": [
    { "id": 1234567890, "channelId": "channel1", "subs": 1500, "views": 250000, "date": "2026-05-12", "timestamp": 1778544000000 }
  ]
}
```

Kanaal toevoegen = nieuw object in `channels` (met `team`: `goud` of `zilver`). De hele site — inclusief het 6v6-label, teams en grafieken — volgt automatisch.

## Deployment 🚀

GitHub-repo gekoppeld aan Netlify; elke push naar `main` deployt automatisch. Geen build-stap nodig (`netlify.toml` staat al goed).

## Troubleshooting 🔧

- **"Kon data.json niet laden"** — check of `dashboard/data.json` bestaat en de deploy klaar is; klik "opnieuw proberen"
- **Oude data** — klik 🔄 Herladen (de site herlaadt zelf ook als hij >5 min op de achtergrond stond)
- **Invoer kwijt?** — kijk in 📜 Historiek onder "Lokale invoer"; daar kun je ze ook verwijderen
