import { createFileRoute } from "@tanstack/react-router";

import { PageIntro } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

const SECTIONS = [
  {
    title: "What we collect",
    body: "When you contact us through the site or by phone, we collect what you choose to share — typically your name, contact details, address and a description of what you're looking for. We don't collect more than we need to help answer your question.",
  },
  {
    title: "How we use it",
    body: "Information you provide is used to give you a plain-language breakdown of documented options at your address and to follow up with you directly. It is not used to build a profile for advertising purposes.",
  },
  {
    title: "What we don't do",
    body: "We do not sell your information to internet, cable, TV or streaming providers, and we do not share it with third parties for their own marketing. We are an independent desk, not a lead-generation service for any single provider.",
  },
  {
    title: "Cookies & analytics",
    body: "Like most websites, we may use basic, privacy-conscious analytics to understand how the site is used and to keep it working well. This does not involve selling data to advertisers.",
  },
  {
    title: "Questions",
    body: "If you have a question about how your information is handled, contact the desk and we'll be glad to explain.",
  },
] as const;

function PrivacyPolicyPage() {
  usePageMeta({
    title: "Privacy Policy — Streamlinx Help",
    description:
      "How Streamlinx Help, an independent connectivity assistance desk, collects and uses information shared through the contact form and phone line.",
  });

  return (
    <>
      <PageIntro
        index="08"
        eyebrow="Legal"
        title="Privacy policy"
        lead="What we collect, why, and what we don't do with it. This page is informational content for this project and is not legal advice."
      />

      <section aria-labelledby="privacy" className="shell pb-24">
        <h2 id="privacy" className="sr-only">
          Privacy policy details
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
