import React from "react";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <section id="privacy" className="py-16 md:py-24 bg-brand-cream relative overflow-hidden">
      <Helmet>
        <link rel="canonical" href="https://monkaura.in/privacy" />
        <title>Privacy Policy, Cookies & Terms | Monkaura Sweeteners</title>
        <meta name="description" content="Read Monkaura's privacy policy, cookies policy, and terms of service. Learn how we collect, use, and protect your personal information when you shop with us." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Privacy Policy, Cookies & Terms | Monkaura Sweeteners" />
        <meta property="og:description" content="Read Monkaura's privacy policy, cookies policy, and terms of service. Learn how we collect, use, and protect your personal information." />
        <meta property="og:url" content="https://monkaura.in/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Monkaura" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-brand-dark">
        <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight mb-8">
          Privacy & Terms
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-8 font-light text-sm sm:text-base leading-relaxed">
          
          <div>
            <h2 className="font-serif font-bold text-2xl mb-4">Privacy Policy</h2>
            <p className="mb-4">
              At Monkaura Sweeteners ("Monkaura", "we", "us", or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website (monkaura.in) or interact with our services.
            </p>
            <p className="mb-4">
              <strong>Information We Collect:</strong> We collect personal data you provide directly to us when placing an order, contacting our support team, or subscribing to our newsletter. This may include your name, email address, phone number, shipping address, and payment information.
            </p>
            <p className="mb-4">
              <strong>How We Use Your Information:</strong> The information we collect is used to process transactions, deliver products, communicate order updates, and improve our website and customer service. We do not sell your personal data to third parties.
            </p>
            <p>
              <strong>Data Security:</strong> We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and order data stored on our site.
            </p>
          </div>

          <hr className="border-gray-100" />

          <div>
            <h2 className="font-serif font-bold text-2xl mb-4">Cookies Policy</h2>
            <p className="mb-4">
              Our website uses "cookies" to enhance user experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about you.
            </p>
            <p>
              You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly. We use cookies primarily for tracking website analytics and maintaining shopping cart state.
            </p>
          </div>

          <hr className="border-gray-100" />

          <div>
            <h2 className="font-serif font-bold text-2xl mb-4">Terms of Service</h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p className="mb-4">
              <strong>Product Information:</strong> While we strive to provide accurate product and pricing information, pricing or typographical errors may occur. Monkaura reserves the right to refuse or cancel any orders containing errors.
            </p>
            <p>
              <strong>Health Disclaimer:</strong> The information provided on this website is for educational purposes only and is not intended as medical advice. Always consult with a healthcare professional before making significant changes to your diet, especially if you have diabetes or other health conditions.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
