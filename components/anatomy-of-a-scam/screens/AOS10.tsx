"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const QUESTIONS = [
  {
    id: 1,
    question: "A candidate's video feed looks perfect, but they refuse to turn their head when asked. What is the likely reason?",
    options: [
      "They have poor room lighting.",
      "The AI 'mask' will likely glitch or disappear in profile view.",
      "They are just being difficult."
    ],
    correct: 1
  },
  {
    id: 2,
    question: "Which digital footprint is the biggest red flag for a 'Senior' professional candidate?",
    options: [
      "A LinkedIn profile created 2 months ago.",
      "A messy or long profile URL.",
      "Using a personal Gmail account."
    ],
    correct: 0
  },
  {
    id: 3,
    question: "A new hire messages you asking to bypass protocols to fix a payroll error. What do you do?",
    options: [
      "Help them out so they get paid on time.",
      "Ask for their bank details in the chat.",
      "Deny the request and use official, encrypted channels."
    ],
    correct: 2
  }
];

export default function Screen10FinalQuiz({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (index: number) => {
    const isCorrect = index === QUESTIONS[currentStep].correct;
    const newScore = isCorrect ? score + 1 : score;

    if (currentStep < QUESTIONS.length - 1) {
      setScore(newScore);
      setCurrentStep(s => s + 1);
    } else {
      // Logic: Move to the Shield/Celebration screen (Screen 11)
      router.push(`/course/${courseId}/11?score=${newScore}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={10} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col">
        <div className="mb-10">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
            Question {currentStep + 1} of {QUESTIONS.length}
          </p>
          <h1 className="text-2xl font-bold text-[#1c2434]">
            {QUESTIONS[currentStep].question}
          </h1>
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-3"
            >
              {QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="w-full text-left p-6 rounded-3xl border-2 border-slate-100 bg-white hover:border-blue-500 hover:bg-blue-50 transition-all group"
                >
                  <p className="text-slate-700 font-medium group-hover:text-blue-900 leading-relaxed">
                    {option}
                  </p>
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}