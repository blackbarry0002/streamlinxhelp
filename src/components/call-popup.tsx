import { useEffect, useState } from "react";

const SESSION_KEY = "streamlinx_cta_shown";

export function CallPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show on every fresh session load (clears when the tab/browser closes)
    const shown = sessionStorage.getItem(SESSION_KEY);
    if (!shown) {
      // Small delay so the page paints first
      const t = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem(SESSION_KEY, "1");
      }, 400);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Card */}
      <div className="relative w-full max-w-lg border border-line-strong bg-ivory p-8 md:p-10">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="absolute right-4 top-4 border border-line-strong px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ✕
        </button>

        <p className="label-mono">Limited time</p>
        <h2 className="display-lg mt-5">
          Talk to an advisor <span className="text-accent">now.</span>
        </h2>
        <p className="mt-6 text-sm text-muted-foreground">
          Independent guidance on internet, cable, TV and streaming options at
          your address. No obligation, no affiliation, no pressure.
        </p>

        <a href="tel:+18338900256" className="btn-accent mt-8 inline-flex">
          +1 833 890 0256
        </a>

        <p className="mt-4 text-xs text-muted-foreground">
          Mon–Sat · 8am–9pm · Median time to reach a human is under ten minutes.
        </p>
      </div>
    </div>
  );
}
