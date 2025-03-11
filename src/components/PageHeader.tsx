
import React from 'react';
import { ChevronLeft, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
  showNotifications?: boolean;
}

const PageHeader = ({ 
  title, 
  showBack = false, 
  showNotifications = true 
}: PageHeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center justify-between mb-6 sticky top-0 bg-background/80 backdrop-blur-lg py-4 z-10">
      <div className="flex items-center gap-2">
        {showBack && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)}
            className="text-foreground"
          >
            <ChevronLeft size={20} />
          </Button>
        )}
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      
      {showNotifications && (
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
        </Button>
      )}
    </div>
  );
};

export default PageHeader;
