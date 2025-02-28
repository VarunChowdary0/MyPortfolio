import React, { useEffect, useState } from 'react'
import InternshipCard from '../widgets/InternshipCard';

const InternShipsAndCertifs:React.FC = () => {
    useEffect(()=>{
          document.title = "Internships & Certificates"
      },[])


          const Projects:{
              link : string;
              name : string;
              type : string;
              image : string;
              sub : string;
              tags : string[];
              description : string;
          }[] = [
              {
                  link: 'https://drive.google.com/file/d/1VQBiIT5iOIXAP0GZJY6kKg4DTvRURDWf/view?usp=sharing',
                  name: 'IBM Certification',
                  sub : "Machine Learning with Python",
                  type : "Certification",
                  image:'/i_and_c/ibm_ml.png',
                  tags: ['IBM', 'Etrain Education','Machine Learning','Python'],
                  description: 'Successfully completed the course, powered by IBM, on eTrain.SkillNetwork. This course covered key machine learning concepts, including supervised and unsupervised learning, data preprocessing, model evaluation, and implementation using Python libraries such as Scikit-Learn and TensorFlow.'
              },
              {
                  link: 'https://www.freecodecamp.org/certification/fcc5ef2e0bb-70c6-4f90-8c0c-8fcbdbabf976/foundational-c-sharp-with-microsoft',
                  name: 'Foundational C# with Microsoft',
                  sub : "Developer Certification",
                  type : "Certification",
                  image:'/i_and_c/microsoft_c_sharp.png',
                  tags: ['Microsoft', 'freecodecamp','C#'],
                  description: 'Successfully completed this course, gaining a strong foundation in C# programming, including variables, data types, operators, control flow (loops and conditionals), functions, and object-oriented programming (OOP) principles. The course also covered error handling and debugging, enhancing problem-solving skills. Through hands-on exercises and projects, I applied my learning to real-world scenarios, preparing for C# development in .NET applications and game development.'
              },
              {
                link: 'https://drive.google.com/file/d/1nlec_8VVZCIfeOa5AaR-DddgyprwZI2p/view?usp=sharing',
                name: 'Artificial Intelligence with EdiGlobe',
                sub : "",
                type : "Certification",
                image:'/i_and_c/course_completion_ai_ed.png',
                tags: ['EdiGlobe', 'Artifical Intelligence','Machine Learning','Python'],
                description: 'Successfully completed the course, powered by IBM, on eTrain.SkillNetwork. This course covered key machine learning concepts, including supervised and unsupervised learning, data preprocessing, model evaluation, and implementation using Python libraries such as Scikit-Learn and TensorFlow.'
            },
              {
                  link: 'https://drive.google.com/file/d/158m69YjIiwcxKTCdYYqmIh5Z9_SiYyou/view',
                  name: 'Internship with EdiGlobe',
                  sub : "",
                  type : "Internship",
                  image:'/i_and_c/internship_ed.png',
                  tags: ['EdiGlobe', 'Artifical Intelligence','Machine Learning','Python'],
                  description: 'After successfully completing the Artificial Intelligence course, I undertook an internship offered by EdiGlobe.'
              },
              {
                  link: 'https://drive.google.com/file/d/1LueRzoYRzWVnaRvNlaxs5A8vttTscctX/view',
                  name: 'National Small Industries Corporation [NSIC]',
                  sub : "Data Science using Python",
                  type : "Field Project",
                  image:'/i_and_c/nsic.png',
                  tags: ['NSIC', 'Data Science','Python'],
                  description: 'Worked on a Data Science field project with NSIC mentor, utilizing Python for data analysis, preprocessing, and visualization. The project involved applying machine learning techniques to extract insights, optimize decision-making, and automate processes, leveraging libraries such as Pandas, NumPy, Scikit-Learn, and Matplotlib.' 
              },
              {
                  link: 'https://drive.google.com/file/d/1woQvM_lUXCq7sEfN0LlTpGH0nCUVMQAe/view?usp=sharing',
                  name: 'HackerRank Certificate',
                  sub : "Java Basic",
                  type : "Certification",
                  image:'/i_and_c/java_basic.png',
                  tags: ['HackerRank', 'Java'],
                  description: 'Earned the HackerRank Java (Basic) Certificate by demonstrating proficiency in core Java concepts, including data types, control structures, object-oriented programming, exception handling, and basic data structures. This certification validates my ability to write efficient and optimized Java code for problem-solving.'
              },
              {
                  link: 'https://drive.google.com/file/d/1Kfl21Ij614Wqa9CIA8EBcgkt6LpJI9lu/view?usp=sharing',
                  name: 'HackerRank Certificate',
                  sub : "Problem Solving",
                  type : "Certification",
                  image:'/i_and_c/problem_solving_basic.png',
                  tags: ['HackerRank', 'Problem Solving'],
                  description: 'Earned the HackerRank Problem Solving Certificate by demonstrating strong algorithmic and data structure skills. This certification validates my ability to solve complex computational problems using efficient algorithms, including sorting, searching, dynamic programming, and graph theory.'
              },
          ];

    return (
      <div className="h-[calc(100vh-40px)] w-full pt-[6px] flex items-center justify-center">

      <div className="h-full w-[calc(100vw-2px)] pr-[2px] overflow-y-auto snap-y snap-mandatory">
          <div className="h-fit bg-black/0 w-full flex items-center justify-center flex-col py-[20vh]
           max-md:pb-[30vh] gap-[30vh]">
              {Projects.map((ele, index) => (
                  <div
                  id={ele.link}
                  className=' w-full flex items-center justify-center'>
                    <div className="snap-center w-fit relative flex justify-center" key={index}>
                      <p className="max-sm:left-[-20px] absolute top-4 left-[-40px] text-xl font-4">
                          {index + 1}
                      </p>
                      <InternshipCard data={ele} />
                    </div>
                  </div>
              ))}
          </div>
      </div>
  </div>
  )
}

export default InternShipsAndCertifs