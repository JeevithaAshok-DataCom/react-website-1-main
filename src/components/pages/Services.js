import React, { useState } from 'react';
import '../../App.css';
import BookingForm from '../BookingForm';
import { useAuth } from '../../contexts/AuthContext';
import { useNotification } from '../../contexts/NotificationContext';

const SERVICES = [
  { id: 1, name: 'Mountain Guide' },
  { id: 2, name: 'Kayak Rental' },
  { id: 3, name: 'Safari Transport' }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const { isSignedIn } = useAuth();
  const { showNotification } = useNotification();

  const handleBookClick = (service) => {
    if (!isSignedIn) {
      showNotification('Please sign in to book a service.');
      return;
    }
    setSelectedService(service);
  };

  return (
    <div className="services-bg" style={{ minHeight: '100vh', padding: 40 }}>
      <h1 style={{ fontSize: '3rem' }}>Available Services</h1>
      <ul style={{ fontSize: '1.5rem', listStyle: 'none', padding: 0 }}>
        {SERVICES.map((service) => (
          <li key={service.id} style={{ marginBottom: 30 }}>
            <span style={{ fontWeight: 'bold' }}>{service.name}</span>
            <button
              style={{
                marginLeft: 20,
                fontSize: '1.2rem',
                padding: '8px 20px',
                borderRadius: 6,
                cursor: 'pointer'
              }}
              onClick={() => handleBookClick(service)}
            >
              Book Now
            </button>
            {selectedService && selectedService.id === service.id && (
              <BookingForm
                serviceName={service.name}
                onBooked={() => setSelectedService(null)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}