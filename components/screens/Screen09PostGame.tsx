"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function Screen09PostGame({ courseId }: { courseId: string }) {
  const router = useRouter();

  const lessons = [
    {
      title: "Spot the Performance",
      desc: "Scammers play roles (Boss, IT, Bank). If it feels like a theatrical script, it usually is.",
      icon: "🎭"
    },
    {
      title: "Break the Momentum",
      desc: "Scammers rely on you moving fast. Wait 10 seconds to let your logical brain take over.",
      icon: "⏱️"
    },
    {
      title: "Inspect the Source",
      desc: "Never trust a display name. Always verify the actual email address and the destination URL.",
      icon: "🔍"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={9} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col gap-8">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs font-semibold text-[#8a99af] uppercase tracking-widest mb-1">Phase D: Wrap Up</p>
          <h1 className="text-3xl font-bold text-[#1c2434]">The Final Blueprint</h1>
          <p className="text-[#64748b] mt-2">Everything you need to remember for next time.</p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {lessons.map((lesson, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-[#e2e8f0] p-5 rounded-2xl shadow-sm flex gap-4 items-center"
            >
              <div className="text-2xl bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">{lesson.icon}</div>
              <div>
                <h3 className="font-bold text-[#1c2434] text-sm">{lesson.title}</h3>
                <p className="text-xs text-[#64748b] leading-relaxed">{lesson.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-[#1c2434] rounded-3xl p-6 text-white shadow-xl flex items-center justify-between gap-4"
        >
          <div className="space-y-1">
            <h2 className="font-bold text-sm">PDF Cheat Sheet</h2>
            <p className="text-slate-400 text-[11px]">Save these red flags to your device.</p>
          </div>
          <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-4 py-2.5 rounded-xl transition-all text-xs">Download</button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={() => router.push(`/course/${courseId}/10`)}
          className="w-full bg-[#145bb3] hover:bg-[#1c78e9] text-white font-bold py-5 rounded-2xl transition-all shadow-xl active:scale-95"
        >
          Finish Course
        </motion.button>
      </div>
    </div>
  );
}