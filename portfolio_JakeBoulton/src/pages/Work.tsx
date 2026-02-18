import React, { useState, useMemo } from "react";
import { Container, Section, ScrollReveal, Card } from "../components";
import { Link } from "react-router-dom";
import { projects, Project } from "../data/Projects";
import { systemProjects } from "../data/SystemProjects";

const filters = [
  { key: "all", label: "All" },
  { key: "system", label: "Systems" },
  { key: "xr", label: "XR Experiences" },
  { key: "asset-optimisation", label: "Asset Optimisation" },
  { key: "archviz", label: "Archviz" },
  { key: "3d-art", label: "3D Art" },
  { key: "product-design", label: "Product Design" },
];

const categoryLabels: Record<string, string> = {
  system: "System",
  xr: "XR Experience",
  "asset-optimisation": "Asset Optimisation",
  archviz: "Archviz",
  "3d-art": "3D Art",
  "product-design": "Product Design",
};

// Define heights for masonry items (in pixels, will be converted to aspect ratios)
const projectLayouts = [
  { height: "large", aspect: "aspect-[4/5]" }, // Large - taller
  { height: "small", aspect: "aspect-video" }, // Small - standard video
  { height: "small", aspect: "aspect-video" }, // Small
  { height: "wide", aspect: "aspect-[21/9]" }, // Wide - panoramic
  { height: "tall", aspect: "aspect-[3/5]" }, // Tall - very tall
  { height: "small", aspect: "aspect-video" }, // Small
  { height: "large", aspect: "aspect-[4/5]" }, // Large
  { height: "small", aspect: "aspect-video" }, // Small
];

const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    let result;
    if (activeFilter === "all") {
      result = [...projects, ...systemProjects];
    } else if (activeFilter === "system") {
      result = systemProjects;
    } else {
      result = projects.filter((p) => {
        return p.category === activeFilter;
      });
    }

    return result.sort((a, b) => {
      const dateA = "date" in a ? (a as { date?: string }).date || "" : "";
      const dateB = "date" in b ? (b as { date?: string }).date || "" : "";
      return dateB.localeCompare(dateA);
    });
  }, [activeFilter]);

  return (
    <>
      <Section spacing="large">
        <Container>
          {/* Priority: Load immediately, no scroll animation */}
          <ScrollReveal priority>
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
          {/* Filter Tabs - Priority */}
          <ScrollReveal priority>
            <div className="flex flex-wrap gap-4 mb-12">
              {filters.map((filter) => {
                return (
                  <button
                    key={filter.key}
                    onClick={() => {
                      return setActiveFilter(filter.key);
                    }}
                    className={`text-sm uppercase tracking-wider px-4 py-2 border transition-colors duration-200 ${
                      activeFilter === filter.key
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-muted hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Masonry Grid */}
          <div
            className="columns-1 md:columns-2 lg:columns-3 gap-6"
            style={{ columnFill: "balance" }}
          >
            {filteredProjects.map((project, index) => {
              const layout = projectLayouts[index % projectLayouts.length];
              const isPriority = index < 3;
              const projectIds = projects.map((p) => {
                return p.id;
              });
              const isSystemProject = !projectIds.includes(project.id);

              return (
                <ScrollReveal
                  key={project.id}
                  priority={isPriority}
                  delay={isPriority ? 0 : 0.05}
                  className="break-inside-avoid mb-6"
                >
                  <Link
                    to={`/work/${project.slug}`}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                  >
                    <Card className="overflow-hidden" hover={true}>
                      <div className={`relative ${layout.aspect} bg-muted/30`}>
                        {project.thumbnail ? (
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            className={`absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                              project.thumbnailFit === "contain"
                                ? "object-contain"
                                : "object-cover"
                            }`}
                            loading={isPriority ? "eager" : "lazy"}
                            decoding={isPriority ? "sync" : "async"}
                            style={{
                              objectPosition:
                                project.thumbnailPosition || "center center",
                            }}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                            <span className="text-muted">{project.title}</span>
                          </div>
                        )}
                      </div>
                      <div className="p-4 border-t border-border">
                        <p className="text-caption uppercase tracking-wider text-muted mb-1">
                          {isSystemProject
                            ? "System"
                            : categoryLabels[(project as Project).category]}
                          {" • "}
                          {isSystemProject
                            ? (project as { date?: string }).date?.slice(0, 4) || "2026"
                            : (project as Project).year}
                        </p>
                        <h3 className="text-h3 uppercase tracking-wider">
                          {project.title}
                        </h3>
                        {"tagline" in project && project.tagline && (
                          <p className="text-sm text-muted mt-1 line-clamp-2">
                            {project.tagline}
                          </p>
                        )}
                      </div>
                    </Card>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-body text-muted">
                No projects found in this category.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
};

export default Work;
