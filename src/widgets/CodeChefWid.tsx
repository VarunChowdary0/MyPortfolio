
import { motion } from 'framer-motion'
import React from 'react'

interface currentProps{
    color : string,
    scale : number
  }
const Code_Chef:React.FC<currentProps> = (props) => {
    return (
      <div className=' scale-100'>
         <img src="https://cdn.codechef.com/images/cc-logo.svg" alt="" />
      </div>
    )
  }

  interface curr{
   data : {
      contests: number,
      name: string,
      "problems-Solved": number,
      username: string
    }
  }
  const CodeChefWid:React.FC<curr> = ({data}) => {
  return (
    <div className=" z-0 bg-[#f1efec] pt-16 pb-5 max-sm:py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex items-center justify-between  max-sm:flex-col">
          <div className=" flex items-center max-sm:ml-1 gap-4">
            <div className=" hidden max-sm:block">
              <Code_Chef color="orange" scale={6}/>
            </div>
            <div className=" max-sm:hidden">
              <Code_Chef color="orange" scale={2}/>
            </div>
          </div>
          <p className="mt-3  text-xl text-gray-500 sm:mt-4">
              <a className="hover:underline" href={"https://www.codechef.com/users/"+data.username}>
                {data.username}
              </a>
          </p>
      </div>
  </div>
  <div className="mt-10 pb-1 max-sm:sca">
      <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-[#f1efec]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className=" child absolute top-[50px] right-0 max-sm:hidden 
                left-[100px] bg-blue-500 w-6 h-6 rounded-full" 
            />
              <div className="max-w-4xl mx-auto">
                  <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-2">
                      <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                          <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                              All Problems Solved
                          </div>
                          <dd className="order-1 text-5xl font-extrabold text-gray-700">{data['problems-Solved']}</dd>
                      </div>
                      <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                          <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                              Contest Participated
                          </div>
                          <dd className="order-1 text-5xl font-extrabold text-gray-700">{data.contests}</dd>
                      </div>
                  </dl>
              </div>
          </div>
      </div>
  </div>
  </div>
  );
}

export default CodeChefWid