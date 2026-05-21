const KEY_STORAGE = "prime-basket-ai-key";
const PROVIDER_STORAGE = "prime-basket-ai-provider";

export const AI_PROVIDERS = {
  groq: {
    id: "groq",
    label: "Groq (Free)",
    hint: "Free tier at console.groq.com",
    envKey: "GROQ_API_KEY",
    url: "https://api.groq.com/openai/v1/chat/completions",
    model: "llama-3.3-70b-versatile",
  },
  openai: {
    id: "openai",
    label: "OpenAI (Paid)",
    hint: "Requires billing at platform.openai.com",
    envKey: "OPENAI_API_KEY",
    url: "https://api.openai.com/v1/chat/completions",
    model: "gpt-4o-mini",
  },
};

export function getProvider() {
  const stored =
    typeof sessionStorage !== "undefined" ? sessionStorage.getItem(PROVIDER_STORAGE) : null;
  return stored && AI_PROVIDERS[stored] ? stored : "groq";
}

export function saveProvider(provider) {
  sessionStorage.setItem(PROVIDER_STORAGE, provider);
}

export function getApiKey(provider = getProvider()) {
  const fromSession =
    typeof sessionStorage !== "undefined" ? sessionStorage.getItem(KEY_STORAGE) : "";
  const config = AI_PROVIDERS[provider];
  const fromEnv =
    typeof process !== "undefined" && config ? process.env?.[config.envKey] : "";
  return (fromSession || fromEnv || "").trim();
}

export function saveApiKey(key) {
  const trimmed = key.trim();
  if (trimmed) {
    sessionStorage.setItem(KEY_STORAGE, trimmed);
  } else {
    sessionStorage.removeItem(KEY_STORAGE);
  }
}

function buildSystemPrompt(cartCount) {
  return `You are Prime Assistant, the friendly AI support chatbot for Prime Basket — an online grocery and product store.

Help customers with: browsing products, cart, checkout (PrimePay), shipping, returns, and contact info.

Store facts (use only these — do not invent products or prices):
- Free delivery on orders over $50; standard delivery 3–5 business days in India
- Returns within 7 days for unused items in original packaging
- Contact: support@primebasket.com, +91 98765 43210
- Payment via PrimePay (cards/UPI demo)
- Customer's cart currently has ${cartCount} item(s)

Keep replies concise (2–4 sentences), warm, and helpful. Use plain text, no markdown headers. If you cannot help, suggest the Contact page.`;
}

export async function getAIReply(chatHistory, cartCount, provider, apiKey) {
  const config = AI_PROVIDERS[provider];
  if (!config) throw new Error("Unknown AI provider");

  const messages = [
    { role: "system", content: buildSystemPrompt(cartCount) },
    ...chatHistory
      .filter((m) => m.id !== "welcome" && !m.loading && !m.error)
      .slice(-10)
      .map((m) => ({
        role: m.from === "user" ? "user" : "assistant",
        content: m.text,
      })),
  ];

  const response = await fetch(config.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages,
      max_tokens: 350,
      temperature: 0.6,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = data?.error?.message || `Request failed (${response.status})`;
    throw new Error(message);
  }

  return data.choices?.[0]?.message?.content?.trim() || "Sorry, I couldn't generate a reply. Please try again.";
}
