"use client";

import { useState } from "react";
import { cohortConfig, contentData } from "@/data/contentData";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    team: "",
    obstacle: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [phoneError, setPhoneError] = useState("");

  const isWaitlist = cohortConfig.isWaitlist || cohortConfig.spotsRemaining <= 0;

  const validatePhone = (phone: string) => {
    // Basic Israeli phone validation: starts with 05, optionally a hyphen, and 8 digits
    const regex = /^05\d-?\d{7}$/;
    return regex.test(phone.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError("");

    if (!validatePhone(formData.phone)) {
      setPhoneError("מספר טלפון לא תקין. אנא הזן מספר נייד ישראלי (לדוגמה: 0501234567)");
      return;
    }

    setStatus("loading");

    // Simulate network request
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      console.log("Cohort:", cohortConfig.cohortLabel);
      console.log("Is Waitlist:", isWaitlist);
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="lead-form" className="py-24 px-4 bg-stone-900/60 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-accent/10 blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            {isWaitlist ? "רשימת המתנה למחזור הבא" : contentData.leadForm.heading}
          </h2>
          <p className="text-lg text-text-secondary">
            {contentData.leadForm.intro}
          </p>
        </div>

        <div className="glass-card p-6 md:p-10 rounded-3xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">הפרטים התקבלו בהצלחה!</h3>
                <p className="text-text-secondary">
                  ניצור קשר בהקדם האפשרי לתיאום שיחת האבחון.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-stone-300">שם מלא (שחקן / הורה) *</label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-accent transition-colors"
                    placeholder="ישראל ישראלי"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-stone-300">טלפון ליצירת קשר *</label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      dir="ltr"
                      className="text-right w-full bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-accent transition-colors"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="05X-XXXXXXX"
                    />
                    {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="age" className="text-sm font-medium text-stone-300">שנתון / גיל *</label>
                    <input
                      id="age"
                      required
                      type="text"
                      className="w-full bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-accent transition-colors"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      placeholder="לדוגמה: 2008 או 16"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="team" className="text-sm font-medium text-stone-300">קבוצה / מסגרת נוכחית</label>
                  <input
                    id="team"
                    type="text"
                    className="w-full bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-accent transition-colors"
                    value={formData.team}
                    onChange={(e) => setFormData({...formData, team: e.target.value})}
                    placeholder="לדוגמה: מכבי תל אביב נערים א'"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="obstacle" className="text-sm font-medium text-stone-300">מה הדבר העיקרי שמעכב אותך כרגע? *</label>
                  <textarea
                    id="obstacle"
                    required
                    rows={4}
                    className="w-full bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-accent transition-colors resize-none"
                    value={formData.obstacle}
                    onChange={(e) => setFormData({...formData, obstacle: e.target.value})}
                    placeholder="ספר/י לנו קצת על הקושי העיקרי במגרש..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary-accent hover:bg-secondary-glow text-white font-bold text-lg py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(194,65,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)] flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    isWaitlist ? "הצטרפות לרשימת המתנה" : contentData.leadForm.submitText
                  )}
                </button>

                <p className="text-center text-xs text-stone-500 pt-2">
                  {contentData.leadForm.privacyText}
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
