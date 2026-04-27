export const TypingIndicator = () => (
    <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="bg-slate-200 text-slate-500 px-4 py-2.5 rounded-2xl rounded-tl-none">
            <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
        </div>
    </div>
);