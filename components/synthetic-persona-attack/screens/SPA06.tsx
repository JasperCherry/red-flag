"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Screen06LabTechnical({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [dynamicDate] = useState(() => {
    const d = new Date();
    d.setMonth(d.getMonth() - 2);
    return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  });

  const options = [
    { 
      id: 'url', 
      label: "linkedin.com/in/sarah-j-99a21-882", 
      isFake: false,
      feedback: "Messy URLs are actually common. Check the profile age instead."
    },
    { 
      id: 'email', 
      label: "s.jenkins@outlook.com", 
      isFake: false, 
      feedback: "Standard personal email. Not a definitive red flag."
    },
    { 
      id: 'date', 
      label: `Joined LinkedIn: ${dynamicDate}`, 
      isFake: true,
      feedback: "Correct! A 'Senior' candidate with a profile created 8 weeks ago is a classic synthetic sign."
    },
  ];

  const handleVerify = (id: string, isFake: boolean) => {
    setSelected(id);
    if (isFake) setIsCorrect(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={6} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-10 pb-20 flex flex-col">
        
        <div className="mb-8">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Phase C: Verification</p>
          <h2 className="text-2xl font-bold text-[#1c2434]">The Digital Paperwork</h2>
          <p className="text-base text-[#334155] mt-2">
            Synthetic personas have &ldquo;shallow&rdquo; digital histories. Inspect Sarah&apos;s profile details. Which one is the <strong>dead giveaway?</strong>
          </p>
        </div>

        {/* Profile Dossier Card */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-xl overflow-hidden mb-6">
          <div className="bg-slate-50 p-6 border-b border-slate-100 flex items-center gap-4">
             <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <img 
                  src="/images/fake-person-1.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div>
                <h3 className="font-bold text-[#1c2434]">Sarah Jenkins</h3>
                <p className="text-xs text-[#475569] font-mono uppercase tracking-tight">Verified Candidate ID: 4492-X</p>
             </div>
          </div>

          <div className="p-6 space-y-3">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleVerify(opt.id, opt.isFake)}
                disabled={isCorrect}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex justify-between items-center ${
                  selected === opt.id 
                    ? (opt.isFake ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') 
                    : 'border-slate-100 bg-slate-50 hover:border-blue-200'
                }`}
              >
                <span className={`text-base font-medium ${selected === opt.id && !opt.isFake ? 'text-red-700' : 'text-slate-700'}`}>
                  {opt.label}
                </span>
                {selected === opt.id && (
                  <span className="text-lg">{opt.isFake ? '✅' : '❌'}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`p-4 rounded-2xl text-center text-base font-medium mb-4 ${
                isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {options.find(o => o.id === selected)?.feedback}
            </motion.div>
          )}
        </AnimatePresence>

        {isCorrect && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => router.push(`/course/${courseId}/7`)}
            className="w-full bg-[#145bb3] hover:bg-[#1c78e9] text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95"
          >
            Continue
          </motion.button>
        )}

      </div>
    </div>
  );
}