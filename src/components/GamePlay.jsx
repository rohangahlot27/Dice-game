import React, { useState } from 'react';
import TotalScore from '../components/TotalScore';
import NumberSelector from '../components/NumberSelector';
import RoleDice from '../components/RoleDice';
const GamePlay = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [message, setMessage] = useState("");

  const handleDiceRoll = (value) => {
    setDiceValue(value);

    if (selectedNumber === null) {
      setMessage("❗ Please select a number before rolling the dice.");
      return;
    }

    if (value === selectedNumber) {
      setScore((prev) => prev + value);
      setMessage(`✅ Correct! You gained ${value} points.`);
    } else {
      setScore((prev) => prev - value);
      setMessage(`❌ Wrong! You lost ${value} points.`);
    }
  };

  const handleReset = () => {
    setScore(0);
    setSelectedNumber(null);
    setMessage("");
    setDiceValue(1);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-[1280px] flex flex-col items-center gap-[40px]">
        {/* Score and Number Selector */}
        <div className="w-full flex items-center justify-between">
          <TotalScore score={score} />
          <NumberSelector
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>

        {/* Dice and message */}
        <RoleDice onDiceRoll={handleDiceRoll} message={message} />

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all font-semibold"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default GamePlay;

