import { useChat } from './hooks/useChat';
import { ChatHeader } from './components/ChatHeader';
import MessageList from './components/MessageList';
import ChatInput from './components/ChatInput';

function App() {
  const { messages, isLoading, error, sendMessage } = useChat();

  return (
    <div className="flex items-center justify-center min-h-dvh bg-slate-200 p-0 md:p-4 font-sans text-slate-900">
      <div className="relative flex flex-col w-full h-dvh md:h-[700px] md:max-h-[90vh] md:max-w-2xl bg-white md:rounded-2xl shadow-2xl overflow-hidden border border-slate-300" role="application" aria-label="Support Chat">
        <ChatHeader />

        {error && (
          <div className="absolute top-[72px] left-0 right-0 z-20 bg-red-50 border-b border-red-100 px-4 py-2 flex items-center gap-2 animate-in fade-in slide-in-from-top-1 duration-200" role="alert">
            <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
            <p className="text-[11px] font-medium text-red-600">{error}</p>
          </div>
        )}

        <MessageList messages={messages} isLoading={isLoading} />
        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </div>
    </div>
  );
}

export default App
