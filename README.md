# Electro Center - Sito Vetrina Professionale

Sito web moderno e responsivo per Electro Center B.C., negozio di forniture elettriche a Catania.

## 🎨 Caratteristiche

- **Design Premium**: Palette Modern Warmth con blu scuro, ambra dorata e verde salvia
- **Animazioni Fluide**: Dissolvenze, slide-in, fade-in-scale e hover effects
- **Carousel Google Reviews**: Mostra le migliori 5 recensioni (5 e 4 stelle) da Google Maps
- **Responsive Design**: Perfetto su desktop, tablet e mobile
- **Performance Ottimizzata**: Build veloce con Vite e Tailwind CSS 4
- **SEO Ready**: Meta tags, Open Graph, sitemap

## 📱 Pagine

- **Home**: Hero section, servizi, statistiche, carousel recensioni, CTA
- **Chi Siamo**: Storia, valori aziendali, missione, contatti

## 🛠️ Stack Tecnologico

- **React 19**: UI library moderna
- **Vite 7**: Build tool velocissimo
- **Tailwind CSS 4**: Utility-first CSS
- **Wouter**: Client-side routing leggero
- **Lucide React**: Icon library
- **TypeScript**: Type safety

## 🚀 Deploy su Vercel

### Opzione 1: Deploy Diretto da GitHub (Consigliato)

1. **Crea una repository GitHub**
   ```bash
   gh repo create electro-center-website --public --source=. --remote=origin --push
   ```

2. **Accedi a Vercel**
   - Vai su https://vercel.com
   - Clicca "New Project"
   - Seleziona la repository GitHub
   - Vercel rileverà automaticamente il framework (Vite)
   - Clicca "Deploy"

3. **Configurazione Automatica**
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Environment: Nessuna variabile richiesta

### Opzione 2: Deploy da CLI Vercel

```bash
# Installa Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📦 Installazione Locale

```bash
# Installa dipendenze
pnpm install

# Avvia dev server
pnpm dev

# Build per produzione
pnpm build

# Preview build
pnpm preview
```

## 📁 Struttura Progetto

```
client/
├── public/
│   └── images/          # Asset immagini
├── src/
│   ├── components/      # Componenti riutilizzabili
│   ├── pages/          # Pagine (Home, ChiSiamo, NotFound)
│   ├── hooks/          # Custom hooks (useGoogleReviews)
│   ├── contexts/       # React contexts
│   ├── App.tsx         # Router principale
│   ├── main.tsx        # Entry point
│   └── index.css       # Stili globali + animazioni
└── index.html          # HTML template

server/                 # Placeholder (non usato in static)
shared/                 # Shared types
package.json
```

## 🎯 Animazioni Disponibili

- `animate-fade-in-up`: Entra dal basso con dissolvenza
- `animate-fade-in-scale`: Scala e dissolvenza
- `animate-slide-in-left`: Scorre da sinistra
- `animate-slide-in-right`: Scorre da destra
- `animate-glow`: Effetto luminoso pulsante
- `animate-stagger-1/2/3/4`: Cascata temporizzata

## 🎨 Palette Colori

| Colore | Hex | Uso |
|--------|-----|-----|
| Primary | #1E3A5F | Titoli, testo principale |
| Secondary | #D4A574 | Pulsanti, accent |
| Accent | #7A9B7F | Highlight, icone |
| Background | #FEFAF0 | Sfondo pagina |
| Foreground | #1E3A5F | Testo corpo |

## 📝 Contenuti

### Homepage
- Hero section con immagine store
- 4 servizi principali
- Statistiche (4.7 stelle, 20+ anni, 1000+ prodotti)
- Carousel 5 recensioni Google
- CTA contatti

### Chi Siamo
- Storytelling con foto team
- 3 valori aziendali
- Dichiarazione di missione
- Contatti e orari

## 🔗 Link Importanti

- **Google Maps**: https://www.google.com/maps/place/Electro+Center+B.C.+Di+Basilio+Crisiglione/
- **Indirizzo**: Via Canfora, 113 - 95128 Catania CT
- **Telefono**: 095 448928
- **Orari**: Aperto fino alle 20:00

## 📧 Contatti

- **Email**: info@electrocenter.it
- **WhatsApp**: +39 095 448928
- **Titolare**: Basilio Crisiglione

## 📄 Licenza

MIT - Libero per uso commerciale

---

**Creato con ❤️ per Electro Center B.C.**
