import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '../src/hooks/useChat';
import BotIcon from './assets/bot-icon.svg';

function App() {
  const { messages, isLoading, error, sendMessage } = useChat();
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const formatTime = (ts: number) => {
    return new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric' }).format(new Date(ts));
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200 p-2 md:p-4 font-sans text-slate-900">
      <div className="flex flex-col w-full h-[700px] max-h-[90vh] max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-300">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 flex items-center gap-3 shadow-lg">
          <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center border-2 border-blue-300">
            <img src={BotIcon} alt="Bot" className="w-6 h-6" />
          </div>
          <h1 className="text-lg font-bold">ChatBot</h1>
        </header>
        {error && (
          <div className="bg-red-50 border-b border-red-100 px-4 py-2 flex items-center gap-2 animate-in fade-in slide-in-from-top-1 duration-200">
            <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
            <p className="text-[11px] font-medium text-red-600">{error}</p>
          </div>
        )}

        {/* Chat Window */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
          {messages.map((m) => (
            <div key={m.id} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] px-4 py-2.5 shadow-sm rounded-2xl ${m.sender === 'user'
                ? 'bg-blue-600 text-white rounded-tr-none'
                : 'bg-white border text-slate-800 rounded-tl-none'
                }`}>
                <p className="text-[15px] leading-relaxed whitespace-pre-wrap">{m.text}</p>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 font-medium">{formatTime(m.timestamp)}</span>
            </div>
          ))}
          {isLoading && (
            <div className="text-slate-400 italic text-xs px-2 animate-pulse">Bot is thinking...</div>
          )}
          <div ref={scrollRef} />
        </main>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-4 bg-white border-t flex gap-2">
          <input
            className="flex-1 bg-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20"
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            maxLength={500}
            aria-label="Message input"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 rounded-xl font-semibold disabled:bg-slate-300 transition-all active:scale-95"
            disabled={!input.trim() || isLoading}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
export default App;
