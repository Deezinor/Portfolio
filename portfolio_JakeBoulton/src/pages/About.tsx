import React from "react";
import {Container, Section, ScrollReveal} from "../components";

const experience = [
    {
        period: "2023 - Present",
        title: "Independent XR Technical Artist",
        description:
            "Asset creation and optimisation, XR experience design, AI workflow development",
    },
    {
        period: "2023 - 2024",
        title: "VR & AR Master's Student",
        description: "VR/AR application development, 3D asset creation, and User-Experience Design",
    },
    {
        period: "2020 - 2023",
        title: "Research & Development Coordinator",
        description: "Workflow & Systems Optimisation, Product Design, Project Development",
    },
];

const skills = [
    {category: "3D Assets", level: 95},
    {category: "XR Development", level: 90},
    {category: "AI & Automation", level: 85},
    {category: "Web Development", level: 80},
    {category: "Design", level: 90},
];

/*const education = [
    {name: "Felsted School", type: "GCSEs and A-Levels"},
    {name: "UWE", type: "Bachelors Degree"},
    {name: "Goldsmiths, UoL", type: "Maters Degree"}
];*/

const About: React.FC = () => {
    return (
        <>
            <Section spacing="large">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        <ScrollReveal>
                            <div
                                className="aspect-[3/4] bg-muted/20 border border-border flex items-center justify-center">
                                <img className="object-cover" src="/Assets/Images/Jake_Boulton.JPG" alt="Profile Photo"/>
                            </div>
                        </ScrollReveal>

                        <div>
                            <ScrollReveal>
                                <h1 className="text-h1 uppercase tracking-tight mb-6">
                                    Hello, I'm Jake
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <p className="text-body-lg text-muted mb-6">
                                    XR Technical Artist based just outside of London, UK. I specialize in
                                    turning complex 3D models into optimised, real-time assets for
                                    XR experiences.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2}>
                                <p className="text-body text-muted mb-6">
                                    My journey started with traditional 3D modeling and Product Design, which quickly
                                    evolved into technical artistry as I discovered the intersection of high-fidelity
                                    visuals and real-time performance. Today, I help teams bridge the gap between
                                    complex CAD models and performant XR applications.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3}>
                                <p className="text-body text-muted">
                                    When I'm not optimising meshes or building VR experiences,
                                    you'll find me experimenting with AI workflows, sharing my
                                    learnings on my blog, and making hand-forged chef knives.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Experience */}
            <Section className="bg-muted/5">
                <Container size="small">
                    <ScrollReveal>
                        <h2 className="text-h2 uppercase tracking-tight mb-12">
                            Experience
                        </h2>
                    </ScrollReveal>

                    <div className="space-y-8">
                        {experience.map((item, index) => (
                            <ScrollReveal key={item.period} delay={index * 0.1}>
                                <div className="border-t border-border pt-6">
                  <span className="text-caption text-muted uppercase tracking-wider">
                    {item.period}
                  </span>
                                    <h3 className="text-h3 uppercase tracking-wider mt-2 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-body text-muted">{item.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Skills */}
            <Section>
                <Container size="small">
                    <ScrollReveal>
                        <h2 className="text-h2 uppercase tracking-tight mb-12">Skills</h2>
                    </ScrollReveal>

                    <div className="space-y-6">
                        {skills.map((skill, index) => (
                            <ScrollReveal key={skill.category} delay={index * 0.1}>
                                <div>
                                    <div className="flex justify-between mb-2">
                    <span className="text-body uppercase tracking-wider">
                      {skill.category}
                    </span>
                                        <span className="text-caption text-muted">
                      {skill.level}%
                    </span>
                                    </div>
                                    <div className="h-1 bg-border">
                                        <div
                                            className="h-full bg-accent transition-all duration-1000"
                                            style={{width: `${skill.level}%`}}
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal delay={0.5}>
                        <div className="mt-12 pt-8 border-t border-border">
                            <h3 className="text-caption uppercase tracking-wider text-muted mb-4">
                                Technologies
                            </h3>
                            <p className="text-body text-muted">
                                Blender, PiXYZ, Unity, Unreal Engine, React Three Fiber, WebXR,
                                TypeScript, React, Tailwind CSS, OpenCode
                            </p>
                        </div>
                    </ScrollReveal>
                </Container>
            </Section>
        </>
    );
};

export default About;
