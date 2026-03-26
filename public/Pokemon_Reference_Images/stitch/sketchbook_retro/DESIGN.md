# Design System Document: The Analog Hacker’s Sketchbook

## 1. Overview & Creative North Star
**Creative North Star: "The Living Sketchbook"**

This design system rejects the sterile, pixel-perfect rigidity of modern SaaS platforms. Instead, it embraces the "Intentional Imperfection" of a physical hacker’s notebook. We are building an experience that feels human, tactile, and perpetually "in-progress." 

The system breaks the "template" look by utilizing heavy, hand-drawn SVG strokes, asymmetrical layouts, and organic motion. By ignoring standard corporate grids in favor of overlapping elements and jittery animations, we create an environment that feels high-energy, high-creativity, and approachable. This is not a software interface; it is a collaborative canvas.

---

## 2. Colors & Surface Philosophy
The palette is rooted in retro-vibrant tones, balanced by a warm, paper-like foundation. We avoid digital "pure" blacks and whites to maintain the sketchbook feel.

### Color Tokens
- **Background:** `#f8f7f0` (The Paper Surface)
- **Primary (Electric Yellow):** `#715800` (On-surface) / `#fcc800` (Container) – *Reference: Pikachu Yellow*
- **Secondary (Flame Orange):** `#b12305` (On-surface) / `#ffc4b7` (Container) – *Reference: Charmander Orange*
- **Tertiary (Vine Green):** `#276900` (On-surface) / `#aafe7e` (Container) – *Reference: Bulbasaur Green*

### The "Ink & Paper" Rule
*   **No-Line Rule:** Prohibit standard 1px solid CSS borders. All structural boundaries must be defined by `border-4` using a custom SVG mask or a `roughjs` path to create an uneven, "ink-bleed" effect.
*   **Surface Hierarchy:** Instead of shadows, use "Tonal Stacking." An inner card should use `surface-container-low` (`#f2f1ea`) sitting on the `surface` background (`#f8f7f0`). To highlight a specific section, jump to `surface-container-highest` (`#ddddd5`).
*   **Anti-Glassmorphism:** Absolutely no blurs, no transparency, and no frosted glass. Everything is opaque, flat, and physical.

---

## 3. Typography
The type system balances high-impact personality with extreme legibility.

*   **Display & Headlines (Plus Jakarta Sans / Chunk-weighted):** While the request suggests 'Fredoka', we use **Plus Jakarta Sans** in its heaviest weights (Bold/ExtraBold) to maintain a premium editorial feel. Use `display-lg` (3.5rem) for hero statements to mimic a thick marker pen.
*   **Body & UI (Be Vietnam Pro):** A rounded, geometric sans-serif that echoes the playfulness of the headers but ensures hackers can read documentation and code at small scales (`body-md`: 0.875rem).
*   **The "Hand-Annotated" Effect:** Use `label-sm` in a secondary color (Charmander Orange) to act as "margin notes" or side-comments, angled at 2-3 degrees for an organic feel.

---

## 4. Elevation, Depth & Motion
We do not use Z-axis shadows to show depth; we use **Line Weight** and **Animation**.

### Tonal Layering
Depth is achieved by stacking `surface-container` tiers. A "floating" element isn't defined by a shadow, but by a thicker `border-4` black stroke and a slight CSS offset.

### Signature Animation: The "Constant Jitter"
To simulate a hand-drawn loop, elements should utilize a jitter keyframe.