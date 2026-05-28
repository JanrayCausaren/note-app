
import React from "react";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingSize = "xl" | "lg" | "md" | "sm" | "xs";

type Props = React.ComponentPropsWithoutRef<HeadingTag> & {
  as?: HeadingTag;
  size?: HeadingSize;
};

const sizeVariants: Record<HeadingSize, string> = {
  xl: "text-6xl",
  lg: "text-5xl",
  md: "text-4xl",
  sm: "text-3xl",
  xs: "text-2xl",
};

const Heading = ({
  as: Component = "h1",
  size = "md",
  className,
  children,
  ...props
}: Props) => {
  return (
    <Component
      className={cn(
        "font-display font-bold",
        sizeVariants[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;