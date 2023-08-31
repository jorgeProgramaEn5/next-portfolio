// import '../Styles/tailwind.css'

import {NavBarDos} from '@/Components/NavBarDos';
import { Banner } from '@/Components/Banner';
import { Skills } from '@/Components/Skills';
import { Projects  } from '@/Components/Projects';
import { ContactEmailjs } from '@/Components/ContactEmailjs';
import { Footer } from '@/Components/Footer';

export default function Home() {
  return (
    <main className=" bg-gray-900 w-full overflow-hidden text-white">
      <div className='flex justify-center items-center w-full'>
        <div className='w-full'>
          {/* <NavBarDos /> */}
          <Banner />
          <Skills />
          <Projects />
          <ContactEmailjs />
          <Footer />
        </div>
      </div>
    </main>
  )
}