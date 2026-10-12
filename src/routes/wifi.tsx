import { createFileRoute, Link } from "@tanstack/react-router";

import { Parallax, Reveal } from "../components/motion";
import { PageIntro } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";
import wifiImg from "../assets/wifi.jpg";
import smartHome from "../assets/smart-home.jpg";
import work from "../assets/work.jpg";

export const Route = createFileRoute("/wifi")({
  component: WifiPage,
});

const BANDS = [
  {
    n: "01",
    band: "2.4 GHz",
    trait: "Longest reach, slowest throughput, most crowded",
    use: "Sensors, thermostats, garden cameras",
  },
  {
    n: "02",
    band: "5 GHz",
    trait: "Balanced reach and speed for most rooms",
    use: "Laptops, televisions, tablets",
  },
  {
    n: "03",
    band: "6 GHz",
    trait: "Highest throughput, shortest range, least congestion",
    use: "Same-room 4K streaming and large transfers",
  },
] as const;

function WifiPage() {
  usePageMeta({
    title: "Wi-Fi Coverage, Mesh & Interference — Streamlinx Help",
    description:
      "Independent guidance on Wi-Fi: router placement, mesh node spacing, 2.4 vs 5 vs 6 GHz bands, interference sources and smart-home device load.",
    keywords:
      "Wi-Fi, mesh, router placement, 2.4 GHz, 5 GHz, 6 GHz, interference, smart home, coverage, router",
  });

  return (
    <>
      <PageIntro
        index="04"
        eyebrow="Wi-Fi"
        title="The last ten metres decide everything"
        lead="Most connection complaints are wireless, not upstream. Placement, band choice and node spacing usually recover more performance than a larger plan would."
      />

      {/* Asymmetric image pairing */}
      <section className="shell grid gap-6 pb-20 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <Parallax className="aspect-[16/11]" strength={26}>
            <img
              src={wifiImg}
              alt="White mesh Wi-Fi router on an oak console table in a warm interior"
              width={1200}
              height={1504}
              className="img-cover"
            />
          </Parallax>
        </div>
        <div className="md:col-span-5 flex flex-col justify-end">
          <p className="label-mono">Placement</p>
          <p className="mt-5 text-lg">
            Central, elevated, unobstructed. A router in a media cabinet behind a television loses a
            surprising amount of usable coverage.
          </p>
          <div className="mt-8 aspect-[16/11] overflow-hidden">
            <img
              src={smartHome}
              alt="Hand touching a wall-mounted smart home control panel"
              loading="lazy"
              width={1200}
              height={1200}
              className="img-cover"
            />
          </div>
        </div>
      </section>

      {/* Bands table-style rows */}
      <section aria-labelledby="bands" className="rule-t bg-ivory">
        <div className="shell py-20 md:py-24">
          <h2 id="bands" className="display-lg max-w-xl">
            Three bands, three jobs
          </h2>
          <ul className="mt-14 border-t border-line-strong">
            {BANDS.map((b, i) => (
              <li key={b.band} className="border-b border-line">
                <Reveal delay={i * 100}>
                  <div className="grid items-baseline gap-4 py-9 md:grid-cols-12">
                    <p className="label-mono md:col-span-1">{b.n}</p>
                    <h3 className="md:col-span-3 text-3xl font-extrabold uppercase">{b.band}</h3>
                    <p className="md:col-span-5 text-sm text-muted-foreground">{b.trait}</p>
                    <p className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                      {b.use}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mesh layout — numbered with big type */}
      <section aria-labelledby="mesh" className="shell py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-12">
          <h2 id="mesh" className="display-lg md:col-span-6">
            Laying out a mesh
          </h2>
          <p className="md:col-span-5 md:col-start-8 text-muted-foreground">
            Nodes should hear each other clearly, not sit at the edge of the signal. Two well-placed
            units usually beat four poorly placed ones.
          </p>
        </div>
        <ol className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Anchor at the entry point",
              b: "Place the primary unit where the line enters, then work outward room by room.",
            },
            {
              n: "02",
              t: "Two rooms apart, not four",
              b: "Each node should still see strong signal from the previous one before serving devices.",
            },
            {
              n: "03",
              t: "Wire a node where you can",
              b: "A single ethernet run to a distant node transforms performance across that whole zone.",
            },
          ].map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 110}>
                <p className="num-oversize text-beige">{s.n}</p>
                <h3 className="mt-5 text-xl font-extrabold uppercase md:text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.b}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Interference list + work image */}
      <section className="rule-t bg-ink text-accent-foreground">
        <div className="shell grid gap-12 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6">
            <p className="label-mono !text-beige">Interference</p>
            <h2 className="display-lg mt-6">What quietly competes with your network</h2>
            <ul className="mt-10 border-t border-line">
              {[
                "Microwave ovens and cordless phones on 2.4 GHz",
                "Dense masonry, foil-backed insulation and mirrors",
                "Neighbouring networks on overlapping channels",
                "Aquariums, radiators and metal shelving units",
              ].map((t) => (
                <li key={t} className="border-b border-line py-5 text-sm text-beige">
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-accent mt-10">
              Ask about coverage
            </Link>
          </div>
          <div className="md:col-span-6">
            <div className="aspect-[4/3] overflow-hidden md:aspect-[4/5]">
              <img
                src={work}
                alt="Bright home office desk with laptop and warm morning light"
                loading="lazy"
                width={1200}
                height={1200}
                className="img-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
