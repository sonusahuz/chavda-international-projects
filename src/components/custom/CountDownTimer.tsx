import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 1411,
    hours: 15,
    minutes: 42,
    seconds: 58,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (
          prevTime.days === 0 &&
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timer);
          return prevTime;
        }

        const newTime = { ...prevTime };

        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              }
            }
          }
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-sm font-semibold text-left mb-2">
        Hurry up offer ends soon
      </h2>
      <div
        className="grid grid-cols-4 md:grid-cols-4 gap-4"
        role="timer"
        aria-label="Offer countdown timer"
      >
        <Card className="p-2 flex flex-col items-center justify-center">
          <span className="text-sm font-normal tabular-nums">
            {timeLeft.days}
          </span>
          <span className="text-sm text-muted-foreground">Days</span>
        </Card>
        <Card className="p-2 flex flex-col items-center justify-center">
          <span className="text-sm font-normal tabular-nums">
            {timeLeft.hours.toString().padStart(2, '0')}
          </span>
          <span className="text-sm text-muted-foreground">Hours</span>
        </Card>
        <Card className="p-2 flex flex-col items-center justify-center">
          <span className="text-sm font-normal tabular-nums">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </span>
          <span className="text-sm text-muted-foreground">Mins</span>
        </Card>
        <Card className="p-2 flex flex-col items-center justify-center">
          <span className="text-sm font-normal tabular-nums">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </span>
          <span className="text-sm text-muted-foreground">Sec</span>
        </Card>
      </div>
    </div>
  );
}
