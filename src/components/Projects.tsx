import React, { useEffect, useState, useCallback } from 'react';
import ProjectCard from '../widgets/ProjectCard';
import ArrowIcon from '../icons/ArrowIcon';
import { motion } from 'framer-motion';
import { link } from 'fs';

const Projects: React.FC = () => {
    useEffect(() => {
        document.title = "Projects";
    }, []);

    const [isVisible, setIsVisible] = useState(true);


    const Projects:{
        link : string;
        github : string[];
        name : string;
        image : string[];
        tags : string[];
        description : string;
    }[] = [
        {
            link: '#',
            github: [
                "https://github.com/VarunChowdary0/congenial-invention-of-step-buy-NEXT",
                "https://github.com/VarunChowdary0/congenial-invention-of-step-buy-server"],
            name: 'Step Buy',
            image: [
                'project_images/step_buy_1.png',
                'project_images/step_buy_2.png',
                'project_images/step_buy_3.png',
                'project_images/step_buy_4.png',
                'project_images/step_buy_5.png',
                'project_images/step_buy_6.png',
                'project_images/step_buy_7.png',
                'project_images/step_buy_8.png'
            ],
            tags: ['React', 'TailwindCss'],
            description: 'This portfolio is a personal website that highlights my skills, projects, and achievements. It serves as a professional online presence, allowing visitors to explore my work.'
        },
        {
            link: 'https://saivarun.vercel.app',
            github: ["https://github.com/VarunChowdary0/MyPortfolio"],
            name: 'My Portfolio',
            image: [
                'project_images/portfolio-1.png',
                'project_images/portfolio-2.png',
                'project_images/portfolio-3.png'
            ],
            tags: ['React', 'TailwindCss'],
            description: 'This portfolio is a personal website that highlights my skills, projects, and achievements. It serves as a professional online presence, allowing visitors to explore my work.'
        },
        {
            link: 'https://compete-iare.vercel.app/user/22951A05G8',
            github: [
                "https://github.com/VarunChowdary0/python-scraper-for-compete-iare",
                "https://github.com/VarunChowdary0/compete-iare-server",
                "https://github.com/VarunChowdary0/client-iare-compete"
            ],
            name: 'Compete IARE',
            image: [
                'project_images/compete-1.png',
                'project_images/compete-2.png',
                'project_images/compete-3.png',
                'project_images/compete-4.png',
            ],
            tags: ['React', 'Node', 'Express', 'TailwindCss', 'TursoDB', 'Python', 'Flask', 'BeautifulSoup'],
            description: 'Compete IARE is a ranking and student login platform that ranks students based on their coding profiles. It utilizes web scraping with BeautifulSoup (BS4) to extract data from coding platforms like LeetCode, CodeChef, HackerRank, and GeeksforGeeks.'
        },
        {
          link : '#',
          github : ["https://github.com/VarunChowdary0/FileManagementSystem_C-sharp"],
          name : 'File Manager C#',
          image : ['project_images/file_manager-1.png',
                   'project_images/file_manager-2.png',      
                   'project_images/file_manager-3.png',
                  ],
          tags : ['C#','Console APP',".NET"],
          description : 'Built a file management and structuring Console App in C# using Data Structures and Object Oriented Programming. This project is my frist step in learnig .NET framework.'
        },
        {
          link : '#',
          github : ["https://github.com/VarunChowdary0/Library_Management_system_Console_app_C-sharp"],
          name : 'Library management system',
          image : ['project_images/lib_man_1.png',
                   'project_images/lib_man_2.png',      
                   'project_images/lib_man_3.png',      
                   'project_images/lib_man_4.png', 
                   'project_images/lib_man_5.png' ,
                   'project_images/lib_man_6.png'
                  ],
          tags : ['C#','Console APP',".NET"],
          description : `A .NET console application for managing day-to-day library operations, including
book issuance, returns, catalog management, and user records. Built using C-sharp with OOP principles. Utilizes like
lists and dictionaries for efficient data storage and retrieval.`

        }
    ];

    return (
        <div className="h-[calc(100vh-40px)] w-full pt-[6px] flex items-center justify-center">
            {isVisible && (
                <div className="fixed z-10 bottom-5 flex items-center justify-center right-7 bg-[#323232] 
                h-10 w-10 rounded-xl rotate-[180deg]">
                    <motion.div
                        animate={{ y: [-2, 3, -2] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowIcon color="#fff" />
                    </motion.div>
                </div>
            )}

            <div className="h-full w-[calc(100vw-2px)] pr-[2px] overflow-y-auto snap-y snap-mandatory">
                <div className="h-fit bg-black/0 w-full flex items-center justify-center flex-col py-[20vh]
                 max-md:pb-[30vh] gap-[30vh]">
                    {Projects.map((ele, index) => (
                        <motion.div
                        id={ele.link}
                        onPointerEnter={()=>{
                          if(index+1 == Projects.length){
                            setIsVisible(false);
                          }else{
                            setIsVisible(!false);
                          }
                        }}
                        onTap={()=>{
                          if(index+1 == Projects.length){
                          }else{
                            setIsVisible(!false);
                          }
                        }}
                        className=' w-full flex items-center justify-center'>
                          <div className="snap-center w-fit relative flex justify-center" key={index}>
                            <p className="max-sm:left-[-20px] absolute top-4 left-[-40px] text-xl font-4">
                                {index + 1}
                            </p>
                            <ProjectCard data={ele} />
                          </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
