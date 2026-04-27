import BotIcon from '../assets/bot-icon.svg';

export const ChatHeader = () => (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 flex items-center justify-between shadow-lg z-10">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-xl font-bold border-2 border-blue-300">
                <img src={BotIcon} alt="Bot Avatar" title="Support Assistant" className="w-6 h-6 text-white" />
            </div>
            <div>
                <h1 className="text-lg font-bold leading-none">Support Assistant</h1>
                <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-xs text-blue-100 font-medium">Online</span>
                </div>
            </div>
        </div>
    </header>
);