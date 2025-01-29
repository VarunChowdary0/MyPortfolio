import React, { useEffect } from 'react'
import Skill from '../widgets/Skill';
import { motion } from "framer-motion";


interface currentProps{
  skills : {
    skill: string;
    logo: string;
    type: string;
  }[]
}
const Skills:React.FC<currentProps> = ({skills}) => {
    useEffect(()=>{
            document.title = "Skills"
        },[]);

        
    return (
      <>
      <div className=' fixed top-0 left-0 right-0 bg-[#f1efec] h-[100px]'></div>
      <div className="w-full overflow-hidden py-3 shadow-md sticky top-12 
      bg-[#f0ebeb] mt-16 max-sm:mt-6 max-sm:py-1">
        <motion.div
          className="flex items-center max-sm:gap-[50px] gap-[100px] w-fit"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {/* Duplicate the images to create a seamless effect */}
          {[...skills, ...skills].map((ele, idx) => (
            <img
              key={idx}
              className=" max-sm:scale-90 w-[40px] h-[40px] object-contain"
              src={ele.logo}
              alt="skill"
            />
          ))}
        </motion.div>
      </div>
      <div className=' w-screen h-fit min-h-[95vh] gap-10
      bg-black/0 flex py-[8vh] max-sm:py-5 max-sm:pb-28 flex-col px-[6vw] '>
            <div className=' p-10 border-2  flex-col gap-4 rounded-md w-full shadow-xl
              hover:shadow-2xl transition-shadow duration-500 flex max-sm:p-5
                flex-wrap'>
                <div className=' 
                bg-gradient-to-r from-[#272728] 
              via-[#2f261d]  via-[#32271b] via-[#32271b]
              via-[#30251a] via-[#3a1c1b] via-[#36191b] 
              via-[#36191b] 
              via-[#29252e] via-[#29242b] via-[#292423] via-[#27232a] to-[#272728]
                rounded w-full text-white h-fit p-3 flex flex-col gap-5             '>
                  <h1 className=' font-4 hover:underline transition-all delay-300 text-lg'>Web Technologies</h1>
                  <div className=' px-6 flex gap-7 pb-8 flex-wrap'>
                        {
                          skills.map((ele,idx)=>
                      ( ele.type ==='technical-web' && <Skill
                                src={ele.logo}
                                name={ele.skill}
                            />))
                        }
                  </div>
                </div>
                
                <div className=' bg-[#6558d1]
              
                rounded w-full text-white h-fit p-3 flex flex-col gap-5             '>
                  <h1 className=' font-4 hover:underline transition-all delay-300 text-lg'>Programming Languages</h1>
                  <div className=' px-6 flex gap-7 pb-8 flex-wrap'>
                        {
                          skills.map((ele,idx)=>
                      ( ele.type ==='technical-lang' && <Skill
                                src={ele.logo}
                                name={ele.skill}
                            />))
                        }
                  </div>
                </div>
                <div className=' bg-[#2e2222]
              
                rounded w-full text-white h-fit p-3 flex flex-col gap-5             '>
                  <h1 className=' font-4 hover:underline transition-all delay-300 text-lg'>Databases</h1>
                  <div className=' px-6 flex gap-7 pb-8 flex-wrap'>
                        {
                          skills.map((ele,idx)=>
                      ( ele.type ==='technical-db' && <Skill
                                src={ele.logo}
                                name={ele.skill}
                            />))
                        }
                  </div>
                </div>

                <div className=' bg-[#58a1d1]
                rounded w-full text-white h-fit p-3 flex flex-col gap-5             '>
                  <h1 className=' font-4 hover:underline transition-all delay-300 text-lg'>Frameworks & Libraries</h1>
                  <div className=' px-6 flex gap-7 pb-8 flex-wrap'>
                        {
                          skills.map((ele,idx)=>
                      ( ele.type ==='technical-l' && <Skill
                                src={ele.logo}
                                name={ele.skill}
                            />))
                        }
                  </div>
                </div>
                <div className=' bg-[#21313c]
                rounded w-full text-white h-fit p-3 flex flex-col gap-5             '>
                  <h1 className=' font-4 hover:underline transition-all delay-300 text-lg'>Tools</h1>
                  <div className=' px-6 flex gap-7 pb-8 flex-wrap'>
                        {
                          skills.map((ele,idx)=>
                      ( ele.type ==='technical-tool' && <Skill
                                src={ele.logo}
                                name={ele.skill}
                            />))
                        }
                  </div>
                </div>
            </div>
      </div>
      </>
  )
}

export default Skills