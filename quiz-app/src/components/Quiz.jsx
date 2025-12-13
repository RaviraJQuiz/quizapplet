import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

useEffect(() => {
  const loadQuestions = async () => {
    try {
      const snapshot = await getDocs(collection(db, "questions"));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  loadQuestions();
}, []);
