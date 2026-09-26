import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "partnership",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      tempErrors.phone = "Please enter a valid 10-digit Indian mobile number";
    }

    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "partnership",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-brand-cream relative">
      <Helmet>
        <link rel="canonical" href="https://monkaura.in/contact" />
        <title>Contact Monkaura | Wholesale & Support | +91 93917 74374</title>
        <meta name="description" content="Contact Monkaura for wholesale bakery partnerships, order support, or product questions. Reach our wellness concierge by email or phone — we reply within 2 hours." />
        <meta name="keywords" content="contact Monkaura, Monkaura wholesale, bakery partnership India, monk fruit sweetener supplier, order support Monkaura" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Monkaura | Wholesale & Support | +91 93917 74374" />
        <meta property="og:description" content="Contact Monkaura for wholesale bakery partnerships, order support, or product questions. We reply within 2 hours." />
        <meta property="og:url" content="https://monkaura.in/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lh3.googleusercontent.com/d/1zmMde7Iqqf35tqNasnoR0Fl_uv-5v5iw" />
        <meta property="og:site_name" content="Monkaura" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Monkaura | Wholesale & Support | +91 93917 74374" />
        <meta name="twitter:description" content="Contact Monkaura for wholesale bakery partnerships, order support, or product questions. We reply within 2 hours." />
        <meta name="twitter:image" content="https://lh3.googleusercontent.com/d/1zmMde7Iqqf35tqNasnoR0Fl_uv-5v5iw" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Monkaura",
            "url": "https://monkaura.in/contact",
            "description": "Get in touch with Monkaura for wholesale inquiries, order support, and product questions.",
            "mainEntity": {
              "@type": "Organization",
              "name": "MONKAURA",
              "url": "https://monkaura.in",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressCountry": "IN"
              },
              "telephone": "+919391774374",
              "email": "monkaura9.co@gmail.com"
            }
          })}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Left Info Column */}
          <div className="lg:col-span-5 bg-brand-green text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-mint/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-brand-mint uppercase tracking-widest block">Get in Touch</span>
              <h1 className="font-serif font-extrabold text-3xl text-white tracking-tight leading-tight">
                Wholesale & Support Inquiries
              </h1>
              <p className="text-brand-mint/80 text-xs sm:text-sm font-light leading-relaxed">
                Interested in stocking Monkaura at your bakery, fitness studio, or grocery outlet? Or do you simply want to ask a question? Drop us a line and our wellness concierge will reply within 2 hours.
              </p>
            </div>

            <div className="space-y-6 py-8 border-t border-b border-white/10 my-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-brand-mint flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-mint/60 block leading-none mb-1">Email Us</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">monkaura9.co@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-brand-mint flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-mint/60 block leading-none mb-1">Call Concierge</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">+91 9391774374</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-brand-mint flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-mint/60 block leading-none mb-1">Our Headquarters</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">Hyderabad, India</span>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-brand-mint/50 font-light">
              © {new Date().getFullYear()} Monkaura Sweeteners Private Limited. All rights reserved.
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center space-y-4 py-8 animate-fadeIn">
                <div className="w-16 h-16 bg-brand-mint/40 rounded-full flex items-center justify-center text-brand-green mx-auto">
                  <CheckCircle size={36} className="animate-pulse" />
                </div>
                <h4 className="font-serif font-bold text-2xl text-brand-dark">Message Sent Successfully!</h4>
                <p className="text-sm text-brand-dark/70 font-light max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting Monkaura. Our executive has received your inquiry and will connect with you on your email/mobile within 2 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h4 className="font-serif font-bold text-xl text-brand-dark pb-2 border-b border-gray-50">
                  Write to Our Team
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="e.g. example "
                      className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                        errors.name
                          ? "border-red-300 focus:border-red-500 bg-red-50/20"
                          : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 font-medium flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">
                      Indian Mobile Number
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                        errors.phone
                          ? "border-red-300 focus:border-red-500 bg-red-50/20"
                          : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[10px] text-red-500 font-medium flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="e.g. monk@example.com"
                    className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                      errors.email
                        ? "border-red-300 focus:border-red-500 bg-red-50/20"
                        : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Inquiry Type Selector */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => handleInputChange("type", e.target.value)}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-gray-200 outline-none focus:border-brand-green bg-white cursor-pointer"
                  >
                    <option value="partnership">Wholesale / Bakery Partnership</option>
                    <option value="order">Order Issue / Track Shipment</option>
                    <option value="general">General Product Questions</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your requirements..."
                    className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border outline-none transition-all resize-none ${
                      errors.message
                        ? "border-red-300 focus:border-red-500 bg-red-50/20"
                        : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-green hover:bg-brand-green-light text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
