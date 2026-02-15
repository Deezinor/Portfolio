# Agent Guidelines

## Commands

```bash
# Development
npm run dev              # Start Vite dev server
npm run build           # Type-check and build for production
npm run preview         # Preview production build locally

# Code Quality
npm run lint            # Run ESLint
npm run format          # Format all files with Prettier
```

**Note:** No test framework is configured. To add testing, install Vitest or Jest first.

## Tech Stack

- **Framework:** React 19 + TypeScript 5.6
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3.4 + Custom CSS
- **Routing:** React Router v7
- **3D:** React Three Fiber + Three.js

## Code Style

### Import Order

1. React imports
2. Third-party libraries (react-router-dom, react-icons, etc.)
3. Local components (relative paths)
4. CSS files last

```typescript
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowUpLong } from "react-icons/fa6";
import Header from "./Header-Components/header";
import "./index.css";
```

### Naming Conventions

- **Components:** PascalCase (e.g., `ProjectTemplate.tsx`, `GalleryCard.tsx`)
- **Component folders:** PascalCase with suffix (e.g., `Header-Components/`)
- **Props interfaces:** `ComponentNameProps` (e.g., `GalleryCardProps`)
- **Variables/Functions:** camelCase
- **Boolean states:** `isOpen`, `isLoading`, `isVisible`
- **Handlers:** `handleChange`, `handleSubmit`
- **CSS Classes:** kebab-case (e.g., `button--black`, `animate-card-in`)

### TypeScript Patterns

```typescript
// Use React.FC for all components
const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  return <div>{prop1}</div>;
};

// Define props interface
interface ComponentProps {
  title: string;
  isActive?: boolean;
  children: React.ReactNode;
}
```

### ESLint Rules

- `arrow-body-style: ["error", "always"]` — Always use explicit return statements
- `no-unused-vars: "warn"` — Warn on unused variables
- Special override for ModelViewer (ignores React Three Fiber props)

**Correct:**

```typescript
const myFunc = () => {
  return value;
};
```

**Incorrect:**

```typescript
const myFunc = () => value;
```

## Styling

### Tailwind First

Use Tailwind utility classes for 90%+ of styling.

### Custom CSS

Use `index.css` for:

- Global animations and keyframes
- CSS custom properties
- Complex component variants (buttons)
- Print styles

### Conditional Classes

Use `clsx` for conditional class names:

```typescript
import clsx from "clsx";

className={clsx(
  "base-classes",
  isActive && "active-class",
  className
)}
```

## Error Handling

Use `.catch()` for promise errors:

```typescript
fetch("/api")
  .then((res) => res.json())
  .then((data) => setData(data))
  .catch((error) => console.error("Error:", error));
```

## Environment Variables

Use Vite's `import.meta.env` with `VITE_` prefix:

```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

**Not** `process.env.REACT_APP_*` — that's Create React App syntax.

## Accessibility

- Add `aria-label` to interactive elements without text
- Use `aria-expanded` for toggles
- Use `aria-live="polite"` for dynamic content
- Respect `prefers-reduced-motion` for animations

## Performance

- Use `React.lazy()` for code splitting (see App.tsx)
- Add `loading="lazy"` to images below fold
- Use ` Suspense` with fallback UI
- Optimize images with vite-plugin-image-optimizer

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── Header-Components/
│   ├── Galley-Components/    # Note: "Galley" typo in folder name
│   └── ModelViewer/
├── pages/             # Route pages
│   ├── projects/      # Project case studies
│   ├── Home.tsx
│   └── ...
├── App.tsx           # Main app with routing
└── index.css         # Global styles
```

## Common Pitfalls

1. **Environment variables:** Use `import.meta.env.VITE_*`, not `process.env.REACT_APP_*`
2. **Arrow functions:** Always use explicit return (ESLint rule)
3. **File naming:** Keep consistent PascalCase for components
4. **Folder typo:** "Galley-Components" should be "Gallery-Components"
5. **3D props:** ModelViewer has special ESLint rules for R3F props

## Quick Reference

```bash
# Check for lint errors
npm run lint

# Fix formatting
npm run format

# Build and preview
npm run build && npm run preview
```
