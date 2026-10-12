import { createFileRoute, Link } from "@tanstack/react-router";

import { Parallax, Reveal } from "../components/motion";
import { PageIntro } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";
import cable from "../assets/cable.jpg";
import streamingImg from "../assets/streaming.jpg";
import compare from "../assets/compare.jpg";

export const Route = createFileRoute("/cable-tv")({
  component: CablePage,
});

const LINEUP = [
  {
    n: "01",
    title: "Base tier",
    body: "Local broadcast and a core set of national channels. Often the required foundation before any add-on package.",
  },
  {
    n: "02",
    title: "Expanded tier",
    body: "Entertainment, lifestyle and news networks. This is where most households land, and where price differences appear.",
  },
  {
    n: "03",
    title: "Sports & regional",
    body: "Regional sports networks are frequently billed as a separate line item rather than included in the advertised figure.",
  },
  {
    n: "04",
    title: "Premium add-ons",
    body: "Film and original-series networks, sold monthly. These are the easiest items to add and the easiest to forget.",
  },
] as const;

const EQUIPMENT = [
  ["Set-top box", "One per television in most cable arrangements; usually rented monthly."],
  ["DVR storage", "Hours of recording and simultaneous record streams differ widely by package."],
  ["CableCARD / app", "Some services now stream to an app instead of a physical box."],
  ["In-home wiring", "Splitter quality and cable age can quietly reduce picture stability."],
] as const;

function CablePage() {
  usePageMeta({
    title: "Cable & TV Services Explained — Streamlinx Help",
    description:
      "Understand cable and TV service structures: channel tiers, set-top equipment, DVR storage, regional sports fees and IPTV alternatives.",
    keywords:
      "cable TV, TV service, channel tiers, set-top box, DVR, IPTV, regional sports, TV packages, cable packages",
  });

  return (
    <>
      {/* Dark cinematic intro — distinct from other pages */}
      <section className="relative bg-ink text-accent-foreground">
        <div className="absolute inset-0">
          <img
            src={cable}
            alt="Dark home cinema room with warm wall lighting and a large screen"
            width={1600}
            height={1008}
            className="img-cover opacity-45"
          />
        </div>
        <div className="shell relative grid gap-8 py-24 md:grid-cols-12 md:py-36">
          <p className="label-mono !text-beige md:col-span-3">02 / Cable &amp; TV</p>
          <div className="md:col-span-9">
            <h1 className="display-lg">Television, itemised</h1>
            <p className="mt-8 max-w-2xl text-beige">
              Cable and TV pricing is rarely one number. We walk through tiers, equipment rental,
              regional fees and app-based alternatives so the bill holds no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Lineup — numbered grid 2x2 with thin borders */}
      <section aria-labelledby="lineup" className="shell py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-6">
          <h2 id="lineup" className="display-lg max-w-lg">
            How line-ups are stacked
          </h2>
          <p className="label-mono">Four tiers</p>
        </div>
        <div className="grid md:grid-cols-2">
          {LINEUP.map((item, i) => (
            <Reveal key={item.n} delay={i * 90}>
              <article className="border-b border-line px-0 py-10 md:px-10 md:odd:border-r">
                <p className="num-oversize text-beige">{item.n}</p>
                <h3 className="mt-6 text-2xl font-extrabold uppercase md:text-3xl">{item.title}</h3>
                <p className="mt-4 max-w-md text-sm text-muted-foreground">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Equipment split */}
      <section aria-labelledby="equipment" className="rule-t bg-ivory">
        <div className="shell grid gap-14 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={streamingImg}
                alt="Family watching television in a warmly lit living room"
                loading="lazy"
                width={1920}
                height={1008}
                className="img-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="label-mono">Equipment</p>
            <h2 id="equipment" className="display-lg mt-6">
              The hardware behind the picture
            </h2>
            <dl className="mt-10 border-t border-line">
              {EQUIPMENT.map(([term, desc]) => (
                <div key={term} className="grid gap-3 border-b border-line py-6 md:grid-cols-3">
                  <dt className="font-display text-lg font-extrabold uppercase">{term}</dt>
                  <dd className="md:col-span-2 text-sm text-muted-foreground">{desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Comparison band */}
      <section aria-labelledby="vs" className="shell py-20 md:py-24">
        <h2 id="vs" className="display-lg max-w-2xl">
          Cable, IPTV or streaming only?
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            {
              k: "Cable",
              v: "Reliable live viewing, familiar guide, physical equipment and typically a contract term.",
            },
            {
              k: "IPTV",
              v: "Delivered over your internet line with an app-first experience and fewer boxes.",
            },
            {
              k: "Streaming only",
              v: "Lowest equipment footprint, but live sports and local channels need checking first.",
            },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 110}>
              <div className="border-t-2 border-ink pt-6">
                <p className="font-display text-2xl font-extrabold uppercase">{c.k}</p>
                <p className="mt-4 text-sm text-muted-foreground">{c.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rule-t bg-ink text-accent-foreground">
        <div className="shell grid items-center gap-10 py-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Parallax className="aspect-[7/5]" strength={22}>
              <img
                src={compare}
                alt="Hands holding a tablet reviewing service package options"
                loading="lazy"
                width={1408}
                height={1008}
                className="img-cover"
              />
            </Parallax>
          </div>
          <div className="md:col-span-7">
            <h2 className="display-lg">Bring us your current bill</h2>
            <p className="mt-6 max-w-xl text-beige">
              We will read it line by line with you and explain what each charge represents. No
              recommendation is presented as the cheapest or best — only what the terms say.
            </p>
            <Link to="/contact" className="btn-accent mt-8">
              Request a bill walkthrough
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
