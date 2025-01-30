import React, { useEffect } from 'react';
import Skill from '../widgets/Skill';
import { motion } from "framer-motion";

interface currentProps {
  skills: {
    skill: string;
    logo: string;
    type: string;
  }[];
}

const Skills: React.FC<currentProps> = ({ skills }) => {
  useEffect(() => {
    document.title = "Skills";
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden py-1 shadow-md fixed top-12 
       bg-[#f0ebeb] max-sm:mt-6 max-sm:py-1">
        <motion.div
          className="flex border items-center max-sm:gap-[50px] gap-[100px] w-fit"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...skills, ...skills].map((ele, idx) => (
            <img
              key={idx}
              className="max-sm:scale-90 w-[35px] h-[35px]  object-contain"
              src={ele.logo}
              alt="skill"
            />
          ))}
        </motion.div>
      </div>

      <div className='w-screen h-[calc(100vh-50px)] gap-10 bg-black/0 flex pt-[13vh] max-sm:pt-[12vh] 
      py-[8vh] max-sm:pb-10 max-sm:py-5 flex-col px-[6vw]'>
        <div className='snap-center py-10 max-sm:py-20 p-10 border-2 gap-[50px]
        rounded-md w-full shadow-xl hover:shadow-2xl transition-shadow 
        duration-500 flex max-sm:p-5 snap-y snap-mandatory flex-wrap h-[80vh] 
        overflow-y-auto max-sm:h-[100vh] relative'>

          <div className=' sticky left-0 right-0 top-0 h-2 bg-black'></div>
          <div className=' sticky left-0 right-0 bottom-0 h-2 bg-black'></div>

          <div className=' bg-gradient-to-r from-[#272728]  via-[#2f261d] 
           via-[#32271b] via-[#32271b] via-[#30251a] via-[#3a1c1b] 
           via-[#36191b]  via-[#36191b]  via-[#29252e] via-[#29242b] 
           via-[#292423] via-[#27232a] to-[#272728] rounded w-full text-white 
           h-fit p-3 snap-center flex flex-col gap-5'>
             <h1 className='font-4 hover:underline transition-all delay-0 text-lg'>Web Technologies</h1>
            <div className='px-6 flex gap-7 pb-8 flex-wrap max-md:justify-between'>
            {
                skills.map((ele, idx) =>
                  (ele.type === 'technical-web' && (
                    <motion.div
                      key={idx}
                      className="flex justify-center items-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.2,
                        ease: "easeOut"
                      }}
                      viewport={{ once: false, amount: 0.9 }}
                    >
                      <Skill src={ele.logo} name={ele.skill} />
                    </motion.div>
                  ))
                )
              }
            </div>
          </div>

          <div className=' bg-[#6558d1] rounded w-full text-white h-fit p-3 snap-center 
           flex flex-col gap-5'>
             <h1 className='font-4 hover:underline transition-all  text-lg'>Programming Languages</h1>
              <div className='px-6 flex gap-7 pb-8 flex-wrap max-md:justify-between'>
                {
                  skills.map((ele, idx) =>
                  (ele.type === 'technical-lang' && (
                    <motion.div
                      key={idx}
                      className="flex justify-center items-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.3,
                        ease: "easeOut"
                      }}
                      viewport={{ once: false, amount: 0.9 }}
                    >
                      <Skill src={ele.logo} name={ele.skill} />
                    </motion.div>
                  ))
                )
              }
            </div>
          </div>


          <div className='bg-[#58a1d1] rounded w-full text-white h-fit p-3 snap-center flex flex-col gap-5'>
            <h1 className='font-4 hover:underline transition-all delay-500 text-lg'>Frameworks & Libraries</h1>
            <div className='px-6 flex gap-7 pb-8 flex-wrap max-md:justify-between'>
              {
                skills.map((ele, idx) =>
                  (ele.type === 'technical-l' && (
                    <motion.div
                      key={idx}
                      className="flex justify-center items-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.2,
                        ease: "easeOut"
                      }}
                      viewport={{ once: false, amount: 0.9 }}
                    >
                      <Skill src={ele.logo} name={ele.skill} />
                    </motion.div>
                  ))
                )
              }
            </div>
          </div>

          <div className='bg-[#21313c] rounded w-full text-white h-fit p-3 snap-center flex flex-col gap-5'>
          <h1 className='font-4 hover:underline transition-all delay-700 text-lg'>Databases</h1>
            <div className='px-6 flex gap-7 pb-8 flex-wrap max-md:justify-between'>
              {
                skills.map((ele, idx) =>
                  (ele.type === 'technical-db' && (
                    <motion.div
                      key={idx}
                      className="flex justify-center items-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.2,
                        ease: "easeOut"
                      }}
                      viewport={{ once: false, amount: 0.9 }}
                    >
                      <Skill src={ele.logo} name={ele.skill} />
                    </motion.div>
                  ))
                )
              }
            </div>
          </div>
          
          <div className='bg-[#2e2222] rounded w-full text-white h-fit p-3 snap-center flex flex-col gap-5'>
          <h1 className='font-4 hover:underline transition-all delay-[10000ms] text-lg'>Tools</h1>
            <div className='px-6 flex gap-7 pb-8 flex-wrap max-md:justify-between'>
              {
                skills.map((ele, idx) =>
                  (ele.type === 'technical-tool' && (
                    <motion.div
                      key={idx}
                      className="flex justify-center items-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.2,
                        ease: "easeOut"
                      }}
                      viewport={{ once: false, amount: 0.9 }}
                    >
                      <Skill src={ele.logo} name={ele.skill} />
                    </motion.div>
                  ))
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
