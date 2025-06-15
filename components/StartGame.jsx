

const StartGame = ({toggle}) => {
  return (
    <div className="flex flex-row w-[1182px] h-[522px] mt-[180px] ml-[129px] gap-[5px]">
  {/* Left: Dice Image */}
  <div className="w-[649px] h-[522px]">
    <img src="/Game Page/dice.png" alt="dice image" className="w-full h-full object-contain" />
  </div>

  {/* Right: Text + Button */}
  <div className="flex flex-col w-[528px] h-[188px] justify-start">
    <h1 className="w-[528px] h-[144px] font-poppins font-[700] text-[96px] leading-[100%] tracking-[0%]">
      Dice Game
    </h1>
    <button 
    onClick={toggle}
    className="w-[220px] h-[44px] px-[18px] py-[10px] rounded-[5px] bg-blue-600 text-white font-semibold transition-colors duration-[2000ms] hover:bg-black">
  Start Game
</button>


  </div>
</div>

  )
}

export default StartGame