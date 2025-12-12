export default function Navbar({ setView }) {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold">Quiz App</h1>

      <div className="flex gap-4">
        <button
          onClick={() => setView("quiz")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Quiz
        </button>

        <button
          onClick={() => setView("leaderboard")}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Leaderboard
        </button>
      </div>
    </nav>
  );
}
