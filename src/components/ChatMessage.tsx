
import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatMessageProps {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  text: string;
  timestamp: string;
  likes: number;
  dislikes: number;
  isCurrentUser: boolean;
}

const ChatMessage = ({ 
  id, 
  user, 
  text, 
  timestamp, 
  likes, 
  dislikes, 
  isCurrentUser 
}: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 mb-4 ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
      {!isCurrentUser && (
        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className={`max-w-[80%] ${isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-card'} rounded-2xl p-3 shadow`}>
        {!isCurrentUser && (
          <div className="font-medium text-sm mb-1">{user.name}</div>
        )}
        
        <div className="text-sm">{text}</div>
        
        <div className="flex items-center justify-between mt-2 text-xs">
          <span className="text-muted-foreground">{timestamp}</span>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-6 px-1">
              <ThumbsUp size={14} className="mr-1" />
              <span>{likes}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="h-6 px-1">
              <ThumbsDown size={14} className="mr-1" />
              <span>{dislikes}</span>
            </Button>
          </div>
        </div>
      </div>
      
      {isCurrentUser && (
        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
