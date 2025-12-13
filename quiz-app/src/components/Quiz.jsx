import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const snapshot = await getDocs(collection(db, "questions-test"));
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuestions(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) return <p>Loading questions...</p>;

  return <div>{questions.length} questions loaded</div>;
};

export default Quiz;
const fetchQuestions = async () => {
  const ref = collection(db, "questions-test");
  const snapshot = await getDocs(ref);

  console.log("Firestore snapshot:", snapshot);
  console.log("Docs size:", snapshot.size);

  snapshot.forEach(doc => {
    console.log("DOC:", doc.id, doc.data());
  });

  setQuestions(snapshot.docs.map(d => d.data()));
};

