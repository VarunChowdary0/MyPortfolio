import { motion } from "framer-motion";
import React from "react";

interface curr{
  data : {
    name: string,
  problemsSolved: {
        All: number,
        Easy: number,
        Hard: number,
        Medium: number
    },
  username: string
  }
}
const LeetCodeWid: React.FC <curr> = ({data}) => {
  return (
    <div className=" z-0 bg-[#f1efec] pt-16 pb-5 max-sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between max-sm:flex-col">
          <div className=" flex items-center max-sm:ml-1 gap-4">
            
            <div className="  hidden max-sm:block">
              <svg
                scale="6"
                fill="orange"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 32 32"
                width="46"
              >
                <path d="m21.469 23.907-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485 0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.688 1.823.663 2.536-.052.708-.713.735-1.848.047-2.536l-3.473-3.511c-.901-.891-2.032-1.505-3.261-1.787l3.287-3.333c.688-.687.667-1.823-.047-2.536s-1.849-.735-2.536-.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-.683 5.109-1.989l3.479-3.521c.688-.683.661-1.817-.052-2.531s-1.849-.74-2.531-.052zm6.28-6.558h-13.531c-.932 0-1.692.801-1.692 1.791 0 .991.76 1.797 1.692 1.797h13.531c.933 0 1.693-.807 1.693-1.797 0-.989-.76-1.791-1.693-1.791z"></path>
              </svg>
            </div>
            <div className=" max-sm:hidden">
              <svg
                scale="2"
                fill="orange"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 32 32"
                width="46"
              >
                <path d="m21.469 23.907-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485 0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.688 1.823.663 2.536-.052.708-.713.735-1.848.047-2.536l-3.473-3.511c-.901-.891-2.032-1.505-3.261-1.787l3.287-3.333c.688-.687.667-1.823-.047-2.536s-1.849-.735-2.536-.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-.683 5.109-1.989l3.479-3.521c.688-.683.661-1.817-.052-2.531s-1.849-.74-2.531-.052zm6.28-6.558h-13.531c-.932 0-1.692.801-1.692 1.791 0 .991.76 1.797 1.692 1.797h13.531c.933 0 1.693-.807 1.693-1.797 0-.989-.76-1.791-1.693-1.791z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The LeetCode platform
            </h2>
          </div>
          <p className="mt-3   text-xl text-gray-500 sm:mt-4">
            <a
              className="hover:underline"
              href={"https://leetcode.com/u/"+data.username}
            >
              {data.username}
            </a>
          </p>
        </div>
      </div>
      <div className="mt-10 pb-1 max-sm:sca">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-[#f1efec]">
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className=" child absolute top-[50px] right-0 max-sm:hidden 
                  left-[100px] bg-blue-500 w-6 h-6 rounded-full" 
              />
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Easy Problems Solved
                  </div>
                  <dd className="order-1 text-5xl font-extrabold text-gray-700">
                    {data.problemsSolved.Easy}
                  </dd>
                </div>
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Medium Problems Solved
                  </div>
                  <dd className="order-1 text-5xl font-extrabold text-gray-700">
                    {data.problemsSolved.Medium}
                  </dd>
                </div>
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Hard Problems Solved
                  </div>
                  <dd className="order-1 text-5xl font-extrabold text-gray-700">
                    {data.problemsSolved.Hard}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeWid;
