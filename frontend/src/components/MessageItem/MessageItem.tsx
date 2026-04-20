import { memo } from 'react';
import type { Message } from '@shared/types';

const formatTime = (ts: number) => {
    return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
    }).format(new Date(ts));
};

interface Props {
    message: Message;
}

const MessageItem = ({ message }: Props) => {
    const isUser = message.sender === 'user';
    return (
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
            <div className={`group relative max-w-[85%] px-4 py-2.5 shadow-sm transition-all hover:shadow-md ${isUser ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none' : 'bg-white text-slate-800 border border-slate-200 rounded-2xl rounded-tl-none'
                }`}>
                <p className="text-[15px] leading-relaxed whitespace-pre-wrap">{message.text}</p>
            </div>
            <time dateTime={new Date(message.timestamp).toISOString()} className="text-[10px] text-slate-400 mt-1.5 px-1 font-medium">
                {formatTime(message.timestamp)}
            </time>
        </div>
    );
};

export default memo(MessageItem);