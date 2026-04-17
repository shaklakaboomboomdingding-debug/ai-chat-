import { useState, useEffect } from 'react';

export function useCountdown(initialMinutes: number = 15) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function useExitIntent() {
  const [triggered, setTriggered] = useState(false);
  
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered) {
        setTriggered(true);
      }
    };
    document.addEventListener('mouseleave', handler);
    return () => document.removeEventListener('mouseleave', handler);
  }, [triggered]);
  
  return { triggered, setTriggered };
}
