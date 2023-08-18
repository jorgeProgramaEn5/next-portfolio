
import { TbLoaderQuarter } from 'react-icons/tb';


export default function loading() {
  return (
  <div className='bg-primary-100 h-[100vh]'>
    <div className=" bg-primary-100 h-[50vh] w-[100vw] flex items-center justify-center">
      <div className="  w-full flex flex-col items-center justify-center">
        <TbLoaderQuarter size={50} className='animate-spin'/>
        <h1 className='mt-5'>Cargando My Portfolio....</h1>
      </div>
    </div>
  </div>
  )
}
