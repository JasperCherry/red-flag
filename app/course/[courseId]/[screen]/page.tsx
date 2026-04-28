import { notFound } from "next/navigation";

import AOS01 from "@/components/anatomy-of-a-scam/screens/AOS01";
import AOS02 from "@/components/anatomy-of-a-scam/screens/AOS02";
import AOS03 from "@/components/anatomy-of-a-scam/screens/AOS03";
import AOS04 from "@/components/anatomy-of-a-scam/screens/AOS04";
import AOS05 from "@/components/anatomy-of-a-scam/screens/AOS05";
import AOS06 from "@/components/anatomy-of-a-scam/screens/AOS06";
import AOS07 from "@/components/anatomy-of-a-scam/screens/AOS07";
import AOS08 from "@/components/anatomy-of-a-scam/screens/AOS08";
import AOS09 from "@/components/anatomy-of-a-scam/screens/AOS09";
import AOS10 from "@/components/anatomy-of-a-scam/screens/AOS10";

import SPA01 from "@/components/synthetic-persona-attack/screens/SPA01";
import SPA02 from "@/components/synthetic-persona-attack/screens/SPA02";
import SPA03 from "@/components/synthetic-persona-attack/screens/SPA03";
import SPA04 from "@/components/synthetic-persona-attack/screens/SPA04";
import SPA05 from "@/components/synthetic-persona-attack/screens/SPA05";
import SPA06 from "@/components/synthetic-persona-attack/screens/SPA06";
import SPA07 from "@/components/synthetic-persona-attack/screens/SPA07";
import SPA08 from "@/components/synthetic-persona-attack/screens/SPA08";
import SPA09 from "@/components/synthetic-persona-attack/screens/SPA09";
import SPA10 from "@/components/synthetic-persona-attack/screens/SPA10";
import SPA11 from "@/components/synthetic-persona-attack/screens/SPA11";

type ScreenMap = Record<string, React.ComponentType<{ courseId: string }>>;

const COURSES: Record<string, ScreenMap> = {
  "anatomy-of-a-scam": {
    "1": AOS01,
    "2": AOS02,
    "3": AOS03,
    "4": AOS04,
    "5": AOS05,
    "6": AOS06,
    "7": AOS07,
    "8": AOS08,
    "9": AOS09,
    "10": AOS10,
  },
  "synthetic-persona-attack": {
    "1": SPA01,
    "2": SPA02,
    "3": SPA03,
    "4": SPA04,
    "5": SPA05,
    "6": SPA06,
    "7": SPA07,
    "8": SPA08,
    "9": SPA09,
    "10": SPA10,
    "11": SPA11,
  },
};

export default async function ScreenPage({
  params,
}: {
  params: Promise<{ courseId: string; screen: string }>;
}) {
  const { courseId, screen } = await params;
  const course = COURSES[courseId];
  if (!course) return notFound();
  const ScreenComponent = course[screen];
  if (!ScreenComponent) return notFound();
  return <ScreenComponent courseId={courseId} />;
}
