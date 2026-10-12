import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";

import { SiteHeader, SiteFooter } from "../components/site-chrome";

function NotFoundComponent() {
  return (
    <div className="shell flex min-h-[70vh] flex-col justify-center py-24">
      <p className="label-mono">Error / 404</p>
      <h1 className="display-lg mt-6">Page not found</h1>
      <p className="mt-6 max-w-lg text-muted-foreground">
        This page has moved or never existed. Return to the homepage to keep exploring connectivity
        information.
      </p>
      <div className="mt-10">
        <Link to="/" className="btn-accent">
          Back to home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="shell flex min-h-[70vh] flex-col justify-center py-24">
      <p className="label-mono">Error / 500</p>
      <h1 className="display-lg mt-6">This page didn&apos;t load</h1>
      <p className="mt-6 max-w-lg text-muted-foreground">
        Something went wrong on our end. Try again or head back to the homepage.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="btn-accent"
        >
          Try again
        </button>
        <a href="/" className="btn-outline">
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
