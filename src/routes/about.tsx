import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "../components/motion";
import { PageIntro } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const STEPS = [
  {
    n: "01",
    title: "Tell us your address & needs",
    body: "A short conversation about your household — how many people, how many devices, what you actually use the line for.",
  },
  {
    n: "02",
    title: "We map documented options",
    body: "We lay out the internet, cable, TV and streaming services on record for your area, in plain language, without jargon.",
  },
  {
    n: "03",
    title: "You get a plain-language breakdown",
    body: "Speed tiers, equipment, contract terms and fees explained side by side, so the trade-offs are actually visible.",
  },
  {
    n: "04",
    title: "You decide independently",
    body: "No sales pressure, no push toward a particular provider. If you want help with paperwork or setup after deciding, we're still here.",
  },
] as const;

function AboutPage() {
  usePageMeta({
    title: "About Streamlinx Help — Independent Connectivity Desk",
    description:
      "Streamlinx Help is an independent third-party desk helping households understand internet, cable, TV and streaming options without sales pressure or provider affiliation.",
  });

  return (
    <>
      <PageIntro
        index="05"
        eyebrow="About"
        title="An independent desk, not a provider"
        lead="Streamlinx Help exists to make connectivity options legible. We are not an ISP, we don't sell services on behalf of any provider, and we don't take a side."
      />

      <section aria-labelledby="who" className="rule-t bg-ivory">
        <div className="shell grid gap-14 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="label-mono">Who we are</p>
            <h2 id="who" className="display-lg mt-6">
              Third-party, by design
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-2xl text-muted-foreground">
              Since 2016, Streamlinx Help has helped households make sense of the internet, cable, TV and
              streaming services documented as available at their address. We are an independent
              information and assistance desk — not an internet service provider, not an authorized
              retailer, and not affiliated with or endorsed by any network operator.
            </p>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              Our advisors explain speed tiers, equipment, contract terms and fees in plain language,
              so you can compare options on your own terms. We never claim to offer the &quot;best&quot;
              or &quot;cheapest&quot; deal — only a clearer view of what is actually on the table.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="how" className="shell py-20 md:py-28">
        <h2 id="how" className="display-lg max-w-xl">
          How assistance works
        </h2>
        <ol className="mt-14 border-t border-line">
          {STEPS.map((s, i) => (
            <li key={s.n} className="rule-b">
              <Reveal delay={i * 100}>
                <div className="grid items-baseline gap-5 py-9 md:grid-cols-12">
                  <p className="label-mono md:col-span-1">{s.n}</p>
                  <h3 className="md:col-span-4 text-2xl font-extrabold uppercase md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="md:col-span-7 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="rule-t bg-ink text-accent-foreground">
        <div className="shell grid gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-8">
            <p className="label-mono !text-beige">No affiliation</p>
            <h2 className="display-lg mt-6">
              We don&apos;t work for any provider.
            </h2>
            <p className="mt-6 max-w-2xl text-beige">
              That independence is the entire point. We are free to point out trade-offs a provider
              might not volunteer, and we have no incentive to steer you toward any particular plan.
            </p>
          </div>
          <div className="md:col-span-4 flex items-end justify-start md:justify-end">
            <Link to="/contact" className="btn-accent">
              Talk to an advisor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
