// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Calculator = () => {
//   const [input, setInput] = useState(""); // Input for the calculator
//   const [result, setResult] = useState(null); // Result of calculation
//   const navigate = useNavigate();

//   // Function to handle input changes
//   const handleInput = (value) => {
//     setInput((prev) => prev + value);
//   };

//   // Function to clear the input and result
//   const handleClear = () => {
//     setInput("");
//     setResult(null);
//   };

//   // Function to evaluate the expression
//   const calculateResult = () => {
//     try {
//       setResult(eval(input)); // Use a safe parser for production; eval has risks!
//     } catch {
//       setResult("Error");
//     }
//   };

//   // Navigate to another page when a result is calculated
//   useEffect(() => {
//     if (result !== null) {
//       console.log("Navigating to result page...");
//       // Example: Navigate to a result page with the calculated result
//       navigate(`/result/${result}`);
//     }
//   }, [result, navigate]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Simple Calculator</h1>
//       <input
//         type="text"
//         value={input}
//         readOnly
//         placeholder="Enter calculation"
//         style={{ width: "200px", padding: "10px", fontSize: "18px" }}
//       />
//       <div style={{ marginTop: "20px" }}>
//         <button onClick={() => handleInput("1")}>1</button>
//         <button onClick={() => handleInput("2")}>2</button>
//         <button onClick={() => handleInput("3")}>3</button>
//         <button onClick={() => handleInput("+")}>+</button>
//       </div>
//       <div>
//         <button onClick={() => handleInput("4")}>4</button>
//         <button onClick={() => handleInput("5")}>5</button>
//         <button onClick={() => handleInput("6")}>6</button>
//         <button onClick={() => handleInput("-")}>-</button>
//       </div>
//       <div>
//         <button onClick={() => handleInput("7")}>7</button>
//         <button onClick={() => handleInput("8")}>8</button>
//         <button onClick={() => handleInput("9")}>9</button>
//         <button onClick={() => handleInput("*")}>*</button>
//       </div>
//       <div>
//         <button onClick={() => handleInput("0")}>0</button>
//         <button onClick={() => handleInput("/")}>/</button>
//         <button onClick={calculateResult}>=</button>
//         <button onClick={handleClear}>C</button>
//       </div>
//       {result !== null && <h2>Result: {result}</h2>}
//     </div>
//   );
// };

// export default Calculator;
