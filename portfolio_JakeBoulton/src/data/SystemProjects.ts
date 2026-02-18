export interface SystemFeature {
  title: string;
  description: string;
}

export interface SystemExample {
  title: string;
  content: string;
  type: "code" | "text" | "output";
}

export interface SystemProject {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  date?: string; // ISO format YYYY-MM-DD for sorting
  thumbnail: string;
  thumbnailFit?: "cover" | "contain";
  thumbnailPosition?: string;
  heroImage: string;
  heroFit?: "cover" | "contain";
  heroPosition?: string;
  description: string;
  problem: string;
  solution: string;
  features: SystemFeature[];
  examples: SystemExample[];
  results: string[];
  tools: string[];
}

export const systemProjects: SystemProject[] = [
    // Unity Workflow AI
  {
    id: "unity-workflow-ai",
    slug: "unity-workflow-ai-system",
    title: "Unity Workflow AI System",
    tagline: "AI-powered session management for Unity developers",
    date: "2026-02",
    thumbnail: "/Assets/Images/Projects/Unity Closer/UnityCloserThumbnail.png",
    thumbnailFit: "contain",
    heroImage: "/Assets/Images/Projects/Unity Closer/ArchiTool_Workspace.png",
    heroFit: "contain",
    description:
      "An AI-powered end-of-day session management system that analyzes Unity development work, tracks progress, detects scope creep, generates git commits, and extracts reusable lessons.",
    problem:
      "Between Unity development sessions, critical context gets lost. Technical decisions are forgotten, learnings aren't captured, progress tracking is manual, and documenting what was accomplished takes time that could be spent actually developing. The gap between active development and project documentation means nothing gets preserved between sessions.",
    solution:
      "The Unity Session Closer is a PAI workflow that runs at the end of each development session. It analyzes modified C# scripts for code quality, tracks development progress and patterns, detects scope creep before it happens, generates proper git commits with Conventional Commits format, extracts lessons for continuous improvement, and maintains project documentation automatically in an Obsidian vault.",
    features: [
      {
        title: "Session Analysis",
        description:
          "Reviews all modified and new scripts since the last session. Identifies work completed (features, bug fixes, refactoring), and tracks technical decisions and their rationale.",
      },
      {
        title: "Code Quality Review",
        description:
          "Analyzes C# scripts for architecture (class design, Unity patterns), code style (naming, formatting, conventions), performance flags (expensive Update() calls, unnecessary GetComponent), and best practices (null checking, defensive programming).",
      },
      {
        title: "Scope Creep Detection",
        description:
          "Compares current work against the development phase (Greybox, Prototype, MVP, Polish, Optimize). Warns when work is premature for the current phase, helping maintain focus on what matters most.",
      },
      {
        title: "Git Commit Generation",
        description:
          "Analyzes changes and suggests Conventional Commits grouped by type: feat, fix, refactor, perf, chore. Generates meaningful commit messages that communicate intent, not just changes.",
      },
      {
        title: "Learning Extraction",
        description:
          "Creates atomic lessons for significant insights - technical breakthroughs, reusable patterns, problem-solving approaches, and non-obvious Unity behaviors. Written as interconnected Zettelkasten notes for future reference.",
      },
    ],
    examples: [
      {
        title: "Suggested Commits",
        content: `feat(core): add overlap validation for opening markers
Files: ProceduralWall.cs, MarkerSelector.cs

refactor(walls): extract bounds calculation helper
Files: ProceduralWall.cs`,
        type: "output",
      },
      {
        title: "Lesson Note Format",
        content: `---
tags: [unity, physics, colliders]
category: physics
project: ArchiTool
date: 2026-02-13
---

# Physics.SyncTransforms before reading collider bounds

## What I Learned
Physics.SyncTransforms() must be called before reading collider.bounds after transform changes.

## Why It Matters
Without calling Physics.SyncTransforms(), collider.bounds returns stale position data, causing openings to appear at wrong positions.

## Example
// After transform changes
Physics.SyncTransforms(); // Force immediate physics update
var bounds = cutCollider.bounds; // Now returns correct position`,
        type: "code",
      },
      {
        title: "Session Summary Output",
        content: `═══════════════════════════════════════════════════════════
🎯 SESSION CLOSER SUMMARY - ArchiTool
═══════════════════════════════════════════════════════════

⚠️  SCOPE CREEP WARNINGS
None detected

📊 CODE QUALITY SUMMARY
- ProceduralWall.cs: Added overlap detection (good)
- MarkerSelector.cs: Remove commented code (line 59-64)
- Room.cs: Clean architecture, good separation

✅ SUGGESTED COMMITS
1. feat(core): add overlap validation for opening markers
   Files: ProceduralWall.cs, MarkerSelector.cs

📋 NEXT TASKS
1. Add grid snapping during marker drag - Precise placement needed
2. Implement keyboard nudge controls - Fine-tuning capability

📝 MEMORY UPDATED
- Current Status: Updated to Prototype phase
- Session Log: 2026-02-13-session.md created
- Lessons: 1 new lesson extracted`,
        type: "output",
      },
    ],
    results: [
      "Complete context preservation between sessions",
      "Automatic documentation - no manual note-taking required",
      "Learning retention through atomic lesson notes",
      "Ready-to-use git commits following best practices",
      "Scope creep prevention keeps development focused",
      "Trackable progress and patterns over time",
    ],
    tools: ["opencode", "PAI", "Obsidian", "Git", "TypeScript"],
  },
];