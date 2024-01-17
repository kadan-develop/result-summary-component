function ResultComp({ category, score, icon, bgColor, textColor }) {
  return (
    <div
      className="result-container flex justify-between w-[270px] h-[50px] rounded-[10px] text-center items-center mt-4"
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      <div className="name-result flex space-x-3">
        <img className="ml-4" src={icon} alt="icon" />
        <h1 className="text-base font-medium">{category}</h1>
      </div>
      <div className="result-numbers flex mr-5">
        <p className=" pr-2 text-[18px] font-bold text-[#303b5a]">{score} </p>
        <p className=" text-[hsla(224,_30%,_27%,_50%)] font-bold">/ 100</p>
      </div>
    </div>
  );
}

export default ResultComp;
