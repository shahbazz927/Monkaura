import React from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, CreditCard } from "lucide-react";
import { CartItem, Product } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  onProceedToCheckout
}: CartDrawerProps) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const isFreeShipping = subtotal >= 499;
  const shippingCost = subtotal === 0 ? 0 : isFreeShipping ? 0 : 50;
  const total = subtotal + shippingCost;
  
  const freeShippingThreshold = 499;
  const diffToFreeShipping = freeShippingThreshold - subtotal;
  const progressPercent = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-out Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-slideLeft">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-brand-cream">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} className="text-brand-green" />
              <h3 className="font-serif font-black text-lg text-brand-dark">Your Sweet Shopping Bag</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-brand-dark/50 hover:text-brand-dark hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Shipping Progress bar */}
          {subtotal > 0 && (
            <div className="px-6 py-4 bg-brand-mint-light border-b border-brand-mint/30 space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <Truck size={14} className="text-brand-green" />
                {isFreeShipping ? (
                  <span className="font-semibold text-brand-green">Congrats! You unlocked FREE EXPRESS SHIPPING! 🎉</span>
                ) : (
                  <span className="text-brand-dark/80 font-medium">
                    Add <strong className="text-brand-green font-bold">₹{diffToFreeShipping}</strong> more for <strong className="font-bold text-brand-green">FREE SHIPPING</strong>!
                  </span>
                )}
              </div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-brand-green h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col justify-center items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-cream flex justify-center items-center text-brand-dark/40 border border-gray-100">
                  <ShoppingBag size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-brand-dark">Your bag is empty!</h4>
                  <p className="text-xs text-brand-dark/50 font-light max-w-xs">
                    Satisfy your health cravings by adding some premium Monkaura sweetener packages to your shopping bag.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map(item => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 border border-gray-100 rounded-2xl bg-brand-cream/30 hover:border-brand-green/15 transition-all group"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 bg-brand-cream rounded-xl overflow-hidden shrink-0 border border-gray-50 flex items-center justify-center p-1">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Details Block */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-brand-dark truncate leading-tight group-hover:text-brand-green transition-colors">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-brand-dark/30 hover:text-red-500 p-1 rounded-md hover:bg-red-50 transition-colors cursor-pointer shrink-0"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                      <span className="text-[10px] text-brand-gold font-semibold uppercase tracking-wide">
                        {item.product.weight} Pack
                      </span>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      {/* Qty selectors */}
                      <div className="flex items-center border border-gray-200 rounded-lg bg-white">
                        <button
                          onClick={() => onUpdateQty(item.product.id, item.quantity - 1)}
                          className="p-1 px-2 text-brand-dark hover:text-brand-green hover:bg-brand-mint-light transition-colors rounded-l-lg cursor-pointer"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={11} />
                        </button>
                        <span className="px-2 text-xs font-semibold text-brand-dark select-none">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.product.id, item.quantity + 1)}
                          className="p-1 px-2 text-brand-dark hover:text-brand-green hover:bg-brand-mint-light transition-colors rounded-r-lg cursor-pointer"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <span className="text-xs sm:text-sm font-black text-brand-dark">
                        ₹{item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Receipt Block */}
          {cart.length > 0 && (
            <div className="border-t border-gray-100 p-6 bg-brand-cream/50 space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-brand-dark/70">
                  <span>Subtotal</span>
                  <span className="font-semibold text-brand-dark">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-brand-dark/70">
                  <span>Shipping Cost</span>
                  <span className="font-semibold text-brand-dark">
                    {shippingCost === 0 ? "FREE" : `₹${shippingCost}`}
                  </span>
                </div>
                <div className="border-t border-gray-200 my-2 pt-2 flex justify-between text-brand-dark text-sm font-bold">
                  <span className="font-serif">Estimated Total</span>
                  <span className="text-brand-green text-base font-black">₹{total}</span>
                </div>
              </div>

              {/* Checkout Actions */}
              <button
                onClick={onProceedToCheckout}
                className="w-full h-12 bg-brand-green hover:bg-brand-green-light text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <ShoppingBag size={16} />
                <span>Proceed to Order</span>
              </button>

              <div className="text-[10px] text-center text-brand-dark/40 font-light">
                Order details will be sent directly to our official WhatsApp for fast dispatch and processing.
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
