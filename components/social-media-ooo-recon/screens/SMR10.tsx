"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function SMR10Final({}: { courseId: string }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={10} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-20 pb-12 flex flex-col">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-black text-[#1c2434] leading-tight">
            Course Complete
          </h1>
          <p className="text-[#64748b] mt-4 text-lg">
            You've finished the Social Media & OOO Recon module. 
          </p>
        </motion.div>

        {/* Recap of knowledge gained */}
        <div className="space-y-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            <div className="text-2xl mt-1">🛑</div>
            <div>
              <p className="font-bold text-slate-900 text-lg">OOO Hardening</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                You can now write auto-replies that are helpful to staff without leaking your location, timeline, or colleagues' names to outsiders.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <div className="text-2xl mt-1">🔍</div>
            <div>
              <p className="font-bold text-slate-900 text-lg">Scraper Awareness</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                You know how to audit your social media posts for "recon leaks" like badges or hotel stationery that hackers use to impersonate you.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4"
          >
            <div className="text-2xl mt-1">📵</div>
            <div>
              <p className="font-bold text-slate-900 text-lg">Out-of-Band Verification</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                You've practiced identifying and shutting down high-pressure DMs by forcing the conversation onto official, trusted company channels.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Final Dashboard Redirect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-auto"
        >
          <button
            onClick={() => router.push("/")}
            className="w-full bg-[#1c2434] hover:bg-black text-white font-bold py-6 rounded-2xl transition-all shadow-xl active:scale-95 text-xl"
          >
            Return to Dashboard
          </button>
        </motion.div>

      </div>
    </div>
  );
}