
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dumbbell, Calendar, MessageSquare, User, LayoutGrid } from 'lucide-react';

const BottomNavigationBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border backdrop-blur-lg z-50">
      <div className="max-w-md mx-auto flex items-center justify-between p-3">
        <NavLink 
          to="/" 
          className={({isActive}) => `
            nav-item ${isActive ? 'nav-item-active' : 'text-muted-foreground'}
          `}
          end
        >
          <LayoutGrid size={20} />
          <span>Főoldal</span>
        </NavLink>
        
        <NavLink 
          to="/workouts" 
          className={({isActive}) => `
            nav-item ${isActive ? 'nav-item-active' : 'text-muted-foreground'}
          `}
        >
          <Dumbbell size={20} />
          <span>Edzések</span>
        </NavLink>
        
        <NavLink 
          to="/bookings" 
          className={({isActive}) => `
            nav-item ${isActive ? 'nav-item-active' : 'text-muted-foreground'}
          `}
        >
          <Calendar size={20} />
          <span>Foglalás</span>
        </NavLink>
        
        <NavLink 
          to="/chat" 
          className={({isActive}) => `
            nav-item ${isActive ? 'nav-item-active' : 'text-muted-foreground'}
          `}
        >
          <MessageSquare size={20} />
          <span>Csevegés</span>
        </NavLink>
        
        <NavLink 
          to="/profile" 
          className={({isActive}) => `
            nav-item ${isActive ? 'nav-item-active' : 'text-muted-foreground'}
          `}
        >
          <User size={20} />
          <span>Profil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNavigationBar;
