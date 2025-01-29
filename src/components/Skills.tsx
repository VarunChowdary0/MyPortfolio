import React, { useEffect } from 'react'
import Skill from '../widgets/Skill';

const Skills:React.FC = () => {
    useEffect(()=>{
            document.title = "Skills"
        },[]);
      
        const skills: {
          skill: string;
          logo: string;
          type: string;
        }[] = [
          // Programming Languages
          { skill: 'Python', logo: '/Logos/python.svg', type: 'technical-lang' },
          { skill: 'Java', logo: '/Logos/java.svg', type: 'technical-lang' },
          { skill: 'JavaScript', logo: '/Logos/javascript.svg', type: 'technical-lang' },
          { skill: 'TypeScript', logo: '/Logos/typescript.svg', type: 'technical-lang' },
          { skill: 'C', logo: '/Logos/c.svg', type: 'technical-lang' },
          { skill: 'C++', logo: '/Logos/c++.svg', type: 'technical-lang' },
        
          // Frameworks & Libraries
          { skill: 'React', logo: '/Logos/react.svg', type: 'technical-web' },
          { skill: 'Node.js', logo: '/Logos/node.svg', type: 'technical-web' },
          { skill: 'Express.js', logo: '/Logos/express.svg', type: 'technical-web' },
          { skill: 'Flask', logo: '/Logos/flask.svg', type: 'technical-l' },
          { skill: 'Flask', logo: '/Logos/flask.svg', type: 'technical-web' },
          { skill: 'TailwindCSS', logo: '/Logos/tailwind.svg', type: 'technical-web' },
          { skill: 'Redux', logo: '/Logos/redux.svg', type: 'technical-web' },
          { skill: 'TensorFlow', logo: '/Logos/tensorflow.svg', type: 'technical-l' },
          { skill: 'Pandas', logo: '/Logos/pandas.svg', type: 'technical-l' },
          { skill: 'NumPy', logo: '/Logos/numpy.svg', type: 'technical-l' },
          { skill: 'BS 4', logo: '/Logos/bs.svg', type: 'technical-l' },
          { skill: 'Chart.js', logo: '/Logos/chartjs.svg', type: 'technical-l' },
          { skill: 'Seaborn', logo: '/Logos/seaborn.svg', type: 'technical-l' },
          { skill: 'Postman', logo: '/Logos/Postman.svg', type: 'technical-l' },
          
          // Web Technologies
          { skill: 'HTML', logo: '/Logos/html.svg', type: 'technical-web' },
          { skill: 'CSS', logo: '/Logos/css.svg', type: 'technical-web' },
          { skill: 'Bootstrap', logo: '/Logos/Bootstrap.svg', type: 'technical-web' },
        
          // Databases
          { skill: 'MongoDB', logo: '/Logos/mongodb.svg', type: 'technical-db' },
          { skill: 'MySQL', logo: '/Logos/mysql.svg', type: 'technical-db' },
          { skill: 'TursoDB', logo: '/Logos/turso.svg', type: 'technical-db' },
        
          // Tools & Platforms
          { skill: 'Git', logo: '/Logos/git.svg', type: 'technical-tool' },
          { skill: 'GitHub', logo: '/Logos/GitHub.svg', type: 'technical-tool' },
          { skill: 'WebSockets', logo: '/Logos/websocket.svg', type: 'technical-tool' },
          { skill: 'Vercel', logo: '/Logos/Vercel.svg', type: 'technical-tool' },
          { skill: 'Jupyter', logo: '/Logos/Jupyter.svg', type: 'technical-tool' },
          { skill: 'Mongoose', logo: '/Logos/Mongoose.svg', type: 'technical-tool' },
          { skill: 'VS Code', logo: '/Logos/vscode.svg', type: 'technical-tool' },
        
          // Soft Skills
          { skill: 'Problem Solving', logo: '/Logos/problem-solving.svg', type: 'soft-skill' },
          { skill: 'Communication', logo: '/Logos/communication.svg', type: 'soft-skill' },
          { skill: 'Teamwork', logo: '/Logos/teamwork.svg', type: 'soft-skill' },
          { skill: 'Adaptability', logo: '/Logos/adaptability.svg', type: 'soft-skill' },
          { skill: 'Critical Thinking', logo: '/Logos/critical-thinking.svg', type: 'soft-skill' },
          { skill: 'Time Management', logo: '/Logos/time-management.svg', type: 'soft-skill' },
        ];
        
    return (
    <div className=' w-screen h-fit min-h-[95vh] 
    bg-black/0 flex py-[8vh] max-sm:py-5 max-sm:pb-28  px-[6vw] '>
          <div className=' p-10 border-2  flex-col gap-4 rounded-md w-full shadow-xl
             hover:shadow-2xl transition-shadow duration-500 flex
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
  )
}

export default Skills