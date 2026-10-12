import { createFileRoute, Link } from "@tanstack/react-router";

import { FaqList, PageIntro } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
});

const FAQS = [
  {
    q: "Is Streamlinx Help an internet provider?",
    a: "No. Streamlinx Help is an independent third-party information and assistance desk. We are not an ISP, we do not operate any network, and we are not affiliated with or endorsed by any provider.",
  },
  {
    q: "Is the assistance actually free?",
    a: "Yes. There is no charge to speak with an advisor, get a plain-language breakdown of options, or ask questions about your existing service.",
  },
  {
    q: "Do you sell my information to providers?",
    a: "No. Details you share with us are used to help answer your questions, not sold or handed to providers for marketing purposes. See our Privacy Policy for the full picture.",
  },
  {
    q: "How accurate is the availability information you give me?",
    a: "We share what is documented as available at the time of your enquiry. Coverage, pricing and features change by address and over time, so we always recommend confirming details directly with the provider before committing.",
  },
  {
    q: "Can you set up installation for me?",
    a: "We can walk you through the paperwork and what to expect, but installation itself is scheduled and carried out by the provider you choose, not by Streamlinx Help.",
  },
  {
    q: "What areas do you cover?",
    a: "Our advisors work with households across many regions. Reach out with your address and we'll tell you what's documented as available there.",
  },
  {
    q: "Why do plans and prices vary so much by address?",
    a: "Infrastructure is built out unevenly — fiber may reach one side of a street and not the other, and cable nodes serve specific neighbourhoods. That's why we ask for an address before discussing options.",
  },
  {
    q: "How do I get started?",
    a: "Contact the desk with your address and a sense of what your household needs. An advisor will map the documented options and explain them without any obligation to proceed.",
  },
] as const;

function FaqPage() {
  usePageMeta({
    title: "Frequently Asked Questions — Streamlinx Help",
    description:
      "Common questions about Streamlinx Help's independent connectivity assistance desk: cost, accuracy, privacy, coverage and how to get started.",
    keywords:
      "FAQ, questions, internet help, cable assistance, streaming support, connectivity, is it free, coverage",
  });

  return (
    <>
      <PageIntro
        index="06"
        eyebrow="FAQ"
        title="Questions we hear often"
        lead="A straightforward answer to the things households usually want to check before reaching out."
      />

      <section aria-labelledby="faqs" className="shell pb-24">
        <h2 id="faqs" className="sr-only">
          Frequently asked questions
        </h2>
        <FaqList items={[...FAQS]} />
        <div className="mt-12">
          <Link to="/contact" className="btn-accent">
            Still have a question?
          </Link>
        </div>
      </section>
    </>
  );
}
