import React, { useState } from "react";
import EventRegistrationForm from "./components/EventRegistrationForm";
import JobApplicationForm from "./components/JobApplicationForm";
import SurveyForm from "./components/SurveyForm";

const assignments = [
  <EventRegistrationForm />,
  <JobApplicationForm />,
  <SurveyForm />,
];

function App() {
  const [level, setLevel] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-around text-lg">
          <button
            className={`px-4 py-2 rounded-md ${level === 0 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} hover:bg-blue-500 hover:text-white transition duration-300`}
            onClick={() => setLevel(0)}
          >
            Level 1
          </button>
          <button
            className={`px-4 py-2 rounded-md ${level === 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} hover:bg-blue-500 hover:text-white transition duration-300`}
            onClick={() => setLevel(1)}
          >
            Level 2
          </button>
          <button
            className={`px-4 py-2 rounded-md ${level === 2 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} hover:bg-blue-500 hover:text-white transition duration-300`}
            onClick={() => setLevel(2)}
          >
            Level 3
          </button>
        </div>
      </header>

      <main >
        {assignments[level]}
      </main>
    </div>
  );
}

export default App;
