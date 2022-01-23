import React, { useEffect, useState } from "react";

export default function Timer() {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    setInterval(() => {
      const timeDifference =
        new Date("02-18-2022").getTime() - new Date().getTime();
      const days = timeDifference / (1000 * 3600 * 24);
      const displayDays = Math.floor(days);
      const extraDays = displayDays > 0 ? days % displayDays : days;

      const hours = extraDays * 24;
      const displayHours = Math.floor(hours);
      const extraHours = displayHours > 0 ? hours % displayHours : hours;

      const minutes = extraHours * 60;
      const displayMinutes = Math.floor(minutes);
      const extraMinutes =
        displayMinutes > 0 ? minutes % displayMinutes : minutes;
      const displaySeconds = Math.floor(extraMinutes * 60);

      if (days !== displayDays) setDays(Math.max(displayDays, 0));
      if (hours !== displayHours) setHours(Math.max(displayHours, 0));
      if (minutes !== displayMinutes) setMinutes(Math.max(displayMinutes, 0));
      if (seconds !== displaySeconds) setSeconds(Math.max(displaySeconds, 0));
    }, 1000);
  }, []);
  return (
    <p className="text-details-time">
      <p>{`${days} Days`}</p>
      <p>{`${hours} Hours`}</p>
      <p>{`${minutes} Minutes`}</p>
      <p>{`${seconds} Seconds`}</p>
    </p>
  );
}
