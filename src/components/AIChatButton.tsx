import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, AlertCircle, Bot, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ChatMessage {
  text: string;
  role: "user" | "model";
  timestamp: string;
}

const SUGGESTIONS = [
  "How can I book a flight ticket?",
  "Urgent Saudi visa documents help?",
  "Nearest airport location of Dream Way?",
  "What airlines do you issue?",
];

export const AIChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Hello! I am your Dream Way Travels AI assistant. How can I help you with flight ticketing or visa bookings today?",
      role: "model",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    setErrorMessage(null);
    const userMessage: ChatMessage = {
      text,
      role: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Build chat history excluding the very first bot introduction to keep it slim
      const historyPayload = messages.slice(1).map((msg) => ({
        role: msg.role === "user" ? "user" : "model",
        text: msg.text,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: historyPayload,
        }),
      });

      if (!res.ok) {
        throw new Error("Server error. Please connect directly via WhatsApp.");
      }

      const data = await res.json();
      const botMessage: ChatMessage = {
        text: data.reply,
        role: "model",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error("AI Assistant Error:", err);
      setErrorMessage("Could not connect to the assistant. Please click the call or WhatsApp button below!");
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="relative z-50 flex flex-col items-end" id="ai-chat-root">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 35, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 280, damping: 25 }}
            className="absolute bottom-16 right-0 w-[90vw] sm:w-[380px] h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden shrink-0"
            id="ai-chatbot-panel"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-4 text-white flex justify-between items-center border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#2a9bbc]/15 flex items-center justify-center border border-[#2a9bbc]/30 text-[#2a9bbc] relative shrink-0">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-slate-900 animate-ping" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-slate-900" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-slate-100 flex items-center gap-1.5 leading-none">
                    Dreamway Assistant
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1 font-semibold tracking-wide capitalize">
                    <span>Flight & Visa AI Agent</span>
                    <span className="text-green-500 font-bold">• Live</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Minimize chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50/50 space-y-4 flex flex-col">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="flex gap-2.5 max-w-[85%] items-end">
                    {msg.role !== "user" && (
                      <div className="w-7 h-7 rounded-full bg-slate-900 text-sky-400 flex items-center justify-center text-xs shrink-0 border border-slate-800 select-none">
                        <Bot className="w-4.5 h-4.5" />
                      </div>
                    )}
                    <div className="space-y-1">
                      <div
                        className={`p-3 text-xs sm:text-[13px] leading-relaxed rounded-2xl ${
                          msg.role === "user"
                            ? "bg-[#2a9bbc] text-white rounded-tr-none font-sans"
                            : "bg-white text-slate-800 border border-slate-150 rounded-tl-none font-sans shadow-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className={`block text-[9px] text-slate-400 font-mono tracking-tight ${msg.role === "user" ? "text-right" : "text-left"}`}>
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2.5 items-center">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-sky-400 flex items-center justify-center text-xs shrink-0 border border-slate-800 select-none">
                      <Bot className="w-4.5 h-4.5" />
                    </div>
                    <div className="bg-white border border-slate-150 py-3.5 px-4 rounded-2xl rounded-tl-none flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 bg-[#2a9bbc] rounded-full animate-bounce duration-500" />
                      <span className="w-1.5 h-1.5 bg-[#2a9bbc] rounded-full animate-bounce duration-500 delay-150" />
                      <span className="w-1.5 h-1.5 bg-[#2a9bbc] rounded-full animate-bounce duration-500 delay-300" />
                    </div>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-150 text-red-700 rounded-xl text-xs flex gap-2 items-start shadow-sm">
                  <AlertCircle className="w-4.5 h-4.5 shrink-0 mt-0.5 text-red-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions Drawer (shown only when messages are minimal) */}
            {messages.length < 3 && !isTyping && (
              <div className="px-4 py-2 bg-slate-50 border-t border-slate-150/70">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">Common Queries:</div>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTIONS.map((sug, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(sug)}
                      className="text-[11px] font-medium text-slate-700 bg-white hover:bg-[#2a9bbc] hover:text-white border border-slate-200 hover:border-[#2a9bbc] py-1.5 px-3.5 rounded-full transition-all text-left font-sans cursor-pointer shadow-xs active:scale-95"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <div className="p-3 bg-white border-t border-slate-150 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage(inputValue);
                  }
                }}
                disabled={isTyping}
                placeholder="Ask about flights, visa info near CCJ..."
                className="flex-1 py-2.5 px-3.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2a9bbc]/40 focus:border-[#2a9bbc] transition-all disabled:opacity-60"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim() || isTyping}
                className="w-10 h-10 bg-[#2a9bbc] hover:bg-[#1f7791] text-white rounded-xl flex items-center justify-center transition-all shadow-md shadow-[#2a9bbc]/20 disabled:opacity-40 disabled:pointer-events-none active:scale-95 cursor-pointer"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            {/* Disclaimer */}
            <div className="bg-slate-900 text-slate-500 text-[8px] tracking-wide text-center py-1 border-t border-slate-800">
              Dream Way Travels Official AI Planners • Kondotty Desk
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating bubble toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 border border-slate-800 cursor-pointer relative group transition-transform duration-250 animate-bounce-slow"
        title="Chat with Dreamway AI Helper"
        id="trigger-ai-chat"
      >
        <span className="absolute -top-1.5 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2a9bbc] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2a9bbc]"></span>
        </span>
        <MessageSquare className="w-6 h-6 text-[#2a9bbc]" />
      </button>
    </div>
  );
};
