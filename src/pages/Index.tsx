
import React from 'react';
import PageHeader from '@/components/PageHeader';
import BottomNavigationBar from '@/components/BottomNavigationBar';
import WorkoutCard from '@/components/WorkoutCard';
import SubscriptionCard from '@/components/SubscriptionCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Sample data - in a real app, this would come from an API
  const featuredWorkouts = [
    {
      id: '1',
      title: 'HIIT Zsírégető',
      category: 'Fogyás',
      duration: '30 perc',
      level: 'Kezdő',
      image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    }
  ];
  
  const upcomingSession = {
    date: 'Ma',
    time: '18:30',
    title: 'Személyi edzés',
    isOnline: true
  };
  
  const expiringSubscription = {
    id: '1',
    name: 'Fitness Pro Terem',
    expiryDate: '2023.12.15',
    type: 'gym' as const,
    price: '15 000 Ft/hó',
    borderColor: 'border-blue-500',
    isExpiringSoon: true
  };
  
  return (
    <div className="mobile-container page-transition pb-20">
      <PageHeader title="Szia, János!" showBack={false} />
      
      <div className="glass-card p-5 mb-6 animate-slide-up">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium">Következő edzésed</h2>
            <div className="text-sm text-muted-foreground mt-1">
              {upcomingSession.date}, {upcomingSession.time}
            </div>
          </div>
          
          <div className="icon-container">
            <Calendar size={20} />
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium">{upcomingSession.title}</span>
          
          <Link to="/bookings">
            <Button size="sm" variant="outline">
              Részletek
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="section-header animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-lg font-medium">Ajánlott edzések</h2>
        <Link to="/workouts" className="text-sm text-primary flex items-center">
          Mind <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      
      <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        {featuredWorkouts.map(workout => (
          <WorkoutCard key={workout.id} {...workout} />
        ))}
      </div>
      
      <div className="section-header mt-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-lg font-medium">Előfizetések</h2>
        <Link to="/profile" className="text-sm text-primary flex items-center">
          Mind <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      
      <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <SubscriptionCard {...expiringSubscription} />
        
        <div className="glass-card p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="icon-container mr-3">
              <Bell size={20} />
            </div>
            <span className="text-sm">Értesítéseket bekapcsolva</span>
          </div>
          
          <Button variant="ghost" size="sm">
            Beállítások
          </Button>
        </div>
      </div>
      
      <BottomNavigationBar />
    </div>
  );
};

export default Index;
