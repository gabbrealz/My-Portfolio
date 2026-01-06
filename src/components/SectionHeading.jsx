import { Children } from "react";

// This component expects either 1 or 2 children,
//   1st child - The heading itself
//   2nd child - The subtitle
export default function SectionHeading({ className, children }) {
  const [ title, subtitle ] = Children.toArray(children);

  return (
    <div className={`animate-entry-slideright w-full ${className}`}>
      <h2 className="whitespace-nowrap mb-2 text-xl md:text-2xl md:mb-4 lg:text-3xl">
        {title}
      </h2>
      {
        // If only 1 child was given (subtitle is undefined), then return nothing
        subtitle === undefined ? null :
          <p className="font-body text-highlight-1/80 text-xs sm:text-sm md:text-base lg:text-lg">
            {subtitle}
          </p>
      }
    </div>
  );
}