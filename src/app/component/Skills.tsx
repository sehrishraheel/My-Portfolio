import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="flip-right">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-gray-500 pt-2'>
                    I have strong proficiency in programming languages such as Python, JavaScript, and C++. I&apos;m experienced in web development using HTML, CSS, and React, and skilled in back-end technologies like Node.js. I excel in problem-solving and thrive in Agile team environments.
                </p>
            </div>
            <div className='grid grid-cols-2 text-accentdata-aos="flip-right" text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="flip-right">Typescript</h2>
                    <h2 data-aos="flip-right">HTML</h2>
                    <h2 data-aos="flip-right">CSS</h2>
                </div>
                <div className='space-y-2'>
                    < h2 data-aos="flip-right">Tailwind</h2>
                    <h2 data-aos="flip-right">Node.JS</h2>
                    <h2 data-aos="flip-right">Next.JS</h2>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Skills
