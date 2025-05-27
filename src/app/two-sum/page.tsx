"use client";
import { useState } from "react";
import { twoSum } from "@/utils/twoSum";
import Navbar from "@/components/navbar";

export default function TwoSumPage() {
  const [numbers, setNumbers] = useState<string>("");
  const [target, setTarget] = useState<string>("");
  const [result, setResult] = useState<number[] | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = () => {
    try {
      // Validate numbers input first
      if (!numbers) {
        setError("Sorted numbers are required");
        return;
      }

      // Validate target number
      if (!target) {
        setError("Target number is required");
        return;
      }

      const targetNum = Number(target);
      if (isNaN(targetNum)) {
        setError("Please enter a valid target number");
        return;
      }

      // Convert and validate numbers array
      const numberArray = numbers
        .split(",")
        .map((num) => Number(num.trim()))
        .filter((num) => !isNaN(num));

      // Validate array length
      if (numberArray.length < 2) {
        setError("Please enter at least 2 numbers");
        return;
      }

      // Validate if array is sorted
      for (let i = 1; i < numberArray.length; i++) {
        if (numberArray[i] < numberArray[i - 1]) {
          setError("Array must be sorted in non-decreasing order");
          return;
        }
      }

      const solution = twoSum(numberArray, targetNum);
      if (solution.length === 0) {
        setError("No solution found");
      } else {
        setError("");
        setResult(solution);
      }
    } catch (error) {
      setError("An error occurred");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <main className="flex flex-col items-center gap-6 w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Two Sum II - Sorted Array
          </h1>

          <div className="w-full space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Enter sorted numbers (comma-separated):{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={numbers}
                onChange={(e) => setNumbers(e.target.value)}
                placeholder="e.g., 2, 7, 11, 15"
                required
                className="w-full p-3 border rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Target Sum: <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder="Enter target number"
                required
                className="w-full p-3 border rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-500 text-white p-3 rounded-lg text-lg cursor-pointer hover:bg-blue-600 transition-colors"
            >
              Find Indices
            </button>

            {error && (
              <div className="p-4 bg-red-100 text-red-700 rounded-lg border border-red-400 shadow-lg">
                <p className="font-medium">{error}</p>
              </div>
            )}

            {result && !error && (
              <div className="p-4 bg-emerald-100 text-emerald-800 rounded-lg border border-emerald-400 shadow-lg">
                <h3 className="font-semibold mb-2">Solution Found:</h3>
                <p className="font-medium">Indices : [{result.join(", ")}]</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
