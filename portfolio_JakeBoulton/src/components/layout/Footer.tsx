import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12 border-t border-border">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {currentYear} Jake Boulton. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/sitemap"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200 focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1 -mx-1"
            >
              Sitemap
            </Link>
            <a
              href="https://www.linkedin.com/in/jake-m-boulton/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200 focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1 -mx-1"
            >
              LinkedIn
            </a>
            <a
              href="https://almostmakessense.blog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200 focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1 -mx-1"
            >
              Blog →
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
