import Split from "@/components/Split";
import Arrow from "@/components/Arrow";
import { PLAY_URL } from "@/lib/site";
import { featured, rowA, rowB, PLAY_RATING, PLAY_REVIEW_COUNT, type Review } from "@/lib/reviews";

const AVATAR_TONES = [
  "bg-brand-100 text-brand-700",
  "bg-[#fdecd2] text-[#a8641f]",
  "bg-[#dff3ea] text-[#1f7a52]",
  "bg-[#fde2e7] text-[#a83250]",
  "bg-[#e3eefc] text-[#2a5ea8]",
];

function initials(name: string) {
  return name
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join("");
}

function Stars({ n, className = "" }: { n: number; className?: string }) {
  return (
    <span className={"flex gap-0.5 " + className} aria-label={`${n} out of 5 stars`} role="img">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className={"h-4 w-4 " + (i < n ? "text-amber" : "text-ink/15")} aria-hidden>
          <path
            fill="currentColor"
            d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z"
          />
        </svg>
      ))}
    </span>
  );
}

function PlayGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M3.6 1.8 13.8 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1Zm11.6 11.6 2.6 2.6-11.5 6.6 8.9-9.2Zm3.9-3.4 2.4 1.4c.7.4.7 1.4 0 1.8l-2.4 1.4-2.9-2.3 2.9-2.3ZM6.3 1.4 17.8 8l-2.6 2.6-8.9-9.2Z" />
    </svg>
  );
}

function Card({ r, i }: { r: Review; i: number }) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col rounded-[24px] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(67,73,170,0.35)] sm:w-[380px] sm:p-7">
      <div className="flex items-center justify-between">
        <Stars n={r.stars} />
        {r.tag && (
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600">{r.tag}</span>
        )}
      </div>
      <blockquote className="mt-5 flex-1 text-[16px] leading-relaxed text-ink/85">“{r.text}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
        <span
          className={
            "grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-semibold " +
            AVATAR_TONES[i % AVATAR_TONES.length]
          }
          aria-hidden
        >
          {initials(r.name)}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[15px] font-medium capitalize">{r.name}</span>
          <span className="block text-xs text-muted">{r.date}</span>
        </span>
        <span className="flex items-center gap-1.5 text-xs text-muted">
          <PlayGlyph className="h-3.5 w-3.5 text-brand-500" />
          Google Play
        </span>
      </figcaption>
    </figure>
  );
}

function Row({ items, reverse = false, offset = 0 }: { items: Review[]; reverse?: boolean; offset?: number }) {
  return (
    <div className="marquee edge-fade-soft overflow-hidden py-2">
      <div className={"marquee-track " +(reverse ? "marquee-reverse" : "")} style={{ animationDuration: "70s" }}>
        {[0, 1].map((k) => (
          <div key={k} className="flex gap-4 pr-4" aria-hidden={k === 1 || undefined}>
            {items.map((r, i) => (
              <Card key={r.name} r={r} i={i + offset} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
          <Split text={"Learners say it\n*better than we can.*"} className="display text-[13vw] md:text-[88px]" />
          <p data-reveal className="max-w-md text-muted md:justify-self-end">
            Real words from real reviews on Google Play, from people who started out nervous and kept on talking.
          </p>
        </div>

        {/* Featured story + rating */}
        <div className="mt-16 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <figure
            data-clip
            className="brand-gradient relative flex min-h-[420px] min-w-0 flex-col justify-between overflow-hidden rounded-[24px] p-6 text-white sm:p-8 md:p-12"
          >
            <span
              aria-hidden
              className="display pointer-events-none absolute -right-6 -top-16 select-none text-[320px] leading-none text-white/10"
            >
              ”
            </span>
            <div className="relative flex items-center gap-3">
              <Stars n={featured.stars} />
              <span className="text-sm text-white/60">From “not a single word” to real conversations</span>
            </div>
            <blockquote className="display relative mt-10 max-w-3xl text-[28px] leading-[1.2] md:text-[42px]">
              “{featured.text}”
            </blockquote>
            <figcaption className="relative mt-10 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15 text-base font-semibold backdrop-blur">
                {initials(featured.name)}
              </span>
              <span>
                <span className="block font-medium">{featured.name}</span>
                <span className="block text-sm text-white/60">Google Play review · {featured.date}</span>
              </span>
            </figcaption>
          </figure>

          <div data-reveal data-delay="0.1" className="flex min-w-0 flex-col rounded-[24px] bg-white p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 text-muted">
              <PlayGlyph className="h-4 w-4 text-brand-500" />
              Google Play rating
            </div>
            <p className="display mt-4 text-[88px] min-[400px]:text-[110px]">
              <span data-count={PLAY_RATING} data-decimals="1">{PLAY_RATING}</span>
              <span className="text-amber">★</span>
            </p>
            <p className="text-muted">from {PLAY_REVIEW_COUNT} reviews</p>
            <div className="my-8 h-px bg-ink/10" />
            <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
              <div className="flex -space-x-2">
                {[...rowA, ...rowB].slice(0, 5).map((r, i) => (
                  <span
                    key={r.name}
                    className={
                      "grid h-10 w-10 place-items-center rounded-full text-xs font-semibold ring-2 ring-white " +
                      AVATAR_TONES[i % AVATAR_TONES.length]
                    }
                    aria-hidden
                  >
                    {initials(r.name)}
                  </span>
                ))}
              </div>
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Read"
                className="group inline-flex items-center gap-2 whitespace-nowrap py-2 text-[15px] font-medium text-brand-600"
              >
                Read all reviews
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling walls of reviews */}
      <div className="mt-4 grid gap-4" aria-label="Google Play reviews of PeerUp">
        <Row items={rowA} />
        <Row items={rowB} reverse offset={2} />
      </div>
    </section>
  );
}
