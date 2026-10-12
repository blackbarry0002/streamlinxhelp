import { createFileRoute } from "@tanstack/react-router";

import { PageIntro } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";

export const Route = createFileRoute("/disclaimer")({
  component: DisclaimerPage,
});

const POINTS = [
  {
    title: "No affiliation or endorsement",
    body: "Streamlinx Help is not affiliated with, endorsed by, sponsored by, or acting on behalf of any internet, cable, TV or streaming provider named or implied on this site.",
  },
  {
    title: "Brand names belong to their owners",
    body: "Any provider, product or service names referenced are trademarks or brand names of their respective owners and are used only for descriptive, informational purposes.",
  },
  {
    title: "Availability & pricing vary",
    body: "Coverage, plans, pricing, equipment and promotional offers vary by address and change over time. What is documented as available today may not be accurate tomorrow.",
  },
  {
    title: "Guidance only — verify directly",
    body: "Everything discussed with a Streamlinx Help advisor is provided for general guidance. Before committing to any service, confirm the current terms, pricing and availability directly with the provider.",
  },
] as const;

function DisclaimerPage() {
  usePageMeta({
    title: "Disclaimer — Streamlinx Help",
    description:
      "Streamlinx Help is an independent third-party desk, not affiliated with or endorsed by any internet, cable, TV or streaming provider. Guidance only — verify directly with providers.",
  });

  return (
    <>
      <PageIntro
        index="11"
        eyebrow="Legal"
        title="Disclaimer"
        lead="We say this throughout the site, and we mean it plainly here too: Streamlinx Help is independent of every provider it discusses."
      />

      <section aria-labelledby="disclaimer" className="shell pb-24">
        <h2 id="disclaimer" className="sr-only">
          Disclaimer details
        </h2>
        <div className="border-t border-line">
          {POINTS.map((p) => (
            <div key={p.title} className="rule-b py-9">
              <h3 className="text-xl font-extrabold uppercase md:text-2xl">{p.title}</h3>
              <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
