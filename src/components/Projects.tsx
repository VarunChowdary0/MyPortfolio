import React, { useEffect } from 'react'
import ProjectCard from '../widgets/ProjectCard'

const Projects:React.FC = () => {
    useEffect(()=>{
            document.title = "Projects"
        },[]);

      const Projects:{
        link : string;
        github : string[];
        name : string;
        image : string[];
        tags : string[];
        description : string;
      }[] =  [
        {
          link : 'https://saivarun.vercel.app',
          github : ["https://github.com/VarunChowdary0/MyPortfolio" ],
          name : 'My Portfolio ',
          image : ['project_images/portfolio-1.png',"project_images/portfolio-2.png"],
          tags : ['React','TailwindCss'],
          description : 'This portfolio is a personal website that highlights my skills, projects, and achievements. It serves as a professional online presence, allowing visitors to explore my work.'
        },
        {
          link : 'https://compete-iare.vercel.app/user/22951A05G8',
          github : ["https://github.com/VarunChowdary0/python-scraper-for-compete-iare",
                    "https://github.com/VarunChowdary0/compete-iare-server", 
                    "https://github.com/VarunChowdary0/client-iare-compete"
                  ],
          name : 'Compete IARE',
          image : ['project_images/compete-1.png',
                   'project_images/compete-2.png',
                   'project_images/compete-3.png',  
                   'project_images/compete-4.png',  
                ],
          tags : ['React','Node','Express','TailwindCss','TursoDB','Python','Flask','BeautifulSoup'],
          description : 'Compete IARE is a ranking and student login platform that ranks students based on their coding profiles. It utilizes web scraping with BeautifulSoup (BS4) to extract data from coding platforms like LeetCode, CodeChef, HackerRank, and GeeksforGeeks.'
        }
      ];
  return (
    <div className='h-[calc(100vh-40px)] w-full pt-[6px] flex items-center justify-center'>
    <div className='h-full w-[calc(100vw-2px)] pr-[2px]
     overflow-y-auto snap-y snap-mandatory'>
      <div className='h-fit bg-black/0 w-full flex items-center justify-center flex-col py-[20vh] max-sm:py-[5vh] gap-[10vh]'>
        {Projects.map((ele, index) => (
          <div 
            className=" snap-center w-fit relative flex justify-center" 
            key={index}
          >
            <p className=' max-sm:left-[-20px] absolute top-4 left-[-40px] text-xl font-4'>{index+1}</p>
            <ProjectCard data={ele} />
          </div>
        ))}
      </div>
    </div>
  </div>
  
  )
}

export default Projects