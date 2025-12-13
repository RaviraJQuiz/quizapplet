import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const q = query(
        collection(db, "leaderboard"),
        orderBy("score", "desc"),
        limit(10)
      );

      const snapshot = await getDocs(q);
      setScores(snapshot.docs.map(doc => doc.data()));
    };

    fetchScores();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Leaderboard</h2>

      {scores.map((s, i) => (
        <div key={i} className="border-b py-2">
          {i + 1}. {s.name} — {s.score}/{s.total}
        </div>
      ))}
    </div>
  );
}
