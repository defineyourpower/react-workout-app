
import React from 'react';
import { CalendarClock } from 'lucide-react';

interface SubscriptionCardProps {
  id: string;
  name: string;
  expiryDate: string;
  type: 'gym' | 'supplement' | 'app';
  price: string;
  borderColor: string;
  isExpiringSoon: boolean;
}

const SubscriptionCard = ({ 
  id, 
  name, 
  expiryDate, 
  type, 
  price, 
  borderColor,
  isExpiringSoon 
}: SubscriptionCardProps) => {
  const typeLabel = {
    gym: 'Edzőterem',
    supplement: 'Étrend-kiegészítő',
    app: 'Fitness App',
  };
  
  return (
    <div className={`subscription-card mb-4 border-l-4 ${borderColor}`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-base">{name}</h3>
          <span className="badge bg-secondary text-xs text-secondary-foreground mt-1">
            {typeLabel[type]}
          </span>
        </div>
        <span className="text-base font-medium">{price}</span>
      </div>
      
      <div className="flex items-center gap-1 mt-3 text-sm text-muted-foreground">
        <CalendarClock size={16} />
        <span className={`${isExpiringSoon ? 'text-destructive font-medium' : ''}`}>
          {isExpiringSoon ? 'Hamarosan lejár: ' : 'Lejárat: '} {expiryDate}
        </span>
      </div>
    </div>
  );
};

export default SubscriptionCard;
