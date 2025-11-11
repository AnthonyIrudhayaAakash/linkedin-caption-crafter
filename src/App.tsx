import { useState } from "react";
import "./index.css"; // make sure Tailwind directives are in this file

function App() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 text-gray-800 px-4 py-10">
      {/* Header Section */}
      <header className="w-full max-w-2xl text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          LinkedIn Caption Crafter ✨
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Transform your raw ideas into polished LinkedIn posts — powered by AI.
        </p>
      </header>

      {/* Input Section */}
      <main className="w-full max-w-2xl">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write your post idea here..."
          rows={5}
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none shadow-sm"
        />

        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500">
            Enter a short idea, thought, or topic you want to post about.
          </p>
          <button
            disabled={!prompt.trim()}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              prompt.trim()
                ? "bg-primary text-white hover:bg-accent"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Generate Caption
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-xs text-gray-500">
        © {new Date().getFullYear()} LinkedIn Caption Crafter — Built by Anthony ⚡
      </footer>
    </div>
  );
}

export default App;
