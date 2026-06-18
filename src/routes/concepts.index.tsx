import { createFileRoute, Link } from "@tanstack/react-router";
import { concepts } from "@/lib/concepts";

export const Route = createFileRoute("/concepts/")({
  head: () => ({
    meta: [
      { title: "Our Works — Monster The Car World" },
      { name: "description", content: "Recent car modification projects from Monster The Car World — PPF, color wraps, custom interiors, body kits and audio builds. Galleries and video for each project." },
      { property: "og:title", content: "Our Works — Monster The Car World" },
      { property: "og:description", content: "Recent modification projects with full galleries and video." },
      { property: "og:url", content: "/concepts" },
    ],
    links: [{ rel: "canonical", href: "/concepts" }],
  }),
  component: ConceptsIndex,
});

function ConceptsIndex() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.3em] text-ember">From The Studio</div>
        <h1 className="mt-2 text-display text-6xl md:text-8xl leading-[0.9]">Our Works.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Recent projects from the Monster floor. Paint protection, custom interiors, body kits and audio — each build documented with a full gallery and a short film.
        </p>
      </div>

      <div className="mt-16 grid gap-10">
        {concepts.map((c, i) => (
          <Link
            key={c.slug}
            to="/concepts/$slug"
            params={{ slug: c.slug }}
            className="group relative grid md:grid-cols-12 gap-6 items-center rounded-2xl overflow-hidden border border-border/60 bg-card shadow-card hover:border-ember/50 transition"
          >
            <div className="md:col-span-7 aspect-[16/10] overflow-hidden">
              <img src={c.cover} alt={c.title} loading="lazy" decoding="async" width={1024} height={640} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="md:col-span-5 p-8 md:pr-10">
              <div className="text-xs uppercase tracking-[0.3em] text-ember">Project {String(i + 1).padStart(2, "0")}</div>
              <h2 className="mt-2 text-display text-4xl md:text-5xl">{c.title}</h2>
              <p className="mt-3 text-ember/90 italic">{c.tagline}</p>
              <p className="mt-4 text-sm text-muted-foreground line-clamp-3">{c.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground group-hover:text-ember transition">
                View Build <span aria-hidden>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
