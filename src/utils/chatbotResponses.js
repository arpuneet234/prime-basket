const QUICK_REPLIES = [
  "Track my order",
  "Shipping info",
  "Return policy",
  "Contact support",
];

function getBotReply(message, cartCount = 0) {
  const text = message.toLowerCase().trim();

  if (/^(hi|hello|hey|hola)\b/.test(text)) {
    return "Hello! 👋 I'm Prime Assistant. Ask me about products, orders, shipping, or payments.";
  }

  if (/cart|basket|checkout/.test(text)) {
    return cartCount > 0
      ? `You have ${cartCount} item${cartCount > 1 ? "s" : ""} in your cart. Go to Cart to review or proceed to PrimePay for checkout.`
      : "Your cart is empty. Browse products on Home and tap Add to cart on any item.";
  }

  if (/ship|deliver|delivery/.test(text)) {
    return "We offer free delivery on orders over $50. Standard delivery takes 3–5 business days across India.";
  }

  if (/return|refund|exchange/.test(text)) {
    return "Returns are accepted within 7 days for unused items in original packaging. Email support@primebasket.com to start a return.";
  }

  if (/pay|payment|primepay|card/.test(text)) {
    return "Checkout is handled via PrimePay on our secure payment page. We support cards and UPI (demo mode in this app).";
  }

  if (/contact|support|email|phone|call/.test(text)) {
    return "Reach us at support@primebasket.com or +91 98765 43210. Visit the Contact page for more details.";
  }

  if (/product|search|browse|shop/.test(text)) {
    return "Use the search bar on Home to find products, or tap Top rated to see highly rated items.";
  }

  if (/track|order status|where is my order/.test(text)) {
    return "Order tracking is coming soon. For now, check your email confirmation or contact support with your order ID.";
  }

  if (/thank|thanks|thx/.test(text)) {
    return "You're welcome! Happy shopping at Prime Basket. 🛒";
  }

  if (/bye|goodbye|exit/.test(text)) {
    return "Goodbye! Come back anytime if you need help.";
  }

  if (/help|what can you do/.test(text)) {
    return "I can help with: products, cart, shipping, returns, payments, and contact info. Try a quick reply below or type your question.";
  }

  return "I'm not sure about that. Try asking about shipping, returns, cart, payments, or contact support. You can also visit our Contact page.";
}

export { QUICK_REPLIES, getBotReply };
