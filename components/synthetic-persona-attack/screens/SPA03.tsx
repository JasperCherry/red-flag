"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function Screen03RedFlags({ courseId }: { courseId: string }) {
  const router = useRouter();

  const flags = [
    {
      title: "Irregular Blinking",
      desc: "AI struggle with natural blink patterns. Look for eyes that stay open too long or blink out of sync.",
      icon: "👁️"
    },
    {
      title: "The 'Halo' Effect",
      desc: "Look at the edges of the hair and ears. AI often creates a blurry 'aura' where the person meets the background.",
      icon: "✨"
    },
    {
      title: "Audio Desync",
      desc: "Watch the mouth. If the syllables don't perfectly match the lip movement, the video is being rendered in real-time.",
      icon: "🔊"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={3} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col gap-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">
            Phase B: Detection
          </p>
          <h1 className="text-3xl font-bold text-[#1c2434]">Spotting the Artifacts</h1>
          <p className="text-[#64748b] mt-2">
            AI is a master of the face, but a failure at the details. Watch for these three &ldquo;glitches.&rdquo;
          </p>
        </motion.div>

        {/* Red Flag Cards */}
        <div className="space-y-4">
          {flags.map((flag, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 p-6 rounded-[2rem] shadow-sm flex gap-5 items-start group hover:border-blue-200 transition-colors"
            >
              <div className="text-3xl bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                {flag.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#1c2434] mb-1">{flag.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {flag.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-amber-50 border border-amber-100 rounded-2xl p-5"
        >
          <div className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠️</span>
            <p className="text-xs text-amber-800 leading-relaxed">
              **Pro Tip:** If you suspect a deepfake during a live call, ask the candidate to **turn their head slowly to the side.** Most real-time AI models fail to render a perfect profile view.
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-2"
        >
          <button
            onClick={() => router.push(`/course/${courseId}/4`)}
            className="w-full bg-[#1c2434] hover:bg-[#2d3a4f] text-white font-bold py-5 rounded-2xl transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
          >
            Go to the Pro-Tip
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>

      </div>
    </div>
  );
}