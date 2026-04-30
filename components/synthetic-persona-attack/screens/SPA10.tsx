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
    correct: 1,
    explanations: [
      "Lighting issues don't explain reluctance to move. Lighting affects all angles equally.",
      "Correct. Real-time deepfake models are trained on frontal faces. A profile view exposes the edge where the digital mask breaks down.",
      "Difficult candidates exist — but refusing a specific physical action during a video call is a technical red flag, not a personality one."
    ]
  },
  {
    id: 2,
    question: "Which digital footprint is the biggest red flag for a 'Senior' professional candidate?",
    options: [
      "A LinkedIn profile created only 2 months ago.",
      "A messy or long profile URL.",
      "Using a personal email address."
    ],
    correct: 0,
    explanations: [
      "Correct. Synthetic personas are created on demand. A senior professional claiming years of experience but joining LinkedIn two months ago is a clear sign the identity was fabricated.",
      "LinkedIn auto-generates messy URLs. Many real users never clean them up — this alone proves nothing.",
      "Plenty of legitimate candidates use personal emails. It is common practice, especially for freelancers."
    ]
  },
  {
    id: 3,
    question: "A new hire messages you asking to bypass HR protocols to fix a payroll error. What do you do?",
    options: [
      "Help them out so they get paid on time.",
      "Ask for their bank details in the chat.",
      "Deny the request and use official, encrypted channels."
    ],
    correct: 2,
    explanations: [
      "Urgency is the attacker's tool. The faster you feel you need to act, the less you are thinking. A real payroll error can wait for proper verification.",
      "Never collect bank details through chat. That channel is not secure and you have no way to verify who is on the other end.",
      "Correct. Official channels exist precisely for situations like this. Redirect every sensitive request there, no exceptions."
    ]
  }
];

export default function Screen10FinalQuiz({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = QUESTIONS[currentStep];
  const isCorrect = selectedAnswer === currentQuestion.correct;

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === currentQuestion.correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(s => s + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={10} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col">
        {!showResults ? (
          <>
            <div className="mb-8">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
                Assessment: Question {currentStep + 1} of {QUESTIONS.length}
              </p>
              <h1 className="text-2xl font-bold text-[#1c2434]">
                {currentQuestion.question}
              </h1>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-3"
                >
                  {currentQuestion.options.map((option, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isRight = idx === currentQuestion.correct;
                    let style = "border-2 border-slate-100 bg-white hover:border-blue-500 hover:bg-blue-50";
                    if (selectedAnswer !== null) {
                      if (isRight) style = "border-2 border-green-500 bg-green-50";
                      else if (isSelected) style = "border-2 border-red-400 bg-red-50";
                      else style = "border-2 border-slate-100 bg-white opacity-50";
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        disabled={selectedAnswer !== null}
                        className={`w-full text-left p-6 rounded-3xl transition-all group ${style}`}
                      >
                        <p className="text-slate-700 font-medium leading-relaxed">
                          {option}
                        </p>
                      </button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-5 rounded-2xl mb-6 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}
                >
                  <p className={`text-sm font-bold mb-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    {isCorrect ? '✓ Correct' : '✗ Not quite'}
                  </p>
                  <p className={`text-sm leading-relaxed ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {currentQuestion.explanations[selectedAnswer]}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {selectedAnswer !== null && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleNext}
                className="w-full bg-[#1c2434] hover:bg-black text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95"
              >
                {currentStep < QUESTIONS.length - 1 ? 'Next Question' : 'See My Results'}
              </motion.button>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 flex flex-col items-center justify-center text-center"
          >
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
