"use client";

import { useEffect, useState } from "react";
import { cohortConfig } from "@/data/contentData";
import { Calendar, Clock, Users } from "lucide-react";

export default function UrgencyBar() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const deadline = new Date(cohortConfig.registrationDeadline).getTime();
    const now = new Date().getTime();
    const diffTime = Math.max(0, deadline - now);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);
  }, []);

  return (
    <div className="bg-[#120E0A] border-b border-primary-accent/30 text-white py-2.5 px-4 text-xs sm:text-sm font-bold shadow-md relative z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center sm:justify-between items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-glow opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-glow"></span>
          </span>
          <span className="tracking-wide">מחזור קרוב: <span className="text-secondary-glow">{cohortConfig.cohortLabel}</span></span>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 text-text-secondary">
            <Clock className="w-3.5 h-3.5 text-secondary-glow" />
            <span>נותרו {daysLeft} ימים להרשמה</span>
          </div>
          <div className="flex items-center gap-1.5 bg-primary-accent/20 border border-primary-accent/40 px-2.5 py-0.5 rounded-full text-secondary-glow">
            <Users className="w-3.5 h-3.5" />
            <span>{cohortConfig.spotsRemaining} מקומות אחרונים</span>
          </div>
        </div>
      </div>
    </div>
  );
}
