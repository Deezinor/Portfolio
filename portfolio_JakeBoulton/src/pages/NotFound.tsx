import React from "react";
import { Container, Section, ScrollReveal, Button } from "../components";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <Section spacing="large" className="flex items-center min-h-[60vh]">
      <Container className="text-center">
        <ScrollReveal>
          <h1 className="text-hero font-bold mb-4">404</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-h2 uppercase tracking-tight mb-4">
            Page Not Found
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-body-lg text-muted mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Link to="/">
            <Button variant="primary" size="lg">
              Back to Home
            </Button>
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <div className="mt-12 flex justify-center gap-8">
            <Link
              to="/work"
              className="text-sm uppercase tracking-wider text-muted hover:text-accent transition-colors"
            >
              Work
            </Link>
            <Link
              to="/process"
              className="text-sm uppercase tracking-wider text-muted hover:text-accent transition-colors"
            >
              Process
            </Link>
            <Link
              to="/about"
              className="text-sm uppercase tracking-wider text-muted hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm uppercase tracking-wider text-muted hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
};

export default NotFound;
