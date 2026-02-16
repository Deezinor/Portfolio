# Experience Design Workflow Diagram - Detailed Guide

## What Makes This Different

Unlike Asset Optimisation (linear pipeline) and AI Workflow (linear with feedback), **Experience Design is fundamentally iterative and cyclical**. Users don't move through once - they loop continuously as the product evolves.

## Recommended Diagram: Circular/Spiral Design

### Visual Concept

Create a **5-point circular diagram** that shows:

- The continuous loop of user-centered design
- Arrows flowing clockwise (or bidirectional for iteration)
- Each stage connected to the next with clear visual flow
- An inner "user" element at the center (showing user is always at the core)

### Layout Structure

```
            [User Research]
                  ↑
                  │
   [Deployment] ←   → [Prototyping]
        ↓               ↓
   [Iteration] ←   → [Testing]
```

**Or better - a continuous circle with:**

- 5 equal segments in a pentagon/circle layout
- Curved arrows showing flow between stages
- Central element showing "User" at the heart

### Stage-by-Stage Details

**1. User Research (Top)**

- Icon: 🔍 or 👥
- Label: "USER RESEARCH"
- Subtext: "Interviews, Personas, Journey Maps"
- Color: Accent (#E56B5D) to highlight starting point

**2. Prototyping (Top Right)**

- Icon: 📝 or 🎨
- Label: "PROTOTYPING"
- Subtext: "Wireframes, Mockups, XR Prototypes"

**3. Testing (Bottom Right)**

- Icon: 👁 or ✓
- Label: "TESTING"
- Subtext: "User Testing, Analytics, Feedback"

**4. Iteration (Bottom Left)**

- Icon: 🔄 or ⚙️
- Label: "ITERATION"
- Subtext: "Refinement, Bug Fixes, Improvements"

**5. Deployment (Top Left)**

- Icon: 🚀 or 📤
- Label: "DEPLOYMENT"
- Subtext: "Launch, Monitor, Maintain"

### Design Specifications

**Colors:**

- Background: `#FAFAFA` (light) or `#0A0A0A` (dark mode)
- Primary text: `#1A1A1A` (light) / `#F5F5F5` (dark)
- Accent: `#E56B5D` (coral - use for active stage and arrows)
- Secondary: `#6B6B6B` (light) / `#999999` (dark)
- Stage boxes: Border `#E5E5E5` (light) / `#2A2A2A` (dark)

**Typography:**

- Stage labels: Uppercase, `text-caption` size, tracking-wider
- Subtext: `text-small`, text-muted
- Icons: 24-32px

**Layout:**

- Circular arrangement with 72° between each stage (360° ÷ 5 = 72°)
- Stage boxes: 120px × 80px with 8px padding
- Connecting arrows: 2px stroke, accent color
- Central "USER" circle: 60px diameter

### How to Build in Figma

1. **Create Frame:** 600×600px
2. **Draw Circle:**
   - Center at 300,300
   - Radius ~200px (invisible guide)
3. **Place 5 Stage Boxes:**
   - Position at 72° intervals around the circle
   - Top (12 o'clock): User Research
   - Then clockwise: Prototyping → Testing → Iteration → Deployment
4. **Add Arrows:**
   - Curved arrows between each stage
   - Use Figma's vector tool with 45° curves
   - Stroke: 2px accent color
5. **Center Element:**
   - Circle: 60px diameter
   - Label: "USER" (uppercase, bold)
   - Icon: 👤 or heart symbol
6. **Export:**
   - Export as SVG (keeps it scalable and editable)
   - Name: `ExperienceDesign-Workflow.svg`

### Why This Works

1. **Shows Iteration:** The circular design immediately communicates "this loops continuously"
2. **User-Centered:** Central user element shows who everything revolves around
3. **Professional:** Clean, minimal design matches your portfolio aesthetic
4. **Clear Stages:** Each of the 5 steps from your Process.tsx is represented
5. **Responsive:** SVG will look crisp at any size

### Animation Opportunities

With SVG in React, you can animate:

- Pulsing accent color on the active stage
- Flowing arrow animation showing continuous movement
- Staggered reveal of each stage on scroll

### Alternative: Simple Version

If you want something simpler, create a **horizontal zigzag** showing back-and-forth:

```
Research → Prototyping → Testing
    ↑                        ↓
    ← ← ← ← [User Center] ← ← ← ←
           ↓
     Deployment ← Iteration
```

This shows the iterative nature without complex circular geometry.

### File Location

Save final SVG to:

```
public/Assets/Diagrams/ExperienceDesign-Workflow.svg
```

Then in ProcessDiagram.tsx, replace the placeholder ExperienceDesignDiagram component with an img tag loading this SVG, or embed the SVG code directly for animation control.
