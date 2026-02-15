import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium uppercase tracking-wider transition-all duration-300 ease-smooth";

  const variantClasses = {
    primary:
      "bg-foreground text-background border border-foreground hover:bg-transparent hover:text-foreground",
    secondary:
      "bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-background",
    ghost:
      "bg-transparent text-foreground border-transparent hover:bg-muted/10",
    accent:
      "bg-accent text-white border border-accent hover:bg-transparent hover:text-accent",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
