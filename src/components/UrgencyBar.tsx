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
    <div className="bg-primary-dark text-text-primary py-2 px-4 text-sm font-medium">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>מחזור קרוב: {cohortConfig.cohortLabel}</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>נותרו {daysLeft} ימים להרשמה</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{cohortConfig.spotsRemaining} מקומות פנויים אחרונים</span>
          </div>
        </div>
      </div>
    </div>
  );
}
