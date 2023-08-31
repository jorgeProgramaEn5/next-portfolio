'use client'
import { ProjectCard } from '@/Components/ProjectCard';

export default function GalleryPojects({projects}) {
  return (
    <>
        {
            projects.map((project, index)=>{
                return (    
                <ProjectCard  
                    key={index}
                    {...project}
                />
            )})
        }
    </>
  )
}
