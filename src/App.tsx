import React from 'react';
import {
    BrowserRouter as Router,
    Routes,Route
} from "react-router-dom";
import HomePage from './components/HomePage';
import Header from './components/Header';
import Introduction from './components/Introduction';




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
          <Route path='/projects' element={<div>Projects</div>}/>
          <Route path='/skills' element={<div>Skills</div>}/>
          <Route path='/education' element={<div>Education</div>}/>
          <Route path='/internships' element={<div>Internships & Certifications</div>}/>
          <Route path='/codingProfiles' element={<div>Coding Profiles</div>}/>
          <Route path='/contact' element={<div>Contact</div>}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
