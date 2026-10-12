import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

const SITE_URL = "https://streamlinxhelp.online";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
}

export function usePageMeta({
  title,
  description,
  keywords,
}: {
  title: string;
  description?: string;
  keywords?: string;
}) {
  const router = useRouter();
  const path = router.state.location.pathname;

  useEffect(() => {
    document.title = title;

    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
    }

    if (keywords) {
      setMeta("name", "keywords", keywords);
    }

    setMeta("property", "og:title", title);
    setMeta("name", "twitter:title", title);

    const canonical = `${SITE_URL}${path}`;
    setCanonical(canonical);
    setMeta("property", "og:url", canonical);
  }, [title, description, keywords, path]);
}
