import { NextResponse } from "next/server";
import { Language } from "@/data/problems";

interface ExecuteRequest {
  code: string;
  language: Language;
  testCases: {
    input: string;
    output: string;
  }[];
}

export async function POST(request: Request) {
  try {
    const body: ExecuteRequest = await request.json();
    const { testCases } = body;
    const results = testCases.map((testCase) => {


      return {
        input: testCase.input,
        expectedOutput: testCase.output,
        actualOutput: "Mock output", 
        passed: Math.random() > 0.5,
        error: null,
      };
    });

    return NextResponse.json({
      success: true,
      results,
    });
  } catch (error) {
    console.error("Error executing code:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to execute code",
      },
      { status: 500 }
    );
  }
} 