
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Video } from 'lucide-react';

interface BookingSlotProps {
  id: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  isOnline: boolean;
  isAvailable: boolean;
  onClick: () => void;
}

const BookingSlot = ({ 
  id, 
  date, 
  time, 
  duration, 
  location, 
  isOnline, 
  isAvailable,
  onClick 
}: BookingSlotProps) => {
  return (
    <div className="glass-card p-4 mb-3">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium">{date}</h3>
          <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
            <Clock size={14} />
            <span>{time} ({duration})</span>
          </div>
          
          <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
            {isOnline ? <Video size={14} /> : <MapPin size={14} />}
            <span>{location}</span>
          </div>
        </div>
        
        <Button 
          variant={isAvailable ? "default" : "outline"} 
          size="sm" 
          disabled={!isAvailable}
          onClick={onClick}
        >
          {isAvailable ? "Foglalás" : "Betelt"}
        </Button>
      </div>
    </div>
  );
};

export default BookingSlot;
