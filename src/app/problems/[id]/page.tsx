import { problems } from "@/data/problems";
import ProblemPageContent from "./_pageContent";
import { notFound } from "next/navigation";

interface ProblemPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProblemPage({ params }: ProblemPageProps) {
  const { id } = await params;
  const problemId = parseInt(id);
  const problem = problems.find((p) => p.id === problemId);

  if (!problem) {
    notFound();
  }

  return <ProblemPageContent problem={problem} />;
}