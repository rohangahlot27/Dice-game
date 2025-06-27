import React, { useState } from 'react';

const RoleDice = ({ onDiceRoll, message }) => {
  const [currentDice, setCurrentDice] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    const newDice = Math.floor(Math.random() * 6) + 1;
    setTimeout(() => {
      setCurrentDice(newDice);
      onDiceRoll(newDice);
      setIsRolling(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Dice Image */}
      <div className="w-[150px] h-[150px]">
        <img
          src={`/dice${currentDice}.png`}
          alt={`Dice ${currentDice}`}
          className="w-full h-full object-contain cursor-pointer"
          onClick={rollDice}
        />
      </div>

      {/* Roll Dice Button */}
      <button
        onClick={rollDice}
        disabled={isRolling}
        className={`mt-4 px-6 py-2 rounded-xl text-white text-lg font-semibold transition-all duration-200 ${
          isRolling ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isRolling ? 'Rolling...' : 'Roll Dice'}
      </button>

      {/* Feedback Message */}
      {message && (
        <p
          className={`mt-4 text-sm font-medium ${
            message.includes('Correct')
              ? 'text-green-600'
              : message.includes('Wrong')
              ? 'text-red-600'
              : 'text-yellow-600'
          }`}
        >
          {message}
        </p>
      )}

      {/* Show Rules Button */}
      <button
        onClick={() => setShowRules(!showRules)}
        className="mt-4 w-[220px] h-[44px] rounded-[5px] px-[18px] py-[10px] bg-black text-white text-sm font-medium hover:opacity-80 transition-all"
      >
        {showRules ? 'Hide Rules' : 'Show Rules'}
      </button>

      {/* Rules Box */}
      {showRules && (
        <div className="mt-4 w-[90%] max-w-md bg-yellow-100 text-gray-800 p-4 rounded-md text-sm shadow-md border border-yellow-400">
          <h2 className="text-lg font-bold mb-2">How to Play Dice Game</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Select any number</li>
            <li>Click on the dice image</li>
            <li>If your selected number matches the dice number, you gain points equal to that number</li>
            <li>If it doesn't match, you lose points equal to the dice number</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoleDice;



