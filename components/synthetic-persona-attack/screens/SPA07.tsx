"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Screen07ChatSetup({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsTyping(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleChoice = (path: 'secure' | 'unsafe') => {
    router.push(`/course/${courseId}/8?choice=${path}`);
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex flex-col">
      <ScreenProgress current={7} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-4 pt-10 pb-20 flex flex-col">
        
        <div className="px-2 mb-6">
          <p className="text-sm font-bold text-[#475569] uppercase tracking-[0.2em] mb-1">Internal Comms</p>
          <h2 className="text-2xl font-bold text-slate-900">Urgent Request</h2>
        </div>

        <div className="flex-1 bg-white rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden flex flex-col">
          
          {/* Chat Header */}
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-inner border border-slate-200">
                <img src="/images/fake-person-1.png" alt="Sarah" className="object-cover h-full w-full" />
              </div>
              <div>
                <p className="text-base font-bold text-slate-900">Sarah Jenkins</p>
                <p className="text-xs text-[#475569] italic">New Hire • Marketing</p>
              </div>
            </div>
            <div className="flex gap-2 opacity-30">
               <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">📞</div>
               <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">⚙️</div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-6 space-y-4 bg-slate-50/30 font-sans">
            <div className="flex flex-col gap-1 max-w-[85%]">
              <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none text-slate-700 text-sm shadow-sm leading-relaxed">
                Hey! So sorry to bother you. I&apos;m having a total nightmare with the HR portal and it won&apos;t let me save my <span className="font-semibold text-slate-900">Direct Deposit</span> info.
              </div>
            </div>

            {isTyping ? (
              <div className="flex gap-1 p-2">
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col gap-1 max-w-[85%]"
              >
                <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none text-slate-700 text-sm shadow-sm leading-relaxed font-medium">
                  Payroll closes in an hour. Can I just send you my <span className="text-slate-900 underline decoration-slate-300">bank details and ID photo</span> here so you can update it for me? 
                </div>
              </motion.div>
            )}
          </div>

          {/* Neutralized Choice Actions */}
          {!isTyping && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="p-6 bg-white border-t border-slate-100 flex flex-col gap-3"
            >
              <button 
                onClick={() => handleChoice('unsafe')}
                className="group w-full border-2 border-slate-100 hover:border-slate-300 hover:bg-slate-50 p-4 rounded-2xl text-base text-left transition-all"
              >
                <p className="font-bold text-slate-800">&ldquo;Sure, send it over and I&apos;ll handle it.&rdquo;</p>
                <p className="text-sm text-[#475569] mt-1">Help the new hire meet the payroll deadline immediately.</p>
              </button>

              <button 
                onClick={() => handleChoice('secure')}
                className="group w-full border-2 border-slate-100 hover:border-slate-300 hover:bg-slate-50 p-4 rounded-2xl text-base text-left transition-all"
              >
                <p className="font-bold text-slate-800">&ldquo;I can&apos;t take that info over chat. Contact HR.&rdquo;</p>
                <p className="text-sm text-[#475569] mt-1">Require the use of official encrypted company portals.</p>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}