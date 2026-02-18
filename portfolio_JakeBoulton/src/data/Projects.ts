export interface GalleryImage {
    src: string;
    alt?: string;
    caption?: string;
    fit?: "cover" | "contain";
    position?: string;
    size?: "small" | "medium" | "large" | "wide" | "tall"; // For masonry layout sizing
}

export interface Reference {
    title: string;
    url: string;
    type?: "concept-art" | "inspiration" | "tutorial" | "documentation" | "other";
    description?: string;
    author?: string;
}

export interface Project {
    id: string;
    slug: string;
    title: string;
    category:
        | "xr"
        | "asset-optimisation"
        | "archviz"
        | "3d-art"
        | "product-design";
    year: number;
    date?: string; // ISO format YYYY-MM-DD for sorting
    thumbnail: string;
    thumbnailFit?: "cover" | "contain"; // How thumbnail should fit: cover (fill+crop) or contain (show all+letterbox)
    thumbnailPosition?: string; // CSS object-position value, e.g., "center top", "left center", "20% 40%"
    heroImage: string;
    heroFit?: "cover" | "contain"; // How hero should fit
    heroPosition?: string; // CSS object-position value for hero
    description: string;
    challenge: string;
    solution: string;
    role: string;
    roleDetails: string[];
    tools: string[];
    timeline: string;
    team: string | string[];
    featured: boolean;
    gallery?: GalleryImage[]; // Array of additional project images
    references?: Reference[]; // External references and concept art
}

export const projects: Project[] = [
    // BeatBox
    {
        id: "beatbox",
        slug: "beatbox",
        title: "BeatBox",
        category: "xr",
        year: 2024,
        date: "2024-02",
        thumbnail: "/Assets/Images/Projects/BeatBox_VR-Logo.png",
        thumbnailFit: "contain",
        heroImage: "/Assets/Images/Projects/BeatBox_VR-Logo.png",
        heroFit: "contain",
        description:
            "Originally a Masters degree project, BeatBox Studio is an award winning VR " +
            "drumming simulator and educational platform, offering free-play, structured" +
            " lessons, and rhythm-based game modes for players of all skill levels. " +
            "Winner of the Jury Prize at the Innovate UK Immersive Tech Awards 2024.",
        challenge:
            "Design and build simple VR environments with realistic graphics and lighting," +
            " and describe how VR is different from other media, including its effects on" +
            " human perception.",
        solution:
            "Designed and developed a VR rhythm game and learning tool that breaks barriers " +
            "to entry, such as limited space, high up-front costs, and noise levels, and " +
            "allows users to access percussion instruments like never before.",
        role: "Lead XR Designer",
        roleDetails: [
            "Concept development",
            "3D asset creation",
            "Interaction design",
            "Environment design & creation",
        ],
        tools: [
            "Unity",
            "Blender",
            "Adobe Substance Painter",
            "XR Interaction Toolkit",
            "SourceTree",
        ],
        timeline: "10 months",
        team: ["Joshua Davies", "Hwanjoon Jang", "Nathan Thomas-Benke", "Mai Ye"],
        featured: true,
        gallery: [
            {
                src: "/Assets/Images/Projects/BeatBox/BarScene.png",
                alt: "Bar scene environment",
                fit: "cover",
            },
            {
                src: "/Assets/Images/Projects/BeatBox/BarSceneRender.png",
                alt: "Bar scene render",
                fit: "cover",
            },
            {
                src: "/Assets/Images/Projects/BeatBox/BBVR-customize_environment.gif",
                alt: "Environment customization feature",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/BeatBox/BBVR-Freeplay.gif",
                alt: "Free play gameplay",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/BeatBox/BBVR-logo.gif",
                alt: "BeatBox logo animation",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/BeatBox/BBVR-LogoAnim.mp4",
                alt: "BeatBox logo animation video",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/BeatBox/DrumKit-NoTexture.png",
                alt: "Drum kit 3D model (wireframe)",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/BeatBox/DrumStick_NoTexture.png",
                alt: "Drum stick 3D model (wireframe)",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/BeatBox/DrumStick_textured.png",
                alt: "Drum stick 3D model (textured)",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/BeatBox/TeamPhotoInnovate.JPG",
                alt: "Team photo at Innovate UK Awards",
                fit: "cover",
                caption: "Team at Innovate UK Immersive Tech Awards 2024",
            },
        ],
    },
    // Midnight
    {
        id: "midnight",
        slug: "midnight",
        title: "Midnight at the Pagoda",
        category: "xr",
        year: 2024,
        date: "2024-05",
        thumbnail: "/Assets/Images/Projects/Midnight at the Pagoda/FinalScene.png",
        heroImage:
            "/Assets/Images/Projects/Midnight at the Pagoda/FinalScene-Render.png",
        description:
            "A digital heritage VR exhibit exploring the history of Buddhism in China, featuring the Porcelain Tower and Great Bao'en Temple in Nanjing. Created for the 2024 DIGITAL HERITAGE – IMMERSIVE CULTURAL HERITAGE INNOVATOR CONTEST with the winning project to be developed and launched at the temple site.",
        challenge:
            "Create an immersive XR exhibit about Buddhist heritage in China that could be deployed at the actual heritage site, requiring historical accuracy while delivering engaging modern interaction.",
        solution:
            "Developed a VR experience allowing users to explore the temple environment, interact with Buddhist cultural artifacts, and learn about the history through spatial storytelling and interactive elements.",
        role: "Lead XR Designer and Artist",
        roleDetails: [
            "Historical research",
            "3D asset creation",
            "Environment design",
            "UI/UX design",
        ],
        tools: ["Unity", "Blender", "XR Interaction Toolkit"],
        timeline: "3 months planning + 3 days hackathon",
        team: ["Joshua Davies", "Hwanjoon Jang", "Mai Ye"],
        featured: false,
        gallery: [
            {
                src: "/Assets/Images/Projects/Midnight at the Pagoda/Scroll.png",
                alt: "Calligraphy scroll prop",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Midnight at the Pagoda/CalligraphyBrush.png",
                alt: "Calligraphy brush tool",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Midnight at the Pagoda/TempleTable.png",
                alt: "Temple table furniture",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Midnight at the Pagoda/Arch_Model.png",
                alt: "Architectural arch model",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Midnight at the Pagoda/LanternModel.png",
                alt: "Lantern 3D model",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Midnight at the Pagoda/FinalScene-Render.png",
                alt: "Final scene render",
                fit: "cover",
            },
            {
                src: "/Assets/Images/Projects/Midnight at the Pagoda/FinalScene-Model.png",
                alt: "Final scene 3D model",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Midnight at the Pagoda/Lantern and podium.png",
                alt: "Lantern and podium setup",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Midnight at the Pagoda/FirstScene-TopDown.png",
                alt: "First scene top-down view",
                fit: "cover",
            },
            {
                src: "/Assets/Images/Projects/Midnight at the Pagoda/SecondScene.png",
                alt: "Second scene view",
                fit: "cover",
            },
            {
                src: "/Assets/Images/Projects/Midnight at the Pagoda/FinalScene.png",
                alt: "Final scene",
                fit: "cover",
            },
            {
                src: "/Assets/Images/Projects/Midnight at the Pagoda/Scene2-turnaround.mkv",
                alt: "Scene 2 turnaround animation",
                fit: "contain",
            },
        ],
    },
    // Habibi
    {
        id: "habibi",
        slug: "habibi",
        title: "Habibi",
        category: "xr",
        year: 2024,
        date: "2024-09",
        thumbnail: "/Assets/Images/Projects/Habibi-Logo.png",
        heroImage: "/Assets/Images/Projects/Habibi-Logo.png",
        description:
            "A shared virtual wall for long-distance couples to communicate asynchronously. Partners can leave notes, upload images, and use AI-powered image generation to create and share visual moments together, fostering connection across distance through a persistent shared space.",
        challenge:
            "Creating meaningful connection for long-distance partners through asynchronous communication that goes beyond standard messaging apps, incorporating creative expression through AI tools.",
        solution:
            "Built a VR application with a persistent shared wall space where partners can leave handwritten notes, share photos, and generate AI images together, creating an ongoing visual dialogue that persists between sessions.",
        role: "Lead XR Designer and Artist",
        roleDetails: [
            "Concept development",
            "3D asset creation",
            "AI integration design",
            "UI/UX design",
        ],
        tools: ["Unity", "Blender", "XR Interaction Toolkit"],
        timeline: "3 day hackathon (XR Hack 2024: Istanbul)",
        team: ["Joshua Davies", "Hwanjoon Jang", "Mai Ye", "Mohammed El Eryan"],
        featured: false,
    },
    // Caspian House
    {
        id: "caspian",
        slug: "caspian-house",
        title: "Caspian House",
        category: "archviz",
        year: 2024,
        date: "2025-03",
        thumbnail: "/Assets/Images/Projects/CaspianHouse/Kitchen_001.png",
        heroImage: "/Assets/Images/Projects/CaspianHouse/CaspianHouse_viewport.png",
        description:
            "A personal architectural visualization project creating a digital twin of a residential interior. Focused on accurate material representation, lighting, and spatial atmosphere to practice photorealistic rendering techniques.",
        challenge:
            "Translating real-world architectural space into a convincing digital environment while learning lighting, material creation, and composition for architectural visualization.",
        solution:
            "Built a detailed 3D interior environment matching real-world proportions and materials, focusing on realistic lighting scenarios and material accuracy to create believable architectural renders.",
        role: "3D Artist",
        roleDetails: [
            "3D modeling",
            "Material creation",
            "Lighting design",
            "Rendering",
        ],
        tools: ["Blender", "Adobe Substance Painter"],
        timeline: "3 months",
        team: "Solo project",
        featured: false,
        gallery: [
            {
                src: "/Assets/Images/Projects/CaspianHouse/CaspianHouse_viewport.png",
                alt: "Caspian House viewport render",
                fit: "cover",
            },
            {
                src: "/Assets/Images/Projects/CaspianHouse/Kitchen_001.png",
                alt: "Kitchen interior view",
                fit: "cover",
            },
        ],
    },
    // Mon58
    {
        id: "mon58",
        slug: "mon58",
        title: "Mon58",
        category: "archviz",
        year: 2024,
        date: "2025-04",
        thumbnail: "/Assets/Images/Projects/Mon58/Kitchen_View_graded.png",
        heroImage: "/Assets/Images/Projects/Mon58/Mon58-LogoImage_02.png",
        description:
            "A digital twin practice project recreating the Mon58 house by Associati architects. Using architectural plans and reference imagery to build an accurate 3D visualization of this modern residential space.",
        challenge:
            "Translating 2D architectural plans and photographs into an accurate 3D digital twin while maintaining proportions, materials, and spatial relationships.",
        solution:
            "Built a detailed 3D model using reference plans and images, focusing on accurate interior visualization including kitchen, living spaces, and architectural details.",
        role: "3D Artist",
        roleDetails: [
            "3D modeling",
            "Interior visualization",
            "Material recreation",
        ],
        tools: ["Blender", "Adobe Substance Painter"],
        timeline: "3 months",
        team: "Solo project",
        featured: true,
        gallery: [
            {
                src: "/Assets/Images/Projects/Mon58/Mon58-LogoImage_02.png",
                alt: "Mon58 logo design",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Mon58/Mon58-LogoImage_01.png",
                alt: "Mon58 logo alternative",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Mon58/PureRef-Screenshot.png",
                alt: "PureRef reference board",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Mon58/Model.png",
                alt: "3D model overview",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Mon58/Dishwasher.png",
                alt: "Dishwasher detail",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Mon58/KitchenIsland.png",
                alt: "Kitchen island detail",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Mon58/SpiralStairs.png",
                alt: "Spiral staircase detail",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Mon58/Kitchen_View_graded.png",
                alt: "Kitchen interior render",
                fit: "cover",
            },
            {
                src: "/Assets/Images/Projects/Mon58/LivingSpace_002.png",
                alt: "Living space render",
                fit: "cover",
            },
            {
                src: "/Assets/Images/Projects/Mon58/LivingSpace_Graded.png",
                alt: "Living space graded render",
                fit: "cover",
            },
        ],
        references: [
            {
                title: "Mon58 House",
                author: "Associati architects",
                url: "https://www.archdaily.com/1026594/mon58-house-associati",
                type: "inspiration",
                description:
                    "Original architectural project used as reference for this digital twin practice",
            },
        ],
    },
    // Altilium
    {
        id: "altilium",
        slug: "altilium",
        title: "Altilium",
        category: "product-design",
        year: 2024,
        date: "2020-01",
        thumbnail: "/Assets/Images/Projects/Altilium-Logo.png",
        heroImage: "/Assets/Images/Projects/Altilium-Logo.png",
        description:
            "A portable induction stove concept designed for camping and outdoor use, exploring future battery technology (solid-state batteries) to create a safer cooking solution. Final year product design degree project focused on reducing campsite fire risks while maintaining cooking functionality.",
        challenge:
            "Designing a portable cooking solution for camping that eliminates open flames and gas canisters, exploring emerging battery technology to create a safer alternative to traditional camp stoves.",
        solution:
            "Developed a concept for a battery-powered induction stove with removable battery packs, focusing on form factor, material selection, and user interaction while researching solid-state battery technology feasibility.",
        role: "Product Designer",
        roleDetails: [
            "Research",
            "Concept development",
            "CAD modeling",
            "Technical drawings",
            "Materials research",
        ],
        tools: ["Fusion 360", "Adobe Illustrator", "KeyShot"],
        timeline: "Final year project",
        team: "Solo project",
        featured: false,
        gallery: [
            {
                src: "/Assets/Images/Projects/Altilium/Altilium Logo.jpg",
                alt: "Altilium product logo",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Altilium/Altilium_Introduction.jpg",
                alt: "Altilium product introduction",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Altilium/Altilium-BaseColours.jpg",
                alt: "Altilium base color options",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Altilium/InductionCoil_Layout.jpg",
                alt: "Induction coil layout diagram",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Altilium/Altilium_Drawing-Base.jpg",
                alt: "Base technical drawing",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Altilium/Altilium_Drawing-Coil.jpg",
                alt: "Coil technical drawing",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Altilium/Altilium_Drawing-CoilAssembly.jpg",
                alt: "Coil assembly technical drawing",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Altilium/Altilium_Drawing-GlassTop.jpg",
                alt: "Glass top technical drawing",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Altilium/Altilium_Drawing-PlasticFrame.jpg",
                alt: "Plastic frame technical drawing",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/Altilium/Altilium_ExplodedView.jpg",
                alt: "Exploded view diagram",
                fit: "contain",
            },
        ],
    },
    // GoFish
    {
        id: "gofish",
        slug: "gofish",
        title: "GoFish",
        category: "xr",
        year: 2024,
        date: "2024-08",
        thumbnail: "/Assets/Images/Projects/GoFish-Logo.png",
        heroImage: "/Assets/Images/Projects/GoFish-Logo.png",
        description:
            "A mixed reality recreation of the classic card game Go Fish, reimagined for VR. Players sit around a virtual table playing cards, but instead of simply 'going fish' from the deck, they physically fish with a rod into virtual water to catch their cards, adding tactile fun to the classic game.",
        challenge:
            "Translating a simple card game into an engaging VR experience that justifies the medium, making the physical act of 'going fish' literal and enjoyable while maintaining the social card game feel.",
        solution:
            "Created a VR card table environment where players use fishing rods to catch cards from virtual water when told to 'go fish', combining traditional card game mechanics with satisfying physical VR interactions.",
        role: "Lead XR Designer and Artist",
        roleDetails: [
            "Concept development",
            "3D asset creation",
            "Interaction design",
            "Environment design",
        ],
        tools: ["Unity", "Blender", "XR Interaction Toolkit"],
        timeline: "3 day hackathon",
        team: ["Joshua Davies", "Hwanjoon Jang", "Nathan Thomas-Benke", "Mai Ye"],
        featured: false,
        gallery: [
            {
                src: "/Assets/Images/Projects/GoFish/PlaySpace-Sketch.jpg",
                alt: "Initial playspace sketch",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GoFish/PlaySpace-Sketch_2.jpg",
                alt: "Refined playspace sketch",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GoFish/GoFish_PlaySpace.jpg",
                alt: "GoFish playspace concept",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GoFish/Playspace_NoTexture.png",
                alt: "Playspace 3D model without textures",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GoFish/Playspace_textured.png",
                alt: "Playspace 3D model with textures",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GoFish/PlaySpace-Whole.png",
                alt: "Complete playspace environment",
                fit: "cover",
            },
            {
                src: "/Assets/Images/Projects/GoFish/Boat_NoTexture.png",
                alt: "Boat 3D model without textures",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GoFish/Boat_Textured.png",
                alt: "Boat 3D model with textures",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GoFish/CardHand.png",
                alt: "Card hand gameplay element",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GoFish/SeaGullAnimations.gif",
                alt: "Seagull animation sequence",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GoFish/SeaGull Animations.mp4",
                alt: "Seagull animation video",
                fit: "contain",
            },
        ],
    },
    // Savernake
    {
        id: "savernake",
        slug: "savernake",
        title: "Savernake",
        category: "3d-art",
        year: 2024,
        date: "2025-04",
        thumbnail: "/Assets/Images/Projects/Savernake/202504_3KnifeRender_V01.jpg",
        heroImage: "/Assets/Images/Projects/Savernake/202504_3KnifeRender_V01.jpg",
        description:
            "A rapid knife visualization project completed in a single day to demonstrate modeling and rendering capabilities for a job application. Based on product imagery from the Savernake brand website, recreated to showcase technical speed and quality.",
        challenge:
            "Creating a portfolio-quality product visualization under extreme time constraints (24 hours) to demonstrate workflow efficiency and technical capability to potential employers.",
        solution:
            "Rapidly modeled, textured, and rendered a product-accurate 3D knife visualization using reference photography, delivering the result as part of a speculative job application demonstrating initiative and skill.",
        role: "3D Artist",
        roleDetails: [
            "Rapid 3D modeling",
            "Texturing",
            "Product visualization",
            "Rendering",
        ],
        tools: ["Blender", "Adobe Substance Painter"],
        timeline: "1 day",
        team: "Solo project",
        featured: false,
        gallery: [
            {
                src: "/Assets/Images/Projects/Savernake/Logo_whiteBg.jpg",
                alt: "Savernake logo on white background",
                fit: "contain",
            },
        ],
    },
    // GS Weapons
    {
        id: "gs-weapons",
        slug: "gs-weapons",
        title: "GS Weapons",
        category: "3d-art",
        year: 2024,
        date: "2023-10",
        thumbnail: "/Assets/Images/Projects/GS_Weapons/GS_Weapons_Logo.png",
        thumbnailFit: "contain",
        heroImage: "/Assets/Images/Projects/GS_Weapons/GS_Weapons_Logo.png",
        heroFit: "contain",
        description:
            "A collection of detailed 3D weapon models created as coursework for a university modeling and animation module, showcasing hard-surface modeling, texturing, and rendering techniques. Based on concept art reference to practice translating 2D designs into 3D assets.",
        challenge:
            "Creating high-quality weapon assets demonstrating technical proficiency in hard-surface modeling, UV unwrapping, and PBR texturing workflows within a limited timeframe.",
        solution:
            "Developed a series of weapon models using industry-standard techniques, including detailed high-poly modeling, efficient low-poly optimization, and professional texturing in Substance Painter, working from concept art reference.",
        role: "3D Artist",
        roleDetails: ["3D Modeling", "Texturing", "Rendering"],
        tools: ["Blender", "Adobe Substance Painter"],
        timeline: "1 month (coursework)",
        team: "Solo project",
        featured: false,
        references: [
            {
                title: "Weapons Design",
                author: "Viviane Kosty",
                url: "https://www.artstation.com/artwork/6OVeV",
                type: "concept-art",
                description:
                    "Original concept art used as reference for weapon designs",
            },
        ],
        gallery: [
            // Model 1
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 1/Model_01_wireframe.png",
                alt: "Model 1 wireframe view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 1/Model_01_Turnaround_front.png",
                alt: "Model 1 front view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 1/Model_01_Turnaround_left.png",
                alt: "Model 1 left view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 1/Model_01_Turnaround_right.png",
                alt: "Model 1 right view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 1/Model_01_Turnaround.png",
                alt: "Model 1 full turnaround",
                fit: "contain",
            },
            // Model 6
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 6/Model_06_BeautyRender.png",
                alt: "Model 6 beauty render",
                fit: "cover",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 6/Model_06_Texture_Presentation.png",
                alt: "Model 6 texture presentation",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 6/Model_06_Turnaround.png",
                alt: "Model 6 turnaround",
                fit: "contain",
            },
            // Model 7
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 7/2024_02_Wireframe.png",
                alt: "Model 7 wireframe view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 7/2024_02_Turnaround_front.png",
                alt: "Model 7 front view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 7/2024_02_Turnaround_left.png",
                alt: "Model 7 left view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 7/2024_02_Turnaround_right.png",
                alt: "Model 7 right view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 7/Model_07_BeautyRender.png",
                alt: "Model 7 beauty render",
                fit: "cover",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 7/Model_07_Texture_Presentation.png",
                alt: "Model 7 texture presentation",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 7/Model_07_Turnaround.png",
                alt: "Model 7 turnaround",
                fit: "contain",
            },
            // Model 8
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 8/2024_02_Wireframe.png",
                alt: "Model 8 wireframe view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 8/2024_02_Turnaround_front.png",
                alt: "Model 8 front view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 8/2024_02_Turnaround_left.png",
                alt: "Model 8 left view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 8/2024_02_Turnaround_right.png",
                alt: "Model 8 right view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 8/Model_08_BeautyRender.png",
                alt: "Model 8 beauty render",
                fit: "cover",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 8/Model_08_Texture_Presentation.png",
                alt: "Model 8 texture presentation",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 8/Model_08_Turnaround.png",
                alt: "Model 8 turnaround",
                fit: "contain",
            },
            // Model 11
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 11/2024_02_Wireframe.png",
                alt: "Model 11 wireframe view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 11/2024_02_Turnaround_front.png",
                alt: "Model 11 front view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 11/2024_02_Turnaround_left.png",
                alt: "Model 11 left view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 11/2024_02_Turnaround_right.png",
                alt: "Model 11 right view",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 11/Model_11_BeautyRender.png",
                alt: "Model 11 beauty render",
                fit: "cover",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 11/Model_11_Texture_Presentation.png",
                alt: "Model 11 texture presentation",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/Model 11/Model_11_Turnaround.png",
                alt: "Model 11 turnaround",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/GS_Weapons/TurnaroundAnim.mp4",
                alt: "Weapon turnaround animation",
                fit: "contain",
            },
        ],
    },
    // Qa Bottle
    {
        id: "qa-bottle",
        slug: "qa-bottle",
        title: "QA Bottle",
        category: "3d-art",
        year: 2025,
        date: "2025-04",
        thumbnail: "/Assets/Images/Projects/QaBottle/Render_01.png",
        heroImage: "/Assets/Images/Projects/QaBottle/Render_01.png",
        description: "Product visualisation practice project creating a digital version of a moisturiser bottle from reference images.",
        challenge: "Model, material, light, and render a product entirely in Blender with no external tools - producing client-ready renders.",
        solution: "Clean product renders achieving professional quality suitable for client delivery.",
        role: "Personal Practice",
        roleDetails: ["Modeling", "Materials", "Lighting", "Rendering"],
        tools: ["Blender", "PureRef"],
        timeline: "2 days",
        team: "Solo",
        featured: false,
        gallery: [
            {
                src: "/Assets/Images/Projects/QaBottle/Render_01.png",
                alt: "A red rectangular bottle of Q+A Hyaluronic Acid Post-Shower Moisturiser with a white pump, on a white background. The front of the bottle features a white label with black text including the brand name, product name, and description, mentioning it is Dermatologically Tested and has a Fresh Apple + Avocado Scent. The bottle is reflected in the white surface below.",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/QaBottle/Render_02.png",
                alt: "A red rectangular bottle of Q+A Hyaluronic Acid Post-Shower Moisturiser with a white pump, on a white background. The front of the bottle features a white label with black text including the brand name, product name, and description, mentioning it is Dermatologically Tested and has a Fresh Apple + Avocado Scent. The bottle is reflected in the white surface below.",
                fit: "contain",
            },
            {
                src: "/Assets/Images/Projects/QaBottle/QaReference.webp",
                alt: "A red rectangular bottle of Q+A Hyaluronic Acid Post-Shower Moisturiser with a white pump, on a white background. The front of the bottle features a white label with black text including the brand name, product name, and description, mentioning it is Dermatologically Tested and has a Fresh Apple + Avocado Scent. The bottle is reflected in the white surface below.",
                fit: "contain",
            },
            
        ]
    },
];
