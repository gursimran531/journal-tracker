import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/Card.js"; // Corrected import path
import { Button } from "./components/ui/Button.js"; // Corrected import path
import { Textarea } from "./components/ui/Textarea.js"; // Corrected import path
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./components/ui/Select.js"; // Corrected import path
import { motion } from "framer-motion";

const moods = [
  { label: "😃 Happy", value: "happy" },
  { label: "😐 Neutral", value: "neutral" },
  { label: "😔 Sad", value: "sad" },
  { label: "😡 Angry", value: "angry" },
  { label: "😴 Tired", value: "tired" }
];

export default function JournalMoodTracker() {
  const [entries, setEntries] = useState([]);
  const [mood, setMood] = useState("happy");
  const [journalText, setJournalText] = useState("");

  const handleSaveEntry = () => {
    if (!journalText.trim()) return;
    setEntries([...entries, { mood, text: journalText, date: new Date().toLocaleDateString() }]);
    setJournalText("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-blue-400 flex flex-col items-center p-6">
      <motion.h1 className="text-4xl font-bold text-white mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        📖 Personal Journal & Mood Tracker
      </motion.h1>
      
      <Card className="w-full max-w-2xl p-4 bg-white shadow-xl rounded-lg">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">How are you feeling today? 😊</h2>
          <Select value={mood} onValueChange={setMood}>
            <SelectTrigger className="w-full mb-4">
              <SelectValue placeholder="Select Mood" />
            </SelectTrigger>
            <SelectContent>
              {moods.map((m) => (
                <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Textarea
            className="w-full p-2 border rounded-lg"
            placeholder="Write your journal entry here... ✍️"
            value={journalText}
            onChange={(e) => setJournalText(e.target.value)}
          />
          
          <Button onClick={handleSaveEntry} className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700">
            Save Entry 📝
          </Button>
        </CardContent>
      </Card>

      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-white">Previous Entries 📅</h2>
        {entries.length === 0 ? (
          <p className="text-white mt-2">No entries yet. Start journaling! ✨</p>
        ) : (
          entries.map((entry, index) => (
            <Card key={index} className="mt-3 p-4 bg-white shadow-md rounded-lg">
              <CardContent>
                <p className="text-lg">{moods.find(m => m.value === entry.mood)?.label}</p>
                <p className="text-gray-600 mt-1">{entry.date}</p>
                <p className="mt-2">{entry.text}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
