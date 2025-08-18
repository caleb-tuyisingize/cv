import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header.jsx"
import Landing from "./components/Landing.jsx"
import Experience from "./pages/Experience.jsx";
import ErrorBoundary from "./components/Bound.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Education from "./pages/Education.jsx";

function App() {
  
const [isHidden, setIsHidden] = useState(false);

const hiddingFn = (label)=>{
  console.log(`${label} clicked`)
setIsHidden(true);
}

  return (
    <>
          <BrowserRouter>
      <div className="bg-gray-100 h-[calc(98vh-5rem)] rounded-b-[30px]  lg:rounded-tl-[20px]  lg:rounded-tr-[20px] mx-auto w-[90%] mt-10">
        <h1 className="text-4xl text-center font-bold shadow-xl  lg:rounded-tl-[20px]  lg:rounded-tr-[20px] dark:bg-gray-800 dark:text-gray-100 lg:text-[18px] lg:underline dark:pt-2 h-20">My CV</h1>
        <div className="flex lg:block">
          <ErrorBoundary>
          <Header hiddingFn={hiddingFn}/>
          </ErrorBoundary>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/Experience" element={<Experience />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Education" element={<Education />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
             
            </Routes>
        </div>
      </div>
          </BrowserRouter>
    </>
  )
}

export default App
