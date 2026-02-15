# Portfolio Overhaul: Complete Implementation Plan

## Project Overview

**Objective:** Transform the portfolio from a generic project showcase into a premium, minimal experience positioning Jake as an **XR Technical Artist** specializing in:

- Asset Optimisation (mesh decimation, retopology)
- Experience Design (XR/VR applications)
- AI Workflow Optimisation (custom AI systems)

**Design Philosophy:** Ultra-minimal, Swiss-inspired design with generous whitespace, sharp typography, and intentional negative space. High-end gallery aesthetic.

---

## Design System

### Color Palette

| Role           | Light Mode                             | Dark Mode              |
| -------------- | -------------------------------------- | ---------------------- |
| Background     | `#FAFAFA` (near-white)                 | `#0A0A0A` (near-black) |
| Text Primary   | `#1A1A1A`                              | `#F5F5F5`              |
| Text Secondary | `#6B6B6B`                              | `#999999`              |
| Accent         | `#E56B5D` (coral - consistent in both) | `#E56B5D`              |
| Border/Divider | `#E5E5E5`                              | `#2A2A2A`              |

### Typography

**Font:** Barlow (Google Fonts)

**Type Scale:**

```
Hero:       clamp(2.5rem, 8vw, 6rem)   [40px-96px]   line-height: 1.0
H1:         clamp(2rem, 5vw, 4rem)     [32px-64px]   line-height: 1.1
H2:         clamp(1.5rem, 3vw, 2.5rem) [24px-40px]   line-height: 1.2
H3:         clamp(1.25rem, 2vw, 1.75rem) [20px-28px] line-height: 1.3
Body Large: 1.25rem (20px)                           line-height: 1.6
Body:       1rem (16px)                              line-height: 1.6
Caption:    0.875rem (14px)                          line-height: 1.5
Small:      0.75rem (12px)                           line-height: 1.4
```

**Typography Patterns:**

- Headings: Uppercase, letter-spacing: 0.05em, font-weight: 600
- Navigation: Uppercase, letter-spacing: 0.1em, font-weight: 500
- Body: Normal case, comfortable line-height (1.6)

### Spacing System

```
Section padding:     clamp(4rem, 10vw, 10rem)      [64px-160px]
Between sections:    clamp(6rem, 15vw, 12rem)      [96px-192px]
Container max-width: 1400px
Container padding:   clamp(1rem, 5vw, 4rem)        [16px-64px]
Component spacing:   xs: 0.25rem, sm: 0.5rem, md: 1rem, lg: 1.5rem, xl: 2rem
```

### Animation Guidelines

**Timing:**

- Fast (hovers): 150-200ms
- Medium (transitions): 300-400ms
- Slow (reveals): 600-800ms

**Easing:**

- Standard: `cubic-bezier(0.4, 0, 0.2, 1)`
- Bounce: `cubic-bezier(0.34, 1.56, 0.64, 1)` (subtle)

**Patterns:**

- Links: Underline slides from left
- Cards: Lift 2px + subtle shadow on hover
- Images: Scale 1.02 on hover
- Scroll: Fade in + slide up 20px

---

## Site Architecture

### Navigation Structure

```
[LOGO: JAKE BOULTON]    [HOME] [WORK] [PROCESS] [ABOUT] [CONTACT] [THEME TOGGLE]
```

**Mobile:** Hamburger menu → Full-screen overlay with large links

### Page Structure

```
/
├── Home (Hero + Introduction + Featured Work + Skills Stack + CTA)
├── Work (All projects - bento grid layout)
│   └── [Project Slugs] (Individual project case studies)
├── Process (Your workflow & methodology - 3 pillars)
├── About (Bio + skills + experience + tools)
├── Contact (Form + LinkedIn)
└── 404 (Custom error page)
```

### URL Structure Changes

**Current:** `/BeatBox`, `/Midnight_at_the_Pagoda`
**New:** `/work/beatbox`, `/work/midnight-at-the-pagoda`

(kebab-case for URLs, maintain redirects if needed)

---

## Wireframe Mockups

### 1. HOME PAGE

```
┌─────────────────────────────────────────────────────────────────┐
│  JAKE BOULTON              HOME  WORK  PROCESS  ABOUT  CONTACT  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                                                                 │
│                     [HERO SECTION]                              │
│                                                                 │
│        I TURN COMPLEX CAD AND 3D MODELS                         │
│        INTO XR-READY ASSETS                                     │
│                                                                 │
│        High-fidelity visuals that run in real time.             │
│        I also build AI systems that make 3D development         │
│        faster and smarter.                                      │
│                                                                 │
│                    [VIEW WORK →]                                │
│                                                                 │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     [INTRODUCTION]                              │
│                                                                 │
│        I'm an XR Technical Artist specializing in asset         │
│        optimisation, experience design, and AI workflow         │
│        efficiency.                                              │
│                                                                 │
│        ┌─────────────┐  ┌──────────────┐  ┌─────────────┐      │
│        │   ASSET     │  │ EXPERIENCE   │  │    AI       │      │
│        │ OPTIMISATION│  │   DESIGN     │  │ WORKFLOW    │      │
│        │             │  │              │  │ OPTIMISATION│      │
│        │ Mesh        │  │ XR/VR        │  │ Custom      │      │
│        │ decimation  │  │ applications │  │ AI systems  │      │
│        │ Retopology  │  │ User-centered│  │ Development │      │
│        └─────────────┘  └──────────────┘  └─────────────┘      │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                   [FEATURED WORK]                               │
│                                                                 │
│        ┌──────────────────┐  ┌────────┐                        │
│        │                  │  │        │                        │
│        │   BEATBOX        │  │ HABIBI │                        │
│        │   XR Experience  │  │   XR   │                        │
│        │                  │  │        │                        │
│        └──────────────────┘  └────────┘                        │
│                                                                 │
│        ┌────────┐  ┌──────────────────┐                        │
│        │        │  │                  │                        │
│        │ALITILIUM│  │  CASPIAN HOUSE   │                        │
│        │Product │  │  Archviz         │                        │
│        │        │  │                  │                        │
│        └────────┘  └──────────────────┘                        │
│                                                                 │
│                    [VIEW ALL WORK →]                            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                   [SKILLS / TOOLS]                              │
│                                                                 │
│        [Blender] [PiXYZ] [Unity] [Unreal] [React Three Fiber]  │
│        [opencode] [Three.js] [Tailwind] [TypeScript]            │
│                                                                 │
│                    [VIEW MY PROCESS →]                          │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                      [CTA SECTION]                              │
│                                                                 │
│              LET'S WORK TOGETHER                                │
│                                                                 │
│              Have a project in mind? Let's discuss              │
│              how I can help.                                    │
│                                                                 │
│              [GET IN TOUCH →]                                   │
│                                                                 │
│              or email: hello@jakeboulton.com                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  © 2026 Jake Boulton    [LinkedIn]    [Blog →]                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2. WORK PAGE (Bento Grid)

```
┌─────────────────────────────────────────────────────────────────┐
│  JAKE BOULTON              HOME  WORK  PROCESS  ABOUT  CONTACT  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     SELECTED WORK                               │
│                                                                 │
│        [All] [XR Experiences] [Asset Optimisation] [Archviz]    │
│                                                                 │
│        ┌──────────────────┐  ┌──────────┐                      │
│        │                  │  │          │                      │
│        │    BEATBOX       │  │  HABIBI  │                      │
│        │                  │  │          │                      │
│        │  XR Experience   │  │ XR Exp   │                      │
│        │  2024            │  │ 2024     │                      │
│        │                  │  │          │                      │
│        └──────────────────┘  └──────────┘                      │
│                                                                 │
│        ┌──────────┐  ┌──────────────────┐                      │
│        │          │  │                  │                      │
│        │ ALITILIUM│  │ MIDNIGHT AT THE  │                      │
│        │          │  │     PAGODA       │                      │
│        │ Product  │  │                  │                      │
│        │ 2023     │  │ XR Experience    │                      │
│        │          │  │ 2023             │                      │
│        └──────────┘  └──────────────────┘                      │
│                                                                 │
│        ┌──────────────────┐  ┌──────────┐                      │
│        │                  │  │          │                      │
│        │  CASPIAN HOUSE   │  │ GOFISH   │                      │
│        │                  │  │          │                      │
│        │  Archviz         │  │ XR Game  │                      │
│        │  2023            │  │ 2023     │                      │
│        │                  │  │          │                      │
│        └──────────────────┘  └──────────┘                      │
│                                                                 │
│        ┌──────────┐  ┌──────────────────┐                      │
│        │          │  │                  │                      │
│        │  MON58   │  │ GS_WEAPONS       │                      │
│        │          │  │                  │                      │
│        │ Archviz  │  │ 3D Art           │                      │
│        │ 2023     │  │ 2023             │                      │
│        └──────────┘  └──────────────────┘                      │
│                                                                 │
│        ┌──────────────────┐                                    │
│        │                  │                                    │
│        │ SAVERNAKE KNIFE  │                                    │
│        │                  │                                    │
│        │ 3D Art           │                                    │
│        │ 2023             │                                    │
│        └──────────────────┘                                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  © 2026 Jake Boulton    [LinkedIn]    [Blog →]                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3. PROJECT DETAIL PAGE

```
┌─────────────────────────────────────────────────────────────────┐
│  JAKE BOULTON              HOME  WORK  PROCESS  ABOUT  CONTACT  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                                                          │  │
│  │              [FULL-WIDTH HERO IMAGE]                     │  │
│  │                                                          │  │
│  │                    BEATBOX                               │  │
│  │              XR Experience • 2024                        │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌────────────────────────┐  ┌──────────────────────────────┐  │
│  │                        │  │                              │  │
│  │  PROJECT OVERVIEW      │  │  ROLE: Lead XR Designer      │  │
│  │                        │  │                              │  │
│  │  BeatBox is an         │  │  • Concept development       │  │
│  │  immersive VR music    │  │  • 3D asset creation         │  │
│  │  experience designed   │  │  • Interaction design        │  │
│  │  to make music         │  │  • Quest 2 optimization      │  │
│  │  creation accessible   │  │                              │  │
│  │  and intuitive.        │  │  TOOLS:                      │  │
│  │                        │  │  Unity, Blender, Oculus SDK  │  │
│  │  The challenge was     │  │                              │  │
│  │  creating responsive   │  │  TIMELINE:                   │  │
│  │  interactions that     │  │  6 months (2024)             │  │
│  │  feel natural for      │  │                              │  │
│  │  users of all skill    │  │  TEAM:                       │  │
│  │  levels.               │  │  Solo project                │  │
│  │                        │  │                              │  │
│  └────────────────────────┘  └──────────────────────────────┘  │
│                                                                 │
│  [GALLERY SECTION - Masonry Layout]                            │
│                                                                 │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐                 │
│  │            │ │            │ │            │                 │
│  │   IMG 1    │ │   IMG 2    │ │   IMG 3    │                 │
│  │            │ │            │ │            │                 │
│  └────────────┘ └────────────┘ └────────────┘                 │
│                                                                 │
│  ┌──────────────────┐ ┌──────────────────┐                     │
│  │                  │ │                  │                     │
│  │     VIDEO        │ │   WIREFRAME      │                     │
│  │                  │ │   VIEWER         │                     │
│  └──────────────────┘ └──────────────────┘                     │
│                                                                 │
│  ┌────────────┐ ┌────────────┐                                 │
│  │            │ │            │                                 │
│  │   IMG 4    │ │   IMG 5    │                                 │
│  │            │ │            │                                 │
│  └────────────┘ └────────────┘                                 │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                      [NEXT PROJECT]                             │
│                                                                 │
│              ← Previous        Next →                           │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  © 2026 Jake Boulton    [LinkedIn]    [Blog →]                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4. PROCESS PAGE

```
┌─────────────────────────────────────────────────────────────────┐
│  JAKE BOULTON              HOME  WORK  PROCESS  ABOUT  CONTACT  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     HOW I WORK                                  │
│                                                                 │
│        My approach combines technical expertise with            │
│        creative problem-solving to deliver optimised            │
│        3D assets and immersive experiences.                     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              [01] ASSET OPTIMISATION                            │
│                                                                 │
│        ┌────────────────┐    ┌────────────────────────────┐    │
│        │                │    │                            │    │
│        │   [DIAGRAM]    │    │  From complex CAD models   │    │
│        │                │    │  to real-time ready assets │    │
│        │  CAD → Mesh    │    │                            │    │
│        │  Decimation    │    │  My workflow:              │    │
│        │  Retopology    │    │                            │    │
│        │  Texturing     │    │  1. Import & Analysis      │    │
│        │  Export        │    │  2. Mesh Decimation        │    │
│        │                │    │  3. Retopology             │    │
│        │  Before:       │    │  4. UV Mapping             │    │
│        │  500k polys    │    │  5. Texturing              │    │
│        │                │    │  6. Export & Test          │    │
│        │  After:        │    │                            │    │
│        │  15k polys     │    │  Tools: Blender, PiXYZ     │    │
│        │                │    │                            │    │
│        └────────────────┘    └────────────────────────────┘    │
│                                                                 │
│        [VIEW CASE STUDY →]                                      │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              [02] EXPERIENCE DESIGN                             │
│                                                                 │
│        ┌────────────────────────────┐    ┌────────────────┐    │
│        │                            │    │                │    │
│        │  User-centered XR design   │    │   [DIAGRAM]    │    │
│        │  focused on accessibility  │    │                │    │
│        │  and immersion.            │    │  User Research │    │
│        │                            │    │  ↓             │    │
│        │  Platforms:                │    │  Prototyping   │    │
│        │  • Meta Quest              │    │  ↓             │    │
│        │  • PCVR                    │    │  Testing       │    │
│        │  • Mobile AR               │    │  ↓             │    │
│        │                            │    │  Iteration     │    │
│        │  Approach:                 │    │  ↓             │    │
│        │  • Rapid prototyping       │    │  Deployment    │    │
│        │  • User testing            │    │                │    │
│        │  • Iterative refinement    │    │  5-Stage       │    │
│        │                            │    │  Process       │    │
│        │  Projects:                 │    │                │    │
│        │  BeatBox, Midnight...      │    │                │    │
│        │                            │    │                │    │
│        └────────────────────────────┘    └────────────────┘    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              [03] AI WORKFLOW OPTIMISATION                      │
│                                                                 │
│        ┌────────────────┐    ┌────────────────────────────┐    │
│        │                │    │                            │    │
│        │   [DIAGRAM]    │    │  Building custom AI        │    │
│        │                │    │  systems to accelerate     │
│        │  Prompt →      │    │  development and improve   │    │
│        │  AI Agent →    │    │  efficiency.               │    │
│        │  Output        │    │                            │    │
│        │                │    │  Tools I use:              │    │
│        │  Workflow      │    │                            │    │
│        │  Automation    │    │  • opencode               │    │
│        │                │    │  • AI terminal workflows   │    │
│        │  Results:      │    │  • Custom scripts          │    │
│        │  60% faster    │    │                            │    │
│        │  development   │    │  Blog posts about my AI    │    │
│        │                │    │  workflow experiments:     │    │
│        │                │    │  [almostmakessense.blog]   │    │
│        │                │    │                            │    │
│        └────────────────┘    └────────────────────────────┘    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                   [TOOLS STACK]                                 │
│                                                                 │
│        3D & ASSETS          XR & DEV           AI & AUTOMATION │
│        ─────────────        ─────────          ─────────────── │
│        • Blender            • Unity            • opencode      │
│        • PiXYZ              • Unreal Engine    • Custom Scripts│
│        • Substance          • React Three Fiber               │
│        • Maya               • WebXR                          │
│                                                             │
│        DESIGN               CODE                               │
│        ─────────            ─────────                          │
│        • Figma              • TypeScript                       │
│        • Adobe CC           • React                            │
│                             • Tailwind CSS                     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              [LET'S DISCUSS YOUR PROJECT]                       │
│                                                                 │
│              [GET IN TOUCH →]                                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  © 2026 Jake Boulton    [LinkedIn]    [Blog →]                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 5. ABOUT PAGE

```
┌─────────────────────────────────────────────────────────────────┐
│  JAKE BOULTON              HOME  WORK  PROCESS  ABOUT  CONTACT  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────────┐  ┌──────────────────────────────────┐  │
│  │                    │  │                                  │  │
│  │                    │  │  HELLO, I'M JAKE                 │  │
│  │   [PROFILE         │  │                                  │  │
│  │    PHOTO]          │  │  XR Technical Artist based in    │  │
│  │                    │  │  [Location]                      │  │
│  │                    │  │                                  │  │
│  │                    │  │  I specialize in turning complex │  │
│  │                    │  │  3D models into optimised,       │  │
│  │                    │  │  real-time assets for XR         │  │
│  │                    │  │  experiences.                    │  │
│  │                    │  │                                  │  │
│  └────────────────────┘  │  My journey started with...      │  │
│                          │  [2-3 paragraph bio]             │  │
│                          │                                  │  │
│                          │  When I'm not optimising meshes  │  │
│                          │  or building VR experiences...   │  │
│                          │                                  │  │
│                          └──────────────────────────────────┘  │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     EXPERIENCE                                  │
│                                                                 │
│        2024 - Present                                           │
│        Freelance XR Technical Artist                            │
│        Asset optimisation, XR experience design, AI workflows   │
│                                                                 │
│        2023 - 2024                                              │
│        [Previous Role]                                          │
│        [Description]                                            │
│                                                                 │
│        2020 - 2023                                              │
│        [Education/Previous]                                     │
│        [Description]                                            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     SKILLS                                      │
│                                                                 │
│        3D ASSETS          XR DEVELOPMENT      AI & AUTOMATION  │
│        ████████████       ██████████          ████████         │
│        95%                90%                 85%              │
│                                                             │
│        WEB DEV            DESIGN                               │
│        ██████████         ████████████                         │
│        80%                90%                                  │
│                                                                 │
│        [Full skills list: Blender, Unity, React, etc.]         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     RECOGNITION                                 │
│                                                                 │
│        • [Award/Recognition 1]                                  │
│        • [Award/Recognition 2]                                  │
│        • Featured on [Publication]                              │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  © 2026 Jake Boulton    [LinkedIn]    [Blog →]                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 6. CONTACT PAGE

```
┌─────────────────────────────────────────────────────────────────┐
│  JAKE BOULTON              HOME  WORK  PROCESS  ABOUT  CONTACT  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     LET'S WORK TOGETHER                         │
│                                                                 │
│        Have a project in mind? I'd love to hear about it.       │
│        Whether it's asset optimisation, XR development,         │
│        or AI workflow consulting—let's discuss.                 │
│                                                                 │
│        Currently accepting projects for [Month/Year]            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────────────────┐  ┌───────────────────────────┐ │
│  │                            │  │                           │ │
│  │  [CONTACT FORM]            │  │  OTHER WAYS TO REACH ME   │ │
│  │                            │  │                           │ │
│  │  Name *                    │  │                           │ │
│  │  ┌─────────────────────┐   │  │  Email:                   │ │
│  │  │                     │   │  │  hello@jakeboulton.com    │ │
│  │  └─────────────────────┘   │  │  [Copy to clipboard]      │ │
│  │                            │  │                           │ │
│  │  Email *                   │  │  LinkedIn:                │ │
│  │  ┌─────────────────────┐   │  │  [linkedin.com/in/...]    │ │
│  │  │                     │   │  │                           │ │
│  │  └─────────────────────┘   │  │  Blog:                    │ │
│  │                            │  │  [almostmakessense.blog]  │ │
│  │  Project Type              │  │                           │ │
│  │  ┌─────────────────────┐   │  │  Response time:           │ │
│  │  │ Select...    ▼      │   │  │  Usually within 24-48hrs  │ │
│  │  └─────────────────────┘   │  │                           │ │
│  │                            │  │                           │ │
│  │  Timeline                  │  │                           │ │
│  │  ┌─────────────────────┐   │  │                           │ │
│  │  │ Select...    ▼      │   │  │                           │ │
│  │  └─────────────────────┘   │  │                           │ │
│  │                            │  │                           │ │
│  │  Message *                 │  │                           │ │
│  │  ┌─────────────────────┐   │  │                           │ │
│  │  │                     │   │  │                           │ │
│  │  │                     │   │  │                           │ │
│  │  │                     │   │  │                           │ │
│  │  └─────────────────────┘   │  │                           │ │
│  │                            │  │                           │ │
│  │  [SEND MESSAGE →]          │  │                           │ │
│  │                            │  │                           │ │
│  │                            │  │                           │ │
│  └────────────────────────────┘  └───────────────────────────┘ │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     FAQ                                         │
│                                                                 │
│        Q: What types of projects do you accept?                │
│        A: I specialise in asset optimisation for XR,           │
│           VR/AR experience design, and AI workflow             │
│           consulting for 3D teams.                             │
│                                                                 │
│        Q: What's your typical process?                         │
│        A: [Brief process description]                          │
│                                                                 │
│        Q: Do you work remotely?                                │
│        A: Yes, I work with clients globally.                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  © 2026 Jake Boulton    [LinkedIn]    [Blog →]                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 7. 404 PAGE

```
┌─────────────────────────────────────────────────────────────────┐
│  JAKE BOULTON              HOME  WORK  PROCESS  ABOUT  CONTACT  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                                                                 │
│                                                                 │
│                          404                                    │
│                                                                 │
│                   Page Not Found                                │
│                                                                 │
│        The page you're looking for doesn't exist               │
│        or has been moved.                                       │
│                                                                 │
│              [BACK TO HOME →]                                   │
│                                                                 │
│        Or visit:                                                │
│        [Work] [Process] [About] [Contact]                       │
│                                                                 │
│                                                                 │
│                    [Optional: subtle 3D                        │
│                     wireframe element]                         │
│                                                                 │
│                                                                 │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  © 2026 Jake Boulton    [LinkedIn]    [Blog →]                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Project Data Structure

### Project Interface

```typescript
interface Project {
  id: string;
  slug: string;
  title: string;
  category: "xr" | "asset-optimisation" | "archviz" | "3d-art";
  year: number;
  thumbnail: string;
  heroImage: string;
  description: string;
  challenge: string;
  solution: string;
  role: string;
  roleDetails: string[];
  tools: string[];
  timeline: string;
  team: string;
  media: MediaItem[];
  featured: boolean;
  awards?: string[];
}

interface MediaItem {
  type: "image" | "video" | "iframe" | "3d-model";
  src: string;
  caption?: string;
  thumbnail?: string;
}
```

### Example Project Data

```typescript
const projects: Project[] = [
  {
    id: "beatbox",
    slug: "beatbox",
    title: "BeatBox",
    category: "xr",
    year: 2024,
    thumbnail: "/Assets/Images/beatbox-thumb.jpg",
    heroImage: "/Assets/Images/beatbox-hero.jpg",
    description:
      "An immersive VR music experience that makes music creation accessible and intuitive for users of all skill levels.",
    challenge:
      "Create an immersive VR music experience that feels intuitive and responsive for users with varying levels of musical ability.",
    solution:
      "Designed and developed a VR rhythm game where players interact with 3D instruments in a virtual space. Focused on accessibility and haptic feedback to enhance immersion.",
    role: "Lead XR Designer",
    roleDetails: [
      "Concept development",
      "3D asset creation",
      "Interaction design",
      "Quest 2 optimization",
    ],
    tools: ["Unity", "Blender", "Oculus SDK", "C#"],
    timeline: "6 months",
    team: "Solo project",
    media: [
      { type: "image", src: "/Assets/Images/beatbox-1.jpg" },
      { type: "video", src: "/Assets/Videos/beatbox-demo.mp4" },
      { type: "image", src: "/Assets/Images/beatbox-2.jpg" },
    ],
    featured: true,
  },
  // ... more projects
];
```

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1) - Jake (Me)

**Setup & Configuration:**

- [ ] Create new branch `redesign-2026`
- [ ] Update Tailwind config with design system
- [ ] Set up dark mode (class-based strategy)
- [ ] Configure Framer Motion
- [ ] Update routing structure (change `/BeatBox` to `/work/beatbox`)
- [ ] Create error boundaries for lazy-loaded routes

**Base Components:**

- [ ] Create `components/ui/` folder structure
- [ ] Build `Button` component (variants: primary, ghost, accent)
- [ ] Build `Card` component (for project previews)
- [ ] Build `Container` component (max-width wrapper)
- [ ] Build `ThemeToggle` component
- [ ] Build `Loading` component (skeleton screens)

**Layout Components:**

- [ ] Build new `Header` with minimal nav
- [ ] Build `Footer` with social links
- [ ] Build `Layout` wrapper component
- [ ] Build `Section` component (spacing wrapper)

**Animation Infrastructure:**

- [ ] Create `useScrollAnimation` hook
- [ ] Create `useTheme` hook
- [ ] Set up Framer Motion page transitions
- [ ] Create scroll reveal variants

**Deliverable:** Working skeleton with navigation, theme toggle, and base components

### Phase 2: Content Preparation (Week 2) - You (User)

**Project Content:**

- [ ] Write project descriptions for all 8 projects using template
- [ ] Prepare/update project images:
  - Thumbnails (16:9 or 1:1, ~800px wide)
  - Hero images (full-width, high quality)
  - Detail images (3-6 per project)
- [ ] Export any videos in web-optimized formats (MP4)
- [ ] Gather project logos (if applicable)

**About Page:**

- [ ] Write bio (2-3 paragraphs)
- [ ] Prepare professional headshot
- [ ] List work experience with dates
- [ ] List education
- [ ] List any awards/recognition

**Process Page:**

- [ ] Write Asset Optimisation section content
- [ ] Write Experience Design section content
- [ ] Write AI Workflow section content
- [ ] Gather/create workflow diagrams (SVG preferred)
- [ ] List all tools/software with proficiency levels

**Contact Page:**

- [ ] Confirm email address
- [ ] Write FAQ content (3-5 questions)
- [ ] Set availability status message

**Deliverable:** Complete content package ready for integration

### Phase 3: Page Development (Week 3) - Jake (Me)

**Home Page:**

- [ ] Build Hero section (large typography)
- [ ] Build Introduction section (3 pillars)
- [ ] Build Featured Work section (3-4 projects)
- [ ] Build Skills Stack section
- [ ] Build CTA section
- [ ] Implement scroll animations

**Work Page:**

- [ ] Build filter/tabs component
- [ ] Build bento grid layout
- [ ] Build `ProjectCard` component with hover effects
- [ ] Implement staggered scroll animations
- [ ] Create project data file

**Project Detail Pages:**

- [ ] Build dynamic project template
- [ ] Implement media gallery (masonry layout)
- [ ] Build lightbox modal with navigation
- [ ] Add 3D model viewer integration (where applicable)
- [ ] Implement next/prev project navigation

**Process Page:**

- [ ] Build 3 pillar sections
- [ ] Create workflow visualizations
- [ ] Build Tools Stack grid
- [ ] Implement scroll-triggered reveals

**About Page:**

- [ ] Build profile section
- [ ] Build experience timeline
- [ ] Build skills matrix
- [ ] Add recognition section

**Contact Page:**

- [ ] Build contact form with validation
- [ ] Implement EmailJS with correct Vite syntax
- [ ] Add copy-to-clipboard for email
- [ ] Build FAQ accordion

**404 Page:**

- [ ] Build minimal 404 layout
- [ ] Add navigation links
- [ ] Optional: Add subtle 3D element

**Deliverable:** All pages functional with animations and interactions

### Phase 4: Polish & Optimization (Week 4) - Jake (Me)

**Performance:**

- [ ] Optimize all images (WebP with JPEG fallback)
- [ ] Implement lazy loading for below-fold images
- [ ] Add preconnect hints for external resources
- [ ] Test and optimize Core Web Vitals
- [ ] Configure caching headers

**Mobile:**

- [ ] Test all pages on mobile devices
- [ ] Optimize touch interactions
- [ ] Ensure readable typography on small screens
- [ ] Test hamburger menu functionality

**Accessibility:**

- [ ] Run axe accessibility audit
- [ ] Fix any contrast issues
- [ ] Ensure keyboard navigation works
- [ ] Test with screen reader
- [ ] Verify reduced motion support

**SEO:**

- [ ] Add dynamic meta titles/descriptions per page
- [ ] Add Open Graph tags
- [ ] Create robots.txt
- [ ] Create sitemap.xml
- [ ] Add JSON-LD structured data

**Final Testing:**

- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Test contact form in production
- [ ] Verify all links work
- [ ] Test theme toggle persistence

**Deliverable:** Production-ready site

### Phase 5: Launch (Week 5) - Together

**Pre-Launch:**

- [ ] Final content review
- [ ] Proofread all copy
- [ ] Verify all images load correctly
- [ ] Test contact form end-to-end

**Launch:**

- [ ] Merge redesign branch to main
- [ ] Deploy to Netlify
- [ ] Configure custom domain (if applicable)
- [ ] Set up analytics (Plausible/Fathom)

**Post-Launch:**

- [ ] Monitor performance metrics
- [ ] Test contact form submissions
- [ ] Create launch announcement
- [ ] Update LinkedIn profile with new site

**Deliverable:** Live website

---

## Technical Implementation Details

### Dark Mode Strategy

```typescript
// hooks/useTheme.ts
const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (saved) {
      setTheme(saved as "light" | "dark");
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return { theme, toggle };
};
```

### Tailwind Dark Mode Config

```javascript
// tailwind.config.js
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FAFAFA",
          dark: "#0A0A0A",
        },
        foreground: {
          DEFAULT: "#1A1A1A",
          dark: "#F5F5F5",
        },
        muted: {
          DEFAULT: "#6B6B6B",
          dark: "#999999",
        },
        accent: "#E56B5D",
        border: {
          DEFAULT: "#E5E5E5",
          dark: "#2A2A2A",
        },
      },
    },
  },
};
```

### Scroll Animation Pattern

```typescript
// components/ScrollReveal.tsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};
```

### Bento Grid Layout

```typescript
// Work page grid structure
const bentoLayout = [
  { project: 0, span: "col-span-2 row-span-2" }, // Large
  { project: 1, span: "col-span-1 row-span-1" }, // Small
  { project: 2, span: "col-span-1 row-span-1" }, // Small
  { project: 3, span: "col-span-2 row-span-1" }, // Wide
  { project: 4, span: "col-span-1 row-span-2" }, // Tall
  { project: 5, span: "col-span-1 row-span-1" }, // Small
];
```

---

## File Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Loading.tsx
│   │   └── ScrollReveal.tsx
│   ├── layout/                # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── Section.tsx
│   ├── sections/              # Page sections
│   │   ├── Hero.tsx
│   │   ├── FeaturedWork.tsx
│   │   ├── SkillsStack.tsx
│   │   ├── ProcessPillars.tsx
│   │   └── ContactForm.tsx
│   └── project/
│       ├── ProjectCard.tsx
│       ├── ProjectGallery.tsx
│       ├── ProjectInfo.tsx
│       └── ModelViewer.tsx
├── hooks/
│   ├── useTheme.ts
│   ├── useScrollAnimation.ts
│   └── useMediaQuery.ts
├── lib/
│   ├── utils.ts
│   └── animations.ts
├── data/
│   └── projects.ts            # All project data
├── pages/
│   ├── Home.tsx
│   ├── Work.tsx
│   ├── ProjectDetail.tsx      # Dynamic route
│   ├── Process.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── styles/
│   └── globals.css
├── types/
│   └── index.ts
└── App.tsx
```

---

## Environment Variables

Create `.env` file:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (optional)
VITE_ANALYTICS_ID=your_analytics_id
```

**Important:** Use `import.meta.env.VITE_*` not `process.env.REACT_APP_*`

---

## Success Metrics

### Performance Targets

- Lighthouse Score: 95+ on all metrics
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- INP (Interaction to Next Paint): < 200ms
- Bundle Size: < 200KB gzipped (initial)

### Business Goals

- Contact form submissions increase
- Time on site > 3 minutes
- Bounce rate < 40%
- Mobile traffic engagement improvement

---

## Notes & Reminders

### Content Guidelines

- Keep project descriptions concise (2-3 sentences)
- Use active voice
- Focus on outcomes, not just features
- Include metrics when possible ("reduced polygon count by 70%")

### Image Guidelines

- Use WebP format when possible
- Provide alt text for all images
- Optimize for web (max 200KB per image)
- Use appropriate aspect ratios

### Accessibility Checklist

- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA
- [ ] ARIA labels where needed
- [ ] Reduced motion support

### Known Issues to Fix

- [ ] Contact form uses `process.env` (needs `import.meta.env`)
- [ ] "Galley-Components" folder typo
- [ ] About page is empty
- [ ] CV route exists but link commented out
- [ ] No error boundaries for lazy routes

---

## Next Steps

1. **Review this plan** - Any adjustments needed?
2. **Confirm timeline** - Can we stick to 5 weeks?
3. **Start Phase 1** - I'll begin foundation work
4. **Prepare content** - You start gathering/writing content for Phase 2

**Ready to proceed?**
