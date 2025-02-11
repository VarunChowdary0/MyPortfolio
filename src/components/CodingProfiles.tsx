import React, { useEffect, useState } from 'react'
import LeetCodeWid from '../widgets/LeetCodeWid'
import CodeChefWid from '../widgets/CodeChefWid'
import HackerRankWid from '../widgets/HackerRankWid'
import GeekForGeeksWid from '../widgets/GeekForGeeksWid'
import axios from 'axios'

const CodingProfiles:React.FC = () => {
    const [lc,setLc] = useState<
    {
      name: string,
      problemsSolved: {
            All: number,
            Easy: number,
            Hard: number,
            Medium: number
        },
      username: string
    }>({
        name : "",
        problemsSolved:{
            All : 194,
            Easy : 98,
            Hard : 11,
            Medium : 85
        },
        username : "Varun_chowdary99"
    });
    useEffect(() => {
        document.title = 'Coding Profile';
        axios.get("/api/")
          .then((res) => {
            console.log(res.data);
            setLc(res.data.ScoreData.leetcode);
          })
          .catch((err) => {
            console.error("API Request Failed:", err);
          });
      }, []);
      
      
    return (
      <div className=' h-screen w-full flex overflow-y-auto mt-[5px] flex-col py-[100px]'>
          {lc ? 
            <LeetCodeWid data={lc}/>
            :
            <div className=' w-full min-h-[300px] flex items-center justify-center'>
                <p>Loading....</p>
            </div>
            } 
          <CodeChefWid/>
          <HackerRankWid/>
          <GeekForGeeksWid/>
      </div>
  )
}

export default CodingProfiles