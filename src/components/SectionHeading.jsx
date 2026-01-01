export default function SectionHeading({ heading = "left", className, children }) {
  return (
    <div className={`
      w-full flex items-center gap-4 sm:gap-8
      ${heading === "right" ? "justify-end" : heading === "center" ? "sm:justify-center" : "" }
      ${className}
    `}>
      <span className={`w-1/2 h-0.25 bg-highlight-1 ${heading === "right" ? "" : heading === "center" ? "hidden sm:inline sm:w-1/4" : "hidden"}`}></span>
      <h2 className="whitespace-nowrap">{children}</h2>
      <span className={`w-1/2 h-0.25 bg-highlight-1 ${heading === "right" ? "hidden" : heading === "center" ? "sm:w-1/4" : ""}`}></span>
    </div>
  );
}