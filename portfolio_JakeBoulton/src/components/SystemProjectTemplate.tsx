import React from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import Container from "./ui/Container";
import Section from "./layout/Section";
import ScrollReveal from "./ui/ScrollReveal";
import { systemProjects, SystemProject } from "../data/SystemProjects";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const SystemProjectTemplate: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log("SystemProjectTemplate received slug:", slug);
  const project = systemProjects.find((p) => {
    return p.slug === slug;
  });
  console.log("Found project:", project);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-h2 mb-4">Project Not Found</h1>
          <Link to="/work" className="text-accent hover:underline">
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  const renderExampleContent = (example: SystemProject["examples"][0]) => {
    if (example.type === "code") {
      return (
        <pre className="bg-muted/10 border border-border p-4 overflow-x-auto text-sm font-mono">
          <code>{example.content}</code>
        </pre>
      );
    }
    if (example.type === "output") {
      return (
        <pre className="bg-foreground text-background p-4 overflow-x-auto text-sm font-mono">
          <code>{example.content}</code>
        </pre>
      );
    }
    return <p className="text-muted">{example.content}</p>;
  };

  return (
    <>
      {/* Hero Section */}
      <Section spacing="small">
        <Container>
          <ScrollReveal priority>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-muted hover:text-foreground mb-8 transition-colors"
            >
              <IoMdArrowBack />
              <span>Back to Work</span>
            </Link>
          </ScrollReveal>

          <ScrollReveal priority>
            <h1 className="text-h1 uppercase tracking-tight mb-4">
              {project.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal priority delay={0.1}>
            <p className="text-body-lg text-accent mb-8">{project.tagline}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div
              className={clsx(
                "w-full bg-muted/10 border border-border overflow-hidden",
                project.heroFit === "contain" ? "flex justify-center" : "",
              )}
              style={
                project.heroPosition
                  ? ({ objectPosition: project.heroPosition } as React.CSSProperties)
                  : undefined
              }
            >
              <img
                src={project.heroImage}
                alt={`${project.title} hero`}
                className={clsx(
                  "w-full h-auto max-h-[60vh] object-cover",
                  project.heroFit === "contain" && "object-contain h-auto max-h-[60vh]",
                )}
              />
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Overview */}
      <Section>
        <Container size="small">
          <ScrollReveal>
            <h2 className="text-h3 uppercase tracking-tight mb-6">
              Overview
            </h2>
            <p className="text-body-lg text-muted">{project.description}</p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* The Problem */}
      <Section className="bg-muted/5">
        <Container size="small">
          <ScrollReveal>
            <span className="text-caption text-accent uppercase tracking-wider">
              The Problem
            </span>
            <h2 className="text-h3 uppercase tracking-tight mt-2 mb-6">
              Why This System Exists
            </h2>
            <p className="text-body-lg text-muted whitespace-pre-line">
              {project.problem}
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* The Solution */}
      <Section>
        <Container size="small">
          <ScrollReveal>
            <span className="text-caption text-accent uppercase tracking-wider">
              The Solution
            </span>
            <h2 className="text-h3 uppercase tracking-tight mt-2 mb-6">
              How It Works
            </h2>
            <p className="text-body-lg text-muted whitespace-pre-line">
              {project.solution}
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Core Features */}
      <Section className="bg-muted/5">
        <Container>
          <ScrollReveal>
            <h2 className="text-h3 uppercase tracking-tight mb-12 text-center">
              Core Features
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => {
              return (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <div className="bg-background border border-border p-6 h-full">
                    <h3 className="text-body font-bold uppercase tracking-wider mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-body text-muted">{feature.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Real Examples */}
      <Section>
        <Container>
          <ScrollReveal>
            <h2 className="text-h3 uppercase tracking-tight mb-12 text-center">
              Real Output Examples
            </h2>
          </ScrollReveal>

          <div className="space-y-12">
            {project.examples.map((example, index) => {
              return (
                <ScrollReveal key={example.title} delay={index * 0.1}>
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-body font-bold uppercase tracking-wider mb-4">
                      {example.title}
                    </h3>
                    {renderExampleContent(example)}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Results */}
      <Section className="bg-muted/5">
        <Container size="small">
          <ScrollReveal>
            <h2 className="text-h3 uppercase tracking-tight mb-8 text-center">
              What This Delivers
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.results.map((result, index) => {
              return (
                <ScrollReveal key={result} delay={index * 0.05}>
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-body">{result}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Tools Used */}
      <Section>
        <Container>
          <ScrollReveal>
            <h3 className="text-caption uppercase tracking-wider text-muted mb-6 text-center">
              Tools Used
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {project.tools.map((tool) => {
                return (
                  <span
                    key={tool}
                    className="px-4 py-2 border border-border text-body"
                  >
                    {tool}
                  </span>
                );
              })}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Back to Work */}
      <Section spacing="large">
        <Container className="text-center">
          <ScrollReveal>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              <IoMdArrowBack />
              <span>View All Projects</span>
            </Link>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
};

export default SystemProjectTemplate;