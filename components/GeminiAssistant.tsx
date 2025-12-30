import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Bot } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your personal Shopily stylist. Looking for the perfect pair? Ask me anything!' }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare context about store (simplified)
    const context = "Store sells: Running shoes ($160-189), Lifestyle ($145), Leather Formal ($250).";
    
    const responseText = await getGeminiResponse(userMsg.text, context);
    
    // Safety check for undefined response
    const safeResponse = responseText || "I couldn't quite catch that. Could you rephrase?";

    setMessages(prev => [...prev, { role: 'model', text: safeResponse }]);
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-shopily-burgundy text-white shadow-2xl flex items-center justify-center glass-panel border-none"
          >
            <Sparkles className="w-8 h-8 animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[400px] h-[600px] glass-panel-dark rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-shopily-cream/20"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-shopily-charcoal/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-shopily-burgundy flex items-center justify-center">
                   <Bot className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Shopily AI</h3>
                  <p className="text-shopily-cream text-xs">Powered by Gemini</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-shopily-burgundy text-white rounded-br-none' 
                      : 'bg-white/10 text-shopily-bluegrey backdrop-blur-md rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none flex gap-2">
                    <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-shopily-charcoal/30 backdrop-blur-md border-t border-white/10">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about shoes..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-shopily-burgundy/50 transition-all"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-shopily-cream text-shopily-charcoal rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
