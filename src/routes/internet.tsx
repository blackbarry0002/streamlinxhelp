import { createFileRoute, Link } from "@tanstack/react-router";

import { Counter, Parallax, Reveal } from "../components/motion";
import { PageIntro } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";
import internetHero from "../assets/internet-hero.jpg";
import fiber from "../assets/fiber.jpg";
import coverage from "../assets/coverage.jpg";
import work from "../assets/work.jpg";
import gaming from "../assets/gaming.jpg";

export const Route = createFileRoute("/internet")({
  component: InternetPage,
});

const TYPES = [
  {
    n: "01",
    name: "Fiber",
    body: "Glass strands carrying light. Typically the most symmetrical option, with upload closer to download and consistently low latency.",
    watch: "Availability is street-by-street, not city-wide.",
  },
  {
    n: "02",
    name: "Cable",
    body: "Coaxial lines shared across a neighbourhood node. Strong download tiers, usually with a much smaller upload allowance.",
    watch: "Evening congestion can vary by node.",
  },
  {
    n: "03",
    name: "Fixed wireless",
    body: "A radio link between a tower and a receiver at your home. Useful where wired build-out has not reached.",
    watch: "Line-of-sight and weather can influence stability.",
  },
  {
    n: "04",
    name: "DSL & legacy",
    body: "Copper telephone lines. Still present in many areas and often the fallback where nothing else is documented.",
    watch: "Distance from the exchange reduces achievable speed.",
  },
] as const;

const TIERS = [
  { speed: "100", fits: "1–2 people, browsing, HD streaming, occasional calls" },
  { speed: "300", fits: "Small family, 4K streaming, regular video meetings" },
  { speed: "500", fits: "Multiple remote workers, large uploads, several consoles" },
  { speed: "1000", fits: "Device-dense households, creative file transfers, heavy simultaneous use" },
] as const;

function InternetPage() {
  usePageMeta({
    title: "Home Internet Options Explained — Streamlinx Help",
    description:
      "Understand fiber, cable and fixed wireless internet: speed tiers, upload capacity, latency and equipment — explained by an independent assistance desk.",
  });

  return (
    <>
      <PageIntro
        index="01"
        eyebrow="Internet"
        title="Read a plan sheet like an engineer"
        lead="We break down what each internet type physically does, which numbers matter for your household, and which questions to ask before you commit to anything."
      />

      <section className="rule-t">
        <Parallax className="h-[52vh] min-h-[20rem] w-full" strength={40}>
          <img
            src={internetHero}
            alt="Bright modern apartment with a laptop on a marble table beside sunlit curtains"
            width={1600}
            height={1008}
            className="img-cover"
          />
        </Parallax>
      </section>

      {/* Types — numbered horizontal rows */}
      <section aria-labelledby="types" className="shell py-20 md:py-28">
        <h2 id="types" className="display-lg max-w-2xl">
          Four ways a signal reaches a house
        </h2>
        <ul className="mt-14 border-t border-line">
          {TYPES.map((t, i) => (
            <li key={t.name} className="rule-b">
              <Reveal delay={i * 90}>
                <div className="grid items-baseline gap-5 py-9 md:grid-cols-12">
                  <p className="label-mono md:col-span-1">{t.n}</p>
                  <h3 className="md:col-span-3 text-3xl font-extrabold uppercase">{t.name}</h3>
                  <p className="md:col-span-5 text-sm text-muted-foreground">{t.body}</p>
                  <p className="md:col-span-3 border-l border-accent pl-4 text-xs uppercase tracking-[0.12em] text-foreground">
                    {t.watch}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Split: tiers table */}
      <section aria-labelledby="tiers" className="rule-t bg-ivory">
        <div className="shell grid gap-14 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="label-mono">Reference / Sizing</p>
            <h2 id="tiers" className="display-lg mt-6">
              Matching a tier to a household
            </h2>
            <p className="mt-6 text-sm text-muted-foreground">
              Indicative guidance only. Actual performance depends on wiring, equipment, device
              count and provider network conditions at your address.
            </p>
          </div>
          <div className="md:col-span-8">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Indicative internet speed tiers and typical use</caption>
              <thead>
                <tr className="border-y border-line-strong">
                  <th scope="col" className="label-mono py-3">
                    Mbps
                  </th>
                  <th scope="col" className="label-mono py-3">
                    Typically suits
                  </th>
                </tr>
              </thead>
              <tbody>
                {TIERS.map((t) => (
                  <tr key={t.speed} className="border-b border-line align-baseline">
                    <th scope="row" className="w-32 py-7 font-display text-4xl font-extrabold">
                      {t.speed}
                    </th>
                    <td className="py-7 text-sm text-muted-foreground">{t.fits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fiber editorial split reversed */}
      <section className="rule-t">
        <div className="shell grid md:grid-cols-2">
          <div className="flex flex-col justify-center py-14 md:py-24 md:pr-16">
            <p className="label-mono">Deep dive / Latency</p>
            <h2 className="display-lg mt-6">The millisecond half of the story</h2>
            <p className="mt-8 max-w-lg text-muted-foreground">
              Latency describes how long a packet takes to travel and return. Low, stable latency
              makes calls feel natural and competitive gaming feel fair. A high-speed line with
              unstable latency can feel worse than a modest, steady one.
            </p>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {[
                { v: 12, s: " ms", k: "Typical fiber round trip" },
                { v: 28, s: " ms", k: "Typical cable round trip" },
                { v: 55, s: " ms", k: "Typical fixed wireless" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-display text-3xl font-extrabold md:text-4xl">
                    <Counter to={s.v} suffix={s.s} />
                  </dt>
                  <dd className="mt-2 text-xs text-muted-foreground">{s.k}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Parallax className="aspect-[4/3] md:aspect-auto md:min-h-[34rem]" strength={30}>
            <img
              src={fiber}
              alt="Fiber optic filaments glowing warm orange"
              loading="lazy"
              width={1600}
              height={912}
              className="img-cover"
            />
          </Parallax>
        </div>
      </section>

      {/* Two-up imagery */}
      <section aria-labelledby="profiles" className="shell py-20 md:py-24">
        <h2 id="profiles" className="display-lg max-w-xl">
          Two households, two priorities
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {[
            {
              img: work,
              alt: "Sunlit home office with a laptop on a video call",
              title: "Remote work",
              body: "Upload capacity, call stability and a wired option at the desk matter more than a headline download figure.",
            },
            {
              img: gaming,
              alt: "Warmly lit gaming desk with monitor and headset",
              title: "Competitive gaming",
              body: "Consistent latency, low jitter and a router that prioritises the console or PC make the visible difference.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <article>
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    width={1200}
                    height={1200}
                    className="img-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold uppercase">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Coverage strip */}
      <section className="relative rule-t">
        <Parallax className="h-[44vh] min-h-[18rem]" strength={38}>
          <img
            src={coverage}
            alt="Aerial view of a sunlit residential neighbourhood at golden hour"
            loading="lazy"
            width={1600}
            height={912}
            className="img-cover"
          />
        </Parallax>
        <div className="shell relative -mt-px grid gap-6 rule-t bg-background py-12 md:grid-cols-12">
          <p className="label-mono md:col-span-3">Availability</p>
          <p className="md:col-span-6 text-lg">
            Coverage is decided block by block. Two neighbours on the same street can have entirely
            different options.
          </p>
          <div className="md:col-span-3 md:text-right">
            <Link to="/contact" className="btn-accent">
              Check my area
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
