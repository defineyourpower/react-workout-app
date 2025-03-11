
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import BottomNavigationBar from '@/components/BottomNavigationBar';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Calendar, 
  ChevronRight, 
  Dumbbell, 
  MessageSquare,
  Share2
} from 'lucide-react';

const WorkoutDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, fetch the workout details based on the ID
  const workout = {
    id: id || '1',
    title: 'HIIT Zsírégető',
    category: 'Fogyás',
    duration: '30 perc',
    level: 'Kezdő',
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    description: 'Intenzív, magas intenzitású intervallum tréning, amely hatékonyan égeti a zsírt és fejleszti az állóképességet rövid idő alatt.',
    exercises: [
      { name: 'Jumping jacks', sets: 3, reps: '30 mp' },
      { name: 'Burpees', sets: 3, reps: '10 db' },
      { name: 'Mountain climbers', sets: 3, reps: '30 mp' },
      { name: 'Magas térd', sets: 3, reps: '30 mp' },
      { name: 'Pihenés', sets: 1, reps: '1 perc' },
      { name: 'Plank', sets: 3, reps: '30 mp' },
    ]
  };
  
  return (
    <div className="mobile-container page-transition pb-20">
      <PageHeader title={workout.title} showBack={true} />
      
      <div className="animate-fade-in">
        <div className="relative h-60 rounded-2xl overflow-hidden mb-5">
          <img 
            src={workout.image} 
            alt={workout.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div>
              <span className="badge bg-primary text-primary-foreground mb-2 inline-block">
                {workout.category}
              </span>
              <h1 className="text-white text-xl font-semibold">{workout.title}</h1>
            </div>
            
            <Button size="icon" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
              <Share2 size={18} />
            </Button>
          </div>
        </div>
        
        <div className="flex justify-between mb-6 animate-slide-up">
          <div className="glass-card flex-1 p-3 mr-2 flex items-center">
            <Clock size={18} className="text-primary mr-2" />
            <div>
              <div className="text-xs text-muted-foreground">Időtartam</div>
              <div className="text-sm font-medium">{workout.duration}</div>
            </div>
          </div>
          
          <div className="glass-card flex-1 p-3 flex items-center">
            <Dumbbell size={18} className="text-primary mr-2" />
            <div>
              <div className="text-xs text-muted-foreground">Nehézség</div>
              <div className="text-sm font-medium">{workout.level}</div>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-4 mb-5 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-lg font-medium mb-2">Leírás</h2>
          <p className="text-sm text-muted-foreground">
            {workout.description}
          </p>
        </div>
        
        <div className="glass-card p-4 mb-5 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-lg font-medium mb-3">Gyakorlatok</h2>
          
          <div className="space-y-3">
            {workout.exercises.map((exercise, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <div>
                  <div className="font-medium">{exercise.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {exercise.sets} sorozat × {exercise.reps}
                  </div>
                </div>
                
                <ChevronRight size={18} className="text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Link to={`/chat/workout/${id}`} className="flex-1">
            <Button variant="outline" className="w-full" size="lg">
              <MessageSquare size={18} className="mr-2" />
              Csevegés
            </Button>
          </Link>
          
          <Link to="/bookings" className="flex-1">
            <Button className="w-full" size="lg">
              <Calendar size={18} className="mr-2" />
              Foglalás
            </Button>
          </Link>
        </div>
      </div>
      
      <BottomNavigationBar />
    </div>
  );
};

export default WorkoutDetail;
