"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function Screen10Shield({}: { courseId: string }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col overflow-hidden">
      <ScreenProgress current={10} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-20 pb-12 flex flex-col items-center text-center">
        
        {/* Simple Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-[#1c2434]">Course Complete</h1>
          <p className="text-[#64748b] mt-3 text-lg">
            You&apos;ve successfully decoded the Anatomy of a Scam.
          </p>
        </motion.div>

        <div className="relative w-full flex items-center justify-center mb-16">
          <div className="absolute w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-20" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="bg-[#1c2434] border-[6px] border-[#334155] rounded-[3rem] p-12 shadow-2xl flex flex-col items-center gap-6">
              <div className="text-7xl">🛡️</div>
              <div className="space-y-1">
                <p className="text-white font-bold text-2xl tracking-tight">Verified Defender</p>
                <p className="text-blue-400 font-mono text-xs uppercase tracking-[0.2em]">Module 01 Issued</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-sm"
        >
          <button
            onClick={() => router.push("/")}
            className="w-full bg-[#145bb3] hover:bg-[#1c78e9] text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95 text-lg"
          >
            Finish
          </button>
        </motion.div>

        {/* Bottom Decorative Element */}
        <div className="mt-auto pt-10">
          <div className="h-1 w-12 bg-slate-200 rounded-full mx-auto" />
        </div>
      </div>
    </div>
  );
}