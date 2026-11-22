import { Fragment } from "react";

/**
 * Splits text into words → characters so GSAP can animate each letter.
 * Wrap a word in *asterisks* to colour it as the accent.
 * "\n" forces a line break.
 *
 * mode:
 *  - "reveal" (default): each word rises out of a mask once when scrolled into view
 *  - "hero": same, but played by the intro timeline
 *  - "scrub": letters go from faint to solid as you scroll through (long statements)
 */
export default function Split({
  text,
  className = "",
  as: Tag = "h2",
  mode = "reveal",
  accent = "text-brand-500",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  mode?: "reveal" | "hero" | "scrub";
  accent?: string;
}) {
  const attr =
    mode === "hero" ? { "data-hero-split": "" } : mode === "scrub" ? { "data-scrub": "" } : { "data-split": "" };
  const lines = text.split("\n");
  return (
    <Tag className={className} {...attr} aria-label={text.replace(/\*/g, "").replace(/\n/g, " ")}>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {line.split(" ").filter(Boolean).map((w, wi) => {
            const isAccent = w.startsWith("*") && w.replace(/[.,!?]$/, "").endsWith("*");
            const word = w.replace(/\*/g, "");
            return (
              <Fragment key={wi}>
                <span className={"split-w " + (isAccent ? accent : "")} aria-hidden="true">
                  <span className="split-i">
                    {word.split("").map((c, ci) => (
                      <span key={ci} className="split-c">
                        {c}
                      </span>
                    ))}
                  </span>
                </span>{" "}
              </Fragment>
            );
          })}
          {li < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </Tag>
  );
}
