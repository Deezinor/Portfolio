export interface Project {
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
    featured: boolean;
}

export const projects: Project[] = [
    // BeatBox
    {
        id: "beatbox",
        slug: "beatbox",
        title: "BeatBox",
        category: "xr",
        year: 2024,
        thumbnail: "/Assets/Images/beatbox-thumb.jpg",
        heroImage: "/Assets/Images/beatbox-hero.jpg",
        description: "An immersive VR music experience...",
        challenge: "Create an immersive VR music experience...",
        solution: "Designed and developed a VR rhythm game...",
        role: "Lead XR Designer",
        roleDetails: ["Concept development", "3D asset creation", "Interaction design"],
        tools: ["Unity", "Blender", "Oculus SDK"],
        timeline: "6 months",
        team: "Group Project",
        featured: true,
    },
    // Midnight
    {
        id: "midnight",
        slug: "midnight",
        title: "Midnight at the Pagoda",
        category: "xr",
        year: 2024,
        thumbnail: "/Assets/Images/Projects/Midnight at the Pagoda/FinalScene.png",
        heroImage: "/Assets/Images/Projects/Midnight at the Pagoda/FinalScene-Render.png",
        description: "words god here...",
        challenge: "Challange goes here...",
        solution: "Solution goes here...",
        role: "Lead XR Designer and Artist",
        roleDetails: ["blah", "blah", "blah"],
        tools: ["Unity", "Blender", "XR Interaction Toolkit"],
        timeline: "3 months planning, Produced in 3 day hackathon",
        team: "Joshua Davies, Hwanjoon Jang, Nathan Thomas-Benke, Mai Ye",
        featured: true,
    }
];