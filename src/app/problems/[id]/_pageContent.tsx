"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Problem } from "@/data/problems"; // Removed unused 'problems' import
import { CodeEditor } from "@/components/code-editor";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { markProblemAttempted, markProblemCompleted } from "@/lib/progress";

interface TestResult {
  input: string;
  expected: string;
  actual: string;
  passed: boolean;
}

interface ProblemPageContentProps {
  problem: Problem;
}

export default function ProblemPageContent({ problem }: ProblemPageContentProps) {
  const router = useRouter();

  const [code, setCode] = useState(problem?.starterCode || "");
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (problem) {
      markProblemAttempted(problem.id);
    }
  }, [problem]);

  const handleSubmit = async () => {
    setIsRunning(true);
    setTestResults([]);
    setIsSubmitted(true);

    try {
      const results = await Promise.all(
        problem.testCases.map(async (testCase) => {
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const passed = Math.random() > 0.3;
          if (passed) {
            markProblemCompleted(problem.id);
          }

          return {
            input: testCase.input,
            expected: testCase.output,
            actual: passed ? testCase.output : "Incorrect output",
            passed,
          };
        })
      );

      setTestResults(results);
    } catch (error) {
      console.error("Error running tests:", error);
      setTestResults([
        {
          input: "Error",
          expected: "No error",
          actual: "Failed to run tests",
          passed: false,
        },
      ]);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">{problem.title}</h1>
          <p className="text-muted-foreground mt-2">
            Difficulty:{" "}
            <span
              className={`font-medium ${
                problem.difficulty === "easy"
                  ? "text-green-500"
                  : problem.difficulty === "medium"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {problem.difficulty.charAt(0).toUpperCase() +
                problem.difficulty.slice(1)}
            </span>
          </p>
        </div>
        <Button variant="outline" onClick={() => router.push("/")}>
          Back to Problems
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Problem Description</h2>
              <div className="prose prose-sm max-w-none">
                <p>{problem.description}</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Test Cases</h2>
              <div className="space-y-4">
                {problem.testCases.map((testCase, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50">
                    <p className="font-medium">Input:</p>
                    <pre className="mt-1 text-sm">{testCase.input}</pre>
                    <p className="font-medium mt-2">Expected Output:</p>
                    <pre className="mt-1 text-sm">{testCase.output}</pre>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="mb-4">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Your Solution</h2>
              <CodeEditor
                language={problem.language}
                code={code}
                onChange={(value) => setCode(value || "")}
              />
            </div>
          </Card>

          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              onClick={() => setCode(problem.starterCode)}
            >
              Reset Code
            </Button>
            <Button onClick={handleSubmit} disabled={isRunning}>
              {isRunning ? "Running..." : "Submit Solution"}
            </Button>
          </div>

          {isSubmitted && (
            <Card className="mt-8">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Test Results</h2>
                <div className="space-y-4">
                  {testResults.map((result, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${
                        result.passed ? "bg-green-500/20" : "bg-red-500/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Test Case {index + 1}</span>
                        <span
                          className={`text-sm font-medium ${
                            result.passed ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {result.passed ? "Passed" : "Failed"}
                        </span>
                      </div>
                      <div className="mt-2 space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Input:</span>
                          <pre className="mt-1">{result.input}</pre>
                        </div>
                        <div>
                          <span className="font-medium">Expected:</span>
                          <pre className="mt-1">{result.expected}</pre>
                        </div>
                        <div>
                          <span className="font-medium">Actual:</span>
                          <pre className="mt-1">{result.actual}</pre>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}