"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function SMR04ProTip({ courseId }: { courseId: string }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={4} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-12 pb-24 flex flex-col">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-10"
        >
          <p className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-1">The Pro-Tip</p>
          <h1 className="text-3xl font-bold text-[#1c2434]">The "Vague-Reply" Rule</h1>
          <p className="text-[#64748b] mt-4">
            You can be helpful to your colleagues without giving a hacker a roadmap. The secret is to **remove the specifics.**
          </p>
        </motion.div>

        {/* Comparison Section */}
        <div className="space-y-6 mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 bg-red-50 border border-red-100 rounded-3xl relative"
          >
            <span className="absolute -top-3 left-6 px-3 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full">DANGEROUS</span>
            <p className="text-red-900/40 text-xs font-mono mb-2 line-through">"I'm in Tokyo until Friday..."</p>
            <p className="text-red-800 text-sm italic">"I'm out of the office for the rest of the week at a conference in Tokyo. Email Sarah Jenkins if it's urgent."</p>
          </motion.div>

          <div className="flex justify-center">
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
              ⬇️
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-green-50 border border-green-100 rounded-3xl relative"
          >
            <span className="absolute -top-3 left-6 px-3 py-1 bg-green-600 text-white text-[10px] font-bold rounded-full">SECURE</span>
            <p className="text-green-800 text-sm font-medium">
              "I am away from my desk with limited access to email until Monday. Please contact the internal support alias for urgent matters."
            </p>
          </motion.div>
        </div>

        {/* Tip Breakdown */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bg-white border border-slate-200 p-5 rounded-[2rem]">
            <p className="text-xs font-bold text-slate-400 uppercase mb-2">Internal vs External</p>
            <p className="text-xs text-slate-600 leading-relaxed">Most email apps let you set different replies for people outside your company. **Keep the specifics internal.**</p>
          </div>
          <div className="bg-white border border-slate-200 p-5 rounded-[2rem]">
            <p className="text-xs font-bold text-slate-400 uppercase mb-2">Alias Only</p>
            <p className="text-xs text-slate-600 leading-relaxed">Refer people to a general group (e.g., "The Marketing Team") rather than a specific person's name.</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div className="mt-auto pt-10">
          <button
            onClick={() => router.push(`/course/${courseId}/5`)}
            className="w-full bg-[#1c2434] hover:bg-black text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3"
          >
            Enter the Lab
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

      </div>
    </div>
  );
}