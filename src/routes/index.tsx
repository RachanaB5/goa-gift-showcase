import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import heroHamper from "../assets/hero-hamper.jpg";
import bouquetImg from "../assets/bouquet.jpg";
import platterImg from "../assets/platter.jpg";
import hamperImg from "../assets/hamper.jpg";
import ribbonImg from "../assets/ribbon.jpg";
import villaHamperImg from "../assets/villa-hamper.jpg";
import trousseauImg from "../assets/trousseau.jpg";
import handsTyingImg from "../assets/hands-tying.jpg";
import ringPlatterImg from "../assets/ring-platter.jpg";
import bouquetHandImg from "../assets/bouquet-hand.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Art Box Goa — Bespoke Hampers, Bouquets & Wedding Rituals" },
      {
        name: "description",
        content:
          "A Goa-born atelier crafting bespoke hampers, dried bouquets, ring platters, trousseau packing and wedding hampers. Personalised, hand-tied, shipped across India.",
      },
      { property: "og:title", content: "The Art Box Goa — Bespoke Hampers & Gifts" },
      {
        property: "og:description",
        content:
          "Hand-tied hampers, bouquets, ring platters and trousseau — crafted with intention in Goa, shipped across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const marqueeItems = [
  "Bespoke Hampers",
  "Hand-tied Bouquets",
  "Ring Platters",
  "Trousseau Packing",
  "Wedding Hampers",
  "Corporate Gifting",
  "Customised Keepsakes",
];

const offerings = [
  {
    tag: "01",
    name: "Bouquets",
    line: "Dried, fresh & everlasting",
    body: "Hand-tied in handmade paper and jute — pastel, moody, or coastal. Built to be photographed, kept, and pressed.",
    image: bouquetHandImg,
  },
  {
    tag: "02",
    name: "Signature Hampers",
    line: "For every hello & thank you",
    body: "Curated boxes of Goan cocoa, artisan candles, silk scarves and hand-written notes. Layered like a love letter.",
    image: hamperImg,
  },
  {
    tag: "03",
    name: "Ring Platters",
    line: "The moment before the yes",
    body: "Gilded brass, velvet, fresh roses and pearls. A stage for the ring, the light, and the photograph you'll frame.",
    image: ringPlatterImg,
  },
  {
    tag: "04",
    name: "Trousseau Packing",
    line: "Every saree, a story",
    body: "Silks, jewellery, shagun — folded, wrapped and sealed by hand. Bespoke tags with the bride's name in gold foil.",
    image: trousseauImg,
  },
  {
    tag: "05",
    name: "Wedding Hampers",
    line: "For your favourite people",
    body: "Welcome boxes for the villa, hangover kits for the morning, thank-you hampers for the send-off. All in one language.",
    image: villaHamperImg,
  },
  {
    tag: "06",
    name: "Corporate Gifting",
    line: "Brand, but make it warm",
    body: "White-labelled hampers with your palette, your ribbon, your story. Shipped, tracked, delivered pan-India.",
    image: platterImg,
  },
];

const process = [
  { step: "I.", title: "You tell us the story", body: "The person, the moment, the mood. A colour they love. A joke only you two share." },
  { step: "II.", title: "We sketch the box", body: "A mood board of textures, ribbons, blooms and objects. You approve every layer." },
  { step: "III.", title: "Hand-tied in Goa", body: "Assembled in our studio in Assagao — wax seals, silk ribbon, a note in ink." },
  { step: "IV.", title: "At their door", body: "Insured, temperature-safe shipping across India. Local Goa delivery within the day." },
];

const journal = [
  { date: "Aug ’26", title: "The Monsoon Hamper", excerpt: "Cocoa, cardamom and a hand-loomed throw — built for Goan rain." },
  { date: "Jul ’26", title: "A Trousseau in Ivory", excerpt: "For a bride who wanted zero pink and every shade of cream." },
  { date: "Jun ’26", title: "Corporate, but soft", excerpt: "A pan-India rollout of 240 hampers for a homegrown label." },
];

const testimonials = [
  { quote: "The hamper made me cry. Genuinely. She thought of things I forgot to mention.", who: "Ananya R. · Bengaluru" },
  { quote: "Our wedding guests still talk about the welcome boxes. Every single detail was ours.", who: "Kabir & Meher · Alibaug wedding" },
  { quote: "We ship our brand hampers only through Art Box. Nobody wraps like them.", who: "Founder · Homegrown skincare label" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, active: false });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onScroll = () => {
      if (!heroRef.current || !mq.matches) return;
      const rect = heroRef.current.getBoundingClientRect();
      // parallax only while hero is on screen; negative so image drifts up
      const offset = Math.max(-80, Math.min(80, -rect.top * 0.12));
      heroRef.current.style.setProperty("--sy", String(offset));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-paper font-sans text-brand-deep overflow-x-hidden">
      <style>{`
        [data-reveal]{opacity:0;transform:translateY(28px);transition:opacity 1s ease,transform 1s cubic-bezier(.2,.7,.2,1)}
        [data-reveal].is-visible{opacity:1;transform:none}
        [data-reveal-delay="1"]{transition-delay:.1s}
        [data-reveal-delay="2"]{transition-delay:.22s}
        [data-reveal-delay="3"]{transition-delay:.34s}
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .marquee-track{animation:marquee 42s linear infinite}
        @keyframes floaty { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-12px) rotate(2deg)} }
        .floaty{animation:floaty 7s ease-in-out infinite}
        @keyframes spinSlow { to { transform: rotate(360deg) } }
        .spin-slow{animation:spinSlow 32s linear infinite}
        @keyframes kenburns { 0%{transform:scale(1) translate3d(0,0,0)} 100%{transform:scale(1.12) translate3d(-1%,-2%,0)} }
        .kenburns{animation:kenburns 14s ease-out both}
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        .shimmer-text{background:linear-gradient(90deg,var(--brand-accent) 0%,oklch(0.88 0.07 70) 40%,var(--brand-accent) 60%,oklch(0.6 0.12 45) 100%);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:shimmer 6s linear infinite}
        @keyframes blob { 0%,100%{border-radius:42% 58% 63% 37%/45% 55% 45% 55%;transform:translate(0,0) scale(1)} 33%{border-radius:60% 40% 30% 70%/50% 60% 40% 50%;transform:translate(8px,-6px) scale(1.03)} 66%{border-radius:35% 65% 55% 45%/55% 35% 65% 45%;transform:translate(-6px,8px) scale(.98)} }
        .blob{animation:blob 12s ease-in-out infinite}
        @keyframes glow { 0%,100%{box-shadow:0 0 0 0 oklch(0.76 0.11 58 / .35)} 50%{box-shadow:0 0 0 24px oklch(0.76 0.11 58 / 0)} }
        .glow-pulse{animation:glow 3s ease-out infinite}
        @keyframes drawLine { from{stroke-dashoffset:400} to{stroke-dashoffset:0} }
        @keyframes riseFade { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:none} }
        .rise{animation:riseFade 1.2s cubic-bezier(.2,.7,.2,1) both}
        .grain{position:relative}
        .grain::after{content:"";position:absolute;inset:0;pointer-events:none;opacity:.08;mix-blend-mode:multiply;background-image:radial-gradient(rgba(0,0,0,.7) 1px,transparent 1px);background-size:3px 3px}
        .stagger:hover img{transform:scale(1.08)}
        .stagger img{transition:transform 1.4s cubic-bezier(.2,.7,.2,1)}
        .link-underline{background-image:linear-gradient(currentColor,currentColor);background-size:0 1px;background-position:0 100%;background-repeat:no-repeat;transition:background-size .5s ease}
        .link-underline:hover{background-size:100% 1px}
        @media (min-width: 1024px){
          .hero-parallax{transform:translate3d(0,calc(var(--sy,0) * 1px),0);will-change:transform}
        }
        .tilt{transition:transform .6s cubic-bezier(.2,.7,.2,1)}
        .tilt:hover{transform:perspective(900px) rotateX(2deg) rotateY(-2deg) translateY(-4px)}
        @media (prefers-reduced-motion: reduce){
          *,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
        }
      `}</style>


      {/* Announcement bar */}
      <div className="bg-brand-deep text-brand-paper text-[11px] tracking-[0.25em] uppercase">
        <div className="overflow-hidden whitespace-nowrap py-2">
          <div className="marquee-track inline-flex gap-10">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((m, i) => (
              <span key={i} className="inline-flex items-center gap-10">
                <span>{m}</span>
                <span className="text-brand-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 lg:px-10 py-5 border-b border-brand-deep/10">
        <div className="text-[10px] uppercase tracking-[0.35em] font-medium hidden md:block">
          Est. Goa · Shipping Pan-India
        </div>
        <a href="#top" className="text-xl lg:text-[26px] font-display italic tracking-tight">
          The Art Box <span className="text-brand-accent">Goa</span>
        </a>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.28em] font-semibold">
          <a href="#offerings" className="link-underline">Atelier</a>
          <a href="#story" className="link-underline">Story</a>
          <a href="#journal" className="link-underline">Journal</a>
          <a href="#contact" className="link-underline">Order</a>
        </div>
        <a
          href="https://instagram.com/theartboxgoa"
          target="_blank"
          rel="noopener"
          className="md:hidden text-[10px] uppercase tracking-widest text-brand-accent"
        >
          DM
        </a>
      </nav>

      {/* Hero */}
      <section id="top" className="relative px-6 lg:px-10 pt-10 lg:pt-16 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 relative z-10">
            <div data-reveal className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-brand-clay mb-6">
              <span className="w-10 h-px bg-brand-clay" />
              A Goan gifting atelier — since the first ribbon
            </div>
            <h1
              data-reveal
              data-reveal-delay="1"
              className="font-display text-[13vw] leading-[0.92] lg:text-[9.5rem] tracking-[-0.03em]"
            >
              Gifts that <em className="italic shimmer-text">arrive</em>
              <br />
              like <span className="italic">letters.</span>

            </h1>
            <p data-reveal data-reveal-delay="2" className="mt-8 max-w-xl text-base lg:text-lg text-brand-deep/75 leading-relaxed">
              We are a two-woman studio in Goa hand-building hampers, bouquets and wedding
              rituals. Every box is a small ceremony — the ribbon, the wax seal, the
              note tucked between the tissue. No two the same. Ever.
            </p>
            <div data-reveal data-reveal-delay="3" className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-brand-deep text-brand-paper px-7 py-4 text-[11px] uppercase tracking-[0.28em] font-semibold hover:bg-brand-accent hover:text-brand-deep transition-colors glow-pulse"
              >
                Commission a hamper
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] font-semibold link-underline"
              >
                WhatsApp the studio
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { n: "4,878", l: "Kindred souls on Instagram" },
                { n: "721", l: "Boxes documented" },
                { n: "28", l: "Indian cities shipped" },
              ].map((s) => (
                <div key={s.l} data-reveal className="border-t border-brand-deep/20 pt-4">
                  <div className="font-display text-3xl lg:text-4xl">{s.n}</div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand-deep/60 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={heroRef} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden grain bg-brand-clay/10 tilt">
              <img
                src={heroHamper}
                alt="A hand-tied wedding hamper from The Art Box Goa"
                className="w-full h-full object-cover hero-parallax kenburns"
              />
              <div className="absolute top-4 left-4 bg-brand-paper/90 backdrop-blur px-3 py-2 text-[10px] uppercase tracking-[0.25em]">
                Studio No. 07 · Assagao
              </div>
              <div className="absolute bottom-4 right-4 bg-brand-deep text-brand-paper px-3 py-2 text-[10px] uppercase tracking-[0.25em]">
                Ships all over 🇮🇳
              </div>
            </div>
            <div className="absolute -bottom-8 -left-6 w-28 h-28 bg-brand-accent text-brand-paper flex items-center justify-center floaty shadow-xl blob">
              <div className="text-center text-[9px] uppercase tracking-[0.25em] leading-tight">
                Hand
                <br />
                tied
                <br />
                in Goa
              </div>
            </div>

            <svg className="absolute -top-6 -right-6 w-24 h-24 spin-slow text-brand-deep/70" viewBox="0 0 100 100">
              <defs>
                <path id="c" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
              </defs>
              <text fontSize="9" letterSpacing="4" fill="currentColor" fontFamily="Inter,sans-serif">
                <textPath href="#c">
                  · BESPOKE · HAND-TIED · SHIPPED PAN-INDIA · SINCE GOA ·
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Instagram bio strip */}
      <section className="bg-brand-deep text-brand-paper px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5" data-reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-4">@theartboxgoa</div>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.02] italic">
              "Hampers &amp; gifts — <br />crafted with <span className="text-brand-accent">intention.</span>"
            </h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8 text-brand-paper/85">
            <p data-reveal data-reveal-delay="1" className="leading-relaxed">
              We are entrepreneurs, florists, wrapping-nerds and full-time Goa lovers. What
              began as a table of dried flowers in Assagao is now a small atelier shipping
              boxes to weddings, boardrooms and best-friends across the country.
            </p>
            <p data-reveal data-reveal-delay="2" className="leading-relaxed">
              Everything you see is made in-house — the sourcing, the styling, the ribbon
              you'll want to keep, and the tag with your handwriting scanned in. DM us for
              collaborations — brands, weddings, or a hamper that has to say something no
              store-bought box could.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-brand-clay mb-3">The Atelier · No. 01–06</div>
            <h2 data-reveal className="font-display text-5xl lg:text-7xl tracking-tight">
              Six ways we <em className="italic text-brand-accent">say it</em> for you.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-brand-deep/70 text-sm leading-relaxed">
            Not a catalogue — a starting point. Every commission is scoped to the person
            receiving it. Prices begin at ₹1,800 and travel upwards for full-scale wedding
            productions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {offerings.map((o, i) => (
            <article
              key={o.name}
              data-reveal
              data-reveal-delay={String((i % 3) + 1)}
              className="stagger group relative bg-card grain overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={o.image} alt={o.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <div className="font-display text-2xl">{o.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-brand-clay">{o.tag}</div>
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-brand-accent mb-3">{o.line}</div>
                <p className="text-sm text-brand-deep/75 leading-relaxed">{o.body}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
            </article>
          ))}
        </div>
      </section>

      {/* Story split */}
      <section id="story" className="bg-brand-clay/10 grain">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:min-h-[720px]">
            <img src={handsTyingImg} alt="Hands tying a silk ribbon on a linen hamper" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="px-6 lg:px-16 py-20 lg:py-28 flex flex-col justify-center">
            <div data-reveal className="text-[11px] uppercase tracking-[0.3em] text-brand-clay mb-4">
              The people behind the boxes
            </div>
            <h2 data-reveal data-reveal-delay="1" className="font-display text-4xl lg:text-6xl leading-[1.05] mb-8">
              Two women. <br />
              One small studio. <br />
              <em className="italic text-brand-accent">Endless ribbon.</em>
            </h2>
            <p data-reveal data-reveal-delay="2" className="text-brand-deep/80 leading-relaxed mb-4">
              We grew up in Goan homes where every festival came with a tray — of sweets,
              of favours, of things carefully arranged before being carried across the
              lane. The Art Box is that memory, formalised.
            </p>
            <p data-reveal data-reveal-delay="3" className="text-brand-deep/80 leading-relaxed mb-8">
              We source ribbon from a mill in Surat, wax from a chandler in Fontainhas,
              cocoa from a farm in South Goa and blooms from a flower auntie in Mapusa
              who's been in the business longer than we've been alive.
            </p>
            <div data-reveal className="grid grid-cols-2 gap-8 border-t border-brand-deep/15 pt-8">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-brand-clay">Studio</div>
                <div className="font-display text-xl mt-1">Assagao, North Goa</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-brand-clay">Founded</div>
                <div className="font-display text-xl mt-1">On a rainy July</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-brand-clay">Lead time</div>
                <div className="font-display text-xl mt-1">5–14 days, bespoke</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-brand-clay">Ships</div>
                <div className="font-display text-xl mt-1">All 28 states, 🇮🇳</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-4xl">
          <div className="text-[11px] uppercase tracking-[0.3em] text-brand-clay mb-3">The Ritual</div>
          <h2 data-reveal className="font-display text-5xl lg:text-7xl tracking-tight mb-4">
            From a <em className="italic text-brand-accent">DM</em> to a door.
          </h2>
          <p data-reveal className="text-brand-deep/70 max-w-xl">Four small acts. About two weeks, sometimes less. Every step by hand.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {process.map((p, i) => (
            <div
              key={p.step}
              data-reveal
              data-reveal-delay={String((i % 3) + 1)}
              className="relative bg-brand-paper border border-brand-deep/10 p-8 hover:border-brand-accent transition-colors group"
            >
              <div className="font-display text-6xl text-brand-accent/70 group-hover:text-brand-accent transition-colors">
                {p.step}
              </div>
              <div className="mt-6 font-display text-2xl">{p.title}</div>
              <p className="mt-3 text-sm text-brand-deep/70 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials — horizontal scroll */}
      <section className="bg-brand-deep text-brand-paper py-20 lg:py-24">
        <div className="px-6 lg:px-10 mb-12">
          <div className="text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-3">Kind words</div>
          <h2 data-reveal className="font-display text-4xl lg:text-6xl">What arrives with the box.</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 lg:px-10 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((t) => (
            <figure
              key={t.who}
              className="snap-start shrink-0 w-[85%] md:w-[45%] lg:w-[32%] bg-brand-paper text-brand-deep p-8 lg:p-10 grain"
            >
              <div className="font-display text-5xl leading-none text-brand-accent mb-4">"</div>
              <blockquote className="font-display italic text-xl lg:text-2xl leading-snug">{t.quote}</blockquote>
              <figcaption className="mt-6 text-[10px] uppercase tracking-[0.25em] text-brand-deep/60">
                {t.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Instagram grid */}
      <section
        id="journal"
        className="px-6 lg:px-10 py-20 lg:py-28"
        onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY, active: true })}
        onMouseLeave={() => setCursorPos((c) => ({ ...c, active: false }))}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-brand-clay mb-3">The Feed · @theartboxgoa</div>
            <h2 data-reveal className="font-display text-4xl lg:text-6xl">Recently, on the studio floor.</h2>
          </div>
          <a
            href="https://instagram.com/theartboxgoa"
            target="_blank"
            rel="noopener"
            className="text-[11px] uppercase tracking-[0.28em] link-underline"
          >
            Follow along →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {[trousseauImg, bouquetImg, hamperImg, ringPlatterImg, ribbonImg, villaHamperImg, bouquetHandImg, platterImg].map((img, i) => (
            <a
              key={i}
              href="https://instagram.com/theartboxgoa"
              target="_blank"
              rel="noopener"
              data-reveal
              data-reveal-delay={String((i % 3) + 1)}
              className="stagger relative aspect-square overflow-hidden grain group block"
            >
              <img src={img} alt="Instagram post from The Art Box Goa" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-deep/0 group-hover:bg-brand-deep/50 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-brand-paper text-[10px] uppercase tracking-[0.3em]">View ↗</span>
              </div>
            </a>
          ))}
        </div>

        {/* Editorial notes */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {journal.map((j) => (
            <article key={j.title} data-reveal className="border-t border-brand-deep/20 pt-6">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-clay">{j.date}</div>
              <h3 className="font-display text-2xl mt-2">{j.title}</h3>
              <p className="text-sm text-brand-deep/70 mt-3 leading-relaxed">{j.excerpt}</p>
            </article>
          ))}
        </div>

        {cursorPos.active && (
          <div
            className="pointer-events-none fixed z-50 hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-brand-accent text-brand-paper text-[10px] uppercase tracking-[0.25em] mix-blend-multiply"
            style={{ left: cursorPos.x - 48, top: cursorPos.y - 48, transition: "transform .2s ease" }}
          >
            View feed
          </div>
        )}
      </section>

      {/* FAQ */}
      <section className="bg-brand-paper px-6 lg:px-10 py-20 lg:py-28 border-t border-brand-deep/10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.3em] text-brand-clay mb-3">Small print, warmly</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight">
              Before you <em className="italic text-brand-accent">DM.</em>
            </h2>
          </div>
          <div className="lg:col-span-8">
            {[
              { q: "How far in advance should I order?", a: "For a single hamper, 5–7 days. For weddings and bulk (20+), please give us 3–4 weeks so we can source, sample and ship without cutting corners." },
              { q: "Do you ship outside Goa?", a: "Yes — pan-India, insured, temperature-safe for anything perishable. Local Goa deliveries are hand-carried within the day." },
              { q: "Can I fully customise the box?", a: "Always. Palette, ribbon, contents, the note in your handwriting. Send us a Pinterest board or a paragraph — either works." },
              { q: "Do you take brand & corporate orders?", a: "Yes. From 20 to 2,000 units. White-labelled tags, custom ribbons, and full logistics coordination. Drop us a DM with brief and quantity." },
              { q: "What about returns?", a: "Because every hamper is bespoke, we don't take returns — but we sample, share photos, and get your approval before we seal the box." },
            ].map((f, i) => (
              <button
                key={f.q}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left border-b border-brand-deep/15 py-6 group"
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="font-display text-xl lg:text-2xl">{f.q}</span>
                  <span className={`text-brand-accent text-2xl transition-transform duration-500 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </div>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: openFaq === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pt-4 text-brand-deep/75 leading-relaxed max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="bg-brand-accent text-brand-paper grain px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-5xl">
          <div className="text-[11px] uppercase tracking-[0.3em] mb-4 opacity-80">DM for collaboration · orders · weddings</div>
          <h2 data-reveal className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tight">
            Let's make <em className="italic">something</em>
            <br />
            they'll <em className="italic">keep.</em>
          </h2>
          <p data-reveal data-reveal-delay="1" className="mt-8 max-w-xl text-brand-paper/90 text-lg leading-relaxed">
            Tell us the person, the moment, the mood — even a colour will do. We'll take it
            from there and reply within a day (usually with a mood board attached).
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl">
            <a
              href="https://instagram.com/theartboxgoa"
              target="_blank"
              rel="noopener"
              className="group bg-brand-paper text-brand-deep px-8 py-6 flex items-center justify-between hover:bg-brand-deep hover:text-brand-paper transition-colors"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] opacity-60">Preferred</div>
                <div className="font-display text-2xl mt-1">Instagram DM</div>
              </div>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">↗</span>
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener"
              className="group bg-brand-deep text-brand-paper px-8 py-6 flex items-center justify-between hover:bg-brand-paper hover:text-brand-deep transition-colors"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] opacity-60">Faster for briefs</div>
                <div className="font-display text-2xl mt-1">WhatsApp</div>
              </div>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">↗</span>
            </a>
            <a
              href="mailto:hello@theartboxgoa.com"
              className="group bg-brand-deep/20 border border-brand-paper/40 px-8 py-6 flex items-center justify-between hover:bg-brand-paper hover:text-brand-deep transition-colors sm:col-span-2"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] opacity-70">For brands & weddings</div>
                <div className="font-display text-2xl mt-1">hello@theartboxgoa.com</div>
              </div>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-deep text-brand-paper px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-display italic text-3xl">
              The Art Box <span className="text-brand-accent">Goa</span>
            </div>
            <p className="text-brand-paper/70 mt-4 max-w-sm leading-relaxed">
              Bespoke hampers, bouquets and wedding rituals. Made slowly, in Goa, and sent
              anywhere in India you'd like.
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] opacity-60 mb-4">Studio</div>
            <ul className="space-y-2 text-sm text-brand-paper/85">
              <li>Assagao, North Goa</li>
              <li>Open by appointment</li>
              <li>Mon – Sat, 10 – 7</li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] opacity-60 mb-4">Elsewhere</div>
            <ul className="space-y-2 text-sm">
              <li><a className="link-underline" href="https://instagram.com/theartboxgoa" target="_blank" rel="noopener">Instagram · @theartboxgoa</a></li>
              <li><a className="link-underline" href="https://wa.me/919999999999" target="_blank" rel="noopener">WhatsApp the studio</a></li>
              <li><a className="link-underline" href="mailto:hello@theartboxgoa.com">hello@theartboxgoa.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-brand-paper/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-brand-paper/60">
          <div>© {new Date().getFullYear()} The Art Box Goa · All ribbons reserved</div>
          <div>Hand-tied in Goa · Shipped 🇮🇳</div>
        </div>
      </footer>
    </div>
  );
}
