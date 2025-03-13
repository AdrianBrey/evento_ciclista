import React, { useState, useEffect } from "react";
import "../styles/countdown.css";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-04-13T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [prevTime, setPrevTime] = useState(timeLeft);

  useEffect(() => {
    // Usamos un debounce para evitar demasiadas actualizaciones rápidas
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (JSON.stringify(newTimeLeft) !== JSON.stringify(timeLeft)) {
        setPrevTime(timeLeft);
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const renderItem = (value, prevValue, label) => (
    <div className="countdown-item-wrapper">
      <span
        key={value}
        className={`countdown-item ${value !== prevValue ? "fade-out" : ""}`}
      >
        {prevValue}{label}
      </span>
      <span
        key={value + "-new"}
        className={`countdown-item ${value !== prevValue ? "fade-in" : ""}`}
      >
        {value}{label}
      </span>
    </div>
  );

  return (
    <div className="countdown-container">
      <h2>¡Cuenta atrás para el evento!</h2>
      <div className="countdown">
        {renderItem(timeLeft.days, prevTime.days, "d")}
        {renderItem(timeLeft.hours, prevTime.hours, "h")}
        {renderItem(timeLeft.minutes, prevTime.minutes, "m")}
        {renderItem(timeLeft.seconds, prevTime.seconds, "s")}
      </div>
    </div>
  );
};

export default Countdown;
