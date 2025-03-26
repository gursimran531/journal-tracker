import React, { useState } from 'react';

const moods = [
  { label: '😃 Happy', value: 'happy' },
  { label: '😐 Neutral', value: 'neutral' },
  { label: '😔 Sad', value: 'sad' },
  { label: '😡 Angry', value: 'angry' },
  { label: '😴 Tired', value: 'tired' },
];

function App() {
  const [entries, setEntries] = useState([]);
  const [mood, setMood] = useState('happy');
  const [journalText, setJournalText] = useState('');

  const handleSaveEntry = () => {
    if (!journalText.trim()) return;
    setEntries([
      ...entries,
      { mood, text: journalText, date: new Date().toLocaleDateString() },
    ]);
    setJournalText('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-blue-400 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-white mb-4">📖 Personal Journal & Mood Tracker</h1>

      <div className="w-full max-w-2xl p-4 bg-white shadow-xl rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">How are you feeling today? 😊</h2>
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4"
        >
          {moods.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>

        <textarea
          className="w-full p-2 border rounded-lg mb-4"
          placeholder="Write your journal entry here... ✍️"
          value={journalText}
          onChange={(e) => setJournalText(e.target.value)}
        />

        <button
          onClick={handleSaveEntry}
          className="w-full bg-blue-600 text-white hover:bg-blue-700 p-2 rounded-lg"
        >
          Save Entry 📝
        </button>
      </div>

      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-white">Previous Entries 📅</h2>
        {entries.length === 0 ? (
          <p className="text-white mt-2">No entries yet. Start journaling! ✨</p>
        ) : (
          entries.map((entry, index) => (
            <div key={index} className="mt-3 p-4 bg-white shadow-md rounded-lg">
              <p className="text-lg">{moods.find((m) => m.value === entry.mood)?.label}</p>
              <p className="text-gray-600 mt-1">{entry.date}</p>
              <p className="mt-2">{entry.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
