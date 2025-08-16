import { useState } from "react";

import Header from "./components/Header.jsx"
import Landing from "./components/Landing.jsx"


function App() {
  
const [isHidden, setIsHidden] = useState(false);

const hiddingFn = (label)=>{
  console.log(`${label} clicked`)
setIsHidden(true);
}

  return (
    <>
      <div className="bg-gray-100 h-[calc(98vh-5rem)] rounded-b-[30px] mx-auto w-[90%] mt-10">
        <h1 className="text-4xl text-center font-bold shadow-xl h-20">My CV</h1>
        <div className="flex lg:flex-row">
          <Header hiddingFn={hiddingFn}/>
          {!isHidden && <Landing/>}
        </div>
      </div>
    </>
  )
}

export default App
