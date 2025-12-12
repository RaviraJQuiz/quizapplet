import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function load() {
      const q = query(
        collection(db, "leaderboard"),
        orderBy("score", "desc")
      );
      const snap = await getDocs(q);

      let arr = [];
      snap.forEach(doc => arr.push(doc.data()));
      setScores(arr);
    }
    load();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>

      {scores.map((s, i) => (
        <div key={i} className="bg-white p-3 rounded shadow mb-2">
          <p>
            <strong>{s.username}</strong>: {s.score}/{s.total}
          </p>
        </div>
      ))}
    </div>
  );
}
