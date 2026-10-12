import { createFileRoute, Link } from "@tanstack/react-router";

import { PageIntro } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  usePageMeta({
    title: "Refund Policy — Streamlinx Help",
    description:
      "Streamlinx Help's assistance service is free, so there is nothing to refund. Billing questions belong with your actual internet, cable or streaming provider.",
    keywords:
      "refund policy, refunds, billing, free service, charges, provider billing",
  });

  return (
    <>
      <PageIntro
        index="10"
        eyebrow="Legal"
        title="Refund policy"
        lead="Short version: we don't charge for our assistance, so there's nothing to refund."
      />

      <section aria-labelledby="refund" className="rule-t bg-ivory">
        <div className="shell grid gap-14 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="label-mono">Why</p>
            <h2 id="refund" className="display-lg mt-6">
              We don&apos;t sell anything
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-muted-foreground">
            <p>
              Streamlinx Help is a free, independent information and assistance desk. We don&apos;t charge
              households for phone consultations, plan explanations, or help with paperwork — so there
              is no purchase from us to refund.
            </p>
            <p>
              If you were charged for internet, cable, TV or streaming service, that charge was billed
              by the provider you signed up with, not by Streamlinx Help. Billing disputes, cancellations
              and refund requests for an actual service need to go directly to that provider — they
              hold your account and contract, and only they can process a refund or credit.
            </p>
            <p>
              If you&apos;re not sure who to contact or how to raise a billing issue with your
              provider, an advisor can help you figure out the right next step.
            </p>
            <div>
              <Link to="/contact" className="btn-accent">
                Ask an advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
