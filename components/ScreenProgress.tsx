"use client";

interface Props {
  current: number;
}

export default function ScreenProgress({ current }: Props) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex gap-0.5 bg-white shadow-sm">
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          className={`flex-1 h-1 transition-all duration-500 ${
            i + 1 <= current ? "bg-[#145bb3]" : "bg-[#e2e8f0]"
          }`}
        />
      ))}
    </div>
  );
}
