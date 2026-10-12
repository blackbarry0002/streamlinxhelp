import { createFileRoute, Link } from "@tanstack/react-router";

import { Counter, Parallax, Reveal, SplitHeading } from "../components/motion";
import { FaqList } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";
import heroHome from "../assets/hero-home.jpg";
import fiber from "../assets/fiber.jpg";
import streamingImg from "../assets/streaming.jpg";
import gaming from "../assets/gaming.jpg";
import work from "../assets/work.jpg";
import smartHome from "../assets/smart-home.jpg";
import wifiImg from "../assets/wifi.jpg";
import compare from "../assets/compare.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const DIRECTORY = [
  { n: "01", to: "/internet", title: "Internet", note: "Fiber, cable & fixed wireless explained" },
  { n: "02", to: "/cable-tv", title: "Cable & TV", note: "Channel line-ups and equipment basics" },
  { n: "03", to: "/streaming", title: "Streaming", note: "Bandwidth planning for multi-screen homes" },
  { n: "04", to: "/wifi", title: "Wi-Fi", note: "Coverage, mesh layout and interference" },
] as const;

const PROCESS = [
  {
    n: "01",
    title: "Tell us your address & household",
    body: "We start with what matters: how many people, how many devices, and what you actually do online each evening.",
  },
  {
    n: "02",
    title: "We map available options",
    body: "Our advisors outline the internet, cable, TV and streaming services documented as available in your area, in plain language.",
  },
  {
    n: "03",
    title: "You decide, we assist",
    body: "Compare speed tiers, equipment and contract terms side by side. You choose; we help with the paperwork and setup questions.",
  },
] as const;

const GRID = [
  {
    img: streamingImg,
    alt: "Family watching a film on a large television in a warm living room",
    tag: "Streaming",
    title: "Multi-screen evenings",
    body: "Two 4K streams, a tablet and a console can share a line comfortably — when the tier and router match the household.",
    to: "/streaming",
    span: "md:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    img: gaming,
    alt: "Modern gaming desk with monitor and headset lit in warm amber tones",
    tag: "Gaming",
    title: "Latency over headline speed",
    body: "For competitive play, jitter and routing matter more than a big download number. We explain what to look at.",
    to: "/internet",
    span: "md:col-span-5",
    ratio: "aspect-square",
  },
  {
    img: work,
    alt: "Bright home office with laptop on a video call",
    tag: "Work from home",
    title: "Upload is the quiet variable",
    body: "Video calls, cloud backups and file transfers all lean on upstream capacity. Symmetrical options are worth understanding.",
    to: "/internet",
    span: "md:col-span-5",
    ratio: "aspect-square",
  },
  {
    img: smartHome,
    alt: "Hand adjusting a wall-mounted smart home control panel",
    tag: "Smart home",
    title: "Forty small devices",
    body: "Sensors, cameras and speakers rarely need speed — they need a stable network with enough client capacity.",
    to: "/wifi",
    span: "md:col-span-7",
    ratio: "aspect-[16/10]",
  },
] as const;

const FAQS = [
  {
    q: "Is Streamlinx Help an internet provider?",
    a: "No. Streamlinx Help is an independent third-party information and assistance desk. We are not an ISP, we are not affiliated with any provider, and we do not operate any network.",
  },
  {
    q: "What does the assistance actually include?",
    a: "We help you understand available service types at your address, explain speed tiers and equipment, walk through documentation, and support you with setup and troubleshooting questions.",
  },
  {
    q: "Do you tell me which plan to buy?",
    a: "We present the options and the trade-offs. The decision is always yours, and availability and terms are confirmed directly with the provider you choose.",
  },
  {
    q: "How current is availability information?",
    a: "Coverage and service details change frequently by address and region. We share what is documented at the time of your enquiry and recommend confirming before any commitment.",
  },
] as const;

function Home() {
  usePageMeta({
    title: "Streamlinx Help — Explore Internet, Cable & Streaming Options",
    description:
      "Independent assistance desk for home connectivity. Explore, compare and understand internet, cable, TV and streaming options available at your address.",
    keywords:
      "internet, cable, TV, streaming, home connectivity, compare internet, broadband options, internet assistance, Wi-Fi, fiber",
  });

  return (
    <>
      {/* HERO — editorial split, oversized black type + asymmetric photography */}
      <section className="rule-b">
        <div className="shell grid gap-10 pb-12 pt-14 md:grid-cols-12 md:gap-8 md:pb-16 md:pt-20">
          <div className="md:col-span-7">
            <p className="label-mono">Independent connectivity desk — est. 2016</p>
            <h1 className="display-lg mt-7 text-[clamp(2.6rem,7.1vw,6.2rem)]">
              <SplitHeading text="Understand" />
              <SplitHeading text="what your" className="text-accent" />
              <SplitHeading text="home can" />
              <SplitHeading text="connect to" />
            </h1>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <p className="max-w-md text-base text-muted-foreground">
                Streamlinx Help helps households explore, compare and understand the internet, cable, TV
                and streaming services documented as available at their address — without sales
                pressure and without provider affiliation.
              </p>
              <div className="flex flex-col items-start gap-4">
                <Link to="/contact" className="btn-accent">
                  Request assistance
                </Link>
                <Link to="/internet" className="btn-outline">
                  Explore services
                </Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <Parallax className="aspect-[4/5] w-full" strength={26}>
              <img
                src={heroHome}
                alt="Person using a laptop on a linen sofa in a bright modern connected home"
                width={1408}
                height={1760}
                className="img-cover"
              />
            </Parallax>
            <div className="mt-4 flex items-start justify-between gap-6 rule-t pt-4">
              <p className="label-mono">Fig. 01 — Connected household</p>
              <p className="max-w-[16rem] text-xs text-muted-foreground">
                Advisory only. Services are provided by third-party companies, not by Streamlinx Help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL SERVICE DIRECTORY */}
      <section aria-labelledby="directory" className="rule-b bg-ivory">
        <div className="shell py-14 md:py-16">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 id="directory" className="font-display text-sm uppercase tracking-[0.22em]">
              Service directory
            </h2>
            <p className="label-mono">Four areas of assistance</p>
          </div>
          <ul className="mt-10 grid divide-y divide-line border-t border-line md:grid-cols-4 md:divide-x md:divide-y-0">
            {DIRECTORY.map((item, i) => (
              <li key={item.to}>
                <Reveal delay={i * 90}>
                  <Link to={item.to} className="group block px-0 py-8 md:px-7">
                    <p className="label-mono">{item.n}</p>
                    <p className="mt-6 font-display text-3xl font-extrabold uppercase transition-colors group-hover:text-accent">
                      {item.title}
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground">{item.note}</p>
                    <span className="label-mono mt-8 inline-block transition-transform group-hover:translate-x-2">
                      View →
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden rule-b bg-ink py-4 text-accent-foreground">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {["Fiber", "Cable", "Fixed wireless", "IPTV", "Mesh Wi-Fi", "Streaming", "Bundles"].map(
                (word) => (
                  <span
                    key={`${dup}-${word}`}
                    className="px-8 font-mono text-xs uppercase tracking-[0.28em]"
                  >
                    {word} <span className="text-accent">/</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      {/* OVERSIZED PROCESS 01 / 02 / 03 */}
      <section aria-labelledby="process" className="shell py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-12">
          <h2 id="process" className="display-lg md:col-span-6">
            How assistance works
          </h2>
          <p className="md:col-span-5 md:col-start-8 text-muted-foreground">
            A short, transparent process. No obligation at any step, and no claims about which
            service is right for everyone.
          </p>
        </div>

        <ol className="mt-16 border-t border-line">
          {PROCESS.map((step, i) => (
            <li key={step.n} className="rule-b">
              <Reveal delay={i * 120}>
                <div className="grid items-start gap-6 py-10 md:grid-cols-12">
                  <p className="num-oversize md:col-span-3 text-ink">{step.n}</p>
                  <h3 className="md:col-span-5 text-2xl font-extrabold uppercase md:text-4xl">
                    {step.title}
                  </h3>
                  <p className="md:col-span-4 text-sm text-muted-foreground">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* EDITORIAL SPLIT — internet performance */}
      <section aria-labelledby="performance" className="rule-t bg-ivory">
        <div className="shell grid gap-0 md:grid-cols-2">
          <Parallax className="aspect-[4/3] md:aspect-auto md:h-full md:min-h-[36rem]" strength={34}>
            <img
              src={fiber}
              alt="Glowing fiber optic strands against a dark background"
              loading="lazy"
              width={1600}
              height={912}
              className="img-cover"
            />
          </Parallax>
          <div className="flex flex-col justify-center px-0 py-14 md:px-14 md:py-20">
            <p className="label-mono">Field note / Performance</p>
            <h2 id="performance" className="display-lg mt-6">
              Speed is one number. Experience is five.
            </h2>
            <p className="mt-8 max-w-lg text-muted-foreground">
              Households often focus on download speed alone. In practice, upload capacity, latency,
              device count, router placement and in-home wiring shape how a connection feels. Our
              advisors explain each factor so you can read a plan sheet with confidence.
            </p>
            <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {[
                ["Download", "Streaming, downloads, browsing"],
                ["Upload", "Calls, backups, cloud work"],
                ["Latency", "Gaming, conferencing responsiveness"],
                ["Capacity", "Simultaneous devices in the home"],
              ].map(([term, desc]) => (
                <div key={term} className="border-t border-line pt-4">
                  <dt className="font-display text-lg font-extrabold uppercase">{term}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground">{desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH CINEMATIC STREAMING IMAGE */}
      <section className="relative rule-t">
        <Parallax className="h-[62vh] min-h-[24rem] w-full" strength={48}>
          <img
            src={streamingImg}
            alt="Cinematic living room at dusk with a large screen and warm lighting"
            loading="lazy"
            width={1920}
            height={1008}
            className="img-cover"
          />
        </Parallax>
        <div className="pointer-events-none absolute inset-0 flex items-end">
          <div className="shell w-full pb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-foreground">
              Fig. 02 — Entertainment at home
            </p>
            <p className="mt-4 max-w-2xl font-display text-3xl font-extrabold uppercase leading-[0.95] text-accent-foreground md:text-5xl">
              Cable, IPTV and streaming, explained side by side
            </p>
          </div>
        </div>
      </section>

      {/* MAGAZINE GRID */}
      <section aria-labelledby="usecases" className="shell py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-6">
          <h2 id="usecases" className="display-lg max-w-xl">
            Built around how you use the line
          </h2>
          <p className="label-mono">Four household profiles</p>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-12">
          {GRID.map((card, i) => (
            <article key={card.title} className={card.span}>
              <Reveal delay={i * 100}>
                <Link to={card.to} className="group block">
                  <div className={`overflow-hidden ${card.ratio}`}>
                    <img
                      src={card.img}
                      alt={card.alt}
                      loading="lazy"
                      className="img-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-line pt-4">
                    <p className="label-mono">{card.tag}</p>
                    <span className="label-mono transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-extrabold uppercase transition-colors group-hover:text-accent md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm text-muted-foreground">{card.body}</p>
                </Link>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* TYPOGRAPHIC STATISTICS */}
      <section aria-labelledby="stats" className="rule-t bg-ink py-20 text-accent-foreground md:py-28">
        <div className="shell">
          <h2 id="stats" className="label-mono !text-beige">
            By the numbers
          </h2>
          <dl className="mt-12 divide-y divide-line border-t border-line">
            {[
              { v: 128000, s: "+", k: "Households assisted since 2016" },
              { v: 41, s: "", k: "Service areas covered by our advisors" },
              { v: 9, s: " min", k: "Median time to reach a human" },
            ].map((row, i) => (
              <div key={row.k} className="grid items-baseline gap-4 py-8 md:grid-cols-12">
                <dt className="label-mono !text-beige md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </dt>
                <dd className="font-display text-[3.25rem] font-extrabold leading-[0.85] tracking-[-0.05em] md:col-span-5 md:text-[5.25rem]">
                  <Counter to={row.v} suffix={row.s} />
                </dd>
                <p className="md:col-span-6 text-sm text-beige">{row.k}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CUSTOMER QUOTE */}
      <section className="rule-b">
        <div className="shell grid gap-10 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <div className="aspect-[4/3] overflow-hidden md:aspect-[3/4]">
              <img
                src={compare}
                alt="Hands holding a tablet comparing home service plans on a bright desk"
                loading="lazy"
                width={1408}
                height={1008}
                className="img-cover"
              />
            </div>
          </div>
          <figure className="md:col-span-8 md:pl-8">
            <p className="label-mono">Customer note</p>
            <blockquote className="mt-8 font-display text-3xl font-extrabold uppercase leading-[0.98] md:text-5xl">
              "They walked through three service types in fifteen minutes and never once pushed me
              toward a sale. I finally understood what I was actually paying for."
            </blockquote>
            <figcaption className="mt-10 border-t border-line pt-5 text-sm text-muted-foreground">
              Marisol T. — household of four, Tucson AZ
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq" className="shell py-20 md:py-24">
        <div className="grid gap-8 md:grid-cols-12">
          <h2 id="faq" className="display-lg md:col-span-5">
            Common questions
          </h2>
          <div className="md:col-span-7">
            <FaqList items={[...FAQS]} />
            <Link to="/faq" className="btn-outline mt-10">
              All questions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rule-t bg-ivory">
        <div className="shell grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-8">
            <h2 className="display-xl">
              Let&apos;s map your <span className="text-accent">address.</span>
            </h2>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end gap-6">
            <p className="text-sm text-muted-foreground">
              Independent guidance on internet, cable, TV and streaming options. No obligation, no
              affiliation, no pressure.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-accent">
                Contact the desk
              </Link>
              <Link to="/about" className="btn-outline">
                Who we are
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="rule-t">
        <div className="shell py-8">
          <img
            src={wifiImg}
            alt="Minimal white mesh Wi-Fi router on an oak console in a warm interior"
            loading="lazy"
            width={1200}
            height={1504}
            className="h-40 w-full object-cover object-center md:h-56"
          />
        </div>
      </div>
    </>
  );
}
