import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center py-4 border-t border-border mt-auto text-sm text-muted">
      Designed and Coded by Jake Boulton.
      <br />© {new Date().getFullYear()} . All rights reserved.
    </footer>
  );
};

export default Footer;
