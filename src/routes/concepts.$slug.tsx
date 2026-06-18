import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { concepts, getConcept, type Concept } from "@/lib/concepts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/concepts/$slug")({
  loader: ({ params }) => {
    const concept = getConcept(params.slug);
    if (!concept) throw notFound();
    return { concept };
  },
  head: ({ params, loaderData }) => {
    const c = loaderData?.concept;
    const title = c ? `${c.title} — Our Works | Monster` : "Project — Monster";
    const desc = c?.description ?? "Modification project from Monster The Car World.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: c?.cover ?? "" },
        { property: "og:url", content: `/concepts/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/concepts/${params.slug}` }],
    };
  },
  component: ConceptDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-display text-6xl text-ember">Not Found</h1>
      <p className="mt-4 text-muted-foreground">This project doesn't exist.</p>
      <Link to="/concepts" className="mt-8 inline-flex rounded-md gradient-ember px-5 py-2.5 text-sm font-semibold text-primary-foreground">Back to Our Works</Link>
    </div>
  ),
});

function ConceptGallery({ images, title }: { images: string[]; title: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
      <CarouselContent className="-ml-0">
        {images.map((src, i) => (
          <CarouselItem key={i} className="pl-0">
            <div className="overflow-hidden rounded-xl border border-border/60 aspect-[4/3] bg-card shadow-card">
              <img
                src={src}
                alt={`${title} — view ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 top-1/2 h-10 w-10 -translate-y-1/2 border-border/60 bg-background/80 hover:bg-background" />
      <CarouselNext className="right-4 top-1/2 h-10 w-10 -translate-y-1/2 border-border/60 bg-background/80 hover:bg-background" />
      <div className="mt-5 flex justify-center overflow-x-auto pb-1">
        <div className="flex gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            aria-label={`View ${title} — shot ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            onClick={() => api?.scrollTo(i)}
            className={`shrink-0 overflow-hidden rounded-lg border-2 transition ${
              i === current
                ? "border-ember opacity-100 ring-2 ring-ember/30"
                : "border-border/60 opacity-60 hover:opacity-100 hover:border-border"
            }`}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              width={160}
              height={120}
              className="aspect-[4/3] h-16 w-24 object-cover md:h-20 md:w-28"
            />
          </button>
        ))}
        </div>
      </div>
      <p className="mt-3 text-center text-xs uppercase tracking-widest text-muted-foreground">
        {current + 1} / {images.length}
      </p>
    </Carousel>
  );
}

function ConceptDetail() {
  const { concept } = Route.useLoaderData() as { concept: Concept };
  const idx = concepts.findIndex(c => c.slug === concept.slug);
  const next = concepts[(idx + 1) % concepts.length];

  return (
    <article>
      {/* HERO VIDEO */}
      <section className="relative h-[80vh] overflow-hidden">
        <video
          src={concept.video}
          poster={concept.cover}
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.13 0.01 60 / 0.4) 0%, transparent 30%, oklch(0.13 0.01 60) 100%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 h-full flex flex-col justify-end pb-16">
          <Link to="/concepts" className="text-xs uppercase tracking-[0.3em] text-ember hover:underline">← All Works</Link>
          <h1 className="mt-4 text-display text-[clamp(3rem,9vw,8rem)] leading-[0.9]">{concept.title}</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-foreground/80 italic">{concept.tagline}</p>
        </div>
      </section>

      {/* DESCRIPTION + SPECS */}
      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.3em] text-ember">The Project</div>
          <p className="mt-4 text-xl leading-relaxed text-foreground/90">{concept.description}</p>
        </div>
        <dl className="rounded-xl border border-border/60 bg-card p-6 shadow-card divide-y divide-border/60">
          {concept.specs.map(s => (
            <div key={s.label} className="py-3 first:pt-0 last:pb-0 flex justify-between text-sm">
              <dt className="uppercase tracking-widest text-muted-foreground text-xs">{s.label}</dt>
              <dd className="font-semibold">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex items-end justify-between">
          <h2 className="text-display text-4xl md:text-5xl">Gallery</h2>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">{concept.images.length} shots</span>
        </div>
        <div className="mt-8">
          <ConceptGallery images={concept.images} title={concept.title} />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-2xl border border-border/60 bg-card p-10 md:p-14 text-center shadow-card relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at center, var(--ember), transparent 70%)" }} />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.3em] text-ember">Book Your Build</div>
            <h3 className="mt-3 text-display text-4xl md:text-5xl">Visit the studio in Bardoli.</h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Bring your car in for a free inspection and quote. Our team is on the floor every day until 7:30 PM.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="tel:+919000000000" className="inline-flex rounded-md gradient-ember px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-ember">Call Us</a>
              <Link to="/concepts/$slug" params={{ slug: next.slug }} className="inline-flex rounded-md border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-secondary">
                Next Project: {next.title} →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
