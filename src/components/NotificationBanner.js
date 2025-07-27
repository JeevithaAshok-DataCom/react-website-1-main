import React from "react";
import { useNotification } from "../contexts/NotificationContext";

export default function NotificationBanner() {

    const { notification, clearNotification } = useNotification();

    if (!notification) return null;

    return (
        <div className="notification-banner" style={{
      background: '#222',
      color: '#fff',
      padding: '1rem',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      textAlign: 'center'
    }}>
      {notification}
      <button onClick={clearNotification} style={{ marginLeft: 20, background: 'transparent', color: '#fff', border: 'none', cursor: 'pointer' }}>✖</button>
    </div>
  );
}