import React, { useState, useEffect } from "react";
import { X, Star, ShieldCheck, MapPin, CreditCard, Truck, Check, ArrowLeft, Loader2, QrCode, Percent, Ticket, ShoppingBag, HelpCircle, FileText, Copy, MessageCircle } from "lucide-react";
import { Product } from "../types";
import { QRCodeImage } from "./QRCodeImage";
import { trackWhatsAppOrderClick } from "../utils/analytics";

interface BuyNowModalProps {
  product: Product | null;
  initialQuantity: number;
  isOpen: boolean;
  onClose: () => void;
}

type CheckoutStep = "billing" | "payment" | "processing" | "success";

export default function BuyNowModal({
  product,
  initialQuantity,
  isOpen,
  onClose
}: BuyNowModalProps) {
  // Checkout states
  const [step, setStep] = useState<CheckoutStep>("billing");
  const [quantity, setQuantity] = useState(initialQuantity);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoDiscount, setPromoDiscount] = useState(0); // in Rupees
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");

  const [addressData, setAddressData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "Karnataka",
    pincode: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedPayment, setSelectedPayment] = useState<"upi" | "card" | "netbanking">("upi");
  const [orderId, setOrderId] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [utr, setUtr] = useState("");

  // Set initial quantity when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuantity(initialQuantity);
      setStep("billing");
      setAppliedPromo(null);
      setPromoDiscount(0);
      setPromoCode("");
      setPromoError("");
      setPromoSuccess("");
    }
  }, [isOpen, initialQuantity]);

  if (!isOpen || !product) return null;

  // Billing calculations
  const originalPriceTotal = product.originalPrice * quantity;
  const sellingPriceTotal = product.price * quantity;
  const productDiscount = originalPriceTotal - sellingPriceTotal;

  // Shipping cost: FREE over 299 for direct purchases!
  const isFreeShipping = sellingPriceTotal >= 299;
  const shippingCost = isFreeShipping ? 0 : 49;

  // Calculated Promo discount
  const finalPromoDiscount = appliedPromo ? Math.round(sellingPriceTotal * 0.1) : 0; // 10% off

  const grandTotal = sellingPriceTotal - finalPromoDiscount + shippingCost;
  const totalSavings = productDiscount + finalPromoDiscount;
  const gstIncluded = Math.round(grandTotal * 0.18); // 18% GST estimate for invoice

  const validateAddress = () => {
    const tempErrors: Record<string, string> = {};
    if (!addressData.name.trim()) tempErrors.name = "Full name is required";
    
    if (!addressData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(addressData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!addressData.phone.trim()) {
      tempErrors.phone = "10-digit phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(addressData.phone.replace(/[\s-]/g, ""))) {
      tempErrors.phone = "Please enter a valid Indian mobile number";
    }

    if (!addressData.address.trim()) tempErrors.address = "Detailed address is required";
    if (!addressData.city.trim()) tempErrors.city = "City is required";
    
    if (!addressData.pincode.trim()) {
      tempErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(addressData.pincode.trim())) {
      tempErrors.pincode = "Pin code must be exactly 6 digits";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setAddressData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    setPromoSuccess("");
    const code = promoCode.trim().toUpperCase();

    if (!code) {
      setPromoError("Please enter a code");
      return;
    }

    if (code === "MONK10" || code === "WELCOME" || code === "HEALTHY") {
      setAppliedPromo(code);
      setPromoSuccess(`Promo code '${code}' applied! Extra 10% off on your blend.`);
      setPromoCode("");
    } else {
      setPromoError("Invalid Promo Code. Try 'MONK10' or 'WELCOME'");
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoSuccess("");
    setPromoError("");
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAddress()) {
      setStep("payment");
    }
  };

  const handleWhatsAppCheckout = () => {
    const generatedId = "MKA-BN-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    setInvoiceDate(formattedDate);
    
    const promoInfo = appliedPromo ? `\n- Promo Applied: ${appliedPromo} (-10%)` : "";
    const messageText = `*NEW DIRECT ORDER: ${generatedId}*\n\n` +
      `*🛒 Product Ordered:*\n` +
      `• *${product.name}* (${product.weight}) - Qty: ${quantity} (₹${product.price * quantity})\n\n` +
      `*💰 Billing Summary:*\n` +
      `- Price (Qty ${quantity}): ₹${product.price * quantity}${promoInfo}\n` +
      `- Shipping: ${shippingCost === 0 ? "FREE" : `₹${shippingCost}`}\n` +
      `- *Total Amount: ₹${grandTotal}*\n\n` +
      `*📍 Delivery Details:*\n` +
      `- Name: ${addressData.name}\n` +
      `- Phone: ${addressData.phone}\n` +
      `- Email: ${addressData.email}\n` +
      `- Address: ${addressData.address}\n` +
      `- City/Town: ${addressData.city}\n` +
      `- State: ${addressData.state}\n` +
      `- PIN Code: ${addressData.pincode}\n\n` +
      `Please confirm my order and share dispatch details!`;
      
    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919391774374&text=${encodedText}`;
    
    // Dispatch GA4 order intent event
    trackWhatsAppOrderClick({
      source: "buy_now_modal",
      orderValue: grandTotal,
      city: addressData.city,
      items: [{ name: product.name, weight: product.weight, quantity }]
    });

    window.open(whatsappUrl, "_blank");
    
    setStep("processing");
    setTimeout(() => {
      setStep("success");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-0 sm:p-4 overflow-hidden">
      {/* Immersive Dark Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-dark/85 backdrop-blur-md transition-opacity duration-300"
        onClick={step !== "processing" ? onClose : undefined}
      />

      {/* Checkout Window Container */}
      <div 
        id="buy-now-modal"
        className="relative bg-white w-full h-full sm:h-auto sm:max-h-[95vh] sm:max-w-4xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 animate-scaleUp border border-brand-green/10"
      >
        {/* Sticky Header */}
        <div className="px-6 py-4 bg-brand-cream border-b border-gray-100 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2 text-brand-green">
            <ShoppingBag size={20} className="stroke-[2.5]" />
            <h2 className="font-serif font-black text-base sm:text-lg tracking-tight">
              {step === "billing" && "Direct Buy Now — Billing & Shipping"}
              {step === "payment" && "Confirm Order via WhatsApp"}
              {step === "processing" && "Preparing Direct Order..."}
              {step === "success" && "Direct Order Placed!"}
            </h2>
          </div>
          {step !== "processing" && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-gray-150 text-brand-dark/60 hover:text-brand-dark cursor-pointer transition-all"
              aria-label="Cancel purchase"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Step Progress Bar */}
        {step !== "success" && step !== "processing" && (
          <div className="grid grid-cols-2 bg-brand-mint-light/60 border-b border-gray-100 text-center text-xs py-2.5 shrink-0">
            <button 
              onClick={() => setStep("billing")}
              disabled={step === "billing"}
              className={`font-bold flex justify-center items-center gap-1.5 transition-colors ${
                step === "billing" ? "text-brand-green font-extrabold cursor-default" : "text-brand-green/60 hover:text-brand-green cursor-pointer"
              }`}
            >
              <FileText size={14} /> 1. Billing Info & Address
            </button>
            <div className={`font-bold flex justify-center items-center gap-1.5 ${
              step === "payment" ? "text-brand-green font-extrabold" : "text-brand-dark/40"
            }`}>
              <MessageCircle size={14} /> 2. WhatsApp Confirmation
            </div>
          </div>
        )}

        {/* Scrollable container with Split Column Layout */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 lg:p-8">
          
          {step === "billing" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Direct Pack Details, MRP & Billing Summary */}
              <div className="lg:col-span-5 space-y-6 bg-brand-mint-light/40 border border-brand-mint/40 p-5 rounded-2xl">
                
                {/* Pack Detail Header */}
                <div className="flex gap-4 items-center border-b border-brand-mint/40 pb-4">
                  <div className="w-16 h-16 bg-white rounded-xl border border-gray-150 p-1 flex items-center justify-center shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider block">
                      {product.subtitle}
                    </span>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-brand-dark leading-tight truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-brand-dark/50">Pack Size: <strong>{product.weight}</strong></span>
                      <span className="text-[10px] font-bold bg-brand-green/10 text-brand-green px-1.5 py-0.5 rounded uppercase">
                        1:1 Sugar Alternative
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Quantity Customizer in Billing */}
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-brand-dark">Adjust Quantity:</span>
                  <div className="flex items-center border border-gray-200 rounded-lg bg-white h-9 shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      className="px-2.5 h-full text-brand-dark hover:text-brand-green hover:bg-brand-mint-light transition-colors rounded-l-lg cursor-pointer"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-2.5 font-bold text-brand-dark text-xs min-w-6 text-center select-none">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(prev => prev + 1)}
                      className="px-2.5 h-full text-brand-dark hover:text-brand-green hover:bg-brand-mint-light transition-colors rounded-r-lg cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Highly Professional Indian Billing Matrix (MRP, Discount, Shipping) */}
                <div className="space-y-3.5 border-t border-brand-mint/40 pt-4 text-xs">
                  <span className="font-serif font-black text-brand-dark tracking-wide uppercase block text-[10px]">
                    Detailed Billing Breakdown
                  </span>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-brand-dark/60">Product MRP (Inclusive of Taxes)</span>
                    <span className="font-medium text-brand-dark">₹{originalPriceTotal}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-brand-orange font-medium">Standard Store Discount</span>
                    <span className="font-bold text-brand-orange">-₹{productDiscount}</span>
                  </div>

                  {appliedPromo && (
                    <div className="flex justify-between items-center text-brand-green font-semibold">
                      <span className="flex items-center gap-1">
                        <Ticket size={12} /> Coupon '{appliedPromo}' (10%)
                      </span>
                      <span>-₹{finalPromoDiscount}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-brand-dark/60">Delivery / Shipping Logistics</span>
                    <span>
                      {shippingCost === 0 ? (
                        <strong className="text-brand-green font-bold uppercase text-[10px] bg-brand-green/10 px-1.5 py-0.5 rounded">
                          FREE Shipping
                        </strong>
                      ) : (
                        `₹${shippingCost}`
                      )}
                    </span>
                  </div>

                  {!isFreeShipping && (
                    <p className="text-[10px] text-brand-dark/50 leading-tight italic bg-white p-2 rounded border border-gray-100">
                      💡 Add {Math.ceil((299 - sellingPriceTotal) / product.price)} more item(s) or increase quantity for <strong>FREE Shipping</strong> (Unlocked above ₹299).
                    </p>
                  )}

                  <div className="border-t border-dashed border-brand-mint/80 pt-3 flex justify-between items-baseline">
                    <span className="font-serif font-black text-sm text-brand-dark">Final Bill Amount:</span>
                    <div className="text-right">
                      <span className="text-2xl font-black text-brand-green">₹{grandTotal}</span>
                      <p className="text-[9px] text-brand-green font-semibold">GST (18% Included)</p>
                    </div>
                  </div>

                  <div className="bg-brand-green text-white p-2.5 rounded-xl text-center text-[11px] font-bold tracking-wide flex items-center justify-center gap-1.5 shadow-xs">
                    <Percent size={14} />
                    <span>Total Direct Savings: ₹{totalSavings}!</span>
                  </div>
                </div>

                {/* Interactive Coupon Box */}
                <div className="space-y-2 border-t border-brand-mint/40 pt-4">
                  <span className="text-[10px] font-bold text-brand-dark/60 uppercase block">Have a Promo Code?</span>
                  
                  {!appliedPromo ? (
                    <form onSubmit={handleApplyPromo} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. MONK10"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-gray-200 outline-none focus:border-brand-green uppercase font-semibold tracking-wider font-mono"
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs rounded-lg transition-all cursor-pointer shadow-2xs shrink-0"
                      >
                        Apply
                      </button>
                    </form>
                  ) : (
                    <div className="flex items-center justify-between bg-brand-green/10 border border-brand-green/20 px-3 py-2 rounded-xl text-xs">
                      <span className="font-bold text-brand-green flex items-center gap-1">
                        <Check size={14} /> {appliedPromo} applied
                      </span>
                      <button
                        type="button"
                        onClick={handleRemovePromo}
                        className="text-[10px] font-bold text-brand-orange hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  {promoError && <p className="text-[10px] text-red-500 font-medium">{promoError}</p>}
                  {promoSuccess && <p className="text-[10px] text-brand-green font-semibold">{promoSuccess}</p>}
                  
                  {!appliedPromo && (
                    <div className="flex gap-1.5 flex-wrap pt-1">
                      <span className="text-[9px] font-bold text-brand-dark/40 uppercase block self-center">Suggested:</span>
                      <button
                        type="button"
                        onClick={() => {
                          setAppliedPromo("MONK10");
                          setPromoSuccess("Promo code 'MONK10' applied! Extra 10% off.");
                        }}
                        className="text-[9px] font-bold bg-white text-brand-green hover:bg-brand-mint border border-brand-green/20 px-2 py-0.5 rounded cursor-pointer transition-all"
                      >
                        MONK10 (10% OFF)
                      </button>
                    </div>
                  )}
                </div>

              </div>

              {/* Right Column: Address Form */}
              <div className="lg:col-span-7 space-y-5">
                <span className="font-serif font-extrabold text-brand-dark tracking-tight text-base block border-b border-gray-100 pb-2">
                  Delivery Details
                </span>

                <form onSubmit={handleProceedToPayment} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">Recipient Name</label>
                      <input
                        type="text"
                        value={addressData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Full name"
                        className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                          errors.name ? "border-red-300 bg-red-50/15 focus:border-red-500" : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                        }`}
                      />
                      {errors.name && <span className="text-[10px] text-red-500 font-medium">{errors.name}</span>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">Indian Mobile Number</label>
                      <input
                        type="text"
                        value={addressData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="10-digit mobile number"
                        className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                          errors.phone ? "border-red-300 bg-red-50/15 focus:border-red-500" : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                        }`}
                      />
                      {errors.phone && <span className="text-[10px] text-red-500 font-medium">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">Email Address (For PDF Invoice)</label>
                    <input
                      type="email"
                      value={addressData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="e.g. name@example.com"
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                        errors.email ? "border-red-300 bg-red-50/15 focus:border-red-500" : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-red-500 font-medium">{errors.email}</span>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">Detailed House / Street Address</label>
                    <input
                      type="text"
                      value={addressData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Flat/House no, Apartment, Street Name, Landmark"
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                        errors.address ? "border-red-300 bg-red-50/15 focus:border-red-500" : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                      }`}
                    />
                    {errors.address && <span className="text-[10px] text-red-500 font-medium">{errors.address}</span>}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">City / Town</label>
                      <input
                        type="text"
                        value={addressData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="City"
                        className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                          errors.city ? "border-red-300 bg-red-50/15 focus:border-red-500" : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                        }`}
                      />
                      {errors.city && <span className="text-[10px] text-red-500 font-medium">{errors.city}</span>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">State</label>
                      <select
                        value={addressData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-gray-200 outline-none focus:border-brand-green cursor-pointer"
                      >
                        <option value="Karnataka">Karnataka</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Other">Other State</option>
                      </select>
                    </div>

                    <div className="space-y-1 col-span-2 sm:col-span-1">
                      <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">PIN Code (6 Digits)</label>
                      <input
                        type="text"
                        value={addressData.pincode}
                        onChange={(e) => handleInputChange("pincode", e.target.value)}
                        placeholder="6-digit PIN code"
                        maxLength={6}
                        className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                          errors.pincode ? "border-red-300 bg-red-50/15 focus:border-red-500" : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                        }`}
                      />
                      {errors.pincode && <span className="text-[10px] text-red-500 font-medium">{errors.pincode}</span>}
                    </div>
                  </div>

                  {/* Proceed CTA */}
                  <div className="pt-6 border-t border-gray-150 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span className="text-sm font-black text-brand-green font-serif">
                      Payable Amount: ₹{grandTotal}
                    </span>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Confirm Order Details</span>
                      <Truck size={16} />
                    </button>
                  </div>
                </form>

              </div>
            </div>
          )}

          {/* STEP 2: WhatsApp Order Confirmation */}
          {step === "payment" && (
            <div className="space-y-6 max-w-2xl mx-auto">
              
              {/* Summary recap block */}
              <div className="p-4 bg-brand-mint-light/50 border border-brand-mint/40 rounded-2xl flex justify-between items-center text-xs">
                <div>
                  <span className="font-semibold text-brand-green">Direct Shipping: </span>
                  <span className="text-brand-dark/70">
                    {addressData.name}, {addressData.city} ({addressData.pincode})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep("billing")}
                  className="text-brand-green font-bold flex items-center gap-1 hover:underline cursor-pointer shrink-0"
                >
                  <ArrowLeft size={12} /> Change
                </button>
              </div>

              {/* Informational Message */}
              <div className="p-5 bg-brand-cream border border-brand-green/20 rounded-2xl space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green shrink-0">
                    <MessageCircle size={22} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-brand-dark">Instant Ordering via WhatsApp</h4>
                    <p className="text-xs text-brand-dark/70 leading-relaxed font-light mt-1">
                      We process all orders directly through WhatsApp to provide you with fast dispatch and personal customer service. No complex account creation or credit card entry required.
                    </p>
                  </div>
                </div>

                {/* Simulated message preview */}
                <div className="bg-white border border-gray-150 rounded-xl p-4 space-y-2">
                  <span className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest block border-b border-gray-50 pb-1.5">
                    WhatsApp Message Preview
                  </span>
                  <div className="font-mono text-[11px] text-brand-dark/75 space-y-1 bg-brand-cream/40 p-3 rounded-lg border border-dashed border-gray-200 whitespace-pre-line max-h-[140px] overflow-y-auto select-all">
                    🍯 *NEW DIRECT ORDER*
                    {"\n"}• *Item:* {product.name} ({product.weight}) x{quantity}
                    {"\n"}• *Grand Total:* ₹{grandTotal} {appliedPromo ? `(Promo: ${appliedPromo})` : ""}
                    {"\n"}• *Deliver to:* {addressData.name}, {addressData.city} ({addressData.pincode})
                  </div>
                  <p className="text-[9px] text-brand-dark/40 leading-relaxed">
                    💡 Clicking below will instantly launch WhatsApp with this order's structured message filled out for you automatically.
                  </p>
                </div>
              </div>

              {/* Order Summary Receipt Box */}
              <div className="bg-brand-mint-light/30 border border-brand-green/10 p-4 rounded-2xl text-xs space-y-2">
                <span className="font-serif font-black text-brand-dark text-[10px] tracking-wide uppercase block">Order Summary</span>
                <div className="flex justify-between items-center py-1">
                  <span className="text-brand-dark/80">{product.name} ({product.weight}) <strong className="text-brand-green font-semibold">x{quantity}</strong></span>
                  <span className="font-bold text-brand-dark">₹{sellingPriceTotal}</span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between items-center py-1 text-brand-orange">
                    <span>Promo Applied ({appliedPromo} - 10% Off)</span>
                    <span>-₹{finalPromoDiscount}</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-1">
                  <span className="text-brand-dark/60">Shipping cost</span>
                  <span className="font-bold text-brand-dark">{shippingCost === 0 ? "FREE" : `₹${shippingCost}`}</span>
                </div>
                <div className="border-t border-brand-green/15 my-2 pt-2 flex justify-between text-sm font-bold text-brand-dark">
                  <span>Grand Total (All Taxes Included)</span>
                  <span className="text-brand-green text-base font-black">₹{grandTotal}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 border-t border-gray-150 flex flex-col sm:flex-row justify-between items-center gap-4">
                <button
                  type="button"
                  onClick={() => setStep("billing")}
                  className="w-full sm:w-auto text-xs font-bold text-brand-dark/60 hover:text-brand-dark flex items-center justify-center gap-1.5 p-2 cursor-pointer"
                >
                  <ArrowLeft size={14} /> Back to Billing
                </button>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full sm:w-auto px-10 py-4 bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group hover:scale-[1.02] active:scale-98"
                >
                  <MessageCircle size={18} className="stroke-[2.5]" />
                  <span>Send Order via WhatsApp</span>
                </button>
              </div>

            </div>
          )}

          {/* STEP 3: Processing State */}
          {step === "processing" && (
            <div className="text-center py-16 space-y-5 flex flex-col justify-center items-center">
              <Loader2 size={54} className="text-brand-green animate-spin stroke-[2]" />
              <div className="space-y-1.5">
                <span className="text-base font-bold text-brand-dark block font-serif">Preparing Direct Order Details...</span>
                <p className="text-xs text-brand-dark/50 max-w-sm mx-auto font-light leading-relaxed">
                  Compiling your item and shipping details. Redirecting to WhatsApp to complete your order.
                </p>
              </div>
            </div>
          )}

          {/* STEP 4: Success confirmation screen */}
          {step === "success" && (
            <div className="text-center py-6 space-y-6 flex flex-col justify-center items-center animate-fadeIn max-w-xl mx-auto">
              
              <div className="w-16 h-16 bg-brand-mint rounded-full flex items-center justify-center text-brand-green shadow-inner">
                <Check size={36} className="stroke-[3]" />
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-brand tracking-widest font-bold text-brand-green uppercase">Direct Order Confirmed</span>
                <h3 className="font-serif font-black text-2xl sm:text-3xl text-brand-dark leading-tight">Order Request Sent!</h3>
                <div className="inline-block bg-brand-cream text-brand-green font-mono font-bold text-xs px-3.5 py-1.5 rounded-lg border border-brand-green/10 mt-1 select-all">
                  Order ID: {orderId}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-brand-dark/70 font-light leading-relaxed">
                Thank you, <strong className="font-semibold text-brand-dark">{addressData.name}</strong>! Your direct order request for <strong>{quantity}x {product.name} ({product.weight})</strong> has been sent to our official WhatsApp! Our team will verify your address and coordinate shipment immediately. Your sweetener packages will arrive within <strong>2-3 business days</strong>.
              </p>

              {/* Tax Invoice and Delivery Summary Card */}
              <div className="w-full bg-brand-cream/80 border border-gray-150 rounded-2xl p-5 text-xs text-left space-y-3 shadow-2xs font-sans">
                
                <div className="flex justify-between items-center border-b border-gray-100 pb-2.5">
                  <div>
                    <span className="font-serif font-extrabold text-brand-green block text-xs uppercase tracking-wide">MÕNKAURA INDIA</span>
                    <span className="text-[10px] text-brand-dark/40">FSSAI Lic: 13624999000449</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-brand-dark block text-[10px]">ORIGINAL INVOICE</span>
                    <span className="text-[9px] text-brand-dark/50">{invoiceDate}</span>
                  </div>
                </div>

                {/* Invoice Line item */}
                <div className="space-y-2">
                  <div className="flex justify-between font-bold text-brand-dark">
                    <span>Description</span>
                    <span>Total Price</span>
                  </div>
                  <div className="flex justify-between text-brand-dark/80 font-light border-b border-gray-50 pb-1.5">
                    <span>{product.name} ({product.weight} pack) x {quantity}</span>
                    <span>₹{originalPriceTotal}</span>
                  </div>
                </div>

                {/* Sub calculations */}
                <div className="space-y-1.5 text-right text-[11px] border-b border-gray-100 pb-2">
                  <div className="flex justify-between">
                    <span className="text-brand-dark/50">MRP Base Subtotal</span>
                    <span className="font-semibold text-brand-dark">₹{originalPriceTotal}</span>
                  </div>
                  <div className="flex justify-between text-brand-orange">
                    <span>Discount Deducted</span>
                    <span className="font-bold">-₹{totalSavings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-dark/50">Integrated GST (18%)</span>
                    <span className="font-semibold text-brand-dark">₹{gstIncluded} (Included)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-dark/50">Shipping Logistics</span>
                    <span className="font-semibold text-brand-dark">
                      {shippingCost === 0 ? "FREE" : `₹${shippingCost}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center font-bold text-sm text-brand-green">
                  <span>Grand Total (All Taxes Inc.)</span>
                  <span className="font-serif text-base">₹{grandTotal}</span>
                </div>

                {/* Delivery footer info */}
                <div className="bg-white p-3 rounded-xl border border-gray-150 flex items-start gap-2.5 text-[11px] leading-relaxed">
                  <Truck className="text-brand-green mt-0.5 shrink-0" size={16} />
                  <div>
                    <span className="font-bold text-brand-dark block">Estimated Dispatch Timeline</span>
                    <p className="text-brand-dark/65 font-light">
                      Your parcel will be packed today and handed to Express Delivery. Sent to: <strong>{addressData.address}, {addressData.city} - {addressData.pincode}</strong>. Expected delivery in 2-3 business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Back CTA */}
              <button
                onClick={onClose}
                className="px-8 py-3 bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
              >
                Close & Return to Store
              </button>
              
            </div>
          )}

        </div>

        {/* Secure checkout footer badge */}
        {step !== "success" && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center shrink-0 text-[10px] text-brand-dark/50">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck size={14} className="text-brand-green" /> Official Monkaura Ordering Desk (+91 9391774374)
            </span>
            <span className="hidden sm:inline">MÕNKAURA SWEETENERS</span>
          </div>
        )}

      </div>
    </div>
  );
}
