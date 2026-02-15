import React from "react";
import clsx from "clsx";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  spacing?: "default" | "large" | "small";
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  spacing = "default",
  id,
}) => {
  const spacingClasses = {
    small: "py-12 md:py-16",
    default: "py-16 md:py-24 lg:py-32",
    large: "py-24 md:py-32 lg:py-40",
  };

  return (
    <section id={id} className={clsx(spacingClasses[spacing], className)}>
      {children}
    </section>
  );
};

export default Section;
