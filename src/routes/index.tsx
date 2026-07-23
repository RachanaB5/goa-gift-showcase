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
      { title: "The Art Box Goa — Handmade Hampers, Bouquets & Gifts by Samina" },
      {
        name: "description",
        content:
          "Made with love, just for you. Handmade hampers, bouquets, mystery jars, ring platters, trousseau packing and wedding hampers from Goa. DM @theartboxgoa to customise. Shipping pan-India.",
      },
      { property: "og:title", content: "The Art Box Goa — Made with love, just for you" },
      {
        property: "og:description",
        content:
          "Handmade hampers, bouquets and wedding gifting from Goa by Samina Sayed. Fully customised, shipped across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const heroSlides = [
  { img: heroHamper, label: "The Signature Hamper" },
  { img: bouquetHandImg, label: "Hand-tied Bouquets" },
  { img: ringPlatterImg, label: "Ring Platters" },
  { img: trousseauImg, label: "Trousseau, wrapped" },
];

const marqueeItems = [
  "Hampers",
  "Bouquets",
  "Customised Gifts",
  "Trousseau Packing",
  "Wedding Hampers",
  "Ring Platters",
  "Mystery Jars",
  "Engagement",
];

const categories = [
  { name: "Hampers", tag: "Signature", img: hamperImg },
  { name: "Bouquets", tag: "Fresh & dried", img: bouquetImg },
  { name: "Customised Gifts", tag: "DM to design", img: ribbonImg },
  { name: "Trousseau Packing", tag: "Bridal", img: trousseauImg },
  { name: "Wedding Hampers", tag: "For the tribe", img: villaHamperImg },
  { name: "Ring Platters", tag: "The yes", img: ringPlatterImg },
  { name: "Mystery Jars", tag: "Little surprises", img: platterImg },
  { name: "Engagement", tag: "The forever kind", img: bouquetHandImg },
];

const occasions = [
  { name: "Birthday", note: "Loud, layered, hers." , tint: "bg-brand-blush" },
  { name: "Anniversary", note: "Years, in a box.", tint: "bg-brand-ivory" },
  { name: "Eid / Ramadan", note: "Dates, ittar, memory.", tint: "bg-brand-forest/15" },
  { name: "Wedding / Nikah", note: "The whole family, wrapped.", tint: "bg-brand-forest/15" },
  { name: "Friendship Day", note: "Inside jokes, gilded.", tint: "bg-brand-accent/25" },
  { name: "Apology / Sorry", note: "When words won't do.", tint: "bg-brand-blush" },
  { name: "Father's Day", note: "Warm, quiet, his.", tint: "bg-brand-taupe/25" },
  { name: "Just because", note: "The best reason.", tint: "bg-brand-ivory" },
];

const celebrations = [trousseauImg, ringPlatterImg, villaHamperImg, bouquetImg, hamperImg, bouquetHandImg];

const process = [
  { step: "I.", title: "DM us the story", body: "The person, the moment, a colour, a memory. Even an emoji works." },
  { step: "II.", title: "We mood-board it", body: "Ribbons, blooms, contents. You approve every layer before we begin." },
  { step: "III.", title: "Hand-tied in Goa", body: "Wax seals, silk ribbon, a note in ink — assembled in our Assagao studio." },
  { step: "IV.", title: "At their door", body: "Insured, temperature-safe shipping across India. Same-day in Goa." },
];

const testimonials = [
  { quote: "The hamper made me cry. She thought of things I forgot to mention.", who: "Ananya R. · Bengaluru" },
  { quote: "Our nikah guests still talk about the welcome boxes. Every detail was ours.", who: "Meher & Kabir · Goa nikah" },
  { quote: "We ship our brand hampers only through Art Box. Nobody wraps like Samina.", who: "Founder · homegrown skincare" },
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
  const [slide, setSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const occasionsRef = useRef<HTMLDivElement>(null);

  // Tissue-paper unwrap loader
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  // Rotating hero showcase
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 3800);
    return () => clearInterval(t);
  }, []);

  // Desktop-only parallax on hero image
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onScroll = () => {
      if (!heroRef.current || !mq.matches) return;
      const rect = heroRef.current.getBoundingClientRect();
      const offset = Math.max(-70, Math.min(70, -rect.top * 0.1));
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

  const scrollOccasions = (dir: 1 | -1) => {
    const el = occasionsRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-brand-ivory font-sans text-brand-charcoal overflow-x-hidden">
      <style>{`
        [data-reveal]{opacity:0;transform:translateY(28px);transition:opacity .9s ease,transform .9s cubic-bezier(.2,.7,.2,1)}
        [data-reveal].is-visible{opacity:1;transform:none}
        [data-reveal-delay="1"]{transition-delay:.08s}
        [data-reveal-delay="2"]{transition-delay:.16s}
        [data-reveal-delay="3"]{transition-delay:.24s}
        [data-reveal-delay="4"]{transition-delay:.32s}
        [data-reveal-delay="5"]{transition-delay:.40s}
        [data-reveal-delay="6"]{transition-delay:.48s}
        [data-reveal-delay="7"]{transition-delay:.56s}
        [data-reveal-delay="8"]{transition-delay:.64s}
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .marquee-track{animation:marquee 40s linear infinite}
        @keyframes floaty { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-12px) rotate(2deg)} }
        .floaty{animation:floaty 7s ease-in-out infinite}
        @keyframes spinSlow { to { transform: rotate(360deg) } }
        .spin-slow{animation:spinSlow 30s linear infinite}
        @keyframes kenburns { 0%{transform:scale(1)} 100%{transform:scale(1.1) translate3d(-1%,-2%,0)} }
        .kenburns{animation:kenburns 12s ease-out both}
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        .shimmer-text{background:linear-gradient(90deg,var(--brand-deep) 0%,var(--brand-accent) 45%,var(--brand-deep) 55%,var(--brand-taupe) 100%);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:shimmer 6s linear infinite}
        @keyframes blob { 0%,100%{border-radius:42% 58% 63% 37%/45% 55% 45% 55%;transform:translate(0,0) scale(1)} 33%{border-radius:60% 40% 30% 70%/50% 60% 40% 50%;transform:translate(8px,-6px) scale(1.03)} 66%{border-radius:35% 65% 55% 45%/55% 35% 65% 45%;transform:translate(-6px,8px) scale(.98)} }
        .blob{animation:blob 12s ease-in-out infinite}
        @keyframes goldUnderline { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        .heading-gold{position:relative;display:inline-block}
        .heading-gold::after{content:"";position:absolute;left:0;bottom:-.15em;height:3px;width:100%;background:linear-gradient(90deg,transparent,var(--brand-accent) 20%,#fff8d6 50%,var(--brand-accent) 80%,transparent);transform:scaleX(0);transform-origin:left;transition:transform 1.1s cubic-bezier(.2,.7,.2,1) .2s;background-size:200% 100%;animation:shimmer 4s linear infinite}
        [data-reveal].is-visible .heading-gold::after{transform:scaleX(1)}
        @keyframes wapulse { 0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.55)} 50%{box-shadow:0 0 0 18px rgba(37,211,102,0)} }
        .wa-pulse{animation:wapulse 2.2s ease-out infinite}
        @keyframes ribbonBow { 0%{transform:rotate(0) scale(1)} 25%{transform:rotate(-8deg) scale(1.06)} 55%{transform:rotate(6deg) scale(1.04)} 100%{transform:rotate(0) scale(1)} }
        .card-cat:hover .ribbon{animation:ribbonBow .9s ease-in-out}
        .card-cat img{transition:transform 1.2s cubic-bezier(.2,.7,.2,1)}
        .card-cat:hover img{transform:scale(1.08)}
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        .fade-in{animation:fadeIn 1s ease both}
        .grain{position:relative}
        .grain::after{content:"";position:absolute;inset:0;pointer-events:none;opacity:.07;mix-blend-mode:multiply;background-image:radial-gradient(rgba(0,0,0,.7) 1px,transparent 1px);background-size:3px 3px}
        .link-underline{background-image:linear-gradient(currentColor,currentColor);background-size:0 1px;background-position:0 100%;background-repeat:no-repeat;transition:background-size .5s ease}
        .link-underline:hover{background-size:100% 1px}
        @media (min-width: 1024px){
          .hero-parallax{transform:translate3d(0,calc(var(--sy,0) * 1px),0);will-change:transform}
        }
        .tilt{transition:transform .6s cubic-bezier(.2,.7,.2,1)}
        .tilt:hover{transform:perspective(900px) rotateX(2deg) rotateY(-2deg) translateY(-4px)}
        .slide-enter{opacity:0;transform:scale(1.04)}
        .slide-in{opacity:1;transform:scale(1);transition:opacity 1s ease,transform 1.8s ease}
        /* Tissue-paper unwrap loader */
        @keyframes tissueLeft { to{transform:translateX(-110%) rotate(-6deg)} }
        @keyframes tissueRight { to{transform:translateX(110%) rotate(6deg)} }
        @keyframes bowPop { 0%{transform:scale(.4) rotate(-20deg);opacity:0} 60%{transform:scale(1.15) rotate(6deg);opacity:1} 100%{transform:scale(1) rotate(0);opacity:1} }
        .loader-wrap{position:fixed;inset:0;z-index:80;pointer-events:none;display:flex;align-items:center;justify-content:center}
        .loader-panel{position:absolute;top:0;bottom:0;width:52%;background:linear-gradient(180deg,var(--brand-blush),var(--brand-ivory));box-shadow:0 0 60px rgba(0,0,0,.06)}
        .loader-panel.left{left:0;transform-origin:left center;animation:tissueLeft 1.4s .35s cubic-bezier(.7,0,.3,1) forwards}
        .loader-panel.right{right:0;transform-origin:right center;animation:tissueRight 1.4s .35s cubic-bezier(.7,0,.3,1) forwards}
        .loader-bow{animation:bowPop 1s cubic-bezier(.2,.7,.2,1) both;color:var(--brand-deep);font-family:var(--font-display);font-style:italic;font-size:clamp(1.2rem,3vw,2rem);text-align:center}
        @media (prefers-reduced-motion: reduce){
          *,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
        }
      `}</style>

      {/* Tissue-paper unwrap loader */}
      {loading && (
        <div className="loader-wrap" aria-hidden>
          <div className="loader-panel left" />
          <div className="loader-panel right" />
          <div className="loader-bow relative z-10">
            <div className="text-brand-accent text-4xl mb-2">✦</div>
            unwrapping the studio…
          </div>
        </div>
      )}

      {/* Announcement bar */}
      <div className="bg-brand-deep text-brand-ivory text-[11px] tracking-[0.28em] uppercase">
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
      <nav className="flex items-center justify-between px-6 lg:px-10 py-5 border-b border-brand-charcoal/10 bg-brand-ivory/80 backdrop-blur sticky top-0 z-30">
        <div className="text-[10px] uppercase tracking-[0.32em] font-medium hidden md:block text-brand-charcoal/70">
          Goa · Shipping Pan-India 🇮🇳
        </div>
        <a href="#top" className="text-xl lg:text-[26px] font-display italic tracking-tight text-brand-deep">
          The Art Box <span className="text-brand-accent">Goa</span>
        </a>
        <div className="hidden md:flex gap-7 text-[11px] uppercase tracking-[0.26em] font-semibold text-brand-charcoal/85">
          <a href="#categories" className="link-underline">Shop</a>
          <a href="#occasions" className="link-underline">Occasions</a>
          <a href="#celebrations" className="link-underline">Real love</a>
          <a href="#founder" className="link-underline">Samina</a>
          <a href="#contact" className="link-underline">Order</a>
        </div>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener"
          className="md:hidden text-[10px] uppercase tracking-widest text-brand-deep font-semibold"
        >
          DM
        </a>
      </nav>

      {/* Hero */}
      <section id="top" className="relative px-6 lg:px-10 pt-10 lg:pt-16 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 relative z-10">
            <div data-reveal className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-brand-taupe mb-6">
              <span className="w-10 h-px bg-brand-taupe" />
              A handmade gifting atelier · Goa
            </div>
            <h1
              data-reveal
              data-reveal-delay="1"
              className="font-display text-[13vw] leading-[0.92] lg:text-[8.5rem] tracking-[-0.03em] text-brand-deep"
            >
              Made with <em className="italic shimmer-text">love,</em>
              <br />
              just for <span className="italic text-brand-accent">you.</span>
            </h1>
            <p data-reveal data-reveal-delay="2" className="mt-8 max-w-xl text-base lg:text-lg text-brand-charcoal/80 leading-relaxed">
              I'm Samina — the hands (and heart) behind The Art Box Goa. From my Assagao
              studio, I hand-build hampers, bouquets, mystery jars and wedding rituals for
              the people you love most. Every box is different. Every ribbon, tied twice.
            </p>
            <div data-reveal data-reveal-delay="3" className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-3 bg-brand-deep text-brand-ivory px-7 py-4 text-[11px] uppercase tracking-[0.28em] font-semibold hover:bg-brand-accent hover:text-brand-charcoal transition-colors"
              >
                Order on WhatsApp
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] font-semibold link-underline text-brand-deep"
              >
                DM @theartboxgoa
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { n: "4,878", l: "Instagram family" },
                { n: "721", l: "Boxes documented" },
                { n: "28+", l: "Indian cities shipped" },
              ].map((s) => (
                <div key={s.l} data-reveal className="border-t border-brand-charcoal/15 pt-4">
                  <div className="font-display text-3xl lg:text-4xl text-brand-deep">{s.n}</div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand-charcoal/60 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={heroRef} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden grain bg-brand-blush tilt">
              {heroSlides.map((s, i) => (
                <img
                  key={s.label}
                  src={s.img}
                  alt={s.label}
                  className={`absolute inset-0 w-full h-full object-cover hero-parallax kenburns transition-opacity duration-[1200ms] ${
                    slide === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute top-4 left-4 bg-brand-ivory/90 backdrop-blur px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-brand-charcoal">
                Studio No. 07 · Assagao
              </div>
              <div className="absolute bottom-4 right-4 bg-brand-deep text-brand-ivory px-3 py-2 text-[10px] uppercase tracking-[0.25em]">
                {heroSlides[slide].label}
              </div>
              <div className="absolute bottom-4 left-4 flex gap-1.5">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${slide === i ? "w-6 bg-brand-accent" : "w-1.5 bg-brand-ivory/80"}`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-8 -left-6 w-28 h-28 bg-brand-accent text-brand-charcoal flex items-center justify-center floaty shadow-xl blob">
              <div className="text-center text-[9px] uppercase tracking-[0.25em] leading-tight font-semibold">
                Hand
                <br />
                tied
                <br />
                in Goa
              </div>
            </div>
            <svg className="absolute -top-6 -right-6 w-24 h-24 spin-slow text-brand-deep/80" viewBox="0 0 100 100">
              <defs>
                <path id="c" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
              </defs>
              <text fontSize="9" letterSpacing="4" fill="currentColor" fontFamily="Inter,sans-serif">
                <textPath href="#c">
                  · MADE WITH LOVE · JUST FOR YOU · SHIPPED 🇮🇳 ·
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Category grid — mirrors IG highlights */}
      <section id="categories" className="px-6 lg:px-10 py-20 lg:py-28 bg-brand-blush/40 grain">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-brand-taupe mb-3">Shop by highlight</div>
            <h2 data-reveal className="font-display text-5xl lg:text-7xl tracking-tight text-brand-deep">
              <span className="heading-gold">Eight ways</span> to gift.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-brand-charcoal/70 text-sm leading-relaxed">
            The same categories you'll find in our Instagram highlights — hampers, bouquets,
            trousseau, mystery jars and more. Tap any, then DM to customise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((c, i) => (
            <a
              key={c.name}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener"
              data-reveal
              data-reveal-delay={String(((i % 4) + 1))}
              className="card-cat group relative bg-brand-ivory grain overflow-hidden block"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-3 right-3 ribbon text-brand-accent text-2xl select-none" aria-hidden>
                ❦
              </div>
              <div className="p-5">
                <div className="font-display text-xl lg:text-2xl text-brand-deep">{c.name}</div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-brand-taupe mt-1">{c.tag}</div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
            </a>
          ))}
        </div>
      </section>

      {/* Occasions carousel */}
      <section id="occasions" className="py-20 lg:py-28">
        <div className="px-6 lg:px-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-brand-taupe mb-3">Occasion-based drops</div>
            <h2 data-reveal className="font-display text-5xl lg:text-7xl tracking-tight text-brand-deep">
              For every <span className="heading-gold">little</span> reason.
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scrollOccasions(-1)} aria-label="Previous" className="w-11 h-11 border border-brand-charcoal/20 hover:bg-brand-deep hover:text-brand-ivory hover:border-brand-deep transition-colors">←</button>
            <button onClick={() => scrollOccasions(1)} aria-label="Next" className="w-11 h-11 border border-brand-charcoal/20 hover:bg-brand-deep hover:text-brand-ivory hover:border-brand-deep transition-colors">→</button>
          </div>
        </div>

        <div
          ref={occasionsRef}
          className="flex gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory px-6 lg:px-10 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
        >
          {occasions.map((o, i) => (
            <article
              key={o.name}
              data-reveal
              data-reveal-delay={String((i % 4) + 1)}
              className={`snap-start shrink-0 w-[75%] sm:w-[45%] md:w-[32%] lg:w-[24%] ${o.tint} grain p-8 lg:p-10 aspect-[3/4] flex flex-col justify-between border border-brand-charcoal/10 hover:border-brand-accent transition-colors`}
            >
              <div className="text-[10px] uppercase tracking-[0.28em] text-brand-taupe">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 className={`font-display text-3xl lg:text-4xl leading-tight ${o.name.includes("Nikah") || o.name.includes("Eid") ? "text-brand-forest" : "text-brand-deep"}`}>
                  {o.name}
                </h3>
                <p className="mt-3 text-sm text-brand-charcoal/75 italic">{o.note}</p>
              </div>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener"
                className="text-[10px] uppercase tracking-[0.28em] font-semibold text-brand-deep link-underline self-start"
              >
                DM to order →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Customisation callout */}
      <section className="px-6 lg:px-10 py-16 lg:py-24 bg-brand-deep text-brand-ivory grain">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4">Customisation is our whole thing</div>
            <h2 data-reveal className="font-display text-5xl lg:text-7xl leading-[1.02]">
              Nothing off the shelf.<br />
              <em className="italic text-brand-accent">Everything, for them.</em>
            </h2>
            <p data-reveal data-reveal-delay="1" className="mt-6 max-w-xl text-brand-ivory/80 leading-relaxed">
              We don't do a static catalogue — every hamper is designed for one person, one
              moment. Send us a Pinterest board, a paragraph, a favourite colour, or just
              their name. We'll take it from there.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {[
              { k: "Colour", v: "Yours, always" },
              { k: "Ribbon", v: "Silk, satin, jute" },
              { k: "Contents", v: "Fully picked with you" },
              { k: "Note", v: "In your handwriting" },
            ].map((d, i) => (
              <div key={d.k} data-reveal data-reveal-delay={String(i + 1)} className="border border-brand-ivory/20 p-5 hover:border-brand-accent transition-colors">
                <div className="text-[10px] uppercase tracking-[0.28em] text-brand-accent">{d.k}</div>
                <div className="font-display text-xl mt-2">{d.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real celebrations gallery */}
      <section id="celebrations" className="px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-brand-taupe mb-3">As seen in real celebrations</div>
            <h2 data-reveal className="font-display text-5xl lg:text-7xl tracking-tight text-brand-deep">
              Weddings, <span className="italic">mehendis,</span> <span className="heading-gold">nikahs.</span>
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-brand-charcoal/70 text-sm leading-relaxed">
            Real families, real moments. Our proudest work lives in other people's photos —
            here's a peek at some recent boxes on their way.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {celebrations.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener"
              data-reveal
              data-reveal-delay={String((i % 4) + 1)}
              className="card-cat relative aspect-square overflow-hidden grain group block"
            >
              <img src={img} alt="A celebration hamper" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-deep/0 group-hover:bg-brand-deep/45 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-brand-ivory text-[10px] uppercase tracking-[0.3em]">On Instagram ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Founder note */}
      <section id="founder" className="bg-brand-blush/50 grain">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:min-h-[720px]">
            <img src={handsTyingImg} alt="Samina tying a silk ribbon in the Assagao studio" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="px-6 lg:px-16 py-20 lg:py-28 flex flex-col justify-center">
            <div data-reveal className="text-[11px] uppercase tracking-[0.3em] text-brand-taupe mb-4">
              A note from the founder
            </div>
            <h2 data-reveal data-reveal-delay="1" className="font-display text-4xl lg:text-6xl leading-[1.05] mb-8 text-brand-deep">
              Hi, I'm <em className="italic text-brand-accent">Samina.</em>
            </h2>
            <p data-reveal data-reveal-delay="2" className="text-brand-charcoal/85 leading-relaxed mb-4">
              The Art Box began at my dining table in Assagao — with a roll of jute, three
              dried roses and a friend who needed a birthday gift by evening. That first
              box turned into another, and another, and here we are, a few hundred boxes in.
            </p>
            <p data-reveal data-reveal-delay="3" className="text-brand-charcoal/85 leading-relaxed mb-8">
              Every hamper I send out is one I'd be proud to receive. I still tie every
              ribbon myself. I still write the note. And I still cry a little when clients
              send me the unboxing videos. Thank you for trusting me with your people.
            </p>
            <div data-reveal className="flex items-center gap-4">
              <div className="font-display text-3xl italic text-brand-deep">— Samina Sayed</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-taupe">Founder · Art Box Goa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ritual / process */}
      <section className="px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-4xl">
          <div className="text-[11px] uppercase tracking-[0.3em] text-brand-taupe mb-3">The Ritual</div>
          <h2 data-reveal className="font-display text-5xl lg:text-7xl tracking-tight text-brand-deep">
            From a <em className="italic text-brand-accent">DM</em> to a door.
          </h2>
          <p data-reveal className="text-brand-charcoal/70 max-w-xl mt-4">Four small acts. About two weeks, sometimes less. Every step by hand.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {process.map((p, i) => (
            <div
              key={p.step}
              data-reveal
              data-reveal-delay={String((i % 4) + 1)}
              className="relative bg-brand-ivory border border-brand-charcoal/10 p-8 hover:border-brand-accent hover:-translate-y-1 transition-all group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-display text-6xl text-brand-accent/70 group-hover:text-brand-accent transition-colors">{p.step}</div>
              <div className="mt-6 font-display text-2xl text-brand-deep">{p.title}</div>
              <p className="mt-3 text-sm text-brand-charcoal/70 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shipping / trust */}
      <section className="px-6 lg:px-10 py-16 lg:py-20 bg-brand-forest text-brand-ivory grain">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-3">Shipping</div>
            <h3 className="font-display text-3xl lg:text-5xl leading-tight">
              Based in Goa. <em className="italic">Delivered all over India.</em>
            </h3>
            <p className="mt-4 max-w-2xl text-brand-ivory/85 leading-relaxed">
              Insured, temperature-safe shipping to every state in India. Same-day
              hand-delivery across North Goa. For weddings and bulk orders, we coordinate
              directly with your planner or venue.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { n: "🇮🇳", l: "Pan-India" },
              { n: "5–14", l: "Day lead time" },
              { n: "24h", l: "Goa delivery" },
            ].map((s) => (
              <div key={s.l} className="border border-brand-ivory/25 py-6">
                <div className="font-display text-2xl">{s.n}</div>
                <div className="text-[9px] uppercase tracking-[0.24em] mt-2 opacity-80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-deep text-brand-ivory py-20 lg:py-24">
        <div className="px-6 lg:px-10 mb-12">
          <div className="text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-3">Kind words</div>
          <h2 data-reveal className="font-display text-4xl lg:text-6xl">What arrives with the box.</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 lg:px-10 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((t) => (
            <figure
              key={t.who}
              className="snap-start shrink-0 w-[85%] md:w-[45%] lg:w-[32%] bg-brand-ivory text-brand-charcoal p-8 lg:p-10 grain"
            >
              <div className="font-display text-5xl leading-none text-brand-accent mb-4">"</div>
              <blockquote className="font-display italic text-xl lg:text-2xl leading-snug text-brand-deep">{t.quote}</blockquote>
              <figcaption className="mt-6 text-[10px] uppercase tracking-[0.25em] text-brand-charcoal/60">
                {t.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-brand-taupe mb-3">The Feed · @theartboxgoa</div>
            <h2 data-reveal className="font-display text-4xl lg:text-6xl text-brand-deep">Follow the studio floor.</h2>
          </div>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 bg-brand-deep text-brand-ivory px-6 py-4 text-[11px] uppercase tracking-[0.28em] font-semibold hover:bg-brand-accent hover:text-brand-charcoal transition-colors"
          >
            @theartboxgoa on Instagram ↗
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {[trousseauImg, bouquetImg, hamperImg, ringPlatterImg, ribbonImg, villaHamperImg, bouquetHandImg, platterImg].map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener"
              data-reveal
              data-reveal-delay={String((i % 4) + 1)}
              className="card-cat relative aspect-square overflow-hidden grain group block"
            >
              <img src={img} alt="Instagram post" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-deep/0 group-hover:bg-brand-deep/50 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-brand-ivory text-[10px] uppercase tracking-[0.3em]">View ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-ivory px-6 lg:px-10 py-20 lg:py-28 border-t border-brand-charcoal/10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.3em] text-brand-taupe mb-3">Small print, warmly</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight text-brand-deep">
              Before you <em className="italic text-brand-accent">DM.</em>
            </h2>
          </div>
          <div className="lg:col-span-8">
            {[
              { q: "How do I order?", a: "DM us on Instagram @theartboxgoa or WhatsApp us directly. We'll ask a few questions, mood-board it, and confirm before we begin." },
              { q: "How far in advance should I order?", a: "Single hampers 5–7 days. Weddings and 20+ pieces, please give us 3–4 weeks so we can source and sample properly." },
              { q: "Do you ship outside Goa?", a: "Yes — pan-India, insured, temperature-safe. Local Goa deliveries are hand-carried same-day." },
              { q: "Can I fully customise?", a: "Always. Palette, ribbon, contents, the note in your handwriting. Every hamper is designed one-to-one." },
              { q: "Corporate and bulk?", a: "Yes, from 20 to 2,000 units — white-labelled tags, custom ribbon, and full logistics coordination." },
              { q: "Returns?", a: "Because every hamper is bespoke, we don't take returns — but we share photos and get your approval before we seal the box." },
            ].map((f, i) => (
              <button
                key={f.q}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left border-b border-brand-charcoal/15 py-6 group"
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="font-display text-xl lg:text-2xl text-brand-deep">{f.q}</span>
                  <span className={`text-brand-accent text-2xl transition-transform duration-500 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </div>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: openFaq === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pt-4 text-brand-charcoal/80 leading-relaxed max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="bg-brand-accent text-brand-charcoal grain px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-5xl">
          <div className="text-[11px] uppercase tracking-[0.3em] mb-4 opacity-80">DM for collaboration · orders · weddings</div>
          <h2 data-reveal className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tight text-brand-deep">
            Let's make <em className="italic">something</em>
            <br />
            they'll <em className="italic">keep.</em>
          </h2>
          <p data-reveal data-reveal-delay="1" className="mt-8 max-w-xl text-brand-charcoal/85 text-lg leading-relaxed">
            Tell us the person, the moment, the mood — even a colour will do. We reply
            within a day, usually with a mood board attached.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener"
              className="group bg-brand-ivory text-brand-deep px-8 py-6 flex items-center justify-between hover:bg-brand-deep hover:text-brand-ivory transition-colors"
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
              className="group bg-brand-deep text-brand-ivory px-8 py-6 flex items-center justify-between hover:bg-brand-ivory hover:text-brand-deep transition-colors"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] opacity-60">Faster for briefs</div>
                <div className="font-display text-2xl mt-1">WhatsApp</div>
              </div>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">↗</span>
            </a>
            <a
              href="mailto:hello@theartboxgoa.com"
              className="group bg-brand-deep/15 border border-brand-deep/40 px-8 py-6 flex items-center justify-between hover:bg-brand-ivory transition-colors sm:col-span-2"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] opacity-70">For brands & weddings</div>
                <div className="font-display text-2xl mt-1 text-brand-deep">hello@theartboxgoa.com</div>
              </div>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-charcoal text-brand-ivory px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-display italic text-3xl">
              The Art Box <span className="text-brand-accent">Goa</span>
            </div>
            <p className="text-brand-ivory/70 mt-4 max-w-sm leading-relaxed">
              Handmade hampers, bouquets and wedding gifting from Goa by Samina Sayed. Made
              slowly, tied twice, shipped anywhere in India.
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] opacity-60 mb-4">Studio</div>
            <ul className="space-y-2 text-sm text-brand-ivory/85">
              <li>Assagao, North Goa</li>
              <li>Open by appointment</li>
              <li>Mon – Sat, 10 – 7</li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] opacity-60 mb-4">Elsewhere</div>
            <ul className="space-y-2 text-sm">
              <li><a className="link-underline" href="https://www.instagram.com" target="_blank" rel="noopener">Instagram · @theartboxgoa</a></li>
              <li><a className="link-underline" href="https://wa.me/919999999999" target="_blank" rel="noopener">WhatsApp the studio</a></li>
              <li><a className="link-underline" href="mailto:hello@theartboxgoa.com">hello@theartboxgoa.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-brand-ivory/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-brand-ivory/60">
          <div>© {new Date().getFullYear()} The Art Box Goa · Made with love</div>
          <div>Hand-tied in Goa · Shipped 🇮🇳</div>
        </div>
      </footer>

      {/* Sticky WhatsApp float */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener"
        aria-label="Order on WhatsApp"
        className="wa-pulse fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform font-semibold text-sm"
      >
        <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden>
          <path d="M19.11 17.27c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM16.04 5.33c-5.89 0-10.68 4.79-10.68 10.68 0 1.88.49 3.72 1.42 5.34L5.33 26.67l5.44-1.43a10.65 10.65 0 0 0 5.27 1.4h.01c5.89 0 10.68-4.79 10.68-10.68 0-2.85-1.11-5.53-3.13-7.55a10.6 10.6 0 0 0-7.56-3.08zm0 19.53h-.01a8.83 8.83 0 0 1-4.5-1.23l-.32-.19-3.23.85.86-3.15-.21-.33a8.86 8.86 0 0 1-1.36-4.72c0-4.9 3.99-8.89 8.88-8.89 2.37 0 4.6.93 6.28 2.61a8.83 8.83 0 0 1 2.6 6.28c0 4.9-3.98 8.89-8.89 8.89z" />
        </svg>
        Order on WhatsApp
      </a>
    </div>
  );
}
