"use client";

import { useState } from "react";
import Link from "next/link";
import { problems } from "@/data/problems";
import { Difficulty, Language } from "@/data/problems";

export default function Home() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>("easy");
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("python");

  const filteredProblems = problems.filter(
    (problem) => problem.difficulty === selectedDifficulty
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-4">
          <div className="flex gap-4">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty)}
              className="px-4 py-2 rounded-md border bg-background"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value as Language)}
              className="px-4 py-2 rounded-md border bg-background"
            >
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>
          </div>

          <div className="grid gap-4">
            {filteredProblems.map((problem) => (
              <Link
                key={problem.id}
                href={`/problems/${problem.id}`}
                className="block"
              >
                <div className="p-4 rounded-lg border bg-card hover:bg-accent cursor-pointer transition-colors">
                  <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {problem.description}
                  </p>
                  <div className="flex items-center gap-2">
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
                    <span className="text-sm text-muted-foreground">
                      {problem.testCases.length} test cases
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <div className="p-4 rounded-lg border bg-card">
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Choose your preferred programming language</li>
              <li>Select a problem based on difficulty</li>
              <li>Write your solution in the code editor</li>
              <li>Run your code to test against test cases</li>
              <li>Submit when youre confident in your solution</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
