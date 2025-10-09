# Payphone Landing Page B2B

Una landing page moderna e interattiva per Payphone, progettata per convertire professionisti che vogliono monetizzare le loro videochiamate.

## 🚀 Caratteristiche

- **Design Moderno**: Interfaccia pulita e professionale con animazioni fluide
- **Contatore Interattivo**: Calcolatore in tempo reale per mostrare i guadagni potenziali
- **Responsive**: Ottimizzato per desktop, tablet e mobile
- **Animazioni**: Framer Motion per transizioni fluide e coinvolgenti
- **Performance**: Next.js 15 con App Router per prestazioni ottimali

## 🛠️ Tecnologie Utilizzate

- **Next.js 15.5.4** - Framework React con App Router
- **React 18** - Libreria UI
- **TypeScript** - Tipizzazione statica
- **Tailwind CSS 4.1** - Framework CSS utility-first
- **Framer Motion 12** - Libreria per animazioni
- **Heroicons** - Icone SVG ottimizzate

## 📁 Struttura del Progetto

```
├── src/
│   ├── app/
│   │   ├── globals.css          # Stili globali e Tailwind
│   │   ├── layout.tsx           # Layout principale
│   │   └── page.tsx             # Pagina principale
│   └── components/
│       ├── HeroSection.tsx      # Sezione hero con video
│       ├── ProblemSection.tsx   # Sezione problema
│       ├── CalculatorSection.tsx # Contatore interattivo
│       ├── TransitionSection.tsx # Sezione transizione
│       ├── HowItWorksSection.tsx # Come funziona (3 step)
│       ├── BenefitsSection.tsx  # Vantaggi chiave
│       ├── TestimonialsSection.tsx # Testimonianze
│       ├── TrustSection.tsx     # Trust e sicurezza
│       └── FinalCTASection.tsx  # CTA finale
├── package.json                 # Dipendenze e script
├── tailwind.config.js          # Configurazione Tailwind
├── tsconfig.json               # Configurazione TypeScript
└── next.config.js              # Configurazione Next.js
```

## 🚀 Come Avviare il Progetto

### Prerequisiti

- Node.js 18+ installato
- npm o yarn

### Installazione

1. **Naviga nella directory del progetto:**

   ```bash
   cd "/Users/noemigornati/Desktop/Payphone Landing B2B"
   ```

2. **Installa le dipendenze:**

   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo:**

   ```bash
   npm run dev
   ```

4. **Apri il browser:**
   Vai su [http://localhost:3000](http://localhost:3000)

### Script Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run start` - Avvia il server di produzione
- `npm run lint` - Esegue il linting del codice

## 🎨 Personalizzazione

### Colori

I colori del brand sono configurati in `tailwind.config.js`:

- **Primary**: Blu (#3b82f6)
- **Accent**: Viola (#8b5cf6)
- **Success**: Verde per elementi di trust

### Contenuti

Tutti i testi sono definiti nei componenti React e possono essere facilmente modificati.

### Animazioni

Le animazioni sono gestite da Framer Motion con:

- Fade-in on scroll
- Hover effects
- Counter animations
- Parallax effects

## 📱 Sezioni della Landing Page

1. **Hero Section** - Video background con CTA principali
2. **Problem Section** - Identificazione del problema
3. **Calculator Section** - Contatore interattivo per guadagni
4. **Transition Section** - Ponte verso la soluzione
5. **How It Works** - 3 step per iniziare
6. **Benefits Section** - Vantaggi chiave
7. **Testimonials** - Social proof
8. **Trust Section** - Sicurezza e certificazioni
9. **Final CTA** - Call-to-action finale

## 🔧 Risoluzione Problemi

### Problema: npm non trova package.json

**Soluzione**: Assicurati di essere nella directory corretta:

```bash
cd "/Users/noemigornati/Desktop/Payphone Landing B2B"
```

### Problema: Dipendenze non si installano

**Soluzione**: Prova a pulire la cache:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Problema: Errori TypeScript

**Soluzione**: Verifica che tutti i file siano salvati e riavvia il server:

```bash
npm run dev
```

## 📊 Metriche da Tracciare

- Scroll depth (% utenti che raggiungono contatore)
- Contatore engagement (% interazioni con sliders)
- CTA clicks (performance bottoni)
- Video play rate
- Time on page

## 🚀 Deploy

Per il deploy in produzione:

1. **Build del progetto:**

   ```bash
   npm run build
   ```

2. **Deploy su Vercel (raccomandato):**

   ```bash
   npx vercel --prod
   ```

3. **Deploy su Netlify:**
   ```bash
   npm run build
   # Carica la cartella .next su Netlify
   ```

## 📝 Note di Sviluppo

- Il progetto usa l'App Router di Next.js 15
- Tutte le animazioni sono ottimizzate per le performance
- Il design è mobile-first
- I componenti sono modulari e riutilizzabili
- Il codice è completamente tipizzato con TypeScript

## 🤝 Supporto

Per problemi o domande, contatta il team di sviluppo.

---

**Sviluppato con ❤️ per Payphone**
