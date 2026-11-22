/** Bold right arrow, replaces the thin "→" text glyph. Inherits text colour. */
export default function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={"inline-block h-[1.1em] w-[1.1em] shrink-0 " + className}
    >
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}
