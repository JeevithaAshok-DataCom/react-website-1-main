import React, { useState } from 'react';
import { useNotification } from '../contexts/NotificationContext';
import { useDispatch } from 'react-redux';
import { addBooking } from '../redux/bookingSlice';

export default function BookingForm({ serviceName, onBooked }) {
  const { showNotification } = useNotification();
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', date: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate async booking operation
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);

    // Dispatch booking to Redux store
    dispatch(addBooking({
      name: form.name,
      date: form.date,
      service: serviceName,
      id: Date.now() // unique id for each booking
    }));

    showNotification(`Booking confirmed for ${serviceName} on ${form.date}!`);
    setForm({ name: '', date: '' });
    if (onBooked) onBooked();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Booking...' : 'Book Now'}
      </button>
    </form>
  );
}