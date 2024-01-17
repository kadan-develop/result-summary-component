import ResultComp from "./ResultComp.jsx";
import Button from "./Button.jsx";

function Summary({ data }) {
  return (
    <div className="summary-container flex flex-col mx-8 mt-8 ">
      <h1 className="text-[#303b5a] text-[22px] font-bold mb-2">Summary</h1>
      {data.map((data) => {
        return (
          <ResultComp
            key={data.id}
            category={data.category}
            score={data.score}
            icon={data.icon}
            textColor={data.textColor}
            bgColor={data.bgColor}
          />
        );
      })}
      <Button />
    </div>
  );
}

export default Summary;
