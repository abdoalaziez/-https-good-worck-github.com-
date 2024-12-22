// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const History = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const history = location.state?.history || [];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-80">
//         <h2 className="text-lg font-semibold mb-4">Calculation History</h2>
//         <ul className="list-disc list-inside text-gray-700">
//           {history.map((entry, index) => (
//             <li key={index}>{entry}</li>
//           ))}
//         </ul>
//         <button
//           onClick={() => navigate("/")}
//           className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white text-lg p-3 rounded"
//         >
//           Back to Calculator
//         </button>
//       </div>
//     </div>
//   );
// };

// export default History;
