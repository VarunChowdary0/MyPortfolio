import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../icons/ArrowIcon";

const educationData:{
  year:string;
  degree:string;
  location:string;
  institution:string;
  description:string;
}[] = [
  {
    year: "2022 - 2026",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    location : 'https://maps.app.goo.gl/E74C742tbigYhfot5',
    institution: "Institute of Aeronautical Engineering (IARE),Hyderbad",
    description: "Focusing on AI, Cyber Security, Data Science, and Full-Stack Development."
  },
  {
    year: "2020 - 2022",
    degree: "Intermediate - MPC",
    location : 'https://maps.app.goo.gl/kbzkuVQVs6MadxGk6',
    institution: "Krishnaveni Junior College, Kothagudem",
    description: "Studied Mathematics, Physics, and Chemistry with strong academic performance."
  },
  {
    year: "2011 - 2020",
    location : 'https://maps.app.goo.gl/3WKezxvfu1daJYBg8',
    degree: "Secondary School Certificate (SSC)",
    institution: "Triveni Talent School, Kothagudem",
    description: "Excelled in academics and developed a keen interest in computer science."
  }
];



const EducationTimeline = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="h-[calc(100vh-30px)] overflow-y-hidden w-full pt-[6px] flex items-center justify-center">
       {isVisible && (
                <div className="fixed z-10 bottom-5 flex items-center 
                justify-center right-7 bg-[#323232] h-10 w-10 rounded-xl rotate-[180deg]">
                    <motion.div
                        animate={{ y: [-2, 3, -2] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowIcon color="#fff" />
                    </motion.div>
                </div>
            )}
      <div className=" py-64  my-[30vh] h-full overflow-x-hidden 
      w-[calc(100vw-2px)] flex items-center justify flex-col
       pr-[2px] overflow-y-auto snap-y gap-[100vh] snap-mandatory ">
       <motion.div
          initial={{ height: 0,width:0, y: -200 }}  // Start off the screen (above) with height 0
          whileInView={{ opacity: 1, y: 0, width:'8px', height: "60%" }}  // Fall down to position (y: 0) and increase height
          transition={{ duration: 1.3, delay: 1 }}
          viewport={{ once: true }}
          className="flex items-center 
          bg-gradient-to-b
          from-[#ef8460] 
          via-[#e24c9c]
          via-[#b966dd]
          via-[#766df4]
          via-[#5d8bde]
          via-[#62c9df]
          to-[#7dd3a3]
          mt-[70px] rounded-3xl h-[100%]
           w-2 mb-10 absolute max-sm:ml-[-321px] ml-[-360px]"
        ></motion.div>  
        {/* Comment bottom div after review */}
        {/* <div  className=" max-md:hidden flex items-center 
          bg-gradient-to-b
          from-[#ef8460] 
          via-[#e24c9c]
          via-[#b966dd]
          via-[#766df4]
          via-[#5d8bde]
          via-[#62c9df]
          to-[#7dd3a3]
          mt-[70px] rounded-3xl h-[100%]
           w-2 mb-10 absolute max-sm:ml-[-321px] ml-[-360px] top-0"></div> */}
          {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -200}}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className=" bg-black/0 parent snap-center flex items-center relative"
              >
                <motion.div 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className=" child absolute max-sm:hidden left-[-9px] bg-blue-500 w-6 h-6 rounded-full" />
                <motion.div 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.5, delay: 0.6 }} className=" absolute left-[-4px] 
                bg-blue-500 w-6 h-6 rounded-full max-sm:block hidden " />
                <motion.div 
                    onPointerEnter={()=>{
                      if(index+1 == educationData.length){
                        setIsVisible(false);
                      }else{
                        setIsVisible(!false);
                      }
                    }}
                    onTap={()=>{
                      if(index+1 == educationData.length){
                      }else{
                        setIsVisible(!false);
                      }
                    }}
                className=" absolute w-screen z-0 h-full bg-red-700/0">

                </motion.div>
                <motion.div 
                onPointerEnter={()=>{
                  if(index+1 == educationData.length){
                      setIsVisible(false);
                    }else{
                      setIsVisible(!false);
                    }
                  }}
                  onTap={()=>{
                    if(index+1 == educationData.length){
                    }else{
                      setIsVisible(!false);
                    }
                }}
                className="ml-12 max-sm:ml-6 p-5 max-sm:w-[80vw] h-fit w-[545px]
                z-10 hover:scale-110 hover:translate-x-12 max-sm:hover:translate-x-1
                bg-[#f1efec] border-2 border-[#4d46d4] flex flex-col 
                rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
                  <h3 className="text-2xl max-sm:text-xl font-semibold text-black">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm max-sm:text-xs mt-2">{edu.year}</p>
                  <a href={edu.location} className="text-[#376683] flex flex-wrap gap-4 font-medium">
                    <span>{edu.institution}</span>
                    <img className=" w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png" alt="" />
                    </a>
                  <p className="text-gray-600 text-sm max-sm:text-xs mt-2">{edu.description}</p>
                </motion.div>
              </motion.div>
            ))}
      </div>
      </div>
  );
};

export default EducationTimeline;
