# Developer Portfolio - Project Brain

A modern, premium React-based personal portfolio website featuring interactive layouts, rich transitions, dynamic sound feedback, and smooth scrolling.

---

## 🛠️ Technology Stack
* **Framework:** React 19 (JSX)
* **Build System:** Vite
* **Styling:** Tailwind CSS v3, PostCSS, Autoprefixer
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Scrolling:** Lenis (Smooth Scrolling library)
* **Audio:** `use-sound`
* **Contact Integration:** EmailJS
* **Backend Database:** Supabase

---

## 📁 Key Directories & File Structure
* [src/components/](file:///d:/Antigravity%201/portfolio/src/components/): Reusable UI layout elements.
  * [Navbar.jsx](file:///d:/Antigravity%201/portfolio/src/components/Navbar.jsx) (Responsive header, navigation menu)
  * [CustomCursor.jsx](file:///d:/Antigravity%201/portfolio/src/components/CustomCursor.jsx) (Dynamic custom cursor effect)
  * [ScrollToTop.jsx](file:///d:/Antigravity%201/portfolio/src/components/ScrollToTop.jsx) (Floating back-to-top trigger button)
  * [Footer.jsx](file:///d:/Antigravity%201/portfolio/src/components/Footer.jsx) (Social profiles and copyright)
* [src/sections/](file:///d:/Antigravity%201/portfolio/src/sections/): Layout sections for single-page presentation.
  * [Hero.jsx](file:///d:/Antigravity%201/portfolio/src/sections/Hero.jsx) (Intro page with animated typography)
  * [About.jsx](file:///d:/Antigravity%201/portfolio/src/sections/About.jsx) (Bio and general information)
  * [Experience.jsx](file:///d:/Antigravity%201/portfolio/src/sections/Experience.jsx) (Work history and timeline)
  * [Services.jsx](file:///d:/Antigravity%201/portfolio/src/sections/Services.jsx) (Offerings and specializations)
  * [Skills.jsx](file:///d:/Antigravity%201/portfolio/src/sections/Skills.jsx) (Technical stack grid display)
  * [Projects.jsx](file:///d:/Antigravity%201/portfolio/src/sections/Projects.jsx) (Portfolio showcase with details)
  * [Contact.jsx](file:///d:/Antigravity%201/portfolio/src/sections/Contact.jsx) (Form integrated with EmailJS)
* [src/hooks/](file:///d:/Antigravity%201/portfolio/src/hooks/): Custom React hooks.
  * [useSoundEffects.js](file:///d:/Antigravity%201/portfolio/src/hooks/useSoundEffects.js) (Interactive click & hover sounds)
* [src/utils/](file:///d:/Antigravity%201/portfolio/src/utils/): Auxiliary utility files.

---

## 🌟 Core Features
1. **Interactive Design:** Custom smooth cursor trail and premium transitions driven by Framer Motion.
2. **Audio Feedback:** Context-based sounds for user hover and click events.
3. **Smooth Scroll:** Powered by Lenis for standard and trackpad gestures.
4. **Interactive Contact Form:** Validates user input and sends email directly using EmailJS client-side SDK.
5. **Supabase Integration:** Configured to read/write portfolio metrics or dynamic contents via Supabase client.
6. **Deployment Ready:** Deploys via GitHub Pages automatically using the `npm run deploy` script.
