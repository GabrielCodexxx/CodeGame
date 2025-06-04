"use client";

import { useEffect, useState } from "react";
import { problems } from "@/data/problems";
import { Difficulty } from "@/data/problems";
import { getProgress, clearProgress } from "@/lib/progress";

export default function ProgressPage() {
  const [progress, setProgress] = useState(getProgress());

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const getDifficultyCount = (difficulty: Difficulty) => {
    return problems.filter((p) => p.difficulty === difficulty).length;
  };

  const getCompletedCount = (difficulty: Difficulty) => {
    return problems
      .filter(
        (p) =>
          p.difficulty === difficulty &&
          progress.completedProblems.includes(p.id)
      )
      .length;
  };

  const difficulties: Difficulty[] = ["easy", "medium", "hard"];

  const handleClearProgress = () => {
    if (window.confirm("Are you sure you want to clear all progress? This cannot be undone.")) {
      clearProgress();
      setProgress({ completedProblems: [], attemptedProblems: [] });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Progress</h1>
        <button
          onClick={handleClearProgress}
          className="px-4 py-2 text-sm text-red-500 hover:text-red-600 transition-colors"
        >
          Clear Progress
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {difficulties.map((difficulty) => {
          const total = getDifficultyCount(difficulty);
          const completed = getCompletedCount(difficulty);
          const percentage = (completed / total) * 100;

          return (
            <div
              key={difficulty}
              className="p-6 rounded-lg border bg-card"
            >
              <h2 className="text-xl font-semibold mb-4 capitalize">
                {difficulty} Problems
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {completed} of {total} completed
                  </span>
                  <span className="font-medium">{percentage.toFixed(0)}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Completed Problems</h2>
        <div className="grid gap-4">
          {problems
            .filter((p) => progress.completedProblems.includes(p.id))
            .map((problem) => (
              <div
                key={problem.id}
                className="p-4 rounded-lg border bg-card"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      problem.difficulty === "easy"
                        ? "bg-green-500/20 text-green-500"
                        : problem.difficulty === "medium"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "bg-red-500/20 text-red-500"
                    }`}
                  >
                    {problem.difficulty}
                  </span>
                </div>
              </div>
            ))}
          {progress.completedProblems.length === 0 && (
            <p className="text-muted-foreground text-center py-8">
              No problems completed yet. Start solving problems to track your progress!
            </p>
          )}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Attempted Problems</h2>
        <div className="grid gap-4">
          {problems
            .filter(
              (p) =>
                progress.attemptedProblems.includes(p.id) &&
                !progress.completedProblems.includes(p.id)
            )
            .map((problem) => (
              <div
                key={problem.id}
                className="p-4 rounded-lg border bg-card"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      problem.difficulty === "easy"
                        ? "bg-green-500/20 text-green-500"
                        : problem.difficulty === "medium"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "bg-red-500/20 text-red-500"
                    }`}
                  >
                    {problem.difficulty}
                  </span>
                </div>
              </div>
            ))}
          {progress.attemptedProblems.length === 0 && (
            <p className="text-muted-foreground text-center py-8">
              No problems attempted yet. Start solving problems to track your progress!
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 