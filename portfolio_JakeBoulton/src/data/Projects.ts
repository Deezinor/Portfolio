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
        team: "Solo project",
        featured: true,
    },
    // Add all 8 projects here...
];