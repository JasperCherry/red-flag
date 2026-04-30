"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function SMR10Final({}: { courseId: string }) {
  const router = useRouter();

  const skills = [
    {
      icon: "🛑",
      title: "OOO Hardening",
      body: "You can now write auto-replies that are helpful to colleagues without leaking your location, timeline, or contacts to outsiders."
    },
    {
      icon: "🔍",
      title: "Scraper Awareness",
      body: "You know how to audit your own social posts for recon leaks — badges, hotel stationery, conference names — before attackers do."
    },
    {
      icon: "📵",
      title: "Out-of-Band Verification",
      body: "You&apos;ve practiced shutting down high-pressure requests by forcing the conversation onto official, verified channels."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={10} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-16 pb-12 flex flex-col">

        {/* Badge + Module label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 14 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="w-24 h-24 bg-[#1c2434] rounded-[2rem] flex items-center justify-center mb-5 shadow-xl">
            <span className="text-4xl">🔒</span>
          </div>
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Module 02 Complete</p>
          <h1 className="text-3xl font-black text-[#1c2434]">Recon Defender</h1>
          <p className="text-[#64748b] mt-2 text-sm max-w-xs">
            You finished the Social Media &amp; OOO Recon module. Here&apos;s what you can now do that you couldn&apos;t before.
          </p>
        </motion.div>

        {/* Skills earned */}
        <div className="space-y-4 mb-12">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="bg-white border border-slate-200 rounded-[1.5rem] p-5 flex gap-4 shadow-sm"
            >
              <div className="text-2xl flex-shrink-0 mt-0.5">{skill.icon}</div>
              <div>
                <p className="font-bold text-slate-900 mb-1">{skill.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{skill.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-auto"
        >
          <button
            onClick={() => router.push("/")}
            className="w-full bg-[#1c2434] hover:bg-black text-white font-bold py-6 rounded-2xl transition-all shadow-xl active:scale-95 text-lg"
          >
            Return to Dashboard
          </button>
        </motion.div>

      </div>
    </div>
  );
}
