import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (options?: {
  once?: boolean;
  margin?: `${number}px` | `${number}%`;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: (options?.margin ?? "-100px") as `${number}px`,
  });

  return { ref, isInView };
};

export default useScrollAnimation;
