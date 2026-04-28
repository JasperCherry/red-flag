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
      "A LinkedIn profile created only 2 months ago.",
      "A messy or long profile URL.",
      "Using a personal email address."
    ],
    correct: 0
  },
  {
    id: 3,
    question: "A new hire messages you asking to bypass HR protocols to fix a payroll error. What do you do?",
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
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (index: number) => {
    const isCorrect = index === QUESTIONS[currentStep].correct;
    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(s => s + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={10} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col">
        {!showResults ? (
          <>
            <div className="mb-10">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
                Assessment: Question {currentStep + 1} of {QUESTIONS.length}
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
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 flex flex-col items-center justify-center text-center"
          >
            {/* Professional Shield Icon */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12 }}
              className="w-24 h-24 bg-blue-600 text-white rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-blue-200"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </motion.div>

            <h2 className="text-3xl font-bold text-slate-900 mb-2">Final Score</h2>
            <p className="text-slate-500 mb-10 text-lg">
              You correctly identified <span className="font-bold text-[#1c2434]">{score} / {QUESTIONS.length}</span> threats.
            </p>

            <div className="w-full space-y-3">
              <button
                onClick={() => router.push(`/course/${courseId}/11`)}
                className="w-full bg-[#1c2434] hover:bg-black text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95 text-lg"
              >
                Finish Course
              </button>
              
              <button
                onClick={resetQuiz}
                className="w-full bg-white border-2 border-slate-200 text-slate-500 font-bold py-5 rounded-2xl transition-all hover:bg-slate-50 active:scale-95"
              >
                Redo Quiz
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}