import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Section,
  ScrollReveal,
  Button,
  Lightbox,
} from "../components";
import { Link } from "react-router-dom";
import { projects } from "../data/Projects";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const project = projects.find((p) => {
    return p.slug === slug;
  });

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
  };

  if (!project) {
    return (
      <>
        <Section spacing="large" className="flex items-center min-h-[60vh]">
          <Container className="text-center">
            <ScrollReveal>
              <h1 className="text-hero font-bold mb-4">404</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-h2 uppercase tracking-tight mb-4">
                Project Not Found
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-body-lg text-muted mb-8">
                The project you&apos;re looking for doesn&apos;t exist or has
                been moved.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Link to="/work">
                <Button variant="primary" size="lg">
                  View All Work
                </Button>
              </Link>
            </ScrollReveal>
          </Container>
        </Section>
      </>
    );
  }

  const categoryLabels: Record<string, string> = {
    xr: "XR Experience",
    "asset-optimisation": "Asset Optimisation",
    archviz: "Archviz",
    "3d-art": "3D Art",
    "product-design": "Product Design",
  };

  const currentIndex = projects.findIndex((p) => {
    return p.slug === slug;
  });
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      {/* Hero - Load immediately */}
      <Section spacing="small" className="pt-8">
        <Container>
          <ScrollReveal priority>
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
          {/* Hero Image - Priority loading */}
          <ScrollReveal priority>
            <div
              className="aspect-video bg-muted/30 border border-border flex items-center justify-center mb-8 cursor-pointer overflow-hidden group"
              onClick={() => {
                return project.heroImage && openLightbox(project.heroImage);
              }}
            >
              {project.heroImage ? (
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                    project.heroFit === "contain"
                      ? "object-contain"
                      : "object-cover"
                  }`}
                  loading="eager"
                  decoding="sync"
                  style={{
                    objectPosition: project.heroPosition || "center center",
                  }}
                />
              ) : (
                <span className="text-muted">Project Hero Image</span>
              )}
            </div>
          </ScrollReveal>

          {/* Project Info - Priority */}
          <ScrollReveal priority>
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="text-caption uppercase tracking-wider text-muted">
                {categoryLabels[project.category]} • {project.year}
              </span>
            </div>
            <h1 className="text-hero uppercase tracking-tight mb-8">
              {project.title}
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
                  {project.description}
                </p>
              </ScrollReveal>

              {project.challenge && (
                <ScrollReveal delay={0.1}>
                  <h3 className="text-caption uppercase tracking-wider text-muted mb-2 mt-8">
                    Challenge
                  </h3>
                  <p className="text-body text-muted mb-6">
                    {project.challenge}
                  </p>
                </ScrollReveal>
              )}

              {project.solution && (
                <ScrollReveal delay={0.2}>
                  <h3 className="text-caption uppercase tracking-wider text-muted mb-2 mt-6">
                    Solution
                  </h3>
                  <p className="text-body text-muted">{project.solution}</p>
                </ScrollReveal>
              )}
            </div>

            <div>
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-caption uppercase tracking-wider text-muted mb-2">
                      Role
                    </h3>
                    <p className="text-body">{project.role}</p>
                    {project.roleDetails && project.roleDetails.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {project.roleDetails.map((detail, idx) => {
                          return (
                            <li key={idx} className="text-sm text-muted">
                              • {detail}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                  <div>
                    <h3 className="text-caption uppercase tracking-wider text-muted mb-2">
                      Tools
                    </h3>
                    <p className="text-body">{project.tools.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="text-caption uppercase tracking-wider text-muted mb-2">
                      Timeline
                    </h3>
                    <p className="text-body">{project.timeline}</p>
                  </div>
                  <div>
                    <h3 className="text-caption uppercase tracking-wider text-muted mb-2">
                      Team
                    </h3>
                    {Array.isArray(project.team) ? (
                      <ul className="space-y-1">
                        {project.team.map((member, idx) => {
                          return (
                            <li key={idx} className="text-sm text-muted">
                              • {member}
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <p className="text-body">{project.team}</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Media Gallery - Masonry Layout */}
      {project.gallery && project.gallery.length > 0 && (
        <Section>
          <Container>
            {/* Gallery Title - Priority */}
            <ScrollReveal priority>
              <h2 className="text-h3 uppercase tracking-wider mb-8">Gallery</h2>
            </ScrollReveal>

            <div
              className="columns-1 md:columns-2 lg:columns-3 gap-6"
              style={{ columnFill: "balance" }}
            >
              {project.gallery.map((media, index) => {
                const isVideo = media.src.match(/\.(mp4|webm|mov|mkv)$/i);
                const isPriority = index < 3; // First 3 images load immediately

                // Determine aspect ratio based on size property or default to natural
                const aspectClasses: Record<string, string> = {
                  small: "aspect-video",
                  medium: "aspect-[4/3]",
                  large: "aspect-[3/4]",
                  wide: "aspect-[21/9]",
                  tall: "aspect-[9/16]",
                };

                const aspectClass = media.size ? aspectClasses[media.size] : "";

                return (
                  <ScrollReveal
                    key={index}
                    priority={isPriority}
                    delay={isPriority ? 0 : 0.1}
                    className="break-inside-avoid mb-6"
                  >
                    <div
                      className={`bg-muted/30 border border-border overflow-hidden group hover:border-accent transition-colors ${
                        aspectClass || ""
                      }`}
                      onClick={() => {
                        return !isVideo && openLightbox(media.src);
                      }}
                    >
                      {isVideo ? (
                        <video
                          src={media.src}
                          controls
                          className="w-full h-full object-contain"
                          preload={isPriority ? "metadata" : "none"}
                          style={{
                            objectPosition: media.position || "center center",
                          }}
                        />
                      ) : (
                        <img
                          src={media.src}
                          alt={
                            media.alt || `${project.title} image ${index + 1}`
                          }
                          className={`w-full h-full transition-transform duration-500 group-hover:scale-105 cursor-pointer ${
                            media.fit === "contain" || !aspectClass
                              ? "object-contain"
                              : "object-cover"
                          }`}
                          loading={isPriority ? "eager" : "lazy"}
                          decoding={isPriority ? "sync" : "async"}
                          style={{
                            objectPosition: media.position || "center center",
                          }}
                        />
                      )}
                    </div>
                    {media.caption && (
                      <p className="text-sm text-muted mt-2 text-center">
                        {media.caption}
                      </p>
                    )}
                  </ScrollReveal>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* References & Concept Art */}
      {project.references && project.references.length > 0 && (
        <Section className="bg-muted/5">
          <Container size="small">
            <ScrollReveal>
              <h2 className="text-h3 uppercase tracking-tight mb-8">
                References & Concept Art
              </h2>
            </ScrollReveal>

            <div className="space-y-6">
              {project.references.map((ref, index) => {
                return (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="border-l-2 border-accent pl-6 py-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-caption uppercase tracking-wider text-accent">
                          {ref.type === "concept-art"
                            ? "Concept Art"
                            : ref.type === "inspiration"
                              ? "Inspiration"
                              : ref.type === "tutorial"
                                ? "Tutorial"
                                : ref.type === "documentation"
                                  ? "Documentation"
                                  : "Reference"}
                        </span>
                        {ref.author && (
                          <span className="text-caption text-muted">
                            by {ref.author}
                          </span>
                        )}
                      </div>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-h3 uppercase tracking-wider hover:text-accent transition-colors block mb-2"
                      >
                        {ref.title} →
                      </a>
                      {ref.description && (
                        <p className="text-body text-muted">
                          {ref.description}
                        </p>
                      )}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* Next/Prev Project Navigation */}
      <Section className="bg-muted/5">
        <Container>
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link to={`/work/${prevProject.slug}`}>
                <Button variant="ghost" size="lg">
                  ← {prevProject.title}
                </Button>
              </Link>
            ) : (
              <div />
            )}
            <Link to="/work">
              <Button variant="ghost" size="lg">
                View All Work
              </Button>
            </Link>
            {nextProject ? (
              <Link to={`/work/${nextProject.slug}`}>
                <Button variant="ghost" size="lg">
                  {nextProject.title} →
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </Container>
      </Section>

      {/* Lightbox */}
      <Lightbox isOpen={lightboxOpen} onClose={closeLightbox}>
        {lightboxImage && (
          <img
            src={lightboxImage}
            alt="Project image"
            className="max-w-full max-h-[85vh] object-contain"
          />
        )}
      </Lightbox>
    </>
  );
};

export default ProjectDetail;
