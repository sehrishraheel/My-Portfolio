import React from 'react'
import Heading from './Heading'
import Card  from './Card'

const data =[
    {
        id: 0,
        title: "Static Interactive Resume",
        desc: "A Typescript-based interactive resume buit with HTML and CSS with Next.JS",
        img:"/project0.jpg",
        tags: ["HTML", "CSS", "Typescript"]
    },
    {
        id: 1,
        title: "Todo List",
        desc: "A  React and Typescript-based app for managing and organizing your task efficiently.",
        img:"/project1.jpg",
        tags: ["React","Node","Typescript", "CSS" ]

    },
    {
        id: 2,
        title: "Countdown Timer",
        desc: "A Next.js and Typescript powered website to track time with an interactive countdown feature",
        img:"/project2.jpg",
        tags: ["NEXT.JS", "Node", "CSS", "Typescript"]  
    }
]

const projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        
        />))}
      </div>
      
    </div>
  )
}

export default projects
