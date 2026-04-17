import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, MessageSquare } from 'lucide-react';

const ChatMessage = ({ text, sender }: { text: string, sender: 'bot' | 'user' }) => (
  <div className={`flex w-full mb-2 ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div className={`p-3 rounded-md max-w-[85%] text-sm ${sender === 'user' ? 'bg-[#0f1218] text-white border border-[#c4a456]/20' : 'bg-[#f1f5f9] text-[#000]'}`}>
      {text}
    </div>
  </div>
);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<{sender: 'bot'|'user', text: string}[]>([
    { sender: 'bot', text: 'Hi! Do you run a hotel or restaurant?' }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasOpened(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const addUserMessage = (text: string) => setMessages(prev => [...prev, { sender: 'user', text }]);
  const addBotMessage = (text: string, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text }]);
    }, delay);
  };

  const handleResponse = (response: string) => {
    addUserMessage(response);
    if (step === 0) {
      setStep(1);
      addBotMessage('Got it! Do you miss bookings or messages during busy hours / late night?');
    } else if (step === 1) {
      setStep(2);
      addBotMessage('Every missed message is losing you money. Our ₹9 AI Blueprint fixes this instantly. Ready to get it?');
    } else if (step === 2) {
      setStep(3);
      if (response === 'Need more info') {
         addBotMessage('No problem! Drop your email below and we will send you some free case studies.');
      } else {
         addBotMessage('Awesome! Click "Get Instant Access" on the page to start. Want free extra tips? Drop your email!');
      }
    }
  };

  const getOptions = () => {
     if(step === 0) return ['Hotel', 'Restaurant', 'Cafe/Other'];
     if(step === 1) return ['Yes, often', 'Sometimes', 'Never'];
     if(step === 2) return ['Yes, I want it!', 'Need more info'];
     return [];
  };

  return (
    <div className="fixed bottom-24 sm:bottom-8 right-4 sm:right-8 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-[#ffffff] border-b-4 border-[#eab308] w-80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden mb-4"
          >
            <div className="p-4 flex justify-between items-center text-[#05070a] shadow-[0_2px_10px_rgba(0,0,0,0.05)] border-b border-gray-100">
              <div className="flex items-center gap-2 font-[700]">
                <span className="bg-[#eab308] w-2 h-2 rounded-full inline-block"></span> AI Assistant
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close Chat">
                <X className="w-5 h-5"/>
              </button>
            </div>
            
            <div className="h-72 overflow-y-auto p-4 bg-[#ffffff] flex flex-col gap-1">
              {messages.map((m, i) => <ChatMessage key={i} {...m} />)}
              {isTyping && <div className="text-[#94a3b8] text-xs mt-1 italic animate-pulse">AI is typing...</div>}
              {step === 3 && !isTyping && (
                <div className="mt-4 p-2 bg-[#f1f5f9] rounded-lg border border-gray-200">
                  <input type="email" placeholder="Enter your email" className="w-full bg-white border border-[#ddd] rounded p-2 text-sm text-black mb-2 focus:ring-2 focus:ring-[#eab308] outline-none" />
                  <button onClick={() => alert('Thanks! We will be in touch.')} className="w-full bg-[#eab308] hover:bg-[#c4a456] text-[#000] uppercase tracking-[0.5px] rounded p-2 text-sm font-bold transition-colors">
                    Send
                  </button>
                </div>
              )}
            </div>
            
            {!isTyping && step < 3 && (
              <div className="p-3 bg-[#f1f5f9] border-t border-gray-200 flex flex-wrap gap-2">
                {getOptions().map(opt => (
                  <button key={opt} onClick={() => handleResponse(opt)} className="bg-white hover:bg-gray-50 text-black border border-[#ddd] px-3 py-1.5 rounded-md font-bold text-xs transition-colors">
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => { setIsOpen(!isOpen); setHasOpened(true); }} 
        className="w-14 h-14 bg-[#eab308] hover:bg-[#c4a456] text-[#000] rounded-full shadow-[0_4px_15px_rgba(234,179,8,0.3)] flex items-center justify-center transition-transform hover:scale-110 relative"
      >
        <MessageSquare className="w-6 h-6" />
        {!hasOpened && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-slate-950"></span>
          </span>
        )}
      </button>
    </div>
  );
}
