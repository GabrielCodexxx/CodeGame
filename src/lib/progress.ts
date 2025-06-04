export interface Progress {
  completedProblems: number[];
  attemptedProblems: number[];
}

const STORAGE_KEY = 'mini-coding-game-progress';

export function getProgress(): Progress {
  if (typeof window === 'undefined') {
    return { completedProblems: [], attemptedProblems: [] };
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return { completedProblems: [], attemptedProblems: [] };
  }

  try {
    return JSON.parse(stored);
  } catch {
    return { completedProblems: [], attemptedProblems: [] };
  }
}

export function saveProgress(progress: Progress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markProblemAttempted(problemId: number): void {
  const progress = getProgress();
  if (!progress.attemptedProblems.includes(problemId)) {
    progress.attemptedProblems.push(problemId);
    saveProgress(progress);
  }
}

export function markProblemCompleted(problemId: number): void {
  const progress = getProgress();
  if (!progress.completedProblems.includes(problemId)) {
    progress.completedProblems.push(problemId);
    progress.attemptedProblems = progress.attemptedProblems.filter(
      (id) => id !== problemId
    );
    saveProgress(progress);
  }
}

export function isProblemCompleted(problemId: number): boolean {
  const progress = getProgress();
  return progress.completedProblems.includes(problemId);
}

export function isProblemAttempted(problemId: number): boolean {
  const progress = getProgress();
  return progress.attemptedProblems.includes(problemId);
}

export function clearProgress(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
} 