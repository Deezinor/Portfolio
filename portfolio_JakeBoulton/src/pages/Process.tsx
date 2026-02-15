import React from "react";
import { Container, Section, ScrollReveal, Button } from "../components";
import { Link } from "react-router-dom";

const pillars = [
  {
    number: "01",
    title: "Asset Optimisation",
    description:
      "From complex CAD models to real-time ready assets. My workflow ensures high-fidelity visuals that perform excellently in XR environments.",
    steps: [
      "Import & Analysis",
      "Mesh Decimation",
      "Retopology",
      "UV Mapping",
      "Texturing",
      "Export & Test",
    ],
    tools: ["Blender", "PiXYZ", "Substance Painter"],
  },
  {
    number: "02",
    title: "Experience Design",
    description:
      "User-centered XR design focused on accessibility and immersion. Creating intuitive interactions that feel natural in virtual spaces.",
    steps: [
      "User Research",
      "Prototyping",
      "Testing",
      "Iteration",
      "Deployment",
    ],
    tools: ["Unity", "Unreal Engine", "Meta Quest", "WebXR"],
  },
  {
    number: "03",
    title: "AI Workflow Optimisation",
    description:
      "Building custom AI systems to accelerate development and improve efficiency in 3D pipelines.",
    steps: [
      "Workflow Analysis",
      "AI Integration",
      "Automation",
      "Testing",
      "Documentation",
    ],
    tools: ["opencode", "Custom Scripts", "Terminal Workflows"],
  },
];

const tools = [
  { category: "3D & Assets", items: ["Blender", "PiXYZ", "Maya", "Substance"] },
  {
    category: "XR & Dev",
    items: ["Unity", "Unreal", "React Three Fiber", "WebXR"],
  },
  { category: "AI & Automation", items: ["opencode", "Custom Scripts"] },
  { category: "Code", items: ["TypeScript", "React", "Tailwind"] },
];

const Process: React.FC = () => {
  return (
    <>
      <Section spacing="large">
        <Container size="small">
          <ScrollReveal>
            <h1 className="text-h1 uppercase tracking-tight mb-6">
              How I Work
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body-lg text-muted">
              My approach combines technical expertise with creative
              problem-solving to deliver optimised 3D assets and immersive
              experiences.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Pillars */}
      {pillars.map((pillar, index) => (
        <Section
          key={pillar.number}
          className={index % 2 === 1 ? "bg-muted/5" : ""}
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <ScrollReveal>
                <div>
                  <span className="text-caption text-accent uppercase tracking-wider">
                    {pillar.number}
                  </span>
                  <h2 className="text-h2 uppercase tracking-tight mt-2 mb-6">
                    {pillar.title}
                  </h2>
                  <p className="text-body-lg text-muted mb-8">
                    {pillar.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-caption uppercase tracking-wider text-muted mb-4">
                      Workflow
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {pillar.steps.map((step, i) => (
                        <span key={step} className="text-sm text-foreground">
                          {step}
                          {i < pillar.steps.length - 1 && (
                            <span className="text-muted mx-2">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-caption uppercase tracking-wider text-muted mb-4">
                      Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {pillar.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 border border-border text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="aspect-video bg-muted/20 border border-border flex items-center justify-center">
                  <span className="text-muted">{pillar.title} Diagram</span>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      ))}

      {/* Tools Stack */}
      <Section>
        <Container>
          <ScrollReveal>
            <h2 className="text-h2 uppercase tracking-tight mb-12">
              Tools Stack
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((category, index) => (
              <ScrollReveal key={category.category} delay={index * 0.1}>
                <div className="border-t border-border pt-6">
                  <h3 className="text-caption uppercase tracking-wider text-muted mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((tool) => (
                      <li key={tool} className="text-body">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="large" className="bg-foreground text-background">
        <Container className="text-center">
          <ScrollReveal>
            <h2 className="text-h2 uppercase tracking-tight mb-6">
              Let's Discuss Your Project
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="border-background text-background hover:bg-background hover:text-foreground"
              >
                Get in Touch
              </Button>
            </Link>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
};

export default Process;
