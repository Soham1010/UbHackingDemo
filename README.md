# ⚡ UB Hacking: Gotta Hack 'Em All!

> 🎮 A Pokémon-themed hackathon website for the **University at Buffalo's** annual 36-hour hackathon, built with Next.js, React, and a whole lotta Pokémon love.
>
> 🚀 **Live Demo:** [https://ubhackingdemo.netlify.app/](https://ubhackingdemo.netlify.app/)

---

## 🖼️ Sections

| Section | Description |
|---|---|
| 🏠 **Hero** | Full-bleed landing with animated CTA |
| 📖 **About** | Two-column layout with photo collage & stats |
| 🃏 **Tracks** | Flippable Pokémon trading cards for each category |
| 🏢 **Sponsors** | CSS Pokédex device displaying sponsor logos |
| ❓ **FAQ** | Accordion with cycling Pokéball icons from PokéAPI |
| 👾 **Team** | Polaroid-style trainer cards with alternating tilt |
| 🦶 **Footer** | Wavy grass divider, 3-column grid, floating Pokéballs |

---

## 🛠️ Tech Stack

- ⚡ **[Next.js 16](https://nextjs.org/)** — App Router, `next/font`, `next/image`
- ⚛️ **React 19** — with TypeScript
- 🎨 **CSS Modules** — scoped, zero-runtime styling
- 🎞️ **[Framer Motion](https://www.framer.com/motion/)** — scroll-triggered animations, card flips, spring physics
- 🎮 **[PokéAPI](https://pokeapi.co/)** — Pokéball sprites for FAQ, Pokémon artwork for track cards
- ✏️ **Google Fonts** — Press Start 2P · Gaegu · Indie Flower

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/ubhacking-demo.git
cd ubhacking-demo

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. 🎉

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles + smooth scroll
│   ├── layout.tsx           # Root layout + font imports
│   ├── page.tsx             # Page composition
│   └── icon.svg             # Pokéball favicon
├── components/
│   ├── Layout/
│   │   ├── Navigation.tsx   # Sticky nav + rich footer
│   │   └── Navigation.module.css
│   └── Sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── TracksSection.tsx
│       ├── SponsorsSection.tsx
│       ├── FAQSection.tsx
│       └── TeamSection.tsx
public/
└── assets/
    └── img1.jpeg … img7.jpeg   # About section photo collage
```

---

## 🎯 Hackathon Tracks

| 🎴 Track | 🐾 Pokémon |
|---|---|
| 🏥 Healthcare | Chansey |
| 🌿 Sustainability | Bulbasaur |
| 🏆 Best Overall | Mewtwo |
| 🤖 Best Use of Gemini | Porygon |
| 🎓 Best Freshman Hack | Charmander |
| 📚 Education & EdTech | Abra |
| 🔒 Cybersecurity | Gengar |

---

## ✨ Features

- 🃏 **3D card flip** — Tracks section cards flip on click to reveal details
- 📸 **Fading photo collage** — CSS `mask-image` radial-gradient fade (Hack the North style)
- 🎮 **CSS Pokédex** — Sponsors displayed inside a fully hand-crafted CSS Pokédex device
- 🔮 **Accordion FAQ** — Smooth height animation with cycling Pokéball icons that spin on open
- 🌊 **Wavy footer** — SVG grass-wave divider + floating semi-transparent Pokéballs
- 💛 **Scroll-aware nav** — Yellow border + shadow appear after scrolling 20px
- 📱 **Responsive** — Mobile-friendly breakpoints across all sections

---

## 📦 Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🙌 Credits

Made with ❤️ by **Soham Mehra**

> Pokémon and all related names are trademarks of Nintendo / Game Freak. This is a fan project for educational/event purposes only.
