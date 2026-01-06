import { Children } from "react";

// This is just a styled component created for consistency and to easily change styling of containers scattered in various sections
export function Container({ className, children }) {
  return <div className={`bg-neutral-2/60 backdrop-blur-xs border-2 border-neutral-1 rounded-lg hover:bg-neutral-2 transition-colors duration-150 ${className}`}>{children}</div>;
}

// Similar to the Container component, except it has a title aligned along the border.
//    The titleAlign prop specifies if the title should be aligned to the left, center, or right of the container.
//    The titleClassname prop specifies additional utility classes for the title only
export function BorderTitleContainer({ className, titleAlign = "left", titleClassName, children }) {
  const [ title, content ] = Children.toArray(children);

  return (
    <Container className={`relative ${className}`}>
      <span className={`
        px-2 py-0.25 absolute top-0 -translate-y-1/2 font-body text-xs text-highlight-1 bg-neutral-2 border-2 border-neutral-1 rounded-md sm:text-sm md:px-3 md:text-base
        ${
          titleAlign === "right" ? "right-0 -translate-x-4" :
          titleAlign === "center" ? "left-1/2 -translate-x-1/2" : "left-0 translate-x-4"
        }
        ${titleClassName}
      `}>
        {title}
      </span>
      {content}
    </Container>
  );
}