import React from "react";
import clsx from "clsx";

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  variant?: "rectangle" | "circle" | "text";
}

const Skeleton: React.FC<SkeletonProps> = ({
  className,
  height = "h-48",
  width = "w-full",
  variant = "rectangle",
}) => {
  return (
    <div
      className={clsx(
        "bg-muted/40 animate-pulse",
        variant === "circle" && "rounded-full",
        variant === "rectangle" && "rounded-md",
        variant === "text" && "rounded h-4",
        height,
        width,
        className,
      )}
    />
  );
};

export default Skeleton;
