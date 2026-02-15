import React from "react";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "small" | "large";
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = "default",
}) => {
  const sizeClasses = {
    small: "max-w-4xl",
    default: "max-w-7xl",
    large: "max-w-[1400px]",
  };

  return (
    <div
      className={clsx(
        "w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
