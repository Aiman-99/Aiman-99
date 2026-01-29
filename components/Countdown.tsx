"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const target = new Date("2026-03-23T00:00:00").getTime();
  const [time, setTime] = useState(target - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(target - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  return (
    <div className="flex gap-4 mt-6 text-center">
      {[["Hari", days], ["Jam", hours], ["Minit", minutes], ["Saat", seconds]].map(
        ([label, value]) => (
          <div key={label as string} className="px-4 py-2 bg-black/70 rounded-xl shadow">
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-xs">{label}</div>
          </div>
        )
      )}
    </div>
  );
}
