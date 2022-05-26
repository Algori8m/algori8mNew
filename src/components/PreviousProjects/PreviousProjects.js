import React from 'react'
import images from '../../assets/images'
import './previousProject.css'


function PreviousProjects({portfolioSection}) {

  return (
    <section className='previousProjects' ref={portfolioSection}>
        <h2 className='previousProjectsTitle'>
            Our Previous Works
        </h2>

        <ul className='previousProjectsList'>
            <li className='previousProject'>
                <div className='previousProjectImageWrapper'>
                    <img src={images['digitall']} alt=''/>
                </div>

                <div className='previousProjectInfo'>
                    <h4 className='previousProjectName'>
                        Digitall
                    </h4>
                    <p className='previousProjectDesc'>
                        A Demo Landing Page For Enterprise
                    </p>
                </div>
            </li>
            <li className='previousProject'>
                <div className='previousProjectImageWrapper'>
                    <img src={images['oliverJames']} alt=''/>
                </div>

                <div className='previousProjectInfo'>
                    <h4 className='previousProjectName'>
                        Oliver James
                    </h4>
                    <p className='previousProjectDesc'>
                        A Freelancer landing page
                    </p>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default PreviousProjects
