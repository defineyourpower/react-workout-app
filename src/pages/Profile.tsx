
import React from 'react';
import PageHeader from '@/components/PageHeader';
import BottomNavigationBar from '@/components/BottomNavigationBar';
import SubscriptionCard from '@/components/SubscriptionCard';
import { Button } from '@/components/ui/button';
import { 
  User, 
  CreditCard, 
  Bell, 
  Settings, 
  LogOut,
  Plus,
  ChevronRight
} from 'lucide-react';

const Profile = () => {
  // Sample data - in a real app, this would come from an API
  const subscriptions = [
    {
      id: '1',
      name: 'Fitness Pro Terem',
      expiryDate: '2023.12.15',
      type: 'gym' as const,
      price: '15 000 Ft/hó',
      borderColor: 'border-blue-500',
      isExpiringSoon: true
    },
    {
      id: '2',
      name: 'Protein Plus csomag',
      expiryDate: '2024.01.20',
      type: 'supplement' as const,
      price: '8 500 Ft/hó',
      borderColor: 'border-green-500',
      isExpiringSoon: false
    },
    {
      id: '3',
      name: 'FitTrack Pro',
      expiryDate: '2023.12.30',
      type: 'app' as const,
      price: '3 900 Ft/hó',
      borderColor: 'border-purple-500',
      isExpiringSoon: false
    },
  ];
  
  return (
    <div className="mobile-container page-transition pb-20">
      <PageHeader title="Profil" showBack={false} />
      
      <div className="flex items-center justify-center mb-6 animate-fade-in">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-primary">
            <img 
              src="https://i.pravatar.cc/150?img=3" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold">Tóth János</h2>
          <p className="text-sm text-muted-foreground">felhasználó</p>
        </div>
      </div>
      
      <div className="glass-card p-4 mb-6 animate-slide-up">
        <h3 className="text-lg font-medium mb-4">Előfizetések</h3>
        
        {subscriptions.map((subscription) => (
          <SubscriptionCard key={subscription.id} {...subscription} />
        ))}
        
        <Button className="w-full mt-2" variant="outline">
          <Plus size={18} className="mr-2" />
          Új előfizetés hozzáadása
        </Button>
      </div>
      
      <div className="glass-card p-4 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <h3 className="text-lg font-medium mb-3">Beállítások</h3>
        
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <User size={18} className="mr-3" />
            Személyes adatok
            <ChevronRight size={16} className="ml-auto" />
          </Button>
          
          <Button variant="ghost" className="w-full justify-start">
            <CreditCard size={18} className="mr-3" />
            Fizetési módok
            <ChevronRight size={16} className="ml-auto" />
          </Button>
          
          <Button variant="ghost" className="w-full justify-start">
            <Bell size={18} className="mr-3" />
            Értesítések
            <ChevronRight size={16} className="ml-auto" />
          </Button>
          
          <Button variant="ghost" className="w-full justify-start">
            <Settings size={18} className="mr-3" />
            Általános beállítások
            <ChevronRight size={16} className="ml-auto" />
          </Button>
        </div>
      </div>
      
      <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <Button variant="outline" className="w-full text-destructive" size="lg">
          <LogOut size={18} className="mr-2" />
          Kijelentkezés
        </Button>
      </div>
      
      <BottomNavigationBar />
    </div>
  );
};

export default Profile;
