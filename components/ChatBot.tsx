import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Redirect to WhatsApp with the message
    const phoneNumber = '2348037807987';
    const message = encodeURIComponent(inputValue);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    setInputValue('');
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-primary-600 hover:bg-primary-700'
        } text-white`}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 w-[90vw] md:w-80 bg-white rounded-2xl shadow-2xl z-40 flex flex-col transition-all duration-300 transform origin-bottom-right border border-slate-100 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-primary-600 p-4 rounded-t-2xl flex items-center space-x-3 text-white">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot size={20} />
          </div>
          <div>
            <h3 className="font-bold">Chat with Us</h3>
            <p className="text-xs text-primary-100">
              Online on WhatsApp
            </p>
          </div>
        </div>

        {/* Message Content */}
        <div className="p-6 bg-slate-50 flex-1">
          <div className="bg-white p-4 rounded-xl rounded-tl-none shadow-sm text-sm text-slate-700 border border-slate-100">
            Hello! 👋 We are available to assist you directly on WhatsApp. Type your message below to start a chat with our team.
          </div>
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 rounded-b-2xl">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 bg-slate-100 border-none rounded-full focus:ring-2 focus:ring-primary-500 focus:outline-none text-sm px-4"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-400 mt-2">
            Redirects to WhatsApp securely.
          </p>
        </form>
      </div>
    </>
  );
};

export default ChatBot;