"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import ScreenProgress from "@/components/ScreenProgress";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

export default function Screen01Ambush({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [choice, setChoice] = useState<null | 'accept' | 'deny'>(null);
  const [timeLeft, setTimeLeft] = useState(15);

  const handleChoice = useCallback((type: 'accept' | 'deny') => {
    setChoice(type);
    setTimeout(() => {
      router.push(`/course/${courseId}/2?choice=${type}`);
    }, 1200);
  }, [router, courseId]);

  // Timer logic for redirection
  useEffect(() => {
    if (choice !== null) return;

    if (timeLeft <= 0) {
      const t = setTimeout(() => handleChoice('deny'), 0);
      return () => clearTimeout(t);
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, choice, handleChoice]);

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col overflow-hidden text-white">
      <ScreenProgress current={1} />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
        
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e293b_0%,#0f172a_100%)] opacity-50" />

        {/* Timer Bar (Visual Indicator) */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
          <motion.div 
            initial={{ width: "100%" }}
            animate={{ width: choice === null ? "0%" : "100%" }}
            transition={{ duration: choice === null ? 15 : 0.5, ease: "linear" }}
            className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-full max-w-md"
        >
          <div className="bg-[#1e293b]/90 backdrop-blur-2xl border border-white/10 p-8 rounded-[3rem] shadow-2xl text-center">
            
            {/* The Synthetic Persona Photo */}
            <div className="relative mx-auto w-32 h-32 mb-6">
              <motion.div 
                animate={{ 
                  boxShadow: ["0 0 0px #3b82f6", "0 0 20px #3b82f6", "0 0 0px #3b82f6"] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/10"
              >
                <Image
                  src="/images/fake-person-1.png"
                  alt="Candidate Avatar"
                  fill
                  className="object-cover"
                />
                
                {/* Subtle Glitch Overlay */}
                <motion.div 
                  animate={{ opacity: [0, 0.15, 0] }}
                  transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                  className="absolute inset-0 bg-blue-500 mix-blend-overlay"
                />
              </motion.div>
              
              {/* Status Indicator */}
              <div className="absolute bottom-1 right-2 w-6 h-6 bg-green-500 border-4 border-[#1e293b] rounded-full" />
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold">Interview Request</h2>
              <p className="text-blue-400 font-mono text-xs uppercase tracking-[0.3em] mt-1">ID: Sarah_J_9921</p>
              {choice === null && (
                <p className="text-red-400 font-mono text-sm font-bold mt-2">
                  Auto-rejection in {timeLeft < 10 ? `0${timeLeft}` : timeLeft}s
                </p>
              )}
            </div>
            
            <div className="bg-black/30 rounded-2xl p-5 mb-8 text-left border border-white/5">
              <p className="text-slate-300 text-sm leading-relaxed italic">
                &ldquo;Hi, I&apos;m Sarah. I&apos;m here for the Final Round interview for the Project Lead role. Ready when you are!&rdquo;
              </p>
            </div>

            <AnimatePresence mode="wait">
              {choice === null ? (
                <motion.div 
                  exit={{ opacity: 0, y: 10 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <button
                    onClick={() => handleChoice('deny')}
                    className="group bg-slate-800 hover:bg-red-900/30 border border-white/10 text-slate-400 hover:text-red-400 py-5 rounded-2xl font-bold transition-all active:scale-95"
                  >
                    Deny
                  </button>
                  <button
                    onClick={() => handleChoice('accept')}
                    className="bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95"
                  >
                    Accept
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-4 font-mono text-blue-400"
                >
                  {choice === 'accept' ? <span>&#62; INITIATING HANDSHAKE...</span> : <span className="text-red-400">&#62; CALL_REJECTED</span>}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>

      <div className="p-8 text-center bg-black/20 backdrop-blur-md">
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
          Time-Sensitive Decision Required
        </p>
      </div>
    </div>
  );
}