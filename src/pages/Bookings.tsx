
import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import BottomNavigationBar from '@/components/BottomNavigationBar';
import BookingSlot from '@/components/BookingSlot';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, VideoIcon, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { hu } from 'date-fns/locale';

const Bookings = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [bookingType, setBookingType] = useState<'personal' | 'online'>('personal');
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<any>(null);
  
  // Sample data - in a real app, this would come from an API
  const bookingSlots = [
    {
      id: '1',
      date: 'Dec 15, Szerda',
      time: '10:00',
      duration: '60 perc',
      location: 'Fitness Pro Terem',
      isOnline: false,
      isAvailable: true,
    },
    {
      id: '2',
      date: 'Dec 15, Szerda',
      time: '14:30',
      duration: '60 perc',
      location: 'Fitness Pro Terem',
      isOnline: false,
      isAvailable: true,
    },
    {
      id: '3',
      date: 'Dec 16, Csütörtök',
      time: '09:00',
      duration: '45 perc',
      location: 'Zoom Meeting',
      isOnline: true,
      isAvailable: true,
    },
  ];
  
  const filteredSlots = bookingSlots.filter(slot => 
    bookingType === 'personal' ? !slot.isOnline : slot.isOnline
  );
  
  const handleSlotClick = (slot: any) => {
    setSelectedSlot(slot);
    setShowBookingDialog(true);
  };
  
  return (
    <div className="mobile-container page-transition pb-20">
      <PageHeader title="Edzésfoglalás" />
      
      <div className="mb-6 glass-card p-5 animate-fade-in">
        <h2 className="text-lg font-medium mb-3">Válassz egy dátumot</h2>
        
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
          locale={hu}
        />
      </div>
      
      <div className="flex gap-2 mb-5 animate-slide-up">
        <Button
          variant={bookingType === 'personal' ? 'default' : 'outline'}
          className="flex-1"
          onClick={() => setBookingType('personal')}
        >
          <MapPin size={18} className="mr-2" />
          Személyes
        </Button>
        
        <Button
          variant={bookingType === 'online' ? 'default' : 'outline'}
          className="flex-1"
          onClick={() => setBookingType('online')}
        >
          <VideoIcon size={18} className="mr-2" />
          Online
        </Button>
      </div>
      
      <div className="mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-lg font-medium mb-3">Elérhető időpontok</h2>
        
        {filteredSlots.length > 0 ? (
          filteredSlots.map((slot, index) => (
            <div key={slot.id} style={{ animationDelay: `${0.2 + (index * 0.1)}s` }} className="animate-slide-up">
              <BookingSlot 
                {...slot} 
                onClick={() => handleSlotClick(slot)} 
              />
            </div>
          ))
        ) : (
          <div className="glass-card p-4 text-center text-muted-foreground">
            Nincs elérhető időpont a kiválasztott napon
          </div>
        )}
      </div>
      
      <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Időpont foglalása</DialogTitle>
            <DialogDescription>
              Erősítsd meg a kiválasztott időpontot.
            </DialogDescription>
          </DialogHeader>
          
          {selectedSlot && (
            <div className="py-4">
              <div className="flex items-center mb-4">
                <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                <span>{selectedSlot.date}, {selectedSlot.time}</span>
              </div>
              
              <div className="flex items-center mb-4">
                {selectedSlot.isOnline ? (
                  <VideoIcon className="mr-2 h-4 w-4 text-primary" />
                ) : (
                  <MapPin className="mr-2 h-4 w-4 text-primary" />
                )}
                <span>{selectedSlot.location}</span>
              </div>
              
              <div className="glass-card p-3 mb-4">
                <span className="text-sm text-muted-foreground">
                  Az időpont lefoglalásával elfogadod a foglalási feltételeket.
                </span>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowBookingDialog(false)}>
              Mégse
            </Button>
            <Button onClick={() => {
              // In a real app, this would call an API
              setShowBookingDialog(false);
              // Show success toast
            }}>
              Foglalás megerősítése
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <BottomNavigationBar />
    </div>
  );
};

export default Bookings;
