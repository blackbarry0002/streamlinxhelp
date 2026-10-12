import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/internet", label: "Internet" },
  { to: "/cable-tv", label: "Cable & TV" },
  { to: "/streaming", label: "Streaming" },
  { to: "/wifi", label: "Wi-Fi" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm rule-b">
      <div className="shell flex items-center justify-between gap-6 py-4">
        <Link to="/" className="flex items-baseline gap-2" aria-label="Streamlinx Help home">
          <span className="font-display text-xl font-extrabold uppercase tracking-[-0.04em]">
            Streamlinx<span className="text-accent">Help</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-accent hidden sm:inline-flex">
            Get assistance
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="border border-line-strong px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="rule-t bg-ivory lg:hidden">
          <ul className="shell divide-y divide-line">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4 font-display text-2xl font-extrabold uppercase"
                >
                  {item.label}
                  <span className="label-mono">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="rule-t bg-ivory">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-display text-4xl font-extrabold uppercase leading-[0.9] md:text-5xl">
            Talk to a <span className="text-accent">connectivity</span> advisor
          </p>
          <p className="mt-6 max-w-md text-sm text-muted-foreground">
            Streamlinx Help is an independent information and assistance desk. We help households explore
            and understand internet, cable, TV and streaming options available at their address. We
            do not sell services on behalf of any provider.
          </p>
          <a href="/contact" className="btn-accent mt-8">
            833 890 0256
          </a>
        </div>

        <nav aria-label="Services" className="md:col-span-2 md:col-start-7">
          <p className="label-mono">Services</p>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/internet", label: "Internet" },
              { to: "/cable-tv", label: "Cable & TV" },
              { to: "/streaming", label: "Streaming" },
              { to: "/wifi", label: "Wi-Fi" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="md:col-span-2">
          <p className="label-mono">Company</p>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/about", label: "About" },
              { to: "/faq", label: "FAQ" },
              { to: "/contact", label: "Contact" },
              { to: "/disclaimer", label: "Disclaimer" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal" className="md:col-span-2">
          <p className="label-mono">Legal</p>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms & Conditions" },
              { to: "/refund-policy", label: "Refund Policy" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="rule-t">
        <div className="shell flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="label-mono">© {new Date().getFullYear()} Streamlinx Help Connectivity Desk</p>
          <p className="max-w-2xl text-xs text-muted-foreground">
            Third-party disclosure: Streamlinx Help is not affiliated with, endorsed by, or acting on
            behalf of any internet, cable, TV or streaming provider. All brand names referenced
            remain the property of their respective owners. Availability, features and pricing vary
            by address and change over time.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({
  index,
  eyebrow,
  title,
  lead,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="shell grid gap-8 pb-14 pt-16 md:grid-cols-12 md:pb-20 md:pt-24">
      <div className="md:col-span-3">
        <p className="label-mono">
          {index} / {eyebrow}
        </p>
      </div>
      <div className="md:col-span-9">
        <h1 className="display-lg">{title}</h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">{lead}</p>
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <ul className="rule-t">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <li key={item.q} className="rule-b">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-start justify-between gap-8 py-6 text-left transition-colors hover:text-accent"
            >
              <span className="flex gap-6">
                <span className="label-mono pt-2">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-xl font-extrabold uppercase md:text-2xl">
                  {item.q}
                </span>
              </span>
              <span className="label-mono pt-2">{open ? "—" : "+"}</span>
            </button>
            <div
              className="grid overflow-hidden transition-all duration-500"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <p className="min-h-0 max-w-3xl pb-7 pl-0 text-sm text-muted-foreground md:pl-[4.5rem]">
                {item.a}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
