"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SMR07ChatSetup({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleChoice = (index: number) => {
    setSelectedOption(index);
    // Move to Screen 8 with the choice as a query parameter
    setTimeout(() => {
      router.push(`/course/${courseId}/8?choice=${index}`);
    }, 600);
  };

  const options = [
    { id: 0, text: "Wait, which project? And why aren't you using your work phone?" },
    { id: 1, text: "I'm in a session right now. Can this wait until I'm back in the hotel?" },
    { id: 2, text: "Hey Sarah, I'm actually tied up. I'll call you on your office extension in 10 mins." }
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex flex-col">
      <ScreenProgress current={7} />

      <div className="flex-1 max-w-md mx-auto w-full px-6 pt-10 pb-24 flex flex-col">
        
        <div className="mb-6">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Phase C: Branching Chat</p>
          <h1 className="text-2xl font-bold text-[#1c2434]">The &ldquo;Sarah&rdquo; Escalation</h1>
        </div>

        {/* Mobile Interface Simulation */}
        <div className="bg-[#e5ddd5] rounded-[3rem] border-[8px] border-[#1c2434] shadow-2xl overflow-hidden flex flex-col aspect-[9/16] relative">
          
          {/* Chat Header */}
          <div className="bg-[#075e54] p-4 pt-10 flex items-center gap-3 text-white">
            <div className="w-10 h-10 rounded-full bg-slate-400 flex-shrink-0 border border-white/20" />
            <div>
              <p className="text-sm font-bold">Sarah Jenkins</p>
              <p className="text-xs opacity-90">online</p>
            </div>
          </div>

          {/* Chat Bubble Area */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, x: -20 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-sm text-slate-800 leading-relaxed"
            >
              &ldquo;Alex! Sorry to bug you in Austin, but I&apos;m having a total meltdown with the Global Summit file. My laptop just died and I need the <span className="font-bold underline">Admin Passcode</span> for the shared drive ASAP.&rdquo;
            </motion.div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0, x: -20 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-sm text-slate-800 leading-relaxed"
            >
              &ldquo;I&apos;m using my personal phone because the office network is acting up too. Please help!! 🙏&rdquo;
            </motion.div>
          </div>

          {/* User Input Options */}
          <div className="p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 space-y-2">
            <p className="text-xs text-[#475569] font-bold uppercase mb-2 text-center">Select your response:</p>
            
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleChoice(opt.id)}
                disabled={selectedOption !== null}
                className={`w-full text-left p-3 rounded-xl text-sm font-medium transition-all border
                  ${selectedOption === opt.id 
                    ? 'bg-blue-600 text-white border-blue-600 scale-[0.98]' 
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 active:bg-slate-50'}
                `}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-[#475569] italic leading-relaxed">
          The attacker is counting on your &ldquo;Helper Instinct&rdquo; and the stress of being at a summit.
        </p>

      </div>
    </div>
  );
}