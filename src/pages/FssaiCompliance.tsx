import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ShieldCheck, FileCheck, Info, CheckCircle2, ArrowRight } from "lucide-react";
import SEOBreadcrumb from "../components/SEOBreadcrumb";
import ProductFactsCard from "../components/ProductFactsCard";

export default function FssaiCompliance() {
  return (
    <div className="bg-brand-cream min-h-screen py-8 md:py-12">
      <Helmet>
        <title>FSSAI Compliance & Regulatory Standards | MONKAURA</title>
        <meta
          name="description"
          content="Learn about MONKAURA's regulatory compliance with the Food Safety and Standards Authority of India (FSSAI) guidelines for table-top sweeteners and non-caloric blends."
        />
        <meta
          name="keywords"
          content="fssai monk fruit sweetener, table top sweetener regulations india, fssai erythritol compliance, monkaura fssai standards"
        />
        <link rel="canonical" href="https://monkaura.in/fssai" />
        <meta property="og:title" content="FSSAI Compliance & Regulatory Standards | MONKAURA" />
        <meta property="og:description" content="Official regulatory and food safety compliance overview under Indian food safety regulations." />
        <meta property="og:url" content="https://monkaura.in/fssai" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "MONKAURA Regulatory Compliance & Indian Food Safety Standards",
            "description": "Overview of FSSAI regulations, labeling requirements, and food safety standards governing MONKAURA table-top sweetener in India.",
            "author": { "@type": "Organization", "name": "MONKAURA" },
            "publisher": { "@type": "Organization", "name": "MONKAURA" },
            "mainEntityOfPage": "https://monkaura.in/fssai"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monkaura.in/" },
              { "@type": "ListItem", "position": 2, "name": "FSSAI Compliance", "item": "https://monkaura.in/fssai" }
            ]
          })}
        </script>
      </Helmet>

      <SEOBreadcrumb
        items={[
          { name: "FSSAI Compliance", url: "/fssai" }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <header className="space-y-4 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint text-brand-green text-xs font-bold uppercase">
            <FileCheck size={14} />
            <span>Indian Food Safety Standards</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark">
            FSSAI Standards & Compliance
          </h1>
          <p className="text-sm sm:text-base text-brand-dark/70 font-light leading-relaxed">
            MONKAURA operates in strict conformity with the standards and regulations laid down by the <strong>Food Safety and Standards Authority of India (FSSAI)</strong> for table-top sweetener blends and packaged food products.
          </p>
        </header>

        {/* Section 1: Classification */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Product Regulatory Classification</h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            In India, alternative sweetening formulations are regulated under the <em>Food Safety and Standards (Food Products Standards and Food Additives) Regulations</em>. MONKAURA is categorized as a <strong>Table-Top Sweetener Blend</strong>, consisting of non-nutritive and polyol sweetening substances approved for direct consumer culinary use.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm text-brand-dark/80">
            <div className="p-4 bg-brand-cream/60 rounded-xl border border-gray-100 space-y-1">
              <span className="font-bold text-brand-dark">Erythritol (INS 968)</span>
              <p className="text-xs text-brand-dark/70">Permitted polyol bulking agent and tabletop sweetener ingredient in Indian food standards.</p>
            </div>
            <div className="p-4 bg-brand-cream/60 rounded-xl border border-gray-100 space-y-1">
              <span className="font-bold text-brand-dark">Monk Fruit Extract / Luo Han Guo</span>
              <p className="text-xs text-brand-dark/70">High-intensity natural non-caloric sweetener extract standardized for Mogroside V.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Labeling & Packaging Guidelines */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Packaging & Labeling Transparency</h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            All packaging manufactured for MONKAURA complies with the <em>Food Safety and Standards (Packaging and Labelling) Regulations</em>, featuring:
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-brand-dark/80">
            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" />
              <span>Accurate ingredient statements declaring Erythritol and Monk Fruit Extract without misleading omission.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" />
              <span>Standard nutritional panel per single serving (4g) and per 100g.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" />
              <span>Batch number, manufacturing date, and best-before duration (24 months).</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" />
              <span>Clear advisory: Polyols may have a mild laxative effect if consumed in excessive quantities.</span>
            </div>
          </div>
        </section>

        <ProductFactsCard />

        <section className="text-center pt-4">
          <Link to="/products" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-green text-white font-bold text-xs hover:bg-brand-green-light shadow-md">
            <span>Shop FSSAI-Compliant Monkaura Packs</span>
            <ArrowRight size={14} />
          </Link>
        </section>
      </article>
    </div>
  );
}
