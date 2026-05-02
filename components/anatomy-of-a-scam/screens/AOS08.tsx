"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function Screen08ChatPart2({ courseId }: { courseId: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const choice = searchParams.get("choice");

  const outcomes = {
    "1": {
      title: "The Trap Closes",
      status: "COMPROMISED",
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
      chatResponse: "Thanks! Just follow that link and enter your SSO credentials to authorize the 'bypass'. You're a lifesaver.",
      lesson: "By complying immediately, you handed the keys to the kingdom. 'Mark' wasn't at a meeting—he was a bot waiting for you to type your password into a fake login page."
    },
    "2": {
      title: "The Pressure Mounts",
      status: "VULNERABLE",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
      chatResponse: "5 minutes is too long. The client is walking out. Just do it from your phone now. It's a simple link click.",
      lesson: "The attacker is doubling down on the 'Urgency' script. By promising to do it later, you haven't escaped—you've just given them more time to pressure you."
    },
    "3": {
      title: "Script Broken",
      status: "SECURE",
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
      chatResponse: "[User has left the conversation / No response]",
      lesson: "Perfect. When you asked for verification, you stepped outside the script. Scammers want easy targets—once you challenge their authority, they usually vanish."
    }
  };

  const outcome = outcomes[choice as keyof typeof outcomes] || outcomes["2"];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={8} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col gap-8">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <p className="text-sm font-bold text-[#475569] uppercase tracking-widest">The Outcome</p>
            <h1 className="text-3xl font-bold text-[#1c2434]">{outcome.title}</h1>
          </div>
          <div className={`text-xs font-black px-3 py-1 rounded-full border-2 ${outcome.border} ${outcome.color}`}>
            {outcome.status}
          </div>
        </div>

        {/* Final Chat Interaction */}
        <div className="bg-white border border-[#e2e8f0] rounded-3xl shadow-xl overflow-hidden flex flex-col">
          <div className="bg-[#4a154b] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center text-white font-bold">#</div>
              <h3 className="text-white font-bold text-sm">Mark Thompson</h3>
            </div>
          </div>

          <div className="p-8 bg-slate-50/50">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[#e8912d] flex-shrink-0 flex items-center justify-center text-white font-bold">M</div>
              <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm">
                <p className="text-sm text-slate-700 italic">{outcome.chatResponse}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* The Learning Moment */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`${outcome.bg} ${outcome.border} border-2 rounded-3xl p-8 space-y-4`}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{choice === "3" ? "🛡️" : "💡"}</span>
            <h4 className={`font-bold text-lg ${outcome.color}`}>The Lesson</h4>
          </div>
          <p className="text-[#1c2434] leading-relaxed font-medium">
            {outcome.lesson}
          </p>
          <p className="text-base text-[#334155]">
            Real executives will never ask you to bypass security protocols. If it feels like a &ldquo;performance,&rdquo; it&apos;s because it is.
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          {choice !== "3" && (
            <button 
              onClick={() => router.push(`/course/${courseId}/7`)}
              className="w-full py-4 text-base font-bold text-[#145bb3] hover:bg-blue-50 rounded-2xl transition-colors"
            >
              ← Try the conversation again
            </button>
          )}
          <button
            onClick={() => router.push(`/course/${courseId}/9`)}
            className="w-full py-5 bg-[#1c2434] hover:bg-[#2d3a4f] text-white font-bold rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3"
          >
            Finish Simulation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}