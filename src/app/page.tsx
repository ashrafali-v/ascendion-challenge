"use client";
import { useState } from "react";

export default function Home() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [total, setTotal] = useState<number | null>(null);

  const addNumbers = () => {
    const sum = Number(firstNumber) + Number(secondNumber);
    setTotal(sum);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <main className="flex flex-col items-center gap-6 w-full max-w-md">
          <h1 className="text-4xl font-bold mb-8">Adding Two Numbers</h1>

          <input
            type="number"
            placeholder="First Number"
            value={firstNumber}
            onChange={(e) => setFirstNumber(e.target.value)}
            className="w-full p-3 border rounded-lg text-lg"
          />

          <input
            type="number"
            placeholder="Second Number"
            value={secondNumber}
            onChange={(e) => setSecondNumber(e.target.value)}
            className="w-full p-3 border rounded-lg text-lg"
          />

          <button
            onClick={addNumbers}
            className="w-full bg-blue-500 text-white p-3 rounded-lg text-lg hover:bg-blue-600 transition-colors"
          >
            Add Two Numbers
          </button>

          <div className="mt-4 text-xl">
            <span>Total: {total !== null ? total : ""}</span>
          </div>
        </main>
      </div>
    </div>
  );
}
