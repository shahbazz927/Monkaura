import React, { useState } from "react";
import { X, CreditCard, ShieldCheck, MapPin, Truck, CheckCircle2, ArrowLeft, Loader2, QrCode, Copy, Check, MessageCircle } from "lucide-react";
import { CartItem } from "../types";
import { QRCodeImage } from "./QRCodeImage";
import { trackWhatsAppOrderClick } from "../utils/analytics";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onClearCart: () => void;
}

type StepType = "address" | "payment" | "processing" | "success";

export default function CheckoutModal({
  isOpen,
  onClose,
  cart,
  onClearCart
}: CheckoutModalProps) {
  const [step, setStep] = useState<StepType>("address");
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
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [utr, setUtr] = useState("");

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const isFreeShipping = subtotal >= 499;
  const shippingCost = isFreeShipping ? 0 : 50;
  const total = subtotal + shippingCost;

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

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAddress()) {
      setStep("payment");
    }
  };

  const handleWhatsAppCheckout = () => {
    const generatedId = "MKA-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    
    const itemsText = cart.map(item => `• *${item.product.name}* (${item.product.weight}) - Qty: ${item.quantity} (₹${item.product.price * item.quantity})`).join('\n');
    
    const messageText = `*NEW ORDER: ${generatedId}*\n\n` +
      `*🛒 Items Ordered:*\n${itemsText}\n\n` +
      `*💰 Billing Summary:*\n` +
      `- Subtotal: ₹${subtotal}\n` +
      `- Shipping: ${shippingCost === 0 ? "FREE" : `₹${shippingCost}`}\n` +
      `- *Total Amount: ₹${total}*\n\n` +
      `*📍 Delivery Details:*\n` +
      `- Name: ${addressData.name}\n` +
      `- Phone: ${addressData.phone}\n` +
      `- Email: ${addressData.email}\n` +
      `- Address: ${addressData.address}\n` +
      `- City/Town: ${addressData.city}\n` +
      `- State: ${addressData.state}\n` +
      `- PIN Code: ${addressData.pincode}\n\n` +
      `Please confirm my order and let me know the dispatch details!`;
      
    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919391774374&text=${encodedText}`;
    
    // Dispatch GA4 order intent event
    trackWhatsAppOrderClick({
      source: "cart_checkout",
      orderValue: total,
      city: addressData.city,
      items: cart.map(item => ({
        name: item.product.name,
        weight: item.product.weight,
        quantity: item.quantity,
      })),
    });

    window.open(whatsappUrl, "_blank");
    
    setStep("processing");
    setTimeout(() => {
      setStep("success");
      onClearCart();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto">
      {/* Backdrop overlay */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={step !== "processing" ? onClose : undefined} />

      {/* Modal Dialog card */}
      <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh] animate-scaleUp z-10">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-gray-100 bg-brand-cream flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-brand-green" />
            <h3 className="font-serif font-black text-lg text-brand-dark">
              {step === "address" && "Shipping & Delivery Address"}
              {step === "payment" && "Confirm Order via WhatsApp"}
              {step === "processing" && "Preparing Order Details..."}
              {step === "success" && "Order Confirmed!"}
            </h3>
          </div>
          {step !== "processing" && (
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-brand-dark/50 hover:text-brand-dark hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Step Progress indicators */}
        {step !== "success" && step !== "processing" && (
          <div className="grid grid-cols-2 bg-brand-mint-light/50 border-b border-gray-100 text-center text-xs py-3 shrink-0">
            <div className={`font-bold flex justify-center items-center gap-1.5 ${step === "address" ? "text-brand-green font-extrabold" : "text-brand-dark/40"}`}>
              <MapPin size={14} /> 1. Shipping Details
            </div>
            <div className={`font-bold flex justify-center items-center gap-1.5 ${step === "payment" ? "text-brand-green font-extrabold" : "text-brand-dark/40"}`}>
              <MessageCircle size={14} /> 2. WhatsApp Confirmation
            </div>
          </div>
        )}

        {/* Modal Body Scroll container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Step 1: Address Details Form */}
          {step === "address" && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">Recipient Name</label>
                  <input
                    type="text"
                    value={addressData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Full name"
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                      errors.name ? "border-red-300 bg-red-50/10 focus:border-red-500" : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 font-medium">{errors.name}</span>}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">Mobile Number (India)</label>
                  <input
                    type="text"
                    value={addressData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="10-digit mobile number"
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                      errors.phone ? "border-red-300 bg-red-50/10 focus:border-red-500" : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 font-medium">{errors.phone}</span>}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">Email Address (For Invoicing)</label>
                <input
                  type="email"
                  value={addressData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                    errors.email ? "border-red-300 bg-red-50/10 focus:border-red-500" : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                  }`}
                />
                {errors.email && <span className="text-[10px] text-red-500 font-medium">{errors.email}</span>}
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">Detailed Street Address</label>
                <input
                  type="text"
                  value={addressData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Flat/House no, Street Name, Colony, Landmark"
                  className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                    errors.address ? "border-red-300 bg-red-50/10 focus:border-red-500" : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
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
                      errors.city ? "border-red-300 bg-red-50/10 focus:border-red-500" : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
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
                    <option value="Other">Other State</option>
                  </select>
                </div>

                <div className="space-y-1 col-span-2 sm:col-span-1">
                  <label className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest block">PIN Code (6 digits)</label>
                  <input
                    type="text"
                    value={addressData.pincode}
                    onChange={(e) => handleInputChange("pincode", e.target.value)}
                    placeholder="6-digit pincode"
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                      errors.pincode ? "border-red-300 bg-red-50/10 focus:border-red-500" : "border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                    }`}
                  />
                  {errors.pincode && <span className="text-[10px] text-red-500 font-medium">{errors.pincode}</span>}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-gray-50 flex justify-between items-center gap-4">
                <span className="text-sm font-black text-brand-green font-serif">Total Payable: ₹{total}</span>
                <button
                  type="submit"
                  className="px-6 py-3 bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  <span>Confirm Order Details</span>
                  <Truck size={16} />
                </button>
              </div>
            </form>
          )}

          {/* Step 2: WhatsApp Confirmation */}
          {step === "payment" && (
            <div className="space-y-6">
              <div className="p-4 bg-brand-mint-light/50 border border-brand-mint/40 rounded-2xl flex justify-between items-center text-xs">
                <div>
                  <span className="font-semibold text-brand-green">Shipping to: </span>
                  <span className="text-brand-dark/70">{addressData.name}, {addressData.city} - {addressData.pincode}</span>
                </div>
                <button
                  onClick={() => setStep("address")}
                  className="text-brand-green font-bold flex items-center gap-1 hover:underline cursor-pointer shrink-0"
                >
                  <ArrowLeft size={12} /> Edit Info
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
                      We process all orders directly through WhatsApp to provide you with fast dispatch and personal customer service. No complicated login or checkout portals required.
                    </p>
                  </div>
                </div>

                {/* Simulated message preview */}
                <div className="bg-white border border-gray-150 rounded-xl p-4 space-y-2">
                  <span className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest block border-b border-gray-50 pb-1.5">
                    WhatsApp Message Preview
                  </span>
                  <div className="font-mono text-[11px] text-brand-dark/75 space-y-1 bg-brand-cream/40 p-3 rounded-lg border border-dashed border-gray-200 whitespace-pre-line max-h-[140px] overflow-y-auto select-all">
                    🍯 *NEW ORDER*
                    {"\n"}• *Items:* {cart.map(i => `${i.product.name} (${i.product.weight}) x${i.quantity}`).join(', ')}
                    {"\n"}• *Grand Total:* ₹{total}
                    {"\n"}• *Deliver to:* {addressData.name}, {addressData.city} ({addressData.pincode})
                  </div>
                  <p className="text-[9px] text-brand-dark/40 leading-relaxed">
                    💡 Clicking below will launch WhatsApp with this order's structured message filled out for you automatically.
                  </p>
                </div>
              </div>

              {/* Order Summary Receipt Box */}
              <div className="bg-brand-mint-light/30 border border-brand-green/10 p-4 rounded-2xl text-xs space-y-2">
                <span className="font-serif font-black text-brand-dark text-[10px] tracking-wide uppercase block">Order Summary</span>
                {cart.map(item => (
                  <div key={item.product.id} className="flex justify-between items-center py-1">
                    <span className="text-brand-dark/80">{item.product.name} ({item.product.weight}) <strong className="text-brand-green font-semibold">x{item.quantity}</strong></span>
                    <span className="font-bold text-brand-dark">₹{item.product.price * item.quantity}</span>
                  </div>
                ))}
                <div className="border-t border-brand-green/15 my-2 pt-2 flex justify-between text-sm font-bold text-brand-dark">
                  <span>Grand Total (All Taxes Included)</span>
                  <span className="text-brand-green text-base font-black">₹{total}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                <button
                  onClick={() => setStep("address")}
                  className="w-full sm:w-auto text-xs font-bold text-brand-dark/60 hover:text-brand-dark flex items-center justify-center gap-1 p-2 cursor-pointer"
                >
                  <ArrowLeft size={14} /> Back to Address
                </button>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full sm:w-auto px-8 py-3.5 bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-98"
                >
                  <MessageCircle size={18} className="stroke-[2.5]" />
                  <span>Send Order via WhatsApp</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Processing loading state */}
          {step === "processing" && (
            <div className="text-center py-12 space-y-4 flex flex-col justify-center items-center">
              <Loader2 size={48} className="text-brand-green animate-spin" />
              <div className="space-y-1">
                <span className="text-base font-bold text-brand-dark block font-serif">Preparing Order Details...</span>
                <p className="text-xs text-brand-dark/50 max-w-sm mx-auto font-light leading-relaxed">
                  Compiling your items and shipping details. Redirecting to WhatsApp to complete your order.
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Success confirmation screen */}
          {step === "success" && (
            <div className="text-center py-8 space-y-6 flex flex-col justify-center items-center animate-fadeIn">
              <div className="w-20 h-20 bg-brand-mint/40 rounded-full flex items-center justify-center text-brand-green shadow-inner">
                <CheckCircle2 size={48} className="animate-bounce" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-brand tracking-widest font-bold text-brand-green uppercase">Thank You for Your Order</span>
                <h4 className="font-serif font-extrabold text-2xl sm:text-3xl text-brand-dark leading-tight">Order Request Sent!</h4>
                <div className="inline-block bg-brand-cream text-brand-green font-mono font-bold text-xs px-3 py-1.5 rounded-lg border border-brand-green/10 mt-1 select-all">
                  Order ID: {orderId}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-brand-dark/70 font-light max-w-md mx-auto leading-relaxed">
                Your order request has been sent to our official WhatsApp! Our team will verify your address and coordinate shipment immediately. Your premium sweetener packages will arrive within <strong>3-4 business days</strong>.
              </p>

              <div className="w-full bg-brand-cream/60 rounded-2xl p-4 text-xs space-y-1 border border-gray-100 text-left max-w-md">
                <span className="font-bold text-brand-green block mb-1">Logistics Summary</span>
                <div className="flex justify-between">
                  <span className="text-brand-dark/50">Recipient</span>
                  <span className="font-semibold text-brand-dark">{addressData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-dark/50">Delivery Address</span>
                  <span className="font-semibold text-brand-dark truncate max-w-[200px]">{addressData.address}, {addressData.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-dark/50">Total Bill</span>
                  <span className="font-semibold text-brand-green font-serif">₹{total} (All Taxes Paid)</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3 bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors cursor-pointer"
              >
                Continue Browsing Store
              </button>
            </div>
          )}

        </div>

        {/* Safe Badge Footer */}
        {step !== "success" && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center shrink-0 text-[10px] text-brand-dark/50">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck size={14} className="text-brand-green" /> Official Monkaura Ordering Desk (+91 9391774374)
            </span>
            <span className="hidden sm:inline">Monkaura Sweeteners</span>
          </div>
        )}

      </div>
    </div>
  );
}
