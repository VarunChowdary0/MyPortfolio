import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Tag from './Tag';
import ArrowIcon from '../icons/ArrowIcon';
import PlayIcon from '../icons/PlayIcon';

interface curr{
    data : {
        link : string;
    github : string[];
    name : string;
    image : string[];
    tags : string[];
    description : string;
    }
}

const ProjectCard:React.FC<curr> = ({data}) => {
    const [change,setChange] = useState<boolean>(true);
    const [img,setImg] = useState<number>(0);
    useEffect(()=>{
        if(change){
            const timer = setTimeout(()=>{
                setImg((prev)=>(prev+1)%data.image.length);
            },3000);

            return ()=> clearTimeout(timer);
        }
    });
  return (
    <div className=' scale-[1.07] max-md:scale-100 max-md:w-[340px]
     w-[450px] rounded-md border-2 max-md:h-fit pb-10 
    border-[#8a8ef8] hover:shadow-2xl
     duration-400 transition-all h-fit min-h-[500px] shadow-lg overflow-hidden'>
        <motion.div
                onHoverStart={() => setChange(false)}
                onHoverEnd={() => setChange(true)}  
                onTap={() =>{
                            if(window.innerWidth <= 768){
                                setChange((prev) => !prev)
                            }    
                        }
                } 
            className="w-full flex items-center justify-center h-[250px] max-md:h-[38%]
             relative bg-gradient-to-r from-[#393939]
            via-[#545454] to-[#393939]"
            animate={{ backgroundPosition: ["200% 0","-200% 0"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{
                backgroundSize: "200% 100%", // Expand the background
            }}
        >
            <div className=' absolute text-white bg-black/50 px-2 pb-[1px] text-xs 
            rounded-sm bottom-2 right-2'>
                {img+1}/{data.image.length}
            </div>
           {!change && <div className=' absolute fill-white text-white bg-black/50 p-2 
            rounded-lg bottom-2 left-2'>
                <PlayIcon/>
            </div>}
           { !change && <div className=' absolute text-white top-2 right-2 flex gap-1'>
                <div onClick={()=>{
                    setImg((p) => (p - 1 + data.image.length) % data.image.length);
                }} className=' rotate-[-90deg] hover:bg-[#292929] active:scale-90
                 transition-all bg-black/50 p-2 rounded-lg'>
                    <ArrowIcon color='white'/>
                </div>
                <div onClick={()=>{
                    setImg((p)=>(p+1)%data.image.length)
                }} className=' rotate-[90deg] hover:bg-[#292929] active:scale-90
                 transition-all bg-black/50 p-2 rounded-lg'>
                    <ArrowIcon color='white'/>
                </div>
            </div>}
            <img 
                className="h-full w-full object-cover" 
                src={data.image[img]} 
                alt="loading..." 
            />
        </motion.div>
        <div className=' h-2 w-full border bg-[#f1efec]'></div>
        <div className=' bg-red-00 p-3  flex-1 w-full h-full flex flex-col gap-2'>
            <a href={data.link} className=' transition-all hover:text-[#7a7a7a]'>
                <h1 className=' text-2xl font-semibold tracking-wider w-full truncate'>{data.name}</h1>
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
            <div className=' flex flex-col items-start justify-start '>
                {
                    data.github.map((ele,idx)=>
                        <a className=' truncate max-md:text-sm max-sm:text-xs
                     text-sky-500 transition-all w-full
                     hover:text-blue-600' href={ele}>{idx+1}. {ele}</a>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default ProjectCard