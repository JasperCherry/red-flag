"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function SMR05LabVisual({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [foundLeak, setFoundLeak] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={5} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-10 pb-24 flex flex-col">
        
        <div className="mb-8">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">The Lab: Visual Analysis</p>
          <h1 className="text-2xl font-bold text-[#1c2434]">Spot the Recon</h1>
          <p className="text-[#64748b] mt-2 text-sm leading-relaxed">
            Social media is an attacker&apos;s favorite tool. Click on the element in this post that gives away too much <span className="font-bold text-slate-900">context</span>.
          </p>
        </div>

        {/* Social Media Post Simulation */}
        <div className="relative bg-white border border-slate-200 rounded-[2rem] shadow-xl overflow-hidden max-w-md mx-auto">
          
          {/* Post Header */}
          <div className="p-4 flex items-center gap-3 border-b border-slate-50">
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
               <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">alex_morgan_tech</p>
              <p className="text-[10px] text-slate-400 font-medium">1 hour ago • Austin, TX</p>
            </div>
          </div>

          {/* Post Image */}
          <div className="relative aspect-square bg-slate-100">
            <img 
              src="/images/hotel-badge.png"
              alt="Conference badge and hotel notepad on desk"
              className="object-cover w-full h-full"
            />
            
            {/* THE HOTSPOT: The Badge and Hotel Stationery */}
            <button 
              onClick={() => setFoundLeak(true)}
              className={`absolute top-[40%] left-[30%] w-40 h-50 rounded-full transition-all flex items-center justify-center
                ${foundLeak ? 'border-4 border-green-500 bg-green-500/20' : 'border-2 border-dashed border-blue-400/0 hover:border-blue-400/20 hover:bg-blue-400/10'}
              `}
            >
              {!foundLeak && (
                <motion.div 
                  animate={{ opacity: [0.3, 0.6, 0.3] }} 
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-6 h-6 bg-blue-500 rounded-full blur-md" 
                />
              )}
            </button>
          </div>

          {/* Post Caption */}
          <div className="p-4 space-y-2">
            <div className="flex gap-3 mb-2">
               <span className="text-slate-400 text-lg">❤️</span>
               <span className="text-slate-400 text-lg">💬</span>
               <span className="text-slate-400 text-lg">🚀</span>
            </div>
            <p className="text-xs text-slate-800 leading-relaxed">
              <span className="font-bold">alex_morgan_tech</span> Finally made it! Day 1 of the Global Innovation Summit. Austin is hot but the venue is incredible. 🤠 #GlobalInnovation #Austin #WaterfordHotel
            </p>
          </div>

          {/* Feedback Overlay */}
          <AnimatePresence>
            {foundLeak && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 backdrop-blur-md p-8 flex flex-col justify-center text-center text-white z-20"
                style={{ backgroundColor: 'rgba(28, 36, 52, 0.96)' }}
              >
                <motion.div 
                  initial={{ scale: 0.5 }} 
                  animate={{ scale: 1 }}
                  className="text-5xl mb-6"
                >
                  🎯
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">Recon Leak Detected</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  By showing your <span className="text-white font-bold">Summit Badge</span> and the <span className="text-white font-bold">Waterford Hotel</span> stationery, you’ve told hackers your full name, your employer, and exactly where you are sleeping tonight.
                </p>
                <button 
                  onClick={() => router.push(`/course/${courseId}/6`)}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg text-sm"
                >
                  Continue to Technical Check
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!foundLeak && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold"
          >
            Hint: What&apos;s sitting on the Waterford desk?
          </motion.p>
        )}

      </div>
    </div>
  );
}