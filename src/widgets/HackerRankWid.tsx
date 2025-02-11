import { motion } from "framer-motion";
import React from "react";

interface curr{
  data : {
    badges: {
      fiveStarBadge: number,
      fourStarBadge: number,
      oneStarBadge: number,
      threeStarBadge: number,
      twoStarBadge: number
    },
    certificates: {
      advanced: number,
      basic: number,
      intermediate: number
    },
    name: string,
    username: string
  }
}

interface col{
  fill : string;
}

const Star:React.FC<col> = ({fill}) =>{
  return(
    <svg
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="18"
        viewBox="0 0 576 512"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
      </svg>
  );
}
const HackerRankWid:React.FC<curr> = ({data}) => {
  return (
    <div className=" z-0 bg-[#f1efec] pt-16 pb-5 max-sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between max-sm:flex-col">
          <div className=" flex items-center max-sm:ml-1 gap-4">
            <div className=" hidden max-sm:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                fill="orange"
                viewBox="-1 -1 582 486.999"
              >
                <path d="M-1-1h582v402H-1z" fill="none"></path>
                <path
                  d="M454.843 141.001c-13.019-22.417-172.832-115-198.859-115-26.019 0-185.895 92.351-198.84 115-12.947 22.649-13.019 207.358 0 230.009 13.018 22.639 172.839 114.989 198.84 114.989 26 0 185.841-92.466 198.851-114.999 13.007-22.533 13.016-207.583.008-229.999zM309.862 398.15c-3.559 0-36.756-32.137-34.141-34.762.781-.78 5.625-1.328 15.768-1.644 0-23.564.53-61.622.844-77.553.038-1.814-.395-3.081-.395-5.256h-71.812c0 6.379-.412 32.523 1.232 65.479.205 4.078-1.42 5.353-5.158 5.335-9.102-.025-18.211-.099-27.321-.071-3.683.009-5.274-1.374-5.157-5.488.826-30.043 2.66-75.488-.134-191.07v-2.849c-8.688-.314-14.717-.862-15.508-1.652-2.624-2.624 31.032-34.76 34.581-34.76 3.558 0 36.989 32.145 34.383 34.76-.782.781-7.098 1.338-15.067 1.652v2.84c-2.174 23.135-1.823 71.506-2.362 94.686h72.107c0-4.089.351-31.212-1.077-75.145-.091-3.047.853-4.646 3.781-4.672 9.945-.072 19.9-.117 29.855-.055 3.108.019 4.105 1.546 4.043 4.834-3.28 171.861-.594 159.867-.594 188.975 7.97.315 15.112.864 15.895 1.655 2.588 2.615-30.205 34.761-33.763 34.761z"
                  fill="#2ec866"
                ></path>
              </svg>
            </div>
            <div className=" max-sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                fill="orange"
                viewBox="-1 -1 582 486.999"
              >
                <path d="M-1-1h582v402H-1z" fill="none"></path>
                <path
                  d="M454.843 141.001c-13.019-22.417-172.832-115-198.859-115-26.019 0-185.895 92.351-198.84 115-12.947 22.649-13.019 207.358 0 230.009 13.018 22.639 172.839 114.989 198.84 114.989 26 0 185.841-92.466 198.851-114.999 13.007-22.533 13.016-207.583.008-229.999zM309.862 398.15c-3.559 0-36.756-32.137-34.141-34.762.781-.78 5.625-1.328 15.768-1.644 0-23.564.53-61.622.844-77.553.038-1.814-.395-3.081-.395-5.256h-71.812c0 6.379-.412 32.523 1.232 65.479.205 4.078-1.42 5.353-5.158 5.335-9.102-.025-18.211-.099-27.321-.071-3.683.009-5.274-1.374-5.157-5.488.826-30.043 2.66-75.488-.134-191.07v-2.849c-8.688-.314-14.717-.862-15.508-1.652-2.624-2.624 31.032-34.76 34.581-34.76 3.558 0 36.989 32.145 34.383 34.76-.782.781-7.098 1.338-15.067 1.652v2.84c-2.174 23.135-1.823 71.506-2.362 94.686h72.107c0-4.089.351-31.212-1.077-75.145-.091-3.047.853-4.646 3.781-4.672 9.945-.072 19.9-.117 29.855-.055 3.108.019 4.105 1.546 4.043 4.834-3.28 171.861-.594 159.867-.594 188.975 7.97.315 15.112.864 15.895 1.655 2.588 2.615-30.205 34.761-33.763 34.761z"
                  fill="#2ec866"
                ></path>
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Hacker Rank
            </h2>
          </div>
          <p className="mt-3   text-xl text-gray-500 sm:mt-4">
            <a
              className="hover:underline"
              href="https://hackerrank.com/profile/saivarunchowdar2"
            >
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
                className=" child absolute top-[100px] right-0 max-sm:hidden 
                left-[100px] bg-blue-500 w-6 h-6 rounded-full" 
            />
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-2">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Badges
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <div className=" flex items-center gap-3">
                      <div className=" flex items-center justify-center">
                        <Star fill="gold"/>
                        <Star fill="gold"/>
                        <Star fill="gold"/>
                        <Star fill="gold"/>
                        <Star fill="gold"/>
                      </div>
                      {data.badges.fiveStarBadge}
                    </div>
                    <div className=" flex items-center gap-3">
                      <div className=" flex items-center justify-center">
                        <Star fill="gold"/>
                        <Star fill="gold"/>
                        <Star fill="gold"/>
                        <Star fill="gold"/>
                        <Star fill="#7f8a8e"/>
                      </div>
                      {data.badges.fourStarBadge}
                    </div>
                    <div className=" flex items-center gap-3">
                      <div className=" flex items-center justify-center">
                        <Star fill="gold"/>
                        <Star fill="gold"/>
                        <Star fill="gold"/>
                        <Star fill="#7f8a8e"/>
                        <Star fill="#7f8a8e"/>
                      </div>
                      {data.badges.threeStarBadge}
                    </div>
                    <div className=" flex items-center gap-3">
                      <div className=" flex items-center justify-center">
                        <Star fill="gold"/>
                        <Star fill="gold"/>
                        <Star fill="#7f8a8e"/>
                        <Star fill="#7f8a8e"/>
                        <Star fill="#7f8a8e"/>
                      </div>
                      {data.badges.twoStarBadge}
                    </div>
                    <div className=" mb-3 flex items-center gap-3">
                      <div className=" flex items-center justify-center">
                        <Star fill="gold"/>
                        <Star fill="#7f8a8e"/>
                        <Star fill="#7f8a8e"/>
                        <Star fill="#7f8a8e"/>
                        <Star fill="#7f8a8e"/>
                      </div>
                      {data.badges.oneStarBadge}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col border-b border-gray-100 p-6 max-sm:p-3 text-center sm:border-0 sm:border-r">
                  <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Certifications
                  </div>
                  <div className=" flex justify-around mt-[6.1rem] max-sm:mt-3  max-sm:text-sm  w-full">
                    <div className=" flex items-center justify-center gap-1">
                      <p className=" max-sm:text-sm text-lg tracking-widest max-sm:tracking-wide font-semibold">
                        Advanced -
                      </p>
                      <p>{data.certificates.advanced}</p>
                    </div>
                    <div className=" h-10 max-sm:h-8 w-[1px] bg-[#bdbdbd]"></div>
                    <div className=" flex items-center justify-center gap-1">
                      <p className=" max-sm:text-sm text-lg tracking-widest max-sm:tracking-wide font-semibold">
                        Intermidiate -
                      </p>
                      <p>{data.certificates.intermediate}</p>
                    </div>
                    <div className=" h-10 max-sm:h-8 w-[1px] bg-[#bdbdbd]"></div>
                    <div className=" flex items-center justify-center gap-1">
                      <p className=" max-sm:text-sm text-lg tracking-widest max-sm:tracking-wide font-semibold">
                        Basic -
                      </p>
                      <p>{data.certificates.basic}</p>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackerRankWid;
