import React from "react";
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
            <a
              href="https://linkedin.com/in/jakeboulton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://almostmakessense.blog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
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
