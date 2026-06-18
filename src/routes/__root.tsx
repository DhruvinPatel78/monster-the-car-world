import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logo from "@/assets/logo.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display text-8xl text-ember">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Lost in the garage</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page doesn't exist. Let's get you back on the road.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md gradient-ember px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-ember">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-md gradient-ember px-4 py-2 text-sm font-semibold text-primary-foreground">Try again</button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Monster The Car World" },
      { name: "description", content: "Monster The Car World — Bardoli's premium car modification studio. PPF, color PPF, ceramic coating, alloy wheels, body kits and audio systems. 5.0★ on Google." },
      { name: "author", content: "Monster The Car World" },
      { property: "og:title", content: "Monster The Car World" },
      { property: "og:description", content: "Bardoli's premium car modification studio. PPF, coating, alloy wheels, body kits and audio. 5.0★ on Google." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Monster The Car World" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Monster The Car World" },
      { name: "twitter:description", content: "Bardoli's premium car modification studio. PPF, coating, alloy wheels, body kits and audio." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/57605fcf-a4a7-49dc-9962-1c5b7742fdf2/id-preview-4af4eea9--8c058898-1482-46dc-9e87-3cf560c9b1f3.lovable.app-1781686752239.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/57605fcf-a4a7-49dc-9962-1c5b7742fdf2/id-preview-4af4eea9--8c058898-1482-46dc-9e87-3cf560c9b1f3.lovable.app-1781686752239.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoBodyShop",
          name: "Monster The Car World",
          description: "Car modification studio offering PPF, color PPF, ceramic coating, alloy wheels, body kit installation and audio systems.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Surat - Bardoli Rd, GIDC, Kadodara",
            addressLocality: "Bardoli",
            addressRegion: "Gujarat",
            postalCode: "394601",
            addressCountry: "IN",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "102" },
          openingHours: "Mo-Su 09:00-19:30",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function BrandLogo() {
  return (
    <img
      src={logo}
      alt="Monster The Car World"
      width={48}
      height={48}
      className="h-9 w-9 shrink-0 rounded-md object-contain"
    />
  );
}

function BrandName() {
  return (
    <div className="leading-none">
      <span className="text-display text-xl tracking-wider">MONSTER<span className="text-ember">.</span></span>
      <span className="mt-0.5 block text-[0.6rem] uppercase tracking-[0.22em] text-ember">The Car World</span>
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <BrandLogo />
          <BrandName />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-muted-foreground">
          <a href="/#services" className="hover:text-foreground transition">Services</a>
          <Link to="/concepts" className="hover:text-foreground transition" activeProps={{ className: "text-ember" }}>Our Works</Link>
          <a href="/#about" className="hover:text-foreground transition">About</a>
          <a href="/#founders" className="hover:text-foreground transition">Founders</a>
          <a href="/#visit" className="hover:text-foreground transition">Visit</a>
        </nav>
        <a href="tel:+919000000000" className="hidden sm:inline-flex items-center rounded-md gradient-ember px-4 py-2 text-sm font-semibold text-primary-foreground shadow-ember hover:opacity-90 transition">
          Call Us
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <BrandLogo />
            <BrandName />
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">Bardoli's most trusted car modification studio — PPF, coating, alloy wheels, body kits and audio.</p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-ember">Visit</h4>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Surat - Bardoli Rd, GIDC, Kadodara<br />
            Bardoli, Gujarat 394601<br />
            <span className="text-foreground">Located in Nandida chokdi</span>
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-ember">Hours</h4>
          <p className="mt-3 text-sm text-muted-foreground">Open daily · Closes 7:30 PM</p>
          <p className="mt-2 text-xs text-muted-foreground">© {new Date().getFullYear()} Monster The Car World</p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="pt-16"><Outlet /></main>
      <Footer />
    </QueryClientProvider>
  );
}
