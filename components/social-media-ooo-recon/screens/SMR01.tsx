"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function SMR01Ambush({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [notified, setNotified] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    // Show notification after 1 second
    const startTimer = setTimeout(() => setNotified(true), 1000);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (notified && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (notified && timeLeft === 0) {
      handleChoice('timeout');
    }
  }, [notified, timeLeft]);

  const handleChoice = (decision: string) => {
    router.push(`/course/${courseId}/2?initialDecision=${decision}`);
  };

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col justify-center items-center overflow-hidden font-sans">
      <ScreenProgress current={1} />

      {/* Matrix-style Background Recon Feed */}
      <div className="absolute inset-0 opacity-10 pointer-events-none p-6 font-mono text-[10px] text-green-500 leading-tight">
        <p>{`> SCANNING OOO_AUTO_REPLY...`}</p>
        <p>{`> LOCATION_MATCH: TOKYO`}</p>
        <p>{`> TIMELINE_MATCH: FRI_EXIT`}</p>
        <p>{`> TARGET_ESTABLISHED: Sarah J.`}</p>
        <p className="animate-pulse">{`> EXPLOITING_TRUST_WINDOW...`}</p>
      </div>

      <div className="relative z-10 w-full max-w-sm px-6">
        <AnimatePresence>
          {notified && (
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[2.5rem] overflow-hidden border border-slate-200"
            >
              {/* Animated Timer Bar */}
              <div className="h-1.5 w-full bg-slate-100">
                <motion.div 
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 10, ease: "linear" }}
                  className="h-full bg-red-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-inner">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-tighter">Urgent Action Required</p>
                      <p className="text-sm font-bold text-slate-900">Sarah Jenkins</p>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-bold text-red-500 bg-red-50 px-2 py-1 rounded-lg">
                    {timeLeft}s
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  "Hey! Since you're in <span className="font-bold text-slate-900">Tokyo</span> until Fri, I'm covering your desk. I can't find the <span className="font-bold text-slate-900">Wire Transfer link</span>. Can you Slack it to me real quick?"
                </p>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleChoice('unsafe')}
                    className="w-full bg-[#1c2434] text-white py-4 rounded-2xl text-sm font-bold hover:bg-black transition-all active:scale-95 shadow-lg"
                  >
                    Quick-Send Link
                  </button>
                  <button
                    onClick={() => handleChoice('safe')}
                    className="w-full bg-slate-100 text-slate-500 py-4 rounded-2xl text-sm font-bold hover:bg-slate-200 transition-all active:scale-95"
                  >
                    Check Monday
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!notified && (
        <motion.div 
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-slate-600 font-mono text-[10px] uppercase tracking-[0.3em]"
        >
          Incoming Packet...
        </motion.div>
      )}
    </div>
  );
}