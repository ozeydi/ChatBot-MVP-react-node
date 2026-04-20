import { useEffect, useRef } from 'react';
import type { Message } from '@shared/types';
import MessageItem from './MessageItem';

interface Props {
    messages: Message[];
    isLoading: boolean;
}

const MessageList = ({ messages, isLoading }: Props) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Check if user is near the bottom (within 100px) before auto-scrolling
        const isNearBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 100;

        if (isNearBottom || messages[messages.length - 1]?.sender === 'user') {
            scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isLoading]);

    return (
        <main
            ref={containerRef}
            className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-slate-50 min-h-0"
            aria-live="polite"
            aria-relevant="additions"
        >
            {messages.map((m) => <MessageItem key={m.id} message={m} />)}
            {/* Invisible anchor for scrolling */}
            <div ref={scrollRef} aria-hidden="true" className="h-px w-full" />
        </main>
    );
};

export default MessageList;