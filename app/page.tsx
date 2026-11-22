import Motion from "@/components/Motion";
import Modes from "@/components/Modes";
import Words from "@/components/Words";
import CourseDemo from "@/components/CourseDemo";
import Testimonials from "@/components/Testimonials";
import Phone from "@/components/Phone";
import Arrow from "@/components/Arrow";
import Split from "@/components/Split";
import Logo, { LogoMark } from "@/components/Logo";
import { PLAY_URL, BUSINESS_URL } from "@/lib/site";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/peerup.english/",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/PeerUp-English-Speaking-App-61567960047912/",
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@peerup.english",
    icon: (
      <>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/peerup-learning",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

function PlayButton({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <a
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-magnetic
      data-cursor="Install"
      className={
        "group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full px-5 py-4 text-sm font-medium transition-colors min-[360px]:gap-3 min-[360px]:px-7 min-[360px]:text-[15px] " +
        (light ? "bg-brand-500 text-white hover:bg-brand-600 " : "bg-brand-600 text-white hover:bg-brand-700 ") +
        className
      }
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path fill="currentColor" d="M3.6 1.8 13.8 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1Zm11.6 11.6 2.6 2.6-11.5 6.6 8.9-9.2Zm3.9-3.4 2.4 1.4c.7.4.7 1.4 0 1.8l-2.4 1.4-2.9-2.3 2.9-2.3ZM6.3 1.4 17.8 8l-2.6 2.6-8.9-9.2Z" />
      </svg>
      Get it on Google Play
      <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

/** Rotating circular text badge, like the reference site's logo seal. */
function Seal() {
  const text = "PRACTICE · SPEAK · IMPROVE · REPEAT · ";
  return (
    <div className="relative h-28 w-28">
      <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <path id="seal" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
        </defs>
        <text fontSize="8.6" letterSpacing="1.6" fill="currentColor" fontFamily="Inter Variable, sans-serif">
          <textPath href="#seal">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-[30%] grid place-items-center rounded-full bg-white shadow-sm">
        <LogoMark className="h-[55%] w-auto translate-x-[4%]" />
      </span>
    </div>
  );
}

const faqs = [
  {
    q: "Is PeerUp free?",
    a: "Yes, you can download PeerUp and start practising for free. A Pro plan unlocks extras like your full progress report.",
  },
  {
    q: "I'm nervous about speaking. Do I have to call a stranger first?",
    a: "No. Many learners start with Miss Maya, the AI teacher, or with roleplay scenarios, then move to peer calls when they feel ready.",
  },
  {
    q: "What does the feedback cover?",
    a: "Grammar topics like tenses, prepositions and articles, plus vocabulary and pronunciation, so you know exactly what to work on next.",
  },
  {
    q: "Can I report or block someone on a call?",
    a: "Yes. You can report or block any member from inside the app, and reports go to PeerUp's moderation team.",
  },
  {
    q: "Is there a version for colleges or companies?",
    a: "Yes. PeerUp for Business builds custom speaking courses for teams, and colleges can join inter-college tournaments.",
  },
];

export default function Home() {
  return (
    <>
      <Motion />

      {/* ---------- Preloader ---------- */}
      <div data-preloader className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-paper text-ink">
        <div className="display flex overflow-hidden text-7xl md:text-9xl">
          {"PeerUp".split("").map((c, i) => (
            <span key={i} data-pre-letter className={"inline-block " + (i >= 4 ? "text-brand-500" : "")}>
              {c}
            </span>
          ))}
        </div>
        <div className="mt-8 h-1.5 w-48 overflow-hidden rounded-full bg-ink/10">
          <div data-pre-bar className="h-full w-full origin-left scale-x-0 bg-brand-500" />
        </div>
      </div>

      {/* ---------- Nav ---------- */}
      <header className="fixed inset-x-0 top-0 z-50 bg-paper/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-8">
          <a href="#top" aria-label="PeerUp home"><Logo className="h-8 w-auto min-[360px]:h-10 md:h-12" /></a>
          <div className="hidden items-center gap-7 text-[17px] font-semibold text-ink lg:flex xl:gap-9">
            <a href="#practice" className="transition hover:text-brand-600">Practice</a>
            <a href="#feedback" className="transition hover:text-brand-600">Feedback</a>
            <a href="#compete" className="transition hover:text-brand-600">Compete</a>
            <a href="#reviews" className="transition hover:text-brand-600">Reviews</a>
            <a href="#business" className="transition hover:text-brand-600">For Business</a>
            <a href="#faq" className="transition hover:text-brand-600">FAQ</a>
          </div>
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="shrink-0 whitespace-nowrap rounded-full bg-brand-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-600 min-[360px]:px-5 min-[360px]:text-[15px]"
          >
            Download app
          </a>
        </nav>
      </header>

      <main id="top">
        {/* ---------- Hero: inset rounded card ---------- */}
        <section className="px-3 pt-[76px] md:px-5">
          <div
            data-hero-card
            className="relative flex min-h-[calc(100svh-92px)] flex-col overflow-hidden rounded-[28px] bg-ink-2 text-white"
          >
            <div
              className="pointer-events-none absolute -right-[10%] top-[5%] h-[70vmax] w-[70vmax] rounded-full opacity-70 blur-[120px]"
              style={{ background: "radial-gradient(circle, #6266bc 0%, transparent 60%)" }}
              data-parallax="0.3"
            />
            <div
              className="pointer-events-none absolute -left-[15%] bottom-[-20%] h-[50vmax] w-[50vmax] rounded-full opacity-40 blur-[120px]"
              style={{ background: "radial-gradient(circle, #787bcb 0%, transparent 60%)" }}
            />

            <div className="relative flex items-start justify-end p-6 md:p-10">
              <div data-hero-fade className="hidden text-right text-sm text-white/55 md:block">
                <p>English speaking app</p>
                <p>Real people · AI teacher · Instant feedback</p>
              </div>
            </div>

            {/* phone */}
            <div className="pointer-events-none absolute right-[6%] top-[46%] hidden w-[min(280px,21vw)] -translate-y-1/2 lg:block">
              <div data-hero-phone>
                <div className="float-y">
                  <Phone src="/screens/peers.webp" alt="PeerUp app: practice with peers" priority className="w-full" />
                </div>
              </div>
              <div data-hero-chip className="absolute -left-20 top-[18%] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.15em] text-white/50">Grammar</p>
                <p className="text-base">Tenses <span className="text-emerald-300">↑ improving</span></p>
              </div>
              <div data-hero-chip className="absolute -left-12 bottom-[16%] rounded-2xl bg-white px-4 py-3 text-ink shadow-2xl">
                <p className="text-sm font-semibold">Call connected</p>
                <p className="text-xs text-ink/50">1:1 audio · 04:12</p>
              </div>
            </div>

            <div className="relative mt-auto p-6 md:p-10">
              <Split
                mode="hero"
                as="h1"
                accent="text-brand-300"
                text={"Speak English\nwith *confidence.*"}
                className="display max-w-[62%] text-[15vw] sm:text-[11vw] lg:text-[6.6vw] xl:text-[7rem] max-lg:max-w-none"
              />
              <div className="mt-10 flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
                <p data-hero-fade className="max-w-md text-[17px] leading-relaxed text-white/65">
                  Practice on live calls with real people and an AI teacher. Get instant feedback on grammar, vocabulary
                  and pronunciation, then fix your weak spots.
                </p>
                <div data-hero-fade>
                  <PlayButton light />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Approach statement ---------- */}
        <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-28 md:grid-cols-[280px_1fr] md:px-8 md:py-40">
          <div className="flex flex-col gap-8" data-reveal>
            <Seal />
            <p className="max-w-[240px] text-muted">Built for learners who want to speak English, not just study it.</p>
          </div>
          <Split
            as="p"
            mode="scrub"
            text="PeerUp is built on a simple idea: you learn to speak by speaking. Real calls with real people, an AI teacher who never sleeps, and feedback that tells you exactly what to fix next."
            className="display text-[34px] leading-[1.15] md:text-[52px] lg:text-[60px]"
          />
        </section>

        {/* ---------- Bento: proof ---------- */}
        <section className="mx-auto grid max-w-[1440px] gap-4 px-5 md:grid-cols-[1fr_2fr_1fr] md:px-8">
          <div data-reveal data-tilt className="flex flex-col rounded-[24px] bg-white p-8">
            <p className="display text-[88px] min-[400px]:text-[110px]">
              <span data-count="1">1</span>M<span className="text-ink/15">+</span>
            </p>
            <p className="text-muted">Downloads on Google Play</p>
            <div className="my-8 h-px bg-ink/10" />
            <p className="mt-auto text-[17px] leading-relaxed text-ink/80">
              Students, job seekers and professionals use PeerUp to get interview-ready and workplace-confident.
            </p>
          </div>

          <div data-reveal data-delay="0.1" className="brand-gradient relative min-h-[420px] overflow-hidden rounded-[24px] p-8 text-white">
            <p className="text-white/70">AI Teacher</p>
            <h3 className="display mt-3 max-w-xs text-5xl">Miss Maya, available 24×7</h3>
            <div className="absolute -bottom-48 right-4 w-[170px] rotate-[8deg] sm:-bottom-28 sm:right-8 sm:w-[230px] md:w-[260px]" data-parallax="0.3">
              <Phone src="/screens/teacher.webp" alt="PeerUp app: AI teacher call" />
            </div>
            <div className="absolute -bottom-40 right-[300px] hidden w-[220px] -rotate-[6deg] opacity-90 lg:block" data-parallax="0.5">
              <Phone src="/screens/practice.webp" alt="PeerUp app: practice home" />
            </div>
          </div>

          <div data-reveal data-delay="0.2" data-tilt className="flex flex-col rounded-[24px] bg-white p-8">
            <p className="text-muted">Rated on Google Play</p>
            <p className="display mt-3 text-[88px] min-[400px]:text-[110px]">
              <span data-count="4.4" data-decimals="1">4.4</span>
              <span className="text-amber">★</span>
            </p>
            <div className="my-8 h-px bg-ink/10" />
            <p className="mt-auto text-[17px] leading-relaxed text-ink/80">
              Peers, an AI teacher, roleplays and lessons, all in one app.
            </p>
          </div>
        </section>

        {/* ---------- Big edge-faded marquee ---------- */}
        <section aria-label="What you can do on PeerUp" className="marquee edge-fade overflow-hidden py-24 md:py-32">
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <span key={k} className="display flex items-center whitespace-nowrap text-[18vw] md:text-[10vw]">
                Practice with peers <span className="mx-[3vw] text-brand-500">✦</span>
                Talk to Miss Maya <span className="mx-[3vw] text-brand-500">✦</span>
                Roleplay real life <span className="mx-[3vw] text-brand-500">✦</span>
                Get instant feedback <span className="mx-[3vw] text-brand-500">✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* ---------- Four modes (dark card, pinned) ---------- */}
        <Modes />

        {/* ---------- Feedback ---------- */}
        <section id="feedback" className="mx-auto max-w-[1440px] px-5 py-28 md:px-8 md:py-40">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <Split text={"Know *exactly* what\nto fix next."} className="display text-[13vw] md:text-[88px]" />
            </div>
            <p data-reveal className="max-w-md text-muted md:justify-self-end">
              After every call, PeerUp scores your English and breaks it down by topic. No vague “good job.” Just a clear
              map of where you’re losing points.
            </p>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
            <div data-reveal className="min-w-0 rounded-[24px] bg-white p-6 sm:p-8 md:p-10">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted">Your English score</p>
                  <p className="display mt-2 text-[60px] sm:text-[96px] md:text-[120px]">
                    <span data-count="1184">1184</span>
                    <span className="text-[26px] text-ink/20 sm:text-[40px]">/1520</span>
                  </p>
                </div>
                <span className="text-sm text-muted">Sample report</span>
              </div>
              <div className="mt-6 grid gap-6">
                {[
                  { k: "Grammar", v: 792, max: 1020 },
                  { k: "Vocabulary", v: 392, max: 500 },
                ].map((r) => (
                  <div key={r.k}>
                    <div className="mb-2 flex justify-between text-[15px]">
                      <span>{r.k}</span>
                      <span className="text-muted">
                        <span data-count={r.v}>{r.v}</span> / {r.max}
                      </span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-brand-100">
                      <div data-bar className="brand-gradient h-full rounded-full" style={{ width: `${(r.v / r.max) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid min-w-0 gap-4">
              <div data-reveal data-delay="0.1" className="rounded-[24px] bg-brand-600 p-8 text-white">
                <p className="text-white/75">Topics we track</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {["Tenses", "Prepositions", "Articles", "Conjunctions", "Nouns", "Agreement", "Vocabulary", "Pronunciation"].map((t) => (
                    <li key={t} className="rounded-full border border-white/30 px-3.5 py-1.5 text-sm">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div data-reveal data-delay="0.2" className="grid grid-cols-3 gap-4">
                {[
                  ["+18", "Tenses"],
                  ["+9", "Articles"],
                  ["+24", "Fluency"],
                ].map(([v, k]) => (
                  <div key={k} data-tilt className="min-w-0 rounded-[24px] bg-white p-4 sm:p-5">
                    <p className="display text-3xl text-brand-500 sm:text-4xl md:text-5xl">{v}</p>
                    <p className="mt-2 text-sm text-muted">{k}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Words journey (pinned, dark card) ---------- */}
        <Words />

        {/* ---------- Compete ---------- */}
        <section id="compete" className="mx-auto max-w-[1440px] px-5 py-28 md:px-8 md:py-40">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <Split text={"Practice is better\nwith a *scoreboard.*"} className="display text-[13vw] md:text-[88px]" />
            </div>
            <p data-reveal className="max-w-md text-muted md:justify-self-end">
              Climb weekly leagues, keep your streak alive, and team up with classmates for inter-college tournaments
              with real prizes.
            </p>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <div data-clip className="brand-gradient relative min-h-[460px] overflow-hidden rounded-[24px] p-8 text-white md:p-12">
              <div className="relative z-10 max-w-sm">
                <h3 className="display text-5xl md:text-6xl">Inter-College Quizzathon</h3>
                <p className="mt-4 text-[17px] text-white/75">
                  Represent your college, compete in English quizzes and win cash prizes for your team.
                </p>
                <p className="display mt-10 text-7xl md:text-8xl">₹10,000</p>
                <p className="text-sm text-white/60">Prize pool · Registrations open</p>
              </div>
              <div className="absolute -bottom-24 right-8 hidden w-[240px] rotate-[-8deg] md:block" data-parallax="0.4">
                <div data-rise>
                  <Phone src="/screens/compete.webp" alt="PeerUp app: college tournaments" />
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div data-reveal data-tilt className="flex flex-col justify-between rounded-[24px] bg-white p-8">
                <span className="w-fit rounded-full px-3 py-1.5 text-sm font-medium" style={{ background: "#cd7f321f", color: "#a8641f" }}>
                  Bronze league
                </span>
                <div className="mt-10">
                  <h3 className="display text-4xl">Weekly leagues</h3>
                  <p className="mt-3 text-muted">Start in Bronze and climb. The top 5 advance every week. Two minutes of practice puts you on the board.</p>
                </div>
              </div>
              <div data-reveal data-delay="0.1" data-tilt className="flex items-center justify-between gap-6 rounded-[24px] brand-gradient p-8 text-white">
                <div>
                  <h3 className="display text-4xl">Daily streaks</h3>
                  <p className="mt-3 text-white/80">Small, daily speaking practice adds up fast.</p>
                </div>
                <span className="text-6xl" aria-hidden="true">🔥</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Testimonials (real Google Play reviews) ---------- */}
        <Testimonials />

        {/* ---------- Business (dark card) ---------- */}
        <section id="business" className="px-3 md:px-5">
          <div data-zoom className="relative overflow-hidden rounded-[28px] bg-ink-2 px-5 py-24 text-white md:px-12 md:py-32">
            <div
              className="pointer-events-none absolute -left-40 top-0 h-[50vw] w-[50vw] rounded-full opacity-40 blur-[120px]"
              style={{ background: "radial-gradient(circle, #6266bc 0%, transparent 65%)" }}
            />
            <div className="relative mx-auto grid max-w-[1340px] items-center gap-16 lg:grid-cols-2">
              <div>
                <Split
                  accent="text-brand-300"
                  text="Custom English courses for your *team,* in seconds."
                  className="display text-[12vw] md:text-[72px]"
                />
                <p data-reveal className="mt-8 max-w-lg text-[17px] leading-relaxed text-white/60">
                  Describe a role, and PeerUp builds a speaking course around the conversations that job actually needs.
                  Built for sales teams, support desks, colleges and training partners.
                </p>
                <div className="mt-10" data-reveal>
                  <a
                    href={BUSINESS_URL}
                    data-magnetic
                    data-cursor="Talk"
                    className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 text-[15px] font-medium transition hover:bg-white hover:text-ink"
                  >
                    Talk to our team <Arrow />
                  </a>
                </div>
              </div>
              <div data-reveal>
                <CourseDemo />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section id="faq" className="mx-auto grid max-w-[1440px] gap-12 px-5 py-28 md:grid-cols-[1fr_1.4fr] md:px-8 md:py-40">
          <div>
            <Split text={"Questions,\n*answered.*"} className="display text-[13vw] md:text-[88px]" />
          </div>
          <div className="border-t border-ink/10">
            {faqs.map((f) => (
              <details key={f.q} data-reveal className="group border-b border-ink/10 py-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl md:text-2xl [&::-webkit-details-marker]:hidden">
                  <span className="display">{f.q}</span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/15 text-xl transition duration-300 group-open:rotate-45 group-open:border-brand-500 group-open:bg-brand-500 group-open:text-white">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ---------- Final CTA ---------- */}
        <section className="px-3 md:px-5">
          <div data-zoom className="relative overflow-hidden rounded-[28px] bg-white pt-24 md:pt-32">
            <div className="mx-auto max-w-5xl px-6 text-center">
              <Split text={"Your next conversation\nstarts *today.*"} className="display text-[11vw] md:text-[104px]" />
              <p data-reveal className="mx-auto mt-8 max-w-xl text-muted">
                Download PeerUp, choose your avatar and take your first call in under a minute.
              </p>
              <div data-reveal className="mt-10 flex justify-center">
                <PlayButton />
              </div>
            </div>
            <div className="relative mx-auto mt-20 flex h-[320px] max-w-5xl items-start justify-center gap-6 overflow-hidden md:h-[440px]">
              <div className="mt-24 w-[180px] -rotate-6 md:w-[230px]" data-parallax="0.25">
                <div data-rise data-delay="0.15">
                  <Phone src="/screens/avatar.webp" alt="PeerUp app: choose your avatar" />
                </div>
              </div>
              <div className="w-[200px] md:w-[260px]" data-parallax="0.1">
                <div data-rise>
                  <Phone src="/screens/login.webp" alt="PeerUp app: login" />
                </div>
              </div>
              <div className="mt-24 w-[180px] rotate-6 md:w-[230px]" data-parallax="0.25">
                <div data-rise data-delay="0.15">
                  <Phone src="/screens/league.webp" alt="PeerUp app: league" />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="mx-auto max-w-[1440px] px-5 pb-8 pt-24 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-10 w-auto" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted">
              The English speaking app where you practice with real people and AI, and actually get better.
            </p>
          </div>
          {[
            { h: "Product", l: [["Practice", "#practice"], ["Feedback", "#feedback"], ["Leagues", "#compete"], ["Download", PLAY_URL]] },
            { h: "Company", l: [["PeerUp for Business", "#business"], ["Privacy Policy", "/privacy-policy"], ["Terms & Conditions", "/terms-conditions"], ["Refund Policy", "/refund-policy"]] },
          ].map((col) => (
            <div key={col.h}>
              <p className="text-[15px] text-muted">{col.h}</p>
              <ul className="mt-5 grid gap-3 text-[15px]">
                {col.l.map(([t, href]) => (
                  <li key={t}>
                    <a href={href} className="transition hover:text-brand-600">{t}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-[15px] text-muted">Follow us on</p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {s.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 select-none overflow-hidden">
          <p className="display text-center text-[24vw] leading-[0.8] text-ink">
            Peer<span className="text-brand-500">Up</span>
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-ink/10 pt-6 text-sm text-muted md:flex-row">
          <p>© 2026 Peerup Learning Private Limited. All rights reserved.</p>
          <p>Concept redesign</p>
        </div>
      </footer>
    </>
  );
}
