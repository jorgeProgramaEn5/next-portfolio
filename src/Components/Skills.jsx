import React from 'react'



export function Skills() {
  return (
    <section>
        <div className="mx-auto flex w-[70%] flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">

            <div className="p-6">
                <small className="text-gray-900 text-xs">Category</small>
                <h1 className=" text-[18px] md:text-2xl font-medium text-gray-700 pb-2">Your Heading</h1>
                <p>
                  I am a front-end developer with experience in various tools and technologies. 
                  My specialization lies in Next.js, React, and Figma technologies, although 
                  I also have experience in other essential tools such as HTML, CSS, JavaScript, 
                  Git, Bootstrap, and Tailwind.

                  <span className=' hidden md:block'>
                    I handle these tools with ease and use them to create attractive, responsive, 
                    and functional websites and applications. As a developer, my goal is always to 
                    provide high-quality solutions that exceed the expectations of my clients and 
                    end-users.
                  </span>
                </p>
            </div>
        </div>

    </section>
  )
}
