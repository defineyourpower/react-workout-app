
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WorkoutCardProps {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  image: string;
}

const WorkoutCard = ({ id, title, category, duration, level, image }: WorkoutCardProps) => {
  return (
    <Link to={`/workouts/${id}`} className="block">
      <div className="workout-card overflow-hidden mb-4">
        <div className="relative h-40 rounded-lg overflow-hidden mb-3">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <span className="badge bg-black/50 backdrop-blur-sm text-white">
              {duration}
            </span>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="badge bg-primary/10 text-primary">
              {category}
            </span>
            <span className="badge bg-secondary text-secondary-foreground">
              {level}
            </span>
          </div>
          
          <h3 className="font-medium text-base">{title}</h3>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Részletek</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
