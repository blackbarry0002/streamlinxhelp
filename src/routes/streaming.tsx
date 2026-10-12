import { createFileRoute, Link } from "@tanstack/react-router";

import { Counter, Parallax, Reveal } from "../components/motion";
import { PageIntro } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";
import streamingImg from "../assets/streaming.jpg";
import cable from "../assets/cable.jpg";
import gaming from "../assets/gaming.jpg";

export const Route = createFileRoute("/streaming")({
  component: StreamingPage,
});

const BUDGET = [
  { label: "SD stream", mbps: "3" },
  { label: "HD stream (1080p)", mbps: "6" },
  { label: "4K HDR stream", mbps: "25" },
  { label: "Cloud game session", mbps: "35" },
  { label: "Video call (HD)", mbps: "4" },
] as const;

function StreamingPage() {
  usePageMeta({
    title: "Streaming & Bandwidth Planning — Streamlinx Help",
    description:
      "Plan streaming for a multi-screen household: bandwidth per stream, 4K requirements, buffering causes and device placement, explained independently.",
    keywords:
      "streaming, bandwidth, 4K streaming, buffering, multi-screen, bandwidth planning, Netflix, streaming services",
  });

  return (
    <>
      <PageIntro
        index="03"
        eyebrow="Streaming"
        title="Plan the evening, not just the plan"
        lead="Streaming is the most common reason a household outgrows its connection. Here is how to estimate what your evenings actually demand, and what to fix when playback stutters."
      />

      {/* Full-bleed cinematic band with overlay caption */}
      <section className="relative rule-t">
        <Parallax className="h-[58vh] min-h-[22rem]" strength={45}>
          <img
            src={streamingImg}
            alt="Family watching a film on a large screen in a warm living room at dusk"
            width={1920}
            height={1008}
            className="img-cover"
          />
        </Parallax>
        <div className="shell -mt-px rule-t grid gap-6 bg-background py-10 md:grid-cols-12">
          <p className="label-mono md:col-span-3">Fig. 03 — Peak hours</p>
          <p className="md:col-span-9 text-lg">
            Between 8pm and 11pm most residential networks carry their heaviest load. A line that
            feels effortless at noon can feel different at nine.
          </p>
        </div>
      </section>

      {/* Bandwidth budget — horizontal bars from type, no cards */}
      <section aria-labelledby="budget" className="shell py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-12">
          <h2 id="budget" className="display-lg md:col-span-6">
            A rough bandwidth budget
          </h2>
          <p className="md:col-span-5 md:col-start-8 text-muted-foreground">
            Add up what runs simultaneously, then leave headroom. These figures are typical
            reference values, not guarantees — providers and apps vary.
          </p>
        </div>
        <ul className="mt-14 border-t border-line">
          {BUDGET.map((row, i) => (
            <li key={row.label} className="rule-b">
              <Reveal delay={i * 80}>
                <div className="flex items-baseline justify-between gap-6 py-7">
                  <span className="font-display text-xl font-extrabold uppercase md:text-3xl">
                    {row.label}
                  </span>
                  <span className="label-mono !text-foreground shrink-0">≈ {row.mbps} Mbps</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Typographic stat row */}
      <section className="rule-t bg-beige">
        <div className="shell grid gap-10 py-16 md:grid-cols-3 md:py-20">
          {[
            { v: 4, s: "", k: "Concurrent 4K streams a gigabit line can typically carry" },
            { v: 68, s: "%", k: "Of buffering complaints we review trace to Wi-Fi, not the line" },
            { v: 2, s: " min", k: "Typical time to test a wired connection and rule it out" },
          ].map((s) => (
            <div key={s.k} className="border-t-2 border-ink pt-6">
              <p className="num-oversize">
                <Counter to={s.v} suffix={s.s} />
              </p>
              <p className="mt-4 max-w-xs text-sm text-ink">{s.k}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Troubleshooting split with cinematic image */}
      <section aria-labelledby="fixes" className="rule-t">
        <div className="shell grid md:grid-cols-2">
          <Parallax className="aspect-[4/3] md:aspect-auto md:min-h-[36rem]" strength={30}>
            <img
              src={cable}
              alt="Dark cinema room with warm lighting and a projected film"
              loading="lazy"
              width={1600}
              height={1008}
              className="img-cover"
            />
          </Parallax>
          <div className="flex flex-col justify-center py-14 md:py-20 md:pl-14">
            <p className="label-mono">Checklist / Buffering</p>
            <h2 id="fixes" className="display-lg mt-6">
              Five things to check before blaming the plan
            </h2>
            <ol className="mt-10 border-t border-line">
              {[
                "Test one device on a cable — if it is clean, the issue is wireless.",
                "Move the router off the floor and out of cabinets.",
                "Check whether an app is defaulting to the highest quality tier.",
                "Look for a second network on the same congested channel.",
                "Confirm nothing large is uploading in the background.",
              ].map((t, i) => (
                <li key={t} className="flex gap-6 border-b border-line py-5">
                  <span className="label-mono pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-muted-foreground">{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="rule-t">
        <div className="shell grid items-end gap-10 py-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="display-lg">
              Streaming, gaming, <span className="text-accent">both.</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              If someone streams while someone else plays online, the household needs headroom and a
              router that handles both gracefully. We will explain the trade-offs.
            </p>
            <Link to="/contact" className="btn-accent mt-8">
              Talk it through
            </Link>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-square overflow-hidden">
              <img
                src={gaming}
                alt="Gaming setup with monitor and headset in warm amber light"
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
