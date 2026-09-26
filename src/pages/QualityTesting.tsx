import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ShieldCheck, FileText, CheckCircle2, Lock, AlertCircle, ArrowRight } from "lucide-react";
import SEOBreadcrumb from "../components/SEOBreadcrumb";
import ProductFactsCard from "../components/ProductFactsCard";

export default function QualityTesting() {
  return (
    <div className="bg-brand-cream min-h-screen py-8 md:py-12">
      <Helmet>
        <title>Quality Testing & Sourcing Standards | MONKAURA</title>
        <meta
          name="description"
          content="Learn about MONKAURA quality assurance, non-GMO ingredient verification, microbiological and heavy metal testing standards, and packaging safety in India."
        />
        <meta
          name="keywords"
          content="monkaura quality testing, monk fruit purity testing, non-gmo erythritol quality, food safety monkaura"
        />
        <link rel="canonical" href="https://monkaura.in/quality-testing" />
        <meta property="og:title" content="Quality Testing & Sourcing Standards | MONKAURA" />
        <meta property="og:description" content="Discover our rigorous quality-control process, ingredient specifications, and testing philosophy." />
        <meta property="og:url" content="https://monkaura.in/quality-testing" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "MONKAURA Quality Testing & Sourcing Standards",
            "description": "Information on MONKAURA ingredient purity testing, packaging safety, and quality-control protocols.",
            "author": { "@type": "Organization", "name": "MONKAURA" },
            "publisher": { "@type": "Organization", "name": "MONKAURA" },
            "mainEntityOfPage": "https://monkaura.in/quality-testing"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monkaura.in/" },
              { "@type": "ListItem", "position": 2, "name": "Quality Testing", "item": "https://monkaura.in/quality-testing" }
            ]
          })}
        </script>
      </Helmet>

      <SEOBreadcrumb
        items={[
          { name: "Quality Testing", url: "/quality-testing" }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <header className="space-y-4 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint text-brand-green text-xs font-bold uppercase">
            <ShieldCheck size={14} />
            <span>Quality Assurance & Testing</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark">
            Quality, Purity & Sourcing Standards
          </h1>
          <p className="text-sm sm:text-base text-brand-dark/70 font-light leading-relaxed">
            At MONKAURA, quality and consumer safety are non-negotiable. We believe in complete transparency regarding how our ingredients are selected, handled, tested, and packaged.
          </p>
        </header>

        {/* Section 1: Quality Pillars */}
        <section className="space-y-6">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Our 4 Quality Pillars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-green flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-brand-dark text-base">Pure Botanical Extraction</h3>
              <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                Monk fruit extract is derived exclusively using pure hot-water extraction and filtration without chemical solvent residues.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-green flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-brand-dark text-base">Non-GMO Verified Fermentation</h3>
              <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                Our erythritol is produced through the natural fermentation of non-GMO plant starches, yielding clean 99.5%+ pure crystals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-green flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-brand-dark text-base">Moisture-Barrier Packaging</h3>
              <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                Packaged in food-grade multi-layer aluminum-barrier pouches with airtight zip seals to preserve crystal integrity in Indian humidity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-green flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="font-bold text-brand-dark text-base">Zero Additive Integrity</h3>
              <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                Strictly free from aspartame, sucralose, saccharin, maltodextrin, silica anti-caking agents, or artificial colors.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Laboratory Testing Documentation Protocol */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Laboratory Testing & COA Verification</h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            Raw material batches undergo standardized quality evaluation for purity, heavy metals (Lead, Arsenic, Cadmium, Mercury), and microbiological parameters (Total Plate Count, Yeast & Mold, E. Coli, Salmonella).
          </p>

          <div className="p-4 bg-brand-cream/80 rounded-xl border border-gray-200/70 flex items-start gap-3 text-xs text-brand-dark/70">
            <AlertCircle size={18} className="text-brand-gold shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-brand-dark">Batch Certificate of Analysis (COA) Transparency:</p>
              <p className="mt-0.5">
                Batch-specific lab reports and documentation are updated continuously as new production runs complete. Documentation will be published and downloadable directly from this portal as public links are finalized.
              </p>
            </div>
          </div>
        </section>

        <ProductFactsCard />

        <section className="bg-brand-mint-light p-6 sm:p-8 rounded-2xl border border-brand-green/20 text-center space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Order Pure MONKAURA Sweetener</h2>
          <p className="text-xs sm:text-sm text-brand-dark/80 max-w-lg mx-auto">
            Experience premium Monk Fruit, Erythritol natural sweetener in 100g and 200g packs.
          </p>
          <div className="pt-2">
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-green text-white font-bold text-xs hover:bg-brand-green-light transition-all">
              <span>Shop Verified Packs</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
