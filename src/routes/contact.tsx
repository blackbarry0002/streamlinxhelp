import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageIntro } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  usePageMeta({
    title: "Contact the Streamlinx Help Desk",
    description:
      "Reach an independent Streamlinx Help advisor by phone or message for plain-language help understanding internet, cable, TV and streaming options.",
  });

  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageIntro
        index="07"
        eyebrow="Contact"
        title="Talk to a connectivity advisor"
        lead="Share your address and what your household needs, and an advisor will map the documented options — no obligation, no sales pressure."
      />

      <section aria-labelledby="contact-details" className="rule-t bg-ivory">
        <div className="shell grid gap-14 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="label-mono">Reach us</p>
            <h2 id="contact-details" className="display-lg mt-6">
              Phone & hours
            </h2>
            <p className="btn-accent mt-8 inline-flex">833 890 0256</p>
            <dl className="mt-12 space-y-6 border-t border-line pt-8">
              <div>
                <dt className="label-mono">Hours</dt>
                <dd className="mt-2 text-sm text-muted-foreground">Mon–Sat · 8am–9pm</dd>
              </div>
              <div>
                <dt className="label-mono">Response</dt>
                <dd className="mt-2 text-sm text-muted-foreground">
                  Median time to reach a human advisor is under ten minutes during business hours.
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-8">
            {submitted ? (
              <div className="border border-line-strong p-10">
                <p className="label-mono">Thanks</p>
                <p className="mt-4 max-w-md text-lg">
                  We&apos;ve received your message and an advisor will be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                className="grid gap-6 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="label-mono">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="border border-line-strong bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="label-mono">Email or phone</span>
                  <input
                    type="text"
                    name="contact"
                    required
                    className="border border-line-strong bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="label-mono">Address</span>
                  <input
                    type="text"
                    name="address"
                    required
                    className="border border-line-strong bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="label-mono">Question or request</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="border border-line-strong bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-accent">
                    Send message
                  </button>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Submitting this form does not commit you to any service. An advisor will follow up
                    with plain-language options for your address.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
