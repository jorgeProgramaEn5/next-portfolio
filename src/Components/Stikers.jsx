'use client'
import { useState } from "react"
import Image from "next/image"
import { git, javascript, bootstrap, eye_closed, eye_open } from "@/Assets/indice"
import { skills } from "../Constant/indice"

export default function Stikers() {
    const [showSkilss, setShowSkilss] = useState(false);
  return (
    <div onClick={() => setShowSkilss((prev)=>!prev)} className=" bg-purple-600/80 flex flex-col justify-start items-start cursor-pointer relative">
        <div className=' lg:absolute bottom-0 left-0 bg-slate-100 bg-opacity-[0.95] inline-flex justify-center items-center rounded-2xl mt-6 py-1 px-4 shadow-md shadow-slate-400'>
            <div className="flex flex-row justify-center items-center opacity-[0.90]">
                <div className="flex justify-center items-center -space-x-3">
                    <div className="w-8 h-8 border-2 bg-background-100 border-white rounded-full p-1">
                        <Image src={git} alt="skills-"/>
                    </div>
                    <div className="w-8 h-8 border-2 bg-background-100 border-white rounded-full p-1">
                        <Image src={bootstrap} alt="skills-"/>
                    </div>
                    <div className="w-8 h-8 border-2 bg-background-100 border-white rounded-full p-1">
                        <Image src={javascript} alt="skills-"/>
                    </div>
                    <div className="w-8 h-8 border-2 bg-background-100 border-white rounded-full p-1">
                        <Image src={showSkilss ? eye_open : eye_closed } alt="skills-"/>
                    </div>

                    
                </div>
                <div className="flex flex-col justify-center items-start ml-3 text-black">
                    <p className="text-[20px] font-[800]">7+</p>
                    <p className=" relative bottom-1 text-[16px]">skills</p>
                </div>
            </div>
        </div>

        <div className={` ${showSkilss ? 'inline-flex' : ' hidden'} flex-col items-start justify-between bg-slate-100 bg-opacity-[0.95] absolute rounded-2xl -bottom-[230px] left-0 mt-2 animate-wiggledown pt-2 px-3`}>
            {skills.map( skill => ( 
                <div key={skill.id} className=" flex justify-start items-center pb-2">
                    <div className="w-[22px] h-[22px] mr-2">
                        <Image src={skill.image} alt="bootstrap"/>
                    </div>
                    <p className=" text-black">{skill.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
