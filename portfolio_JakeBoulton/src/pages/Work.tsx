import React from "react";
import { Container, Section, ScrollReveal, Card } from "../components";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "BeatBox",
    category: "XR Experience",
    year: "2024",
    size: "large",
  },
  {
    id: 2,
    title: "Habibi",
    category: "XR Experience",
    year: "2024",
    size: "small",
  },
  {
    id: 3,
    title: "Midnight at the Pagoda",
    category: "XR Experience",
    year: "2023",
    size: "small",
  },
  {
    id: 4,
    title: "Altilium",
    category: "Product Design",
    year: "2023",
    size: "wide",
  },
  {
    id: 5,
    title: "Caspian House",
    category: "Archviz",
    year: "2023",
    size: "tall",
  },
  { id: 6, title: "Mon58", category: "Archviz", year: "2023", size: "small" },
  {
    id: 7,
    title: "GS Weapons",
    category: "3D Art",
    year: "2023",
    size: "large",
  },
  {
    id: 8,
    title: "Savernake Knife",
    category: "3D Art",
    year: "2023",
    size: "small",
  },
];

const Work: React.FC = () => {
  return (
    <>
      <Section spacing="large">
        <Container>
          <ScrollReveal>
            <h1 className="text-h1 uppercase tracking-tight mb-4">
              Selected Work
            </h1>
            <p className="text-body-lg text-muted max-w-2xl">
              A collection of XR experiences, asset optimisation projects, and
              3D visualizations.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      <Section spacing="small">
        <Container>
          {/* Filter Tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-4 mb-12">
              {[
                "All",
                "XR Experiences",
                "Asset Optimisation",
                "Archviz",
                "3D Art",
              ].map((filter, index) => (
                <button
                  key={filter}
                  className={`text-sm uppercase tracking-wider px-4 py-2 border transition-colors duration-200 ${
                    index === 0
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const sizeClasses = {
                large: "md:col-span-2 md:row-span-2",
                small: "md:col-span-1 md:row-span-1",
                wide: "md:col-span-2 md:row-span-1",
                tall: "md:col-span-1 md:row-span-2",
              };

              const aspectClasses = {
                large: "aspect-square",
                small: "aspect-video",
                wide: "aspect-video",
                tall: "aspect-[3/4]",
              };

              return (
                <ScrollReveal key={project.id} delay={index * 0.05}>
                  <Link
                    to={`/work/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <Card
                      className={
                        sizeClasses[project.size as keyof typeof sizeClasses]
                      }
                    >
                      <div
                        className={`relative ${aspectClasses[project.size as keyof typeof aspectClasses]} bg-muted/20`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-muted">{project.title}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                          <p className="text-caption uppercase tracking-wider text-muted mb-1">
                            {project.category} • {project.year}
                          </p>
                          <h3 className="text-h3 uppercase tracking-wider">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Work;
