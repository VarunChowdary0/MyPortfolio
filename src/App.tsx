import React from 'react';
import {
    BrowserRouter as Router,
    Routes,Route
} from "react-router-dom";
import HomePage from './components/HomePage';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import InternShipsAndCertifs from './components/InternShipsAndCertifs';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';




const App:React.FC = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/boil' element={
          <div className=' h-screen w-screen flex items-center
          flex-col text-white bg-black pt-[35vh]'>
            <div className=' flex items-start gap-2 flex-col'>
              <div className='  text-4xl w-[250px]'>
                My Custom Boiler Project.
              </div>
              <div className=' flex gap-2'>
                <span className=' text-sky-400'>React</span>
                +
                <span className=' text-orange-600'>Typescript</span>
                +
                <span className=' text-teal-400'>React-Router</span>
                +
                <span className=' text-violet-400'>TailwindCss</span>
              </div>
            </div>
          </div>
        }
        />
        <Route path='/' element={<HomePage/>}>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/internships' element={<InternShipsAndCertifs/>}/>
          <Route path='/codingProfiles' element={<CodingProfiles/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
