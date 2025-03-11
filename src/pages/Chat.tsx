
import React, { useState, useRef, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import BottomNavigationBar from '@/components/BottomNavigationBar';
import ChatMessage from '@/components/ChatMessage';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  
  // Sample data - in a real app, this would come from an API
  const messages = [
    {
      id: '1',
      user: {
        name: 'Kovács Péter',
        avatar: 'https://i.pravatar.cc/150?img=11',
      },
      text: 'Sziasztok! Valaki kipróbálta már ezt az edzéstervet? Mit gondoltok róla?',
      timestamp: '10:30',
      likes: 3,
      dislikes: 0,
      isCurrentUser: false,
    },
    {
      id: '2',
      user: {
        name: 'Nagy Anna',
        avatar: 'https://i.pravatar.cc/150?img=5',
      },
      text: 'Igen, én már egy hete követem. Nagyon hasznos, de az első pár nap elég kemény volt!',
      timestamp: '10:45',
      likes: 5,
      dislikes: 0,
      isCurrentUser: false,
    },
    {
      id: '3',
      user: {
        name: 'Te',
        avatar: 'https://i.pravatar.cc/150?img=3',
      },
      text: 'Köszönöm a visszajelzést! Holnap kezdem el, remélem bírom majd.',
      timestamp: '11:02',
      likes: 2,
      dislikes: 0,
      isCurrentUser: true,
    },
  ];
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message to an API
      setMessage('');
    }
  };
  
  return (
    <div className="mobile-container page-transition pb-20">
      <PageHeader title="HIIT Zsírégető Csevegés" showBack={true} />
      
      <div className="glass-card p-3 mb-4 animate-fade-in">
        <p className="text-xs text-center text-muted-foreground">
          Ebben a csoportban csak azok láthatják az üzeneteket, akik ezt az edzéstervet használják.
        </p>
      </div>
      
      <div className="space-y-4 mb-4 animate-fade-in">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} {...msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="fixed bottom-16 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t border-border">
        <div className="max-w-md mx-auto flex gap-2">
          <Input
            placeholder="Írd be üzeneted..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            className="shadow-sm"
          />
          <Button 
            size="icon" 
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
      
      <BottomNavigationBar />
    </div>
  );
};

export default Chat;
