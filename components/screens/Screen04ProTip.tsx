"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function Screen04ProTip({ courseId }: { courseId: string }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={4} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col gap-10">
        {/* Header */}
        <div>
          <p className="text-xs font-semibold text-[#8a99af] uppercase tracking-widest mb-1">
            Phase B: The Final Lesson
          </p>
          <h1 className="text-3xl font-bold text-[#1c2434]">Hack Your Brain</h1>
          <p className="text-[#64748b] mt-2">
            The scammer's greatest enemy isn't IT software. It's 10 seconds of your time.
          </p>
        </div>

        {/* The Pro-Tip Hero Card */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1c2434] to-[#0f172a] rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col gap-6">
            <div className="bg-blue-500 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-black tracking-tight italic uppercase">The 10-Second Circuit Breaker</h2>
              <p className="text-slate-400 leading-relaxed">
                Scammers rely on <span className="text-white font-bold">momentum</span>. If they keep you moving, you can't think. 
              </p>
            </div>

            <div className="grid gap-4 mt-2">
              {[
                { step: "01", text: "Hands off the device." },
                { step: "02", text: "Take one deep breath." },
                { step: "03", text: "Ask: 'Why is this urgent?'" }
              ].map((item, index) => (
                <motion.div 
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  key={index}
                  className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10"
                >
                  <span className="text-blue-400 font-mono font-bold text-lg">{item.step}</span>
                  <span className="text-slate-200 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Supporting Insight */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 p-2"
          >
            <div className="flex-shrink-0 w-1 bg-[#145bb3] rounded-full" />
            <p className="text-[#64748b] leading-relaxed">
              Biologically, it takes roughly <span className="text-[#1c2434] font-bold">10 seconds</span> for your logical brain to override a fear response. By doing nothing, you are actively winning the fight.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-amber-50 border border-amber-100 rounded-2xl p-5 flex gap-4"
          >
            <span className="text-2xl">💡</span>
            <p className="text-sm text-amber-900 leading-snug">
              <strong>Pro Tip:</strong> If the message claims to be from your boss, use those 10 seconds to check their actual email address—not just the display name.
            </p>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="pt-4">
          <button
            onClick={() => router.push(`/course/${courseId}/5`)}
            className="w-full md:w-auto bg-[#145bb3] hover:bg-[#1c78e9] text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
          >
            Enter The Simulation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}