import React from "react";


function LandingPage() {
  return (
    <div className="w-full h-screen pt-1">
      <div className="textstructure mt-40 px-8">
        {["We Create", "Eye Opening", "Presentations"].map((item) => {
          return (
            <>
              <div className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                  {index === 1 && (
                    <div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-green-500"></div>
                  )}
                </div>
                <h1 className='uppercase text-[7vw] leading-[6vw] text-wrap tracking-tighter font-semibold leading-none font-["Founders_Grotesk_X-Condensed"] '>
                  {item}
                </h1>
              </div>
            </>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-400 mt-28 flex justify-between items-center py-5 px-20">
        {[
          "For Public and private Companies",
          "From the first pitch to IPO",
        ].map((item) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start">
          <div className="px-4 py-2 border-2 font-light border-zinc-400 capitalize rounded-full">Start the project</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
