import { Children } from "react";

export function Container({ className, children }) {
  return <div className={`relative bg-neutral-2/60 backdrop-blur-xs border-2 border-neutral-1 rounded-lg ${className}`}>{children}</div>;
}

export function BorderTitleContainer({ className, titleAlign = "left", titleClassName, children }) {
  const [ title, content ] = Children.toArray(children);

  return (
    <Container className={className}>
      <span className={`
        px-2 py-0.25 absolute top-0 -translate-y-1/2 font-body text-highlight-2 bg-neutral-2 border-2 border-neutral-1 rounded-md md:px-3
        ${
          titleAlign === "left" ? "left-0 translate-x-4" :
          titleAlign === "center" ? "left-1/2 -translate-x-1/2" :
          titleAlign === "right" ? "right-0 -translate-x-4" : "left-0 translate-x-4"
        }
        ${titleClassName}
      `}>
        {title}
      </span>
      {content}
    </Container>
  );
}