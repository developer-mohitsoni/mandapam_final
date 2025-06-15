import { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [visible, setVisible] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const toggleChat = () => {
    setVisible(!visible);
    if (!visible) {
      setUnreadCount(0); // Reset unread count when opening
    }
  };

  return (
    <div className="chatbot-wrapper">
      <button
        className={`chat-toggle ${unreadCount > 0 ? 'has-unread' : ''}`}
        onClick={toggleChat}
        aria-label="Toggle chat window"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        {unreadCount > 0 && <span className="unread-badge">{unreadCount}</span>}
      </button>

      {visible && (
        <div className="chat-container" role="dialog" aria-label="Chatbot window">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/hT0gizDxCcc-YlWRKZygI"
            title="Chatbot"
            width="100%"
            height="500px"
            style={{ border: 'none', borderRadius: '8px' }}
          ></iframe>

          <button
            className="close-chat"
            onClick={toggleChat}
            aria-label="Close chat window"
            style={{ position: 'absolute', top: '10px', right: '10px' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
