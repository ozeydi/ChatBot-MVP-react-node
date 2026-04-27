import React, { useState } from 'react';

interface Props {
    onSend: (text: string) => void;
    disabled: boolean;
}

const ChatInput = ({ onSend, disabled }: Props) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || disabled) return;
        onSend(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-200 flex gap-2 items-center">
            <input
                type="text"
                className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-700 placeholder:text-slate-400 transition-all"
                placeholder="Type your message..."
                value={input}
                maxLength={500}
                onChange={(e) => setInput(e.target.value.slice(0, 500))}
                disabled={disabled}
                aria-label="Message input"
            />
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white w-12 h-12 flex items-center justify-center rounded-xl transition-all shadow-md active:scale-95"
                disabled={!input.trim() || disabled}
                aria-label="Send message"
                title="Send message"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" /></svg>
            </button>
        </form>
    );
};

export default ChatInput;
