import React, { useEffect, useState } from 'react'
import LeetCodeWid from '../widgets/LeetCodeWid'
import CodeChefWid from '../widgets/CodeChefWid'
import HackerRankWid from '../widgets/HackerRankWid'
import GeekForGeeksWid from '../widgets/GeekForGeeksWid'
import axios from 'axios'
import { motion } from 'framer-motion'
import ArrowIcon from '../icons/ArrowIcon'

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

    const [cc,setCC] = useState<{
        contests: number,
        name: string,
        "problems-Solved": number,
        username: string
      }>({
        "contests": 0,
        "name": "saivarunchowdarypoludasu",
        "problems-Solved": 311,
        "username": "varun9392"
      });


    const [hrc,setHrc] = useState<
    {
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
      >({
        badges: {
          fiveStarBadge: 1,
          fourStarBadge: 0,
          oneStarBadge: 0,
          threeStarBadge: 0,
          twoStarBadge: 0
        },
        certificates: {
          advanced: 0,
          basic: 3,
          intermediate: 0
        },
        name: "Sai varun Chowdary Poludasu",
        username: "saivarunchowdar2"
      });

    const [gfg,setGFG] = useState<{
        Rank: number,
        college: string,
        contest_rating: number,
        problems_solved: number,
        score: number,
        username: string
      }>(
        {
        Rank: 399,
        college: "Institute of Aeronautical Engineering (IARE) Hyderabad",
        contest_rating: 0,
        problems_solved: 46,
        score: 120,
        username: "saivarunchowdary"
      }
    )
    useEffect(() => {
        document.title = 'Coding Profile';
        axios.get("/api/")
          .then((res) => {
            console.log(res.data);
            setLc(res.data.ScoreData.leetcode);
            setCC(res.data.ScoreData.codechef);
            setHrc(res.data.ScoreData.hackerrank);
            setGFG(res.data.ScoreData.geekforgeeks);
          })
          .catch((err) => {
            console.error("API Request Failed:", err);
          });
      }, []);
          const [isVisible, setIsVisible] = useState(true);
      
      
    return (
      <div>
         <div className=' max-sm:hidden h-screen  bg-[#f1efec] gap-[50vh]  mr-1 snap-mandatory snap-y 
       max-w-screen overflow-hidden flex overflow-y-auto mt-[5px] flex-col py-[100px] max-sm:py-[400px]'>
          {isVisible && (
                <div className="fixed z-10 bottom-5 flex items-center 
                justify-center right-7 bg-[#323232] h-10 w-10 rounded-xl rotate-[180deg]">
                    <motion.div
                        animate={{ y: [-2, 3, 5, -8, -2] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowIcon color="#fff" />
                    </motion.div>
                </div>
            )}
          {lc ? 
          <motion.div
          onPointerEnter={()=>{
            setIsVisible(true);
        }}
        onTap={()=>{
            setIsVisible(!true);
          }
      }
                initial={{ opacity: 0, x: -500}}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false }}
                className=' snap-center relative'
            >
            <LeetCodeWid data={lc}/>
          </motion.div>
            :
            <div className=' w-full min-h-[300px] flex items-center justify-center'>
                <p>Loading....</p>
            </div>
            } 
          {cc ? 
           <motion.div
           onPointerEnter={()=>{
            setIsVisible(true);
        }}
        onTap={()=>{
            setIsVisible(!true);
          }
      }
                 initial={{ opacity: 0, x: 500}}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: false }}
                className=' snap-center'
                >
                <CodeChefWid data={cc}/>
                <div className=' w-full h-[400px] bg-black/0'></div>

            </motion.div>
            :
            <div className=' w-full min-h-[300px] flex items-center justify-center'>
                <p>Loading....</p>
            </div>
            } 
          {hrc ? 
            <motion.div
            onPointerEnter={()=>{
                setIsVisible(true);
            }}
            onTap={()=>{
                setIsVisible(!true);
              }
          }
                initial={{ opacity: 0, x: -500}}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false }}
                className=' snap-center'
                >
                <HackerRankWid data={hrc}/>
                <div className=' w-full h-[400px] bg-black/0'></div>

            </motion.div>
            :
            <div className=' w-full min-h-[300px] flex items-center justify-center'>
                <p>Loading....</p>
            </div>
            } 
          {gfg ? 
            <motion.div
            onPointerEnter={()=>{
                  setIsVisible(false);
              }}
              onTap={()=>{
                  setIsVisible(!false);
                }
            }
                initial={{ opacity: 0, x: 500}}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false }}
                className=' snap-center'
                >
                    <GeekForGeeksWid data={gfg}/>
                    <div className=' w-full h-[400px] bg-black/0'></div>

            </motion.div>
            :
            <div className=' w-full min-h-[300px] flex items-center justify-center'>
                <p>Loading....</p>
            </div>
            } 

            <div className=' w-full h-[500px] bg-black'></div>
         </div>
        <div className=' hidden  h-screen bg-[#f1efec] gap-[60vh] mr-1 snap-mandatory snap-y 
      w-full max-sm:flex overflow-y-auto mt-[5px] flex-col py-[200px] max-sm:py-[300px]'>
          {lc ? 
          <motion.div
                initial={{ opacity: 0, x: -200}}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false }}
                className=' snap-center relative'
            >
            <LeetCodeWid data={lc}/>
          </motion.div>
            :
            <div className=' w-full min-h-[300px] flex items-center justify-center'>
                <p>Loading....</p>
            </div>
            } 
          {cc ? 
           <motion.div
                 initial={{ opacity: 0, x: 200}}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: false }}
                className=' snap-center'
                >
                <CodeChefWid data={cc}/>
            </motion.div>
            :
            <div className=' w-full min-h-[300px] flex items-center justify-center'>
                <p>Loading....</p>
            </div>
            } 
          {hrc ? 
            <motion.div
                initial={{ opacity: 0, x: -200}}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false }}
                className=' snap-center'
                >
                <HackerRankWid data={hrc}/>
            </motion.div>
            :
            <div className=' w-full min-h-[300px] flex items-center justify-center'>
                <p>Loading....</p>
            </div>
            } 
          {gfg ? 
            <motion.div
                initial={{ opacity: 0, x: 200}}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false }}
                className=' snap-center'
                >
                    <GeekForGeeksWid data={gfg}/>
            </motion.div>
            :
            <div className=' w-full min-h-[300px] flex items-center justify-center'>
                <p>Loading....</p>
            </div>
            } 
         </div>
      </div>
  )
}

export default CodingProfiles