import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBotReply, QUICK_REPLIES } from "../utils/chatbotResponses";
import {
  AI_PROVIDERS,
  getApiKey,
  getProvider,
  saveApiKey,
  saveProvider,
  getAIReply,
} from "../utils/aiChat";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [provider, setProvider] = useState(getProvider);
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [hasApiKey, setHasApiKey] = useState(!!getApiKey());
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      from: "bot",
      text: hasApiKey
        ? "Hi! I'm Prime Assistant powered by AI 🛒 Ask me anything about shopping here."
        : "Hi! I'm Prime Assistant 🛒 Use a free Groq key in settings (gear icon), or I'll use quick FAQ answers.",
    },
  ]);
  const messagesEndRef = useRef(null);
  const cartCount = useSelector((store) => store.cart.items.length);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isLoading]);

  useEffect(() => {
    if (!hasApiKey && isOpen && !getApiKey()) {
      setShowSettings(true);
    }
  }, [isOpen, hasApiKey]);

  function handleSaveApiKey(e) {
    e.preventDefault();
    saveProvider(provider);
    saveApiKey(apiKeyInput);
    const keyExists = !!getApiKey(provider);
    setHasApiKey(keyExists);
    setShowSettings(false);
    if (keyExists) {
      const name = AI_PROVIDERS[provider].label;
      setMessages([
        {
          id: "welcome",
          from: "bot",
          text: `Connected to ${name}! How can I help you today?`,
        },
      ]);
    }
  }

  async function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMsg = { id: Date.now(), from: "user", text: trimmed };
    const loadingId = Date.now() + 1;

    setMessages((prev) => [
      ...prev,
      userMsg,
      { id: loadingId, from: "bot", text: "...", loading: true },
    ]);
    setInput("");
    setIsLoading(true);

    const activeProvider = getProvider();
    const apiKey = getApiKey(activeProvider);
    let botText;

    try {
      if (apiKey) {
        const history = [...messages, userMsg];
        botText = await getAIReply(history, cartCount, activeProvider, apiKey);
      } else {
        botText = getBotReply(trimmed, cartCount);
      }
    } catch (err) {
      botText =
        err.message?.toLowerCase().includes("api key") || err.message?.includes("401")
          ? "Invalid API key. Open settings and check your key, or try Groq (free)."
          : `AI error: ${err.message}. Using fallback answer instead.\n\n${getBotReply(trimmed, cartCount)}`;
    }

    setMessages((prev) =>
      prev
        .filter((m) => m.id !== loadingId)
        .concat({ id: Date.now() + 2, from: "bot", text: botText })
    );
    setIsLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] flex flex-col items-end gap-3">
      {isOpen && (
        <div
          className="w-[calc(100vw-2rem)] sm:w-[380px] h-[min(560px,calc(100vh-6rem))] flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl shadow-slate-900/10 dark:shadow-black/50 overflow-hidden"
          role="dialog"
          aria-label="Prime Assistant chat"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-brand-600 text-white shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg shrink-0">
                🛒
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm flex items-center gap-2">
                  Prime Assistant
                  {hasApiKey && (
                    <span className="text-[10px] font-bold uppercase tracking-wide bg-white/20 px-1.5 py-0.5 rounded">
                      AI
                    </span>
                  )}
                </p>
                <p className="text-xs text-white/80 truncate">
                  {hasApiKey ? `Powered by ${AI_PROVIDERS[getProvider()].label}` : "FAQ mode — add free Groq key"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => setShowSettings((s) => !s)}
                aria-label="Chat settings"
                className="p-1.5 rounded-lg hover:bg-white/15 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="p-1.5 rounded-lg hover:bg-white/15 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {showSettings && (
            <form
              onSubmit={handleSaveApiKey}
              className="p-3 bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-900 shrink-0"
            >
              <p className="text-xs font-semibold text-amber-900 dark:text-amber-200 mb-2">
                AI provider
              </p>
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-lg border border-amber-200 dark:border-amber-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 outline-none focus:border-brand-500 mb-2"
              >
                {Object.values(AI_PROVIDERS).map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>
              <p className="text-[10px] text-amber-800/80 dark:text-amber-300/70 mb-2">
                {AI_PROVIDERS[provider].hint} —{" "}
                <a
                  href={provider === "groq" ? "https://console.groq.com/keys" : "https://platform.openai.com/api-keys"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 dark:text-brand-400 underline"
                >
                  Get free key
                </a>
              </p>
              <input
                type="password"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="Paste API key (gsk_... or sk-...)"
                className="w-full text-xs px-3 py-2 rounded-lg border border-amber-200 dark:border-amber-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 outline-none focus:border-brand-500 mb-2"
              />
              <div className="flex gap-2">
                <button type="submit" className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-700">
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    saveApiKey("");
                    setApiKeyInput("");
                    setHasApiKey(false);
                  }}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-amber-100 dark:hover:bg-amber-900/50"
                >
                  Remove
                </button>
              </div>
              <p className="text-[10px] text-amber-800/80 dark:text-amber-300/70 mt-2">
                Or use <code className="bg-amber-100 dark:bg-amber-900/50 px-1 rounded">GROQ_API_KEY</code> /{" "}
                <code className="bg-amber-100 dark:bg-amber-900/50 px-1 rounded">OPENAI_API_KEY</code> in .env
              </p>
            </form>
          )}

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50 dark:bg-slate-950">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.from === "user"
                      ? "bg-brand-600 text-white rounded-br-md"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-md shadow-sm"
                  } ${msg.loading ? "animate-pulse" : ""}`}
                >
                  {msg.loading ? (
                    <span className="inline-flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.15s]" />
                      <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.3s]" />
                    </span>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 2 && !isLoading && (
            <div className="px-3 pb-2 flex flex-wrap gap-2 bg-slate-50 dark:bg-slate-950 shrink-0">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => sendMessage(reply)}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={hasApiKey ? "Ask me anything..." : "Type a message..."}
                disabled={isLoading}
                className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="shrink-0 p-2.5 rounded-xl bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 text-center">
              Need more help?{" "}
              <Link to="/contact" className="text-brand-600 dark:text-brand-400 hover:underline">
                Contact us
              </Link>
            </p>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-slate-800 dark:bg-slate-700 text-white"
            : "bg-brand-600 hover:bg-brand-700 text-white shadow-brand-600/30"
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="font-semibold text-sm hidden sm:inline">Chat</span>
          </>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
