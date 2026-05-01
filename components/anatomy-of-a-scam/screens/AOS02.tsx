"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function Screen02CoreInsight({ courseId }: { courseId: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const result = searchParams.get("result");

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={2} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col gap-12">
        {/* Section 1: The Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-xs font-semibold text-[#8a99af] uppercase tracking-widest">
            The Reality Check
          </p>
          <h1 className="text-3xl font-bold text-[#1c2434] leading-tight">
            {result === 'click'
              ? "You reacted exactly how they planned."
              : result === 'timeout'
              ? "You froze. That instinct was exactly right."
              : "You hesitated. But was it luck or logic?"}
          </h1>
          <p className="text-lg text-[#64748b]">
            The alert you just saw wasn&apos;t a technical error. It was a <strong>Pretext</strong>—the first act of a digital performance.
          </p>
        </motion.div>

        {/* Section 2: The Core Insight (Scrolly-telling Beat) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white border border-[#e2e8f0] rounded-3xl p-8 shadow-sm space-y-6"
        >
          <div className="bg-[#eff6ff] w-12 h-12 rounded-full flex items-center justify-center text-[#145bb3]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-[#1c2434]">The &ldquo;Helpful IT Guy&rdquo; Role</h2>
          <p className="text-[#64748b] leading-relaxed">
            Scammers don&apos;t just send links; they cast themselves in a role. In the previous screen, the &ldquo;actor&rdquo; played the <strong>System Administrator</strong>.
          </p>
          <p className="text-[#64748b] leading-relaxed">
            They used a red border and a ticking clock to trigger your <strong>Urgency</strong>. When humans are rushed, we stop looking at the <em>sender</em> and start focusing on the <em>threat</em>.
          </p>
        </motion.div>

        {/* Section 3: The "Why" (Final Beat) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="border-l-4 border-[#145bb3] pl-6 py-2">
            <p className="text-[#1c2434] font-medium italic text-lg">
              &ldquo;A scam is not a hack of your computer. It is a hack of your emotions.&rdquo;
            </p>
          </div>
          <p className="text-[#64748b]">
            By pretending to &ldquo;help&rdquo; you secure your account, the attacker makes you feel like you are on the same team. This is the <strong>Anatomy of a Scam</strong>: creating a fake reality where the safest thing to do is exactly what the attacker wants.
          </p>

          <button
            onClick={() => router.push(`/course/${courseId}/3`)}
            className="w-full bg-[#1c2434] hover:bg-[#2d3a4f] text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3"
          >
            How do they set the trap?
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}