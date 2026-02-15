import React from "react";
import { useParams } from "react-router-dom";
import { Container, Section, ScrollReveal, Button } from "../components";
import { Link } from "react-router-dom";

// This is a skeleton - will be replaced with actual project data
const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // TODO: Fetch project data based on slug
  // For now, show placeholder

  return (
    <>
      {/* Hero */}
      <Section spacing="small" className="pt-8">
        <Container>
          <ScrollReveal>
            <Link
              to="/work"
              className="text-caption uppercase tracking-wider text-muted hover:text-accent transition-colors"
            >
              ← Back to Work
            </Link>
          </ScrollReveal>
        </Container>
      </Section>

      <Section spacing="small">
        <Container>
          <ScrollReveal>
            <div className="aspect-video bg-muted/20 border border-border flex items-center justify-center mb-8">
              <span className="text-muted">Project Hero Image</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="text-caption uppercase tracking-wider text-muted">
                XR Experience • 2024
              </span>
            </div>
            <h1 className="text-hero uppercase tracking-tight mb-8">
              {slug?.replace(/-/g, " ")}
            </h1>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Project Info */}
      <Section spacing="small">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-h3 uppercase tracking-wider mb-4">
                  Project Overview
                </h2>
                <p className="text-body-lg text-muted mb-6">
                  Project description will go here. This section explains the
                  challenge, the solution, and the outcome of the project.
                </p>
                <p className="text-body text-muted">
                  Additional details about the project process, technical
                  challenges, and key learnings.
                </p>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-caption uppercase tracking-wider text-muted mb-2">
                      Role
                    </h3>
                    <p className="text-body">Lead XR Designer</p>
                  </div>
                  <div>
                    <h3 className="text-caption uppercase tracking-wider text-muted mb-2">
                      Tools
                    </h3>
                    <p className="text-body">Unity, Blender, Oculus SDK</p>
                  </div>
                  <div>
                    <h3 className="text-caption uppercase tracking-wider text-muted mb-2">
                      Timeline
                    </h3>
                    <p className="text-body">6 months</p>
                  </div>
                  <div>
                    <h3 className="text-caption uppercase tracking-wider text-muted mb-2">
                      Team
                    </h3>
                    <p className="text-body">Solo project</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Media Gallery */}
      <Section>
        <Container>
          <ScrollReveal>
            <h2 className="text-h3 uppercase tracking-wider mb-8">Gallery</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.1}>
              <div className="aspect-video bg-muted/20 border border-border flex items-center justify-center">
                <span className="text-muted">Image 1</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="aspect-video bg-muted/20 border border-border flex items-center justify-center">
                <span className="text-muted">Image 2</span>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Next Project */}
      <Section className="bg-muted/5">
        <Container className="text-center">
          <ScrollReveal>
            <p className="text-caption uppercase tracking-wider text-muted mb-4">
              Next Project
            </p>
            <Link to="/work">
              <Button variant="ghost" size="lg">
                View All Work →
              </Button>
            </Link>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
};

export default ProjectDetail;
