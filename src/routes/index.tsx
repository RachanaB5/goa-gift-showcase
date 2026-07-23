import { createFileRoute, Link } from "@tanstack/react-router";

import heroHamper from "../assets/hero-hamper.jpg";
import bouquetImg from "../assets/bouquet.jpg";
import platterImg from "../assets/platter.jpg";
import hamperImg from "../assets/hamper.jpg";
import ribbonImg from "../assets/ribbon.jpg";
import villaHamperImg from "../assets/villa-hamper.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Art Box Goa | Bespoke Hampers & Gifts from Goa" },
      {
        name: "description",
        content:
          "Bespoke hampers, artisanal bouquets, customised gifts, trousseau packing, wedding hampers, and ring platters. Crafted with intention in Goa, shipped across India.",
      },
      {
        property: "og:title",
        content: "The Art Box Goa | Bespoke Hampers & Gifts from Goa",
      },
      {
        property: "og:description",
        content:
          "Bespoke hampers, artisanal bouquets, and curated wedding treasures from Goa. Shipping pan India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-brand-paper font-sans text-brand-deep">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 lg:px-8 border-b border-brand-deep/5">
        <div className="text-[10px] uppercase tracking-[0.3em] font-medium">Goa &bull; India</div>
        <div className="text-xl lg:text-2xl font-display italic tracking-tight">
          The Art Box Goa
        </div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-semibold">
          <Link to="/" className="hover:text-brand-accent transition-colors">
            Hampers
          </Link>
          <Link to="/" className="hover:text-brand-accent transition-colors">
            Weddings
          </Link>
          <Link to="/" className="hover:text-brand-accent transition-colors">
            Contact
          </Link>
        </div>
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-brand-deep"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-12 pb-24">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display leading-[0.9] mb-8">
              Crafted <br />
              <span className="italic">with</span> Intention.
            </h1>
            <p className="text-base md:text-lg max-w-sm leading-relaxed text-brand-deep/80 mb-10">
              Bespoke hampers, artisanal bouquets, and curated wedding treasures. Shipping modern
              Goan luxury to every corner of India.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/theartboxgoa"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 md:px-8 md:py-4 bg-brand-deep text-brand-paper uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-brand-clay transition-colors"
              >
                Explore Collections
              </a>
              <div className="h-[1px] w-12 bg-brand-deep/20" />
              <span className="text-[10px] uppercase tracking-widest font-semibold">
                721 Stories Told
              </span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="w-full aspect-[4/5] overflow-hidden">
              <img
                src={heroHamper}
                alt="A luxury gift hamper with velvet ribbons and dried flowers"
                width={1200}
                height={1600}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-6 lg:px-8 py-24 bg-brand-deep text-brand-paper">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] mb-4 opacity-60">
              The Offerings
            </h2>
            <h3 className="text-3xl md:text-4xl font-display italic">Curating Moments</h3>
          </div>
          <p className="text-left md:text-right max-w-xs text-sm opacity-70">
            From ring platters to grand trousseau packing, we elevate every ritual into an art form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Category 1 */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-[4/5] overflow-hidden mb-6">
              <img
                src={bouquetImg}
                alt="Artisanal floral bouquet with exotic Goan blooms"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <h4 className="text-xl font-display mb-2">Floral Art</h4>
            <p className="text-xs uppercase tracking-widest opacity-50">Custom Bouquets & Decor</p>
          </div>

          {/* Category 2 */}
          <div className="group cursor-pointer md:mt-12">
            <div className="w-full aspect-[4/5] overflow-hidden mb-6">
              <img
                src={platterImg}
                alt="Intricately decorated wedding ring platter with gold accents"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <h4 className="text-xl font-display mb-2">Wedding Rituals</h4>
            <p className="text-xs uppercase tracking-widest opacity-50">
              Ring Platters & Trousseau
            </p>
          </div>

          {/* Category 3 */}
          <div className="group cursor-pointer md:mt-0">
            <div className="w-full aspect-[4/5] overflow-hidden mb-6">
              <img
                src={hamperImg}
                alt="Luxury corporate gift box with artisanal teas and chocolates"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <h4 className="text-xl font-display mb-2">Corporate Gifting</h4>
            <p className="text-xs uppercase tracking-widest opacity-50">Curated Collection</p>
          </div>
        </div>
      </section>

      {/* About / Instagram Hook */}
      <section className="px-6 lg:px-8 py-24 lg:py-32 grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 lg:col-span-6">
          <div className="flex items-center gap-6 mb-8">
            <div className="size-20 rounded-full bg-brand-clay/10 outline outline-1 outline-brand-clay/20 flex items-center justify-center">
              <span className="text-[10px] font-bold text-brand-clay">GOA</span>
            </div>
            <div>
              <div className="font-display text-2xl">4,878 Hearts</div>
              <div className="text-[10px] uppercase tracking-widest text-brand-deep/50">
                Connected on Social
              </div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display mb-8 leading-tight">
            Shipping the Spirit <br />
            of Goa <span className="text-brand-accent italic">Across India.</span>
          </h2>
          <p className="text-brand-deep/70 mb-8 max-w-lg">
            Every box is a curated narrative. We believe that the art of gifting lies in the
            details—the texture of the paper, the scent of the blooms, and the precision of the
            arrangement.
          </p>
          <a
            href="https://instagram.com/theartboxgoa"
            target="_blank"
            rel="noreferrer"
            className="inline-block border-b-2 border-brand-accent pb-1 text-xs uppercase tracking-[0.2em] font-bold hover:text-brand-accent transition-colors"
          >
            Follow our Journey
          </a>
        </div>
        <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="aspect-square overflow-hidden">
            <img
              src={ribbonImg}
              alt="Close up of hands tying a silk ribbon on a gift box"
              width={600}
              height={600}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img
              src={villaHamperImg}
              alt="Finished luxury hamper in a sunlit Goan villa"
              width={600}
              height={600}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-8 py-12 border-t border-brand-deep/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[10px] uppercase tracking-widest">
          &copy; {new Date().getFullYear()} The Art Box Goa &bull; Designed for Celebration
        </div>
        <div className="flex gap-8">
          <a
            href="https://instagram.com/theartboxgoa"
            target="_blank"
            rel="noreferrer"
            className="text-[10px] uppercase tracking-widest font-bold hover:text-brand-accent transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="text-[10px] uppercase tracking-widest font-bold hover:text-brand-accent transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="mailto:hello@theartboxgoa.com"
            className="text-[10px] uppercase tracking-widest font-bold hover:text-brand-accent transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="text-[10px] uppercase tracking-widest opacity-50">
          Shipping Pan India 🇮🇳
        </div>
      </footer>
    </div>
  );
}
