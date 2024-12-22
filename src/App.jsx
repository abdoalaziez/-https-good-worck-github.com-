import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(""); // Input for the calculator
  const [result, setResult] = useState(null); // Result of the calculation

  // Function to handle input changes
  const handleInput = (value) => setInput((prev) => prev + value);

  // Function to clear the input and result
  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  // Function to evaluate the expression
  const calculateResult = () => {
    try {
      const evalResult = eval(input); // Use a safe parser for production; eval has risks!
      setResult(evalResult); // Set the result separately
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-lg p-8 w-80">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Calculator</h1>

        {/* Input Field */}
        <div className="w-full border border-gray-300 rounded shadow-sm bg-gray-100 p-4 text-right">
          <div className="text-xl">{input || "0"}</div>
          {result !== null && (
            <div className="text-2xl font-bold text-green-600 mt-2">
              = {result}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          {["7", "8", "9", "/"].map((value) => (
            <button
              key={value}
              onClick={() => handleInput(value)}
              className="bg-gray-300 text-xl font-bold p-4 rounded shadow hover:bg-gray-400"
            >
              {value}
            </button>
          ))}
          {["4", "5", "6", "*"].map((value) => (
            <button
              key={value}
              onClick={() => handleInput(value)}
              className="bg-gray-300 text-xl font-bold p-4 rounded shadow hover:bg-gray-400"
            >
              {value}
            </button>
          ))}
          {["1", "2", "3", "-"].map((value) => (
            <button
              key={value}
              onClick={() => handleInput(value)}
              className="bg-gray-300 text-xl font-bold p-4 rounded shadow hover:bg-gray-400"
            >
              {value}
            </button>
          ))}
          {["C", "0", "=", "+"].map((value) => (
            <button
              key={value}
              onClick={
                value === "C"
                  ? handleClear
                  : value === "="
                  ? calculateResult
                  : () => handleInput(value)
              }
              className={`${
                value === "C"
                  ? "bg-red-400"
                  : value === "="
                   ? "bg-green-400"
                  : "bg-gray-300"
              } text-xl font-bold p-4 rounded shadow hover:opacity-80`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
