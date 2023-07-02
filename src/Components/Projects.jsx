import React from 'react';
import { projects, projectsPersonales, projectsBussiness } from '@/Constant/indice';
// import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from '@/Components/ProjectCard';
import { BiMoneyWithdraw, BiBriefcaseAlt2 } from 'react-icons/bi';



export function Projects() {
  return (
    // <section className='project' id='projects'>
    //     <Container>
    //         <Row>
    //             <Col>
    //                 <h2>Projects</h2>
    //                 <p>
    //                     I've split my projects into two main categories: personal projects and contracted projects. My personal projects are where I get to explore 
    //                     my own ideas and creative solutions without any restrictions. 
                        
    //                     <span>They come from my curiosity and passion for technology.</span> On the other hand, my 
    //                     contracted projects are the result of working with external clients and collaborators. 
                        
    //                     <span>In these projects, I have to adapt to their needs and 
    //                     expectations while keeping my focus on quality and effectiveness.</span>
    //                 </p>
    //                 <TabContainer id="project-tabs" defaultActiveKey="first">
    //                     <Nav variant="pills" className='nav-pills justify-content-center aling-items-center'>
    //                         <Nav.Item>
    //                             <Nav.Link eventKey="first"><span>All</span></Nav.Link>
    //                         </Nav.Item>
    //                         <Nav.Item>
    //                             <Nav.Link eventKey="second"><BiMoneyWithdraw className='icons-hidden' size={25}/><span className='span-hidden'>Personal</span></Nav.Link>
    //                         </Nav.Item>
    //                         <Nav.Item>
    //                             <Nav.Link eventKey="third"><BiBriefcaseAlt2 className='icons-hidden' size={25}/><span className='span-hidden'>Contracting</span></Nav.Link>
    //                         </Nav.Item>
    //                     </Nav>
    //                     <TabContent >
    //                         <TabPane eventKey="first">
    //                             <Row className='container-items-nav'>
    //                                 {
    //                                     projects.map((project, index)=>{
    //                                         return (    
    //                                         <ProjectCard  
    //                                             key={index}
    //                                             {...project}
    //                                         />
    //                                     )})
    //                                 }
    //                             </Row>
    //                         </TabPane>
    //                         <TabPane eventKey="second">
    //                             <Row className='container-items-nav'>
    //                                 {
    //                                     projectsPersonales.map((project, index)=>{
    //                                         return (    
    //                                         <ProjectCard  
    //                                             key={index}
    //                                             {...project}
    //                                         />
    //                                     )})
    //                                 }
    //                             </Row>
    //                         </TabPane>
    //                         <TabPane eventKey="third">
    //                             <Row className='container-items-nav'>
    //                                 {
    //                                     projectsBussiness.map((project, index)=>{
    //                                         return (    
    //                                         <ProjectCard  
    //                                             key={index}
    //                                             {...project}
    //                                         />
    //                                     )})
    //                                 }
    //                             </Row>
    //                         </TabPane>
    //                     </TabContent>
    //                 </TabContainer>
    //             </Col>
    //         </Row>
    //     </Container>
    // </section>
    <section className='' id='projects'>
    <div className='  flex flex-col justify-center items-center pt-7' id='projects'>
        <div className="inline-flex rounded-md shadow-sm" >
            <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Profile
            </button>
            <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Settings
            </button>
            <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Messages
            </button>
        </div>
        <div>
            <div className='  grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-w-[90%] pt-7'>
            {
                projects.map((project, index)=>{
                    return (    
                    <ProjectCard  
                        key={index}
                        {...project}
                    />
                )})
            }
            </div>
        </div>
    </div>
    </section>
  )
}

