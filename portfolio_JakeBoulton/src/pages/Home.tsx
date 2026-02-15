import React from "react";
import { Container, Section, ScrollReveal, Button } from "../components";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="large" className="flex items-center min-h-[80vh]">
        <Container>
          <ScrollReveal>
            <h1 className="text-hero font-semibold uppercase tracking-tight max-w-5xl mb-8">
              I turn complex CAD and 3D models into XR-ready assets
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body-lg text-muted max-w-2xl mb-12">
              High-fidelity visuals that run in real time. I also build AI
              systems that make 3D development faster and smarter.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link to="/work">
              <Button variant="primary" size="lg">
                View Work →
              </Button>
            </Link>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Introduction Section */}
      <Section>
        <Container size="small">
          <ScrollReveal>
            <p className="text-h3 font-light mb-16">
              I'm an XR Technical Artist specializing in asset optimisation,
              experience design, and AI workflow efficiency.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <ScrollReveal delay={0.1}>
              <div className="border-t border-border pt-6">
                <h3 className="text-h3 uppercase tracking-wider mb-4">
                  Asset Optimisation
                </h3>
                <p className="text-body text-muted">
                  Mesh decimation, retopology, and optimization for real-time
                  rendering.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="border-t border-border pt-6">
                <h3 className="text-h3 uppercase tracking-wider mb-4">
                  Experience Design
                </h3>
                <p className="text-body text-muted">
                  XR/VR applications with user-centered design and
                  accessibility.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="border-t border-border pt-6">
                <h3 className="text-h3 uppercase tracking-wider mb-4">
                  AI Workflow
                </h3>
                <p className="text-body text-muted">
                  Custom AI systems to accelerate development and improve
                  efficiency.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Featured Work Section */}
      <Section className="bg-muted/5">
        <Container>
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-h2 uppercase tracking-wider">
                Featured Work
              </h2>
              <Link
                to="/work"
                className="text-sm uppercase tracking-wider hover:text-accent transition-colors"
              >
                View All →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placeholder for featured projects */}
            <ScrollReveal delay={0.1}>
              <div className="aspect-video bg-muted/20 border border-border flex items-center justify-center">
                <span className="text-muted">Project 1</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="aspect-video bg-muted/20 border border-border flex items-center justify-center">
                <span className="text-muted">Project 2</span>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Skills Stack Section */}
      <Section>
        <Container>
          <ScrollReveal>
            <h2 className="text-h2 uppercase tracking-wider mb-12">
              Tools & Technologies
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-4">
              {[
                "Blender",
                "PiXYZ",
                "Unity",
                "Unreal Engine",
                "React Three Fiber",
                "opencode",
                "TypeScript",
                "Tailwind",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 border border-border text-sm uppercase tracking-wider text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="large" className="bg-foreground text-background">
        <Container className="text-center">
          <ScrollReveal>
            <h2 className="text-h1 uppercase tracking-tight mb-6">
              Let's Work Together
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body-lg mb-8 max-w-xl mx-auto opacity-80">
              Have a project in mind? I'd love to hear about it.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
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

export default Home;
