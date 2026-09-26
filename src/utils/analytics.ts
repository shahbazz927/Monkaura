/**
 * Google Analytics 4 (GA4) & Ecommerce typed tracking helper for MÕNKAURA
 * Measurement ID: G-ZVV9VT7X52
 */

import { Product, CartItem } from "../types";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window !== "undefined") {
    // 1. Send via Google Global Site Tag (gtag.js)
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
    // 2. Push to dataLayer for Google Tag Manager (GTM)
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  }
}

/**
 * 1. Track viewing an individual product or pack page
 */
export function trackViewItem(product: Product) {
  trackEvent("view_item", {
    currency: "INR",
    value: product.price,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        item_category: "Table-top Sweetener",
        item_variant: product.weight,
        price: product.price,
        quantity: 1,
      },
    ],
  });
}

/**
 * 2. Track user selecting a pack size (100g vs 200g)
 */
export function trackPackSelect(product: Product) {
  trackEvent("select_item", {
    currency: "INR",
    item_list_name: "Pack Selector",
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        item_category: "Table-top Sweetener",
        item_variant: product.weight,
        price: product.price,
      },
    ],
  });
}

/**
 * 3. Track adding a product to cart
 */
export function trackAddToCart(product: Product, quantity: number) {
  trackEvent("add_to_cart", {
    currency: "INR",
    value: product.price * quantity,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        item_category: "Table-top Sweetener",
        item_variant: product.weight,
        price: product.price,
        quantity,
      },
    ],
  });
}

/**
 * 4. Track direct "Buy Now" button click
 */
export function trackBuyNowClick(product: Product, quantity: number) {
  trackEvent("buy_now_clicked", {
    currency: "INR",
    value: product.price * quantity,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        item_variant: product.weight,
        price: product.price,
        quantity,
      },
    ],
  });
}

/**
 * 5. Track beginning of checkout flow
 */
export function trackBeginCheckout(cart: CartItem[], totalValue: number) {
  trackEvent("begin_checkout", {
    currency: "INR",
    value: totalValue,
    items: cart.map(item => ({
      item_id: item.product.id,
      item_name: item.product.name,
      item_variant: item.product.weight,
      price: item.product.price,
      quantity: item.quantity,
    })),
  });
}

/**
 * 6. Track WhatsApp ordering click / intent.
 * CRITICAL CRO DISCIPLINE: We record this as "whatsapp_order_click", NOT "purchase".
 * Clicking WhatsApp is high-intent lead generation, but revenue is only confirmed when payment is received.
 */
export function trackWhatsAppOrderClick(details: {
  source: "buy_now_modal" | "cart_checkout" | "floating_widget" | "product_page";
  orderValue?: number;
  items?: Array<{ name: string; weight: string; quantity: number }>;
  city?: string;
}) {
  trackEvent("whatsapp_order_click", {
    currency: "INR",
    value: details.orderValue || 0,
    source: details.source,
    city: details.city || "unknown",
    item_count: details.items?.length || 0,
  });
}

/**
 * 7. Track completed purchase.
 * ONLY triggered upon actual payment verification / manual order confirmation.
 */
export function trackConfirmedPurchase(details: {
  orderId: string;
  totalValue: number;
  shippingCost: number;
  paymentMethod: string;
  items: Array<{
    id: string;
    name: string;
    variant: string;
    price: number;
    quantity: number;
  }>;
}) {
  trackEvent("purchase", {
    transaction_id: details.orderId,
    currency: "INR",
    value: details.totalValue,
    shipping: details.shippingCost,
    payment_type: details.paymentMethod,
    items: details.items.map(item => ({
      item_id: item.id,
      item_name: item.name,
      item_variant: item.variant,
      price: item.price,
      quantity: item.quantity,
    })),
  });
}
