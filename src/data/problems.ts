export type Language = "python";
export type Difficulty = "easy" | "medium" | "hard";

export interface Problem {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  language: Language;
  starterCode: string;
  testCases: {
    input: string;
    output: string;
  }[];
}

export const problems: Problem[] = [
  {
    id: 1,
    title: "Sum of Two Numbers",
    description: "Write a function that takes two numbers as input and returns their sum.",
    difficulty: "easy",
    language: "python",
    starterCode: `def sum_two_numbers(a, b):
    # Write your code here
    pass`,
    testCases: [
      {
        input: "a = 1, b = 2",
        output: "3",
      },
      {
        input: "a = -1, b = 1",
        output: "0",
      },
      {
        input: "a = 0, b = 0",
        output: "0",
      },
    ],
  },
  {
    id: 2,
    title: "Find Maximum",
    description: "Write a function that takes a list of numbers and returns the maximum value.",
    difficulty: "easy",
    language: "python",
    starterCode: `def find_maximum(numbers):
    # Write your code here
    pass`,
    testCases: [
      {
        input: "numbers = [1, 2, 3, 4, 5]",
        output: "5",
      },
      {
        input: "numbers = [-1, -2, -3]",
        output: "-1",
      },
      {
        input: "numbers = [0]",
        output: "0",
      },
    ],
  },
  {
    id: 3,
    title: "Reverse String",
    description: "Write a function that takes a string and returns it reversed.",
    difficulty: "easy",
    language: "python",
    starterCode: `def reverse_string(s):
    # Write your code here
    pass`,
    testCases: [
      {
        input: 's = "hello"',
        output: '"olleh"',
      },
      {
        input: 's = ""',
        output: '""',
      },
      {
        input: 's = "a"',
        output: '"a"',
      },
    ],
  },
  {
    id: 4,
    title: "Binary Search",
    description: "Implement binary search to find a target value in a sorted array.",
    difficulty: "medium",
    language: "python",
    starterCode: `def binary_search(arr, target):
    # Write your code here
    pass`,
    testCases: [
      {
        input: "arr = [1, 2, 3, 4, 5], target = 3",
        output: "2",
      },
      {
        input: "arr = [1, 2, 3, 4, 5], target = 6",
        output: "-1",
      },
      {
        input: "arr = [], target = 1",
        output: "-1",
      },
    ],
  },
  {
    id: 5,
    title: "Valid Parentheses",
    description: "Write a function that checks if a string of parentheses is valid.",
    difficulty: "medium",
    language: "python",
    starterCode: `def is_valid_parentheses(s):
    # Write your code here
    pass`,
    testCases: [
      {
        input: 's = "()"',
        output: "True",
      },
      {
        input: 's = "()[]{}"',
        output: "True",
      },
      {
        input: 's = "(]"',
        output: "False",
      },
    ],
  },
  {
    id: 6,
    title: "Longest Substring Without Repeating Characters",
    description: "Find the length of the longest substring without repeating characters.",
    difficulty: "hard",
    language: "python",
    starterCode: `def length_of_longest_substring(s):
    # Write your code here
    pass`,
    testCases: [
      {
        input: 's = "abcabcbb"',
        output: "3",
      },
      {
        input: 's = "bbbbb"',
        output: "1",
      },
      {
        input: 's = "pwwkew"',
        output: "3",
      },
    ],
  },
  {
    id: 7,
    title: "Two Sum",
    description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
    difficulty: "easy",
    language: "python",
    starterCode: `def two_sum(nums, target):\n    # Write your code here\n    pass`,
    testCases: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
  },
  {
    id: 8,
    title: "Contains Duplicate",
    description: "Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",
    difficulty: "easy",
    language: "python",
    starterCode: `def contains_duplicate(nums):\n    # Write your code here\n    pass`,
    testCases: [
      {
        input: "nums = [1,2,3,1]",
        output: "True",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "False",
      },
      {
        input: "nums = [1,1,1,3,3,4,3,2,4,2]",
        output: "True",
      },
    ],
  },
  {
    id: 9,
    title: "Implement Queue using Stacks",
    description: "Implement a first in, first out (FIFO) queue using only two stacks.",
    difficulty: "medium",
    language: "python",
    starterCode: `class MyQueue:\n    def __init__(self):\n        # Write your code here\n        pass\n\n    def push(self, x: int) -> None:\n        # Write your code here\n        pass\n\n    def pop(self) -> int:\n        # Write your code here\n        pass\n\n    def peek(self) -> int:\n        # Write your code here\n        pass\n\n    def empty(self) -> bool:\n        # Write your code here\n        pass`,
    testCases: [
      {
        input: "commands = [\"MyQueue\", \"push\", \"push\", \"peek\", \"pop\", \"empty\"]\nvalues = [[], [1], [2], [], [], []]",
        output: "[None, None, None, 1, 1, False]",
      },
    ],
  },
  {
    id: 10,
    title: "Validate Binary Search Tree",
    description: "Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).",
    difficulty: "hard",
    language: "python",
    starterCode: `class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef is_valid_bst(root):\n    # Write your code here\n    pass`,
    testCases: [
      {
        input: "root = [2,1,3]",
        output: "True",
      },
      {
        input: "root = [5,1,4,None,None,3,6]",
        output: "False",
      },
    ],
  },
  {
    id: 11,
    title: "Longest Common Prefix",
    description: "Write a function to find the longest common prefix string amongst an array of strings.",
    difficulty: "easy",
    language: "python",
    starterCode: `def longest_common_prefix(strs):\n    # Write your code here\n    pass`,
    testCases: [
      {
        input: "strs = [\"flower\",\"flow\",\"flight\"]",
        output: "\"fl\"",
      },
      {
        input: "strs = [\"dog\",\"racecar\",\"car\"]",
        output: "\"\"",
      },
    ],
  },
  {
    id: 12,
    title: "3Sum",
    description: "Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.",
    difficulty: "medium",
    language: "python",
    starterCode: `def three_sum(nums):\n    # Write your code here\n    pass`,
    testCases: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
      },
      {
        input: "nums = [0,0,0]",
        output: "[0,0,0]",
      },
    ],
  },
  {
    id: 13,
    title: "Merge Intervals",
    description: "Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    difficulty: "medium",
    language: "python",
    starterCode: `def merge_intervals(intervals):\n    # Write your code here\n    pass`,
    testCases: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
      {
        input: "intervals = [[1,4],[4,5]]",
        output: "[[1,5]]",
      },
    ],
  },
  {
    id: 14,
    title: "Maximum Subarray",
    description: "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
    difficulty: "medium",
    language: "python",
    starterCode: `def max_subarray(nums):\n    # Write your code here\n    pass`,
    testCases: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
      },
      {
        input: "nums = [1]",
        output: "1",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
      },
    ],
  },
  {
    id: 15,
    title: "Trapping Rain Water",
    description: "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    difficulty: "hard",
    language: "python",
    starterCode: `def trap(height):\n    # Write your code here\n    pass`,
    testCases: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9",
      },
    ],
  },
  {
    id: 16,
    title: "Longest Increasing Subsequence",
    description: "Given an integer array `nums`, return the length of the longest strictly increasing subsequence.",
    difficulty: "hard",
    language: "python",
    starterCode: `def length_of_lis(nums):\n    # Write your code here\n    pass`,
    testCases: [
      {
        input: "nums = [10,9,2,5,3,7,101,18]",
        output: "4",
      },
      {
        input: "nums = [0,1,0,3,2,3]",
        output: "4",
      },
      {
        input: "nums = [7,7,7,7,7,7,7]",
        output: "1",
      },
    ],
  },
];

export const getProblemById = (id: number): Problem | undefined => {
  return problems.find(problem => problem.id === id);
};

export const getProblemsByDifficulty = (difficulty: Difficulty): Problem[] => {
  return problems.filter(problem => problem.difficulty === difficulty);
}; 