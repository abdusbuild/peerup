import Link from "next/link";
import Logo from "@/components/Logo";
import { CONTACT_EMAIL, type Policy } from "@/lib/policies";

const nav = [
  ["Privacy", "/privacy-policy"],
  ["Terms", "/terms-conditions"],
  ["Refunds", "/refund-policy"],
] as const;

/** Brand-coloured link, used for the contact email and in-text links. */
const linkClass =
  "font-medium text-brand-500 underline decoration-brand-300 underline-offset-4 transition-colors hover:text-brand-700 hover:decoration-brand-500";

function Text({ s }: { s: string }) {
  const parts = s.split("{email}");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part.split("**").map((seg, k) => (k % 2 ? <strong key={k} className="font-semibold text-ink">{seg}</strong> : seg))}
          {i < parts.length - 1 && (
            <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
              {CONTACT_EMAIL}
            </a>
          )}
        </span>
      ))}
    </>
  );
}

export default function PolicyPage({ policy }: { policy: Policy }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-[1100px] items-center justify-between px-5 md:px-8">
          <Link href="/" aria-label="PeerUp home">
            <Logo className="h-10 w-auto md:h-12" />
          </Link>
          <div className="flex items-center gap-5 text-[15px] text-ink/70 md:gap-8">
            {nav.map(([t, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={href === `/${policy.slug}` ? "page" : undefined}
                className="transition hover:text-brand-600 aria-[current=page]:font-medium aria-[current=page]:text-brand-500"
              >
                {t}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-[760px] px-5 pb-28 pt-16 md:px-8 md:pt-24">
        <h1 className="display text-[44px] md:text-[64px]">{policy.title}</h1>

        <div className="mt-12 grid gap-10 text-[17px] leading-[1.7] text-ink/80">
          {policy.blocks.map((b, i) => (
            <section key={i} className="grid gap-4">
              {b.h && <h2 className="display text-[26px] text-ink md:text-[30px]">{b.h}</h2>}
              {b.p?.map((p, j) => (
                <p key={j}>
                  <Text s={p} />
                </p>
              ))}
              {b.list &&
                (b.ordered ? (
                  <ol className="grid list-decimal gap-4 pl-6 marker:font-medium marker:text-brand-500">
                    {b.list.map((li, j) => (
                      <li key={j} className="pl-2">
                        <Text s={li} />
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="grid list-disc gap-4 pl-6 marker:text-brand-400">
                    {b.list.map((li, j) => (
                      <li key={j} className="pl-2">
                        <Text s={li} />
                      </li>
                    ))}
                  </ul>
                ))}
              {b.link && (
                <p>
                  {b.link.pre}{" "}
                  <Link href={b.link.href} className={linkClass}>
                    {b.link.text}
                  </Link>
                  .
                </p>
              )}
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-[1100px] flex-col justify-between gap-3 px-5 py-8 text-sm text-muted md:flex-row md:px-8">
          <p>© 2026 Peerup Learning Private Limited. All rights reserved.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
            {CONTACT_EMAIL}
          </a>
        </div>
      </footer>
    </>
  );
}
