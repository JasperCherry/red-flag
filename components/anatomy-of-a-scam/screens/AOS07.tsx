"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function Screen07ChatPart1({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

  const choices = [
    {
      id: 1,
      text: "“I’m so sorry! Doing it right now. What’s the link?”",
    },
    {
      id: 2,
      text: "“On it. Give me 5 minutes to get to my desk.”",
    },
    {
      id: 3,
      text: "“Hey Mark, just checking—I’m in a training right now. Is this actually urgent or can it wait?”",
    },
  ];

  const handleSelection = (id: number) => {
    setSelectedChoice(id);
    setTimeout(() => {
      router.push(`/course/${courseId}/8?choice=${id}`);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={7} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col gap-8">
        <div>
          <p className="text-xs font-semibold text-[#8a99af] uppercase tracking-widest mb-1">
            Phase C: The Branching Chat
          </p>
          <h1 className="text-3xl font-bold text-[#1c2434]">The Authority Trap</h1>
          <p className="text-[#64748b] mt-2">
            Two hours after the security alert, you think the threat is over. Then a direct message arrives from <span className="font-bold text-[#1c2434]">Mark (VP of Sales)</span>.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white border border-[#e2e8f0] rounded-3xl shadow-xl overflow-hidden flex flex-col min-h-[350px]">
          {/* App Header */}
          <div className="bg-[#4a154b] p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center text-white font-bold">#</div>
            <h3 className="text-white font-bold text-sm">Direct Message</h3>
          </div>

          {/* Messages Area */}
          <div className="p-6 flex-1 space-y-6 bg-slate-50/50">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#e8912d] flex-shrink-0 flex items-center justify-center text-white font-bold shadow-sm">
                M
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-black text-sm text-slate-900">Mark Thompson</span>
                  <span className="text-[10px] text-slate-400 font-medium">2:14 PM</span>
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm space-y-3">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Hey, are you at your desk? I’m in a meeting with a huge client and I forgot to approve the emergency vendor payment. 
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed font-semibold">
                    I need you to bypass the portal and authorize this link manually or we lose the contract. Can you help me out real quick?
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated "Typing" indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-2 ml-14"
            >
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]" />
            </motion.div>
          </div>

          {/* Input Area (Choices) */}
          <div className="p-4 bg-white border-t border-slate-100">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-2">Choose your response:</p>
            <div className="flex flex-col gap-2">
              {choices.map((choice) => (
                <button
                  key={choice.id}
                  onClick={() => handleSelection(choice.id)}
                  disabled={selectedChoice !== null}
                  className={`text-left p-4 rounded-xl text-sm font-medium transition-all border-2 
                    ${selectedChoice === choice.id 
                      ? 'border-[#145bb3] bg-blue-50 text-[#145bb3]' 
                      : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-slate-100'
                    } ${selectedChoice !== null && selectedChoice !== choice.id ? 'opacity-50' : ''}`}
                >
                  {choice.text}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 italic">
          Remember the 10-Second Circuit Breaker? Think before you tap.
        </p>
      </div>
    </div>
  );
}