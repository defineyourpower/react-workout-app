
import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import BottomNavigationBar from '@/components/BottomNavigationBar';
import WorkoutCard from '@/components/WorkoutCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Workouts = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Sample data - in a real app, this would come from an API
  const categories = [
    { id: 'all', label: 'Mind' },
    { id: 'loss', label: 'Fogyás' },
    { id: 'gain', label: 'Izomépítés' },
    { id: 'endurance', label: 'Állóképesség' },
    { id: 'flexibility', label: 'Rugalmasság' },
  ];
  
  const workouts = [
    {
      id: '1',
      title: 'HIIT Zsírégető',
      category: 'Fogyás',
      duration: '30 perc',
      level: 'Kezdő',
      image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    },
    {
      id: '2',
      title: 'Izomnövelő Erőedzés',
      category: 'Izomépítés',
      duration: '45 perc',
      level: 'Haladó',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: '3',
      title: 'Állóképesség Fejlesztő',
      category: 'Állóképesség',
      duration: '60 perc',
      level: 'Közepes',
      image: 'https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    },
  ];
  
  const filteredWorkouts = selectedCategory === 'all' 
    ? workouts 
    : workouts.filter(workout => {
        const categoryMap: Record<string, string> = {
          'loss': 'Fogyás',
          'gain': 'Izomépítés',
          'endurance': 'Állóképesség',
          'flexibility': 'Rugalmasság',
        };
        return workout.category === categoryMap[selectedCategory];
      });
  
  return (
    <div className="mobile-container page-transition pb-20">
      <PageHeader title="Edzéstervek" />
      
      <div className="relative mb-4 animate-slide-up">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
        <Input className="pl-10" placeholder="Keresés az edzéstervek között..." />
      </div>
      
      <div className="flex gap-2 overflow-x-auto py-2 mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        {categories.map(category => (
          <Button 
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className="flex-shrink-0"
          >
            {category.label}
          </Button>
        ))}
      </div>
      
      <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        {filteredWorkouts.map((workout, index) => (
          <div key={workout.id} style={{ animationDelay: `${0.3 + (index * 0.1)}s` }} className="animate-slide-up">
            <WorkoutCard {...workout} />
          </div>
        ))}
      </div>
      
      <BottomNavigationBar />
    </div>
  );
};

export default Workouts;
