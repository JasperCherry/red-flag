"use client";

interface Props {
  current: number;
  total?: number;
}

export default function ScreenProgress({ current, total = 10 }: Props) {
  const segments = Math.max(total, current);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex gap-0.5 bg-white shadow-sm">
      {Array.from({ length: segments }, (_, i) => (
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
