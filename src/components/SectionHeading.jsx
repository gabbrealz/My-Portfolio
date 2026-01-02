export default function SectionHeading({ heading = "left", className, children }) {
  return <h2 className={`
      whitespace-nowrap w-full text-xl md:text-2xl lg:text-3xl
      ${heading === "center" ? "sm:text-center" : heading === "right" ? "text-right" : ""}
      ${className}
    `}>
      {children}
    </h2>;
}