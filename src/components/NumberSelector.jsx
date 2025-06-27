import React from 'react';

const NumberSelector = ({ selectedNumber, setSelectedNumber }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5, 6].map((number) => {
          const isSelected = number === selectedNumber;
          return (
            <div
              key={number}
              onClick={() => setSelectedNumber(number)}
              className={`w-[72px] h-[72px] border border-black flex items-center justify-center font-poppins text-[24px] cursor-pointer transition-all duration-300
                ${isSelected ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
              {number}
            </div>
          );
        })}
      </div>

      <p className="w-[182px] h-[36px] font-poppins font-bold text-[24px] leading-[100%] tracking-[0%] mt-2">
        Select number
      </p>
    </div>
  );
};

export default NumberSelector;

