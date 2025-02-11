import React from 'react'
import Tag from './Tag';

interface curr{
    data : {
        name : string;
        type : string | "internship";
        image : string;
        link : string;
        tags : string[];
        description : string;
        sub : string | "";
    }
}

const CertificateIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="50"
        height="50"
      >
        <g transform="translate(1.4066 1.4066) scale(2.81 2.81)" fill="none">
          <path
            d="M 44.759 63.847 L 56.954 90 l 9.909 -9.079 l 13.325 -1.755 L 68.323 53.721 c -9.609 -0.082 -17.439 3.046 -23.082 10.126"
            fill="rgb(237,99,98)"
          />
          <path
            d="M 45.241 63.847 L 33.046 90 l -9.909 -9.079 L 9.812 79.166 l 11.865 -25.445 C 33.52 52.826 41.539 56.026 45.241 63.847 z"
            fill="rgb(233,84,84)"
          />
          <path
            d="M 45 63.847 c 17.631 0 31.923 -14.293 31.923 -31.923 S 62.631 0 45 0 C 34.483 21.782 33.645 43.104 45 63.847 z"
            fill="rgb(255,204,91)"
          />
          <path
            d="M 45 63.847 c -17.631 0 -31.923 -14.293 -31.923 -31.923 S 27.369 0 45 0 v 63.814"
            fill="rgb(253,188,75)"
          />
          <path
            d="M 38.778 54.411 c -0.092 0 -0.186 -0.013 -0.279 -0.039 C 26.122 50.786 18.967 37.8 22.552 25.422 c 0.153 -0.531 0.707 -0.836 1.239 -0.682 c 0.53 0.153 0.836 0.708 0.682 1.239 c -3.277 11.318 3.264 23.193 14.583 26.471 c 0.53 0.154 0.836 0.709 0.682 1.239 C 39.611 54.127 39.211 54.411 38.778 54.411 z"
            fill="rgb(236,153,34)"
          />
          <path
            d="M 66.487 39.146 c -0.092 0 -0.186 -0.013 -0.278 -0.04 c -0.53 -0.154 -0.836 -0.708 -0.683 -1.239 c 1.589 -5.483 0.946 -11.256 -1.808 -16.256 c -2.755 -5 -7.291 -8.628 -12.774 -10.216 c -0.53 -0.153 -0.836 -0.708 -0.683 -1.239 c 0.154 -0.53 0.708 -0.835 1.239 -0.682 c 5.996 1.736 10.957 5.704 13.969 11.172 c 3.013 5.468 3.715 11.781 1.979 17.777 C 67.321 38.862 66.922 39.146 66.487 39.146 z"
            fill="rgb(236,153,34)"
          />
          <path
            d="M 53.093 44.529 c -0.159 0 -0.319 -0.038 -0.465 -0.115 L 45 40.405 l -7.627 4.01 c -0.337 0.177 -0.744 0.147 -1.053 -0.076 c -0.308 -0.224 -0.462 -0.603 -0.398 -0.978 l 1.457 -8.493 l -6.17 -6.015 c -0.272 -0.266 -0.371 -0.664 -0.253 -1.025 s 0.431 -0.626 0.808 -0.681 l 8.527 -1.239 l 3.813 -7.727 c 0.168 -0.341 0.516 -0.558 0.897 -0.558 l 0 0 c 0.381 0 0.729 0.216 0.897 0.558 l 3.813 7.727 l 8.527 1.239 c 0.377 0.055 0.689 0.319 0.808 0.681 c 0.117 0.362 0.02 0.759 -0.253 1.025 l -6.171 6.015 l 1.457 8.493 c 0.064 0.375 -0.09 0.754 -0.397 0.978 C 53.507 44.465 53.3 44.529 53.093 44.529 z"
            fill="rgb(236,153,34)"
          />
        </g>
      </svg>
    );
  };
const InternshipCard:React.FC<curr> = ({data}) => {
  return (
    <div className=' scale-[1.07] max-md:scale-100 max-md:w-[340px]
    w-[450px] rounded-md border-2 max-md:h-fit pb-10 
   border-[#8a8ef8] hover:shadow-2xl
    duration-400 transition-all h-fit min-h-[500px] shadow-lg overflow-hidden'>
       <div
           className="w-full flex items-center justify-center h-[250px] max-md:h-[38%]
           relative bg-gradient-to-r from-[#393939]
           via-[#545454] to-[#393939]">
            <div className=' absolute bottom-3 right-3 hover:scale-125 transition-all hover:bottom-8 duration-300'>
                {data.type === "Certification" ?
                 <div className=' flex items-center justify-center flex-col'>
                     <CertificateIcon/>
                     <p className=' text-[7px]'>Certification ©️</p>
                 </div>
                :
                    (
                      data.type === "Field Project" ?
                      <></>
                      :
                      <div className=' flex items-center justify-center flex-col'>
                      <img className='imgcvc h-[60px] w-[60px]' src="intern.png" alt="" />
                      <p className=' text-[7px]'>Internship ®️</p>
                      </div>
                    )
                }
            </div>
           <img 
               className="h-full select-none w-full object-cover" 
               src={data.image} 
               alt="loading..." 
           />
       </div>
       <div className=' h-2 w-full border bg-[#f1efec]'></div>
       <div className=' bg-red-00 p-3  flex-1 w-full h-full flex flex-col gap-2'>
           <a href={data.link} className=' transition-all'>
               <h1 className=' text-2xl font-semibold hover:text-[#5759c7] transition-all
                 duration-200 tracking-wider w-full truncate'>{data.name}</h1>
               { data.sub !== "" &&
                <h2 className=' text-[18px] text-[#808080] font-semibold 
               tracking-wider w-full truncate'>{data.sub}</h2>}
           </a>
           <div className=' flex flex-wrap gap-2 h-fit'>
               {
                   data.tags.map((ele,idx)=>
                       <span key={ele+idx}>
                           <Tag tag={ele}/>
                       </span>
                   )
               }
           </div>
           <p className=' tracking-wide max-sm:text-sm'>
               {data.description}
           </p>
           {
            data.type === "Field Project" 
            &&
            <div className=' absolute bottom-3 right-3 hover:scale-125 transition-all
            hover:bottom-6 flex flex-col items-center justify-center '>
                <img className='imgcvc h-[60px] w-[60px]' src="FP.png" alt="" />
                <p className=' text-[7px]'>Field Project</p>
            </div>
           }
       </div>
   </div>
  )
}

export default InternshipCard