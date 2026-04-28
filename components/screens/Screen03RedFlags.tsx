"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function Screen03RedFlags({ courseId }: { courseId: string }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={3} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col gap-8">
        {/* Header */}
        <div>
          <p className="text-xs font-semibold text-[#8a99af] uppercase tracking-widest mb-1">
            Phase B: The "Bite-Sized Teach"
          </p>
          <h1 className="text-3xl font-bold text-[#1c2434]">The Anatomy of a Trap</h1>
          <p className="text-[#64748b] mt-2">
            Even the most "perfect" scripts have flaws. Here is what you missed in the heat of the moment.
          </p>
        </div>

        {/* Visual Breakdown Area - FIXED SPACING */}
        <div className="relative bg-white border border-[#e2e8f0] rounded-3xl overflow-hidden shadow-xl">
          
          {/* Background Layer: Subtle Ghost UI */}
          <div className="absolute inset-0 opacity-[0.03] grayscale pointer-events-none flex flex-col">
            <div className="bg-red-500 p-4" />
            <div className="p-8 space-y-4 bg-slate-50 flex-1">
              <div className="h-6 w-3/4 bg-slate-200 rounded" />
              <div className="h-4 w-full bg-slate-100 rounded" />
              <div className="mt-auto h-12 w-full bg-[#145bb3] rounded-xl" />
            </div>
          </div>

          {/* Foreground Layer: The Educational Labels */}
          <div className="relative z-10 p-8 flex flex-col gap-5">
            
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#1c2434] text-white p-5 rounded-2xl shadow-xl border-l-4 border-red-500 w-[92%] self-start"
            >
              <span className="text-red-400 font-bold block mb-1 text-xs uppercase tracking-wider">01. Artificial Urgency</span> 
              <p className="text-sm text-slate-300 leading-snug">
                The ticking clock is designed to stop you from calling IT to verify. It forces a panic-response.
              </p>
            </motion.div>

            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1c2434] text-white p-5 rounded-2xl shadow-xl border-l-4 border-blue-400 w-[92%] self-end"
            >
              <span className="text-blue-400 font-bold block mb-1 text-xs uppercase tracking-wider">02. Forced Choice</span> 
              <p className="text-sm text-slate-300 leading-snug">
                Scammers only give you two buttons. Real systems allow you to navigate away or minimize.
              </p>
            </motion.div>

            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1c2434] text-white p-5 rounded-2xl shadow-xl border-l-4 border-yellow-400 w-[92%] self-start"
            >
              <span className="text-yellow-400 font-bold block mb-1 text-xs uppercase tracking-wider">03. Contextual Noise</span> 
              <p className="text-sm text-slate-300 leading-snug">
                Scary IP addresses and fake "Protocol IDs" provide a false sense of technical legitimacy.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Golden Rule */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-blue-50 border border-blue-100 rounded-2xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="text-blue-600 mt-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[#145bb3] font-bold text-lg mb-1">The Golden Rule</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                If a digital interaction demands <strong>Immediate Action</strong> to avoid a <strong>Negative Outcome</strong>, treat it as a script until proven otherwise.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="pt-2">
          <button
            onClick={() => router.push(`/course/${courseId}/4`)}
            className="group bg-[#145bb3] hover:bg-[#1c78e9] text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg flex items-center gap-3 active:scale-95"
          >
            Next: Master the Defense
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}