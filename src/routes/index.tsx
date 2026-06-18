import { createFileRoute, Link } from "@tanstack/react-router";
import heroCar from "@/assets/hero-car.jpg";
import showroom from "@/assets/showroom.jpg";
import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";
import collabAliens from "@/assets/collab-aliens.jpg";
import collabPearl from "@/assets/collab-pearl.jpg";
import collabVnext from "@/assets/collab-vnext.jpg";
import collabVista from "@/assets/collab-vista.jpg";
import { concepts } from "@/lib/concepts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monster The Car World — Car Modification Studio in Bardoli" },
      { name: "description", content: "Premium car modification studio in Bardoli, Gujarat. PPF, color PPF, ceramic coating, alloy wheels, body kits and audio systems. 5.0★ rated on Google." },
      { property: "og:title", content: "Monster The Car World — Car Modification Studio" },
      { property: "og:description", content: "PPF, coating, custom interior, body kits and audio. Bardoli's 5.0★ rated modification studio." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  { name: "Paint Protection Film", tag: "PPF · Clear self-healing film", desc: "Invisible armour against stone chips, swirl marks and minor scratches." },
  { name: "Color PPF", tag: "Wrap · Matte, satin, gloss", desc: "Change the entire look of your car without touching the factory paint." },
  { name: "Ceramic Coating", tag: "9H · Long-term gloss", desc: "Deep hydrophobic shine that protects clear-coat from UV, dirt and water spots." },
  { name: "Alloy Wheels", tag: "Forged · Flow Form · Off-Road", desc: "Premium alloy wheel upgrades — fitment, finish and stance tuned to your spec." },
  { name: "Body Kit Installation", tag: "Aero · Spoilers · Diffusers", desc: "OEM+ and aftermarket body kits, fitted and painted to factory standard." },
  { name: "Audio Systems", tag: "Sound · Damping · Subwoofers", desc: "Reference-grade audio upgrades, custom enclosures and full cabin damping." },
];

const reviews = [
  { name: "Rohit P.", text: "Got full body PPF and ceramic coating done. Finish is flawless and the team explained every step. Highly recommended in Bardoli!", stars: 5 },
  { name: "Kiran S.", text: "Got alloy wheels and ceramic coating done here. The stance and finish turned heads everywhere. Truly premium work in Bardoli!", stars: 5 },
  { name: "Mehul D.", text: "Installed a body kit and sound system here. Best modification studio in the Surat–Bardoli belt. Trust-worthy people.", stars: 5 },
];

const founders = [
  { name: "Atit Upadhyay", role: "Co-Founder", img: founder1, bio: "" },
  { name: "Jigar Darbar", role: "Co-Founder", img: founder2, bio: "" },
];

const collaborations = [
  { name: "Aliens World", img: collabAliens },
  { name: "Pearl Maxx", img: collabPearl },
  { name: "VNext", img: collabVnext, photo: true },
  { name: "Vista Auto", img: collabVista },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-ember">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.402 8.172L12 18.896l-7.336 3.869 1.402-8.172L.132 9.211l8.2-1.193z"/></svg>
      ))}
    </div>
  );
}

function Index() {
  const featured = concepts.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden grain">
        <img src={heroCar} alt="Custom modified car at Monster The Car World studio" width={1920} height={1080} loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.13 0.01 60 / 0.5) 0%, oklch(0.13 0.01 60 / 0.2) 40%, oklch(0.13 0.01 60) 100%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 min-h-[92vh] flex flex-col justify-end">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ember">
            <span className="h-px w-10 bg-ember" /> Bardoli · Car Modification Studio
          </div>
          <h1 className="mt-6 text-display text-[clamp(3.5rem,11vw,10rem)] leading-[0.85]">
            MONSTER<br />
            <span className="text-ember">THE CAR WORLD</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            PPF, coating, custom interiors, body kits and audio — Bardoli's 5-star rated car modification studio. Built on craft, driven by passion.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#services" className="inline-flex items-center gap-2 rounded-md gradient-ember px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-ember hover:translate-y-[-2px] transition">
              Explore Services →
            </a>
            <Link to="/concepts" className="inline-flex items-center gap-2 rounded-md border border-border/80 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-secondary transition">
              See Our Works
            </Link>
            <div className="flex items-center gap-3 pl-2">
              <Stars n={5} />
              <span className="text-sm text-muted-foreground"><span className="text-foreground font-semibold">5.0</span> · 102 reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border/50 bg-card/40 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["1000+", "Cars Modified"],
            ["5.0★", "Google Rated"],
            ["100+", "Verified Reviews"],
            ["10+", "Years of Craft"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-display text-5xl text-ember">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ember">What We Do</div>
            <h2 className="mt-2 text-display text-6xl md:text-7xl">Our Services</h2>
          </div>
          <p className="max-w-md text-muted-foreground">From paint protection to full custom interiors — every job in-house, every detail accounted for.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article key={i} className="group relative rounded-xl bg-card border border-border/60 shadow-card p-6 hover:border-ember/50 transition">
              <h3 className="text-display text-2xl">{s.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.tag}</p>
              <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* OUR WORKS PREVIEW */}
      <section id="works" className="mx-auto max-w-7xl px-6 py-24 border-t border-border/40">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ember">From The Studio</div>
            <h2 className="mt-2 text-display text-6xl md:text-7xl">Our Works</h2>
          </div>
          <p className="max-w-md text-muted-foreground">A glimpse of recent builds — paint, stance, sound and feel, captured in the studio.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {featured.map((c) => (
            <Link
              key={c.slug}
              to="/concepts/$slug"
              params={{ slug: c.slug }}
              className="group relative overflow-hidden rounded-xl border border-border/60 bg-card shadow-card hover:border-ember/50 transition"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.cover} alt={c.title} loading="lazy" decoding="async" width={800} height={1000} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background via-background/80 to-transparent">
                <h3 className="text-display text-2xl">{c.title}</h3>
                <p className="text-xs uppercase tracking-widest text-ember mt-1">View Build →</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/concepts" className="inline-flex items-center gap-2 rounded-md gradient-ember px-7 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-ember hover:translate-y-[-2px] transition">
            See More →
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={showroom} alt="Inside Monster The Car World modification studio in Bardoli" loading="lazy" decoding="async" width={1024} height={1024} className="rounded-xl shadow-card" />
            <div className="absolute -bottom-6 -right-6 bg-card border border-border/60 rounded-xl p-5 shadow-ember hidden md:block">
              <div className="text-display text-4xl text-ember">5.0★</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Google Verified</div>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ember">About Us</div>
            <h2 className="mt-2 text-display text-5xl md:text-6xl">Built On Craft.<br/>Driven By Passion.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Monster The Car World is Bardoli's destination for premium car modifications. From paint protection and ceramic coating to alloy wheels, body kits and audio — every project on our floor is hand-built, quality-checked and finished to the highest standard.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We don't just modify cars — we deliver confidence. Transparent pricing, OEM-grade materials, real warranties and post-job support are part of every handshake.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Certified Installers","Genuine Materials","Warranty Backed","Free Inspection"].map(f => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />{f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section id="founders" className="mx-auto max-w-7xl px-6 py-24 border-t border-border/40">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-ember">The Team</div>
          <h2 className="mt-2 text-display text-5xl md:text-6xl">Meet The Founders</h2>
          <p className="mt-4 text-muted-foreground">The two minds behind every build that rolls out of the Monster studio.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {founders.map((f) => (
            <article key={f.name} className="group rounded-2xl overflow-hidden border border-border/60 bg-card shadow-card hover:border-ember/50 transition">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={f.img} alt={f.name} loading="lazy" decoding="async" width={1024} height={1280} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-display text-3xl">{f.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-ember">{f.role}</p>
                <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{f.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COLLABORATIONS */}
      <section id="collaborations" className="mx-auto max-w-7xl px-6 py-24 border-t border-border/40">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-ember">Partners</div>
          <h2 className="mt-2 text-display text-5xl md:text-6xl">Our Collaborations</h2>
          <p className="mt-4 text-muted-foreground">Trusted brands and partners we work with to bring the best to your build.</p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">

          {collaborations.map((c) => (
            <article key={c.name} className="group rounded-2xl overflow-hidden border border-border/60 bg-card shadow-card hover:border-ember/50 transition">
              <div
                className={
                  c.photo
                    ? "aspect-[4/3] overflow-hidden"
                    : "flex aspect-[4/3] items-center justify-center bg-secondary/25 p-6 md:p-8"
                }
              >
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  decoding="async"
                  className={
                    c.photo
                      ? "h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      : "max-h-full max-w-full object-contain transition duration-700 group-hover:scale-105"
                  }
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-display text-xl">{c.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-ember">Reviews</div>
          <h2 className="mt-2 text-display text-5xl md:text-6xl">What Drivers Say</h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Stars n={5} /><span className="text-muted-foreground">5.0 from 102 Google reviews</span>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure key={i} className="rounded-xl bg-card border border-border/60 p-6 shadow-card">
              <Stars n={r.stars} />
              <blockquote className="mt-4 text-foreground/90 leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* VISIT / CONTACT */}
      <section id="visit" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ember">Visit The Studio</div>
            <h2 className="mt-2 text-display text-5xl md:text-6xl">Come See It In Person.</h2>
            <p className="mt-4 text-muted-foreground max-w-md">Pull up to our studio on Surat–Bardoli Road. Walk the floor, meet the team and get a free inspection.</p>

            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="uppercase tracking-widest text-ember text-xs">Address</dt>
                <dd className="mt-1 text-foreground">Surat - Bardoli Rd, GIDC, Kadodara,<br />Bardoli, Gujarat 394601<br /><span className="text-muted-foreground">Located in Nandida chokdi · Plus code: 43CM+GJ</span></dd>
              </div>
              <div>
                <dt className="uppercase tracking-widest text-ember text-xs">Hours</dt>
                <dd className="mt-1">Open today · Closes 7:30 PM</dd>
              </div>
              <div>
                <dt className="uppercase tracking-widest text-ember text-xs">Get In Touch</dt>
                <dd className="mt-1 flex flex-wrap gap-3">
                  <a href="tel:+919000000000" className="inline-flex items-center rounded-md gradient-ember px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-ember">Call Us</a>
                  <a href="https://www.google.com/maps?q=Monster+The+Car+World+Bardoli" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold hover:bg-secondary">Directions →</a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl overflow-hidden border border-border/60 shadow-card min-h-[420px]">
            <iframe
              title="Monster The Car World on Google Maps"
              src="https://www.google.com/maps?q=Monster+The+Car+World,+Surat-Bardoli+Rd,+Kadodara,+Bardoli,+Gujarat+394601&output=embed"
              className="w-full h-full min-h-[420px] grayscale-[0.3] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
