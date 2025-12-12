import { useEffect, useState } from "react";
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import QuestionCard from "./QuestionCard";
import Timer from "./Timer";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function load() {
      const snap = await getDocs(collection(db, "quiz"));
      let arr = [];
      snap.forEach(doc => arr.push(doc.data()));
      setQuestions(arr);
    }
    load();
  }, []);

  const handleAnswer = (selected) => {
    if (selected === questions[idx].answer) {
      setScore(s => s + 1);
    }

    if (idx + 1 < questions.length) {
      setIdx(i => i + 1);
    } else {
      setFinished(true);
    }
  };

  const saveScore = async () => {
    await addDoc(collection(db, "leaderboard"), {
      username,
      score,
      total: questions.length,
      timestamp: Timestamp.now(),
    });
    alert("Score saved!");
  };

  if (!questions.length) return <p className="p-4">Loading questions...</p>;

  if (finished)
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold">Quiz Completed!</h2>
        <p className="mt-2">Your score: {score}</p>

        <input
          type="text"
          placeholder="Enter your name"
          className="border p-2 mt-4"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={saveScore}
          className="block mt-4 px-4 py-2 bg-green-600 text-white rounded"
        >
          Save Score
        </button>
      </div>
    );

  return (
    <div className="p-4">
      <Timer duration={30} onFinish={() => setFinished(true)} />

      <QuestionCard q={questions[idx]} onAnswer={handleAnswer} />
    </div>
  );
}
