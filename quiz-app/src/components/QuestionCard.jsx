export default function QuestionCard({ q, onAnswer }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">{q.question}</h2>

      <div className="flex flex-col gap-2">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onAnswer(opt)}
            className="p-3 bg-blue-100 hover:bg-blue-200 rounded"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
