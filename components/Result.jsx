function Result() {
  return (
    <div className="main-container rounded-[30px] ">
      <div className="container-result flex flex-col gap-3 mt-9  justify-center items-center text-center m-7">
        <h1 className="text-[22px] text-[hsl(241,_100%,_89%);] font-bold mb-3">
          Your Result
        </h1>
        <div
          className="final-result w-[180px] h-[180px] flex flex-col justify-center 
         text-center items-center rounded-full mb-6 mt-1"
        >
          <h1 className="text-[65px] font-extrabold">76</h1>
          <p className="text-[17px] font-bold text-[hsla(241,_100%,_89%,_70%)]">
            of 100
          </p>
        </div>
        <h2 className="text-3xl font-bold">Great</h2>
        <p className="w-[80%] text-base font-medium text-[hsl(241,_100%,_89%)]  mt-1">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}

export default Result;
