import React from "react";
import { Container, Section, ScrollReveal } from "../components";
import { Link } from "react-router-dom";
import { projects } from "../data/Projects";
import { systemProjects } from "../data/SystemProjects";

const Sitemap: React.FC = () => {
  const allProjects = [...projects, ...systemProjects].sort((a, b) => {
    const dateA = "date" in a ? (a as { date?: string }).date || "" : "";
    const dateB = "date" in b ? (b as { date?: string }).date || "" : "";
    return dateB.localeCompare(dateA);
  });

  const categoryLabels: Record<string, string> = {
    xr: "XR Experience",
    "asset-optimisation": "Asset Optimisation",
    archviz: "Archviz",
    "3d-art": "3D Art",
    "product-design": "Product Design",
    system: "System",
  };

  return (
    <>
      <Section spacing="large">
        <Container size="small">
          <ScrollReveal priority>
            <h1 className="text-h1 uppercase tracking-tight mb-6">
              Sitemap
            </h1>
          </ScrollReveal>
          <ScrollReveal priority delay={0.1}>
            <p className="text-body-lg text-muted mb-12">
              An accessible overview of all pages on this website. Use these
              links to navigate directly to any section.
            </p>
          </ScrollReveal>

          {/* Main Navigation */}
          <ScrollReveal>
            <nav aria-label="Main navigation">
              <h2 className="text-h3 uppercase tracking-tight mb-6">
                Main Pages
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-body-lg hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1 -mx-1 block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/work"
                    className="text-body-lg hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1 -mx-1 block"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/process"
                    className="text-body-lg hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1 -mx-1 block"
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-body-lg hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1 -mx-1 block"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-body-lg hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1 -mx-1 block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </ScrollReveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <ScrollReveal>
            <h2 className="text-h3 uppercase tracking-tight mb-8 text-center">
              All Projects
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => {
              const isSystem = "tagline" in project;
              const category = isSystem
                ? "system"
                : (project as { category: string }).category;

              return (
                <ScrollReveal key={project.id} delay={index * 0.05}>
                  <Link
                    to={`/work/${project.slug}`}
                    className="block p-6 border border-border hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                  >
                    <p className="text-caption uppercase tracking-wider text-accent mb-2">
                      {categoryLabels[category]} •{" "}
                      {"year" in project ? (project as { year: number }).year : ""}
                    </p>
                    <h3 className="text-h3 uppercase tracking-wider mb-2">
                      {project.title}
                    </h3>
                    {isSystem && "tagline" in project && (
                      <p className="text-body text-muted line-clamp-2">
                        {(project as { tagline: string }).tagline}
                      </p>
                    )}
                    {!isSystem && "description" in project && (
                      <p className="text-body text-muted line-clamp-2">
                        {(project as { description: string }).description}
                      </p>
                    )}
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section spacing="large">
        <Container size="small">
          <ScrollReveal>
            <h2 className="text-h3 uppercase tracking-tight mb-6">
              External Links
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/jake-m-boulton/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-lg hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1 -mx-1 block"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="https://almostmakessense.blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-lg hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1 -mx-1 block"
                >
                  Blog ↗
                </a>
              </li>
            </ul>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
};

export default Sitemap;