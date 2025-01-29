import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '../icons/MenuIcon';
import ArrowIcon from '../icons/ArrowIcon';

const Header:React.FC = () => {
    const location = useLocation();

    const [show,setShow] = useState<boolean>(false);
  return (
    <>
        <div className=' max-sm:hidden max-md:hidden sticky h-[40px] flex items-center justify-end top-0 left-0 right-0 bg-red-500/0'>
            <div className=' p-2 pt-3 flex gap-[3vw] bg-gradient-to-r from-[#272728]
            via-[#2f261d] via-[#32271b] via-[#32271b]
            via-[#30251a] via-[#3a1c1b] via-[#36191b] 
            via-[#36191b]
            via-[#29252e] via-[#29242b] via-[#292423] via-[#27232a] to-[#272728] text-white
            text-lg font-thin rounded-l-[40px] rounded-t-none px-24 shadow-2xl'>
                <Link className=' hover:scale-105 transition-all' to="/">
                    <p>Home</p>
                    {
                        location.pathname==='/' &&
                        <div className=' w-full h-1 rounded bg-[#ed7014]'></div>
                    }
                </Link>
                <Link className=' hover:scale-105 transition-all' to="/skills">
                    <p>Skills</p>
                    {
                        location.pathname==='/skills' &&
                        <div className=' w-full h-1 rounded bg-[#ed7014]'></div>
                    }
                </Link>
                <Link className=' hover:scale-105 transition-all' to="/projects">
                    <p>
                        Projects
                    </p>
                    {
                        location.pathname==='/projects' &&
                        <div className=' w-full h-1 rounded bg-[#ed7014]'></div>
                    }
                </Link>
                <Link className=' hover:scale-105 transition-all' to="/education">
                    <p>Education</p>
                    {  
                        location.pathname==='/education' &&
                        <div className=' w-full h-1 rounded bg-[#ed7014]'></div>
                    }
                </Link>
                <Link className=' hover:scale-105 transition-all truncate ' to="/internships">
                    <p>Intenships & Certifications</p>
                    {  
                        location.pathname==='/internships' &&
                        <div className=' w-full h-1 rounded bg-[#ed7014]'></div>
                    }
                </Link>
                <Link className=' hover:scale-105 truncate transition-all' to="/codingProfiles">
                    <p>Coding Profiles</p>
                    {  
                        location.pathname==='/codingProfiles' &&
                        <div className=' w-full h-1 rounded bg-[#ed7014]'></div>
                    }
                </Link>
                <Link className=' hover:scale-105  transition-all' to="/contact">
                        <p>Contact</p>
                        {  
                            location.pathname==='/contact' &&
                            <div className=' w-full h-1 rounded bg-[#ed7014]'></div>
                        }
                    </Link>
            </div>
        </div>
        <div className=' h-[50px] hidden sticky top-0 z-50  max-md:flex max-sm:flex justify-end'>
            <div onClick={()=>{
                setShow(!show);
            }} className=' px-4 hover:cursor-pointer pl-6 pb-2 flex gap-10 
            bg-gradient-to-r     from-[#272728]
            via-[#2f261d] via-[#32271b] via-[#32271b]
            via-[#30251a] via-[#3a1c1b] via-[#36191b] 
            via-[#36191b]
            via-[#29252e] via-[#29242b] via-[#292423] via-[#27232a] to-[#272728] 
            text-white
            text-lg font-thin rounded-l-[40px] rounded-t-none 
            items-center justify-center '>
                <MenuIcon/>
            </div>
            <div  className={`${
                        show ? 'translate-x-[460vh]' : 'translate-x-[560vh]'
                    } transition-transform duration-[1000ms] ease-[cubic-bezier(0.9, 0, 0.2, 1)] 
                    moving h-fit w-fit z-[1000] fixed translate-y-[-100vh]`}
                    >
                <div
                    className={` 
                        ${show?' h-[300vh] scale-100':' h-[10vh] scale-0'} transition-all duration-[1000ms]
                        shadow-2xl rounded-l-full   w-[500vh]
                           bg-[#272727] overflow-hidden
                             flex items-center`}
                >
                <div className='  bg-gradient-to-t from-[#272728] 
                    via-[#2f261d] via-[#32271b] via-[#32271b]
                    via-[#30251a] via-[#3a1c1b] via-[#36191b] 
                    via-[#36191b]
                    via-[#29252e] via-[#29242b] via-[#292423] via-[#27232a] to-[#272728]
                     h-screen w-[400px] pl-[80px] text-[22px] flex justify-center 
                     gap-14 flex-col  text-white relative
                    '>
                    <div onClick={()=>{
                        setShow(false)
                    }} className=' px-10 py-3 hover:cursor-pointer absolute top-6 right-20'>
                        <div
                        className={`transform transition-transform delay-1000 scale-150 ${show ? 'rotate-90' : 'rotate-0'}`}>
                            <ArrowIcon color='white'/>
                        </div>
                    </div>
                    <Link onClick={()=>{setShow(false)}} className=' hover:scale-105 w-fit transition-all' to="/">
                        <p>Home</p>
                        {
                            location.pathname==='/' &&
                            <div className=' w-full h-1 rounded bg-[#ed7014]'></div>
                        }
                    </Link>
                    <Link onClick={()=>{setShow(false)}} className=' hover:scale-105 w-fit transition-all' to="/skills">
                        <p>Skills</p>
                        {
                            location.pathname==='/skills' &&
                            <div className=' w-full h-1 rounded bg-[#ed7014]'></div>
                        }
                    </Link>
                    <Link onClick={()=>{setShow(false)}} className=' hover:scale-105 w-fit transition-all' to="/projects">
                        <p>
                            Projects
                        </p>
                        {
                            location.pathname==='/projects' &&
                            <div className=' w-full h-1 rounded bg-[#ed7014]'></div>
                        }
                    </Link>
                    <Link onClick={()=>{setShow(false)}} className=' hover:scale-105 w-fit transition-all' to="/education">
                        <p>Education</p>
                        {  
                            location.pathname==='/education' &&
                            <div className=' w-full h-1 rounded bg-[#ed7014]'></div>
                        }
                    </Link>
                    <Link onClick={()=>{setShow(false)}} className= ' max-w-[200px] hover:scale-105 w-fit transition-all' to="/internships">
                        <p>Intenships &  
                            <span className=' ml-2'>Certifications</span>
                        </p>
                        {  
                            location.pathname==='/internships' &&
                            <div className=' w-full h-1 rounded bg-[#ed7014]'></div>
                        }
                    </Link>
                    <Link onClick={()=>{setShow(false)}} className=' hover:scale-105 w-fit transition-all' to="/codingProfiles">
                        <p>Coding Profiles</p>
                        {  
                            location.pathname==='/codingProfiles' &&
                            <div className=' w-full h-1 rounded bg-[#ed7014]'></div>
                        }
                    </Link>
                    <Link onClick={()=>{setShow(false)}} className=' hover:scale-105 w-fit transition-all' to="/contact">
                        <p>Contact</p>
                        {  
                            location.pathname==='/contact' &&
                            <div className=' w-full h-1 rounded bg-[#ed7014]'></div>
                        }
                    </Link>
                </div>
            </div>
            </div>
           


        </div>
    </>
  )
}

export default Header