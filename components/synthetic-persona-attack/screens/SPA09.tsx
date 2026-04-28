"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function Screen09Recap({ courseId }: { courseId: string }) {
  const router = useRouter();

  const rules = [
    {
      title: "Trust, then Verify",
      desc: "Treat every new remote hire as a 'Synthetic' until they prove otherwise via official channels.",
      icon: "🛡️"
    },
    {
      title: "The Profile Test",
      desc: "Ask suspicious candidates to turn their head. AI can't hide its profile-view glitches yet.",
      icon: "🔄"
    },
    {
      title: "No Chat Bypasses",
      desc: "Never handle banking, IDs, or credentials via DM—no matter how 'urgent' the request seems.",
      icon: "🚫"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={9} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">
            Phase D: Summary
          </p>
          <h1 className="text-3xl font-bold text-[#1c2434]">Your Defense Kit</h1>
          <p className="text-[#64748b] mt-3">
            You are the last line of defense against synthetic threats. Remember these three rules to keep the company safe.
          </p>
        </motion.div>

        {/* Recap Cards */}
        <div className="space-y-4 mb-10">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white border border-slate-200 p-6 rounded-[2rem] shadow-sm flex items-start gap-5"
            >
              <div className="text-2xl bg-slate-50 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100">
                {rule.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#1c2434] mb-1">{rule.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Quote/Warning */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-900 rounded-[2.5rem] p-8 text-center text-white mb-10 relative overflow-hidden"
        >
          <p className="text-blue-400 font-mono text-[10px] uppercase tracking-widest mb-2">Final Thought</p>
          <p className="text-lg font-medium leading-relaxed">
            &ldquo;Identity is the new perimeter. If you can&apos;t verify the human, you can&apos;t trust the access.&rdquo;
          </p>
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-auto"
        >
          <button
            onClick={() => router.push(`/course/${courseId}/10`)}
            className="w-full bg-[#145bb3] hover:bg-[#1c78e9] text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3"
          >
            Take the Final Quiz
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

      </div>
    </div>
  );
}