import TargetSkills from "@/Components/Skills/TargetSkills"
import { Footer } from "@/Components/Footer"
import { targetTools } from "@/Constant/indice"

export default function HomeSkills() {
  return (
    <main className=" bg-gray-900 w-full overflow-hidden text-white ">
      <div className='flex justify-center items-center w-full flex-col'>
        <div className='w-full min-h-[80vh]'>
          <div className='pt-[150px] md:pt-[200px] md:pb-24 flex flex-col justify-center items-center w-full'>
            <div className=" w-full justify-center items-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 sm:px-8 md:px-10 lg:px-24 pb-10">
                {
                    targetTools.map(item => (
                        <TargetSkills 
                            key={item.id} 
                            num={item.id} 
                            image={item.image}
                            name={item.title}
                            area={item.area}
                        />
                    ))
                }
            </div>
                
          </div>
        </div>
        <Footer/>
      </div>
    </main>
  )
}
