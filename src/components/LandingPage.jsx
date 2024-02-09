import React from "react";

function LandingPage() {
  return (
    <div className="w-full h-screen pt-1">
      <div className="textstructure mt-40 px-8">
        {["We Create", "Eye Opening", "Presentations"].map((item) => {
          return (
            <>
            <div className="masker">
              <h1 className='uppercase text-[7vw] leading-[6vw] text-wrap tracking-tighter font-semibold leading-none font-["Founders_Grotesk"] '>
                {item}
              </h1>
            </div>
            </>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-400 mt-28">

      </div>
    </div>
  );
}

export default LandingPage;
