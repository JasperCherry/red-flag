"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion, AnimatePresence } from "framer-motion";

export default function Screen05LabVisual({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<"scanning" | "error" | "success">("scanning");
  const [feedback, setFeedback] = useState("");

  const choices = {
    url: {
      correct: false,
      msg: "The URL looks correct (security.yourcorp.com). Attackers often keep the browser bar clean and hide the trap inside the page."
    },
    ip: {
      correct: false,
      msg: "This is a standard local IP. It looks scary, but it's just 'technical noise' used to distract you from the real threat."
    },
    provider: {
      correct: true,
      msg: "🎯 Bingo! 'security-protocol.net' is a registered domain owned by a hacker, not our company. You caught the trap."
    }
  };

  const handleChoice = (key: keyof typeof choices) => {
    const choice = choices[key];
    if (choice.correct) {
      setStatus("success");
      setFeedback(choice.msg);
    } else {
      setStatus("error");
      setFeedback(choice.msg);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={5} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col gap-6">
        <div>
          <p className="text-sm font-bold text-[#475569] uppercase tracking-widest">
            Phase C: Active Simulation
          </p>
          <h1 className="text-3xl font-bold text-[#1c2434]">The Visual Lab</h1>
          <p className="text-base text-[#334155] mt-2">
            The attacker has hidden <strong>one fatal flaw</strong> in this interface. Tap the element that proves this is a scam.
          </p>
        </div>

        {/* The Simulation Phone/Window */}
        <div className={`relative bg-white border-2 rounded-3xl overflow-hidden transition-all duration-300 shadow-2xl ${status === 'success' ? 'border-green-500' : status === 'error' ? 'border-red-400' : 'border-slate-200'}`}>
          
          {/* Choice 1: URL Bar */}
          <button 
            onClick={() => handleChoice("url")}
            className="w-full p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between hover:bg-slate-100 transition-colors"
          >
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-slate-300" />
              <div className="w-2 h-2 rounded-full bg-slate-300" />
            </div>
            <div className="px-4 py-1 bg-white border border-slate-200 rounded-full text-[10px] text-blue-600 font-mono">
              https://security.yourcorp.com/auth
            </div>
            <div className="w-4" />
          </button>

          <div className="p-8 space-y-8">
            {/* Choice 2: System Info */}
            <button 
              onClick={() => handleChoice("ip")}
              className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all text-left border border-transparent hover:border-slate-200"
            >
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0 0v2m0-2h2m-2 0H10m11 3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-[#475569] uppercase">System Flag</p>
                <p className="text-xs font-mono text-slate-600">Incident ID: #882 - IP: 10.0.0.1</p>
              </div>
            </button>

            {/* Choice 3: The Actual Trap */}
            <div className="py-6 flex justify-center">
              <button
                onClick={() => handleChoice("provider")}
                className={`group flex items-center gap-4 px-6 py-5 rounded-2xl border-2 transition-all shadow-sm ${status === 'success' ? 'bg-green-50 border-green-500' : 'bg-white border-slate-100 hover:border-blue-400'}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${status === 'success' ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#475569] uppercase">Security Provider</p>
                  <p className="font-mono text-sm text-slate-700">v.security-protocol.net</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Feedback Area */}
        <div className="min-h-[100px]">
          <AnimatePresence mode="wait">
            {feedback && (
              <motion.div
                key={feedback}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-5 rounded-2xl flex gap-4 ${status === 'success' ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-100 text-red-800'}`}
              >
                <span className="text-xl">{status === 'success' ? '✅' : '❌'}</span>
                <p className="text-base leading-relaxed">{feedback}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <button
          disabled={status !== 'success'}
          onClick={() => router.push(`/course/${courseId}/6`)}
          className={`w-full py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 ${status === 'success' ? 'bg-[#145bb3] text-white shadow-xl scale-100' : 'bg-slate-200 text-slate-400 cursor-not-allowed scale-[0.98]'}`}
        >
          {status === 'success' ? "Proceed to Next Lab" : "Find the security flaw to continue"}
          {status === 'success' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>}
        </button>
      </div>
    </div>
  );
}