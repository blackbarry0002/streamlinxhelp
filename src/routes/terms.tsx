import { createFileRoute } from "@tanstack/react-router";

import { PageIntro } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

const SECTIONS = [
  {
    title: "Nature of the service",
    body: "Streamlinx Help provides independent, informational assistance to help households understand internet, cable, TV and streaming options. We are not an internet service provider, retailer, or agent of any provider, and using this site does not create any agency relationship between you and Streamlinx Help.",
  },
  {
    title: "No warranty on third-party information",
    body: "Availability, pricing and features described through our service are based on information documented at the time of your enquiry and can change without notice. We make no guarantee of accuracy and recommend confirming details directly with the provider before committing to anything.",
  },
  {
    title: "Acceptable use",
    body: "Please use this site and our assistance service honestly — don't submit false information, attempt to disrupt the site, or use it for anything unlawful.",
  },
  {
    title: "No affiliation",
    body: "Streamlinx Help is not affiliated with, endorsed by, or acting on behalf of any internet, cable, TV or streaming provider referenced on this site. All brand names remain the property of their respective owners.",
  },
  {
    title: "Changes to these terms",
    body: "We may update these terms from time to time. Continued use of the site after changes are posted means you accept the updated terms.",
  },
] as const;

function TermsPage() {
  usePageMeta({
    title: "Terms & Conditions — Streamlinx Help",
    description:
      "Terms governing use of Streamlinx Help's independent connectivity assistance service, including our third-party, no-affiliation positioning.",
    keywords:
      "terms, conditions, terms of service, user agreement, legal, third-party",
  });

  return (
    <>
      <PageIntro
        index="09"
        eyebrow="Legal"
        title="Terms & conditions"
        lead="The basic terms of using Streamlinx Help's assistance service. This page is informational content for this project and is not legal advice."
      />

      <section aria-labelledby="terms" className="shell pb-24">
        <h2 id="terms" className="sr-only">
          Terms details
        </h2>
        <div className="border-t border-line">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rule-b py-9">
              <h3 className="text-xl font-extrabold uppercase md:text-2xl">{s.title}</h3>
              <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
