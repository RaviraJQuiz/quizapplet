import { useState } from "react";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import Leaderboard from "./components/Leaderboard";

export default function App() {
  const [view, setView] = useState("quiz");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setView={setView} />

      {view === "quiz" ? (
        <Quiz />
      ) : (
        <Leaderboard />
      )}
    </div>
  );
}
