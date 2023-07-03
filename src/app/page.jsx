// import '../Styles/tailwind.css'

import {NavBarDos} from '@/Components/NavBarDos';
import { Banner } from '@/Components/Banner';
import { Skills } from '@/Components/Skills';
import { Projects  } from '@/Components/Projects';
import { ContactEmailjs } from '@/Components/ContactEmailjs';
import { Footer } from '@/Components/Footer';

export default async function Home() {
  await new Promise(resolve => setTimeout(resolve, 7000))

  return (
    <main className="">
      <NavBarDos />
      {/* <h1>Hola Vercel</h1> */}
      <Banner />
      <Skills />
      <Projects />
      <ContactEmailjs />
      <Footer />
    </main>
  )
}