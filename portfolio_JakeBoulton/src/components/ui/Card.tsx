import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  onClick,
}) => {
  return (
    <div
      className={clsx(
        "bg-background border border-border overflow-hidden transition-all duration-400 ease-smooth",
        hover &&
          "hover:-translate-y-0.5 hover:border-muted/50 cursor-pointer group",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
