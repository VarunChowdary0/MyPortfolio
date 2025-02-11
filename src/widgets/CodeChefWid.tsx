import axios from 'axios'
import React, { useEffect } from 'react'

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
  const CodeChefWid:React.FC = () => {
  const username = "varun9392";
  useEffect(()=>{
    axios.get("https://iare-compete-python-scrapper.vercel.app/test_url_cc?username=varun9392")
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  })
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
              <a className="hover:underline" href={"https://www.codechef.com/users/varun9392"}>
                {"varun9392"}
              </a>
          </p>
      </div>
  </div>
  <div className="mt-10 pb-1 max-sm:sca">
      <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-[#f1efec]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                  <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-2">
                      <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                          <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                              All Problems Solved
                          </div>
                          <dd className="order-1 text-5xl font-extrabold text-gray-700">{311}</dd>
                      </div>
                      <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                          <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                              Contest Participated
                          </div>
                          <dd className="order-1 text-5xl font-extrabold text-gray-700">{0}</dd>
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