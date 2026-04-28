import { notFound } from "next/navigation";
import Screen01Ambush from "@/components/screens/Screen01Ambush";
import Screen02CoreInsight from "@/components/screens/Screen02CoreInsight";
import Screen03RedFlags from "@/components/screens/Screen03RedFlags";
import Screen04ProTip from "@/components/screens/Screen04ProTip";
import Screen05LabVisual from "@/components/screens/Screen05LabVisual";
import Screen06LabTechnical from "@/components/screens/Screen06LabTechnical";
import Screen07ChatPart1 from "@/components/screens/Screen07ChatPart1";
import Screen08ChatPart2 from "@/components/screens/Screen08ChatPart2";
import Screen09PostGame from "@/components/screens/Screen09PostGame";
import Screen10Shield from "@/components/screens/Screen10Shield";

const SCREENS: Record<string, React.ComponentType<{ courseId: string }>> = {
  "1": Screen01Ambush,
  "2": Screen02CoreInsight,
  "3": Screen03RedFlags,
  "4": Screen04ProTip,
  "5": Screen05LabVisual,
  "6": Screen06LabTechnical,
  "7": Screen07ChatPart1,
  "8": Screen08ChatPart2,
  "9": Screen09PostGame,
  "10": Screen10Shield,
};

export default async function ScreenPage({
  params,
}: {
  params: Promise<{ courseId: string; screen: string }>;
}) {
  const { courseId, screen } = await params;
  const ScreenComponent = SCREENS[screen];
  if (!ScreenComponent) return notFound();
  return <ScreenComponent courseId={courseId} />;
}
