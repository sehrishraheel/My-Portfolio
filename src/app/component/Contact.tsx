import React from 'react'
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
     <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="flip-right">Reach Out</h2>
            <p className='text-gray-600 text-[18px] pt-2' data-aos="flip-right">
                Drop me a line, give me a call, or send me a message,I am always open to networking and discussing new opportunities.
            </p>
            <div className='flex gap-3 items-center' data-aos="flip-right">
            <IoMdMail size={30} /> sehrishm322@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="flip-right">
            < BsFillTelephoneFill size={30} /> 0900-78601
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex  flex-col gap-1' data-aos="flip-right">
                <label htmlFor="name">Name</label>
                <input type='text'
                className='h-[40px] bg-transparent border border-accent'
                id='name' />
            
        </div>
        <div className='flex  flex-col gap-1' data-aos="flip-right">
                <label htmlFor="email">Email</label>
                <input type='text'
                className='h-[40px] bg-transparent border border-accent'
                id='email' />
            
        </div>
        <div className='flex  flex-col gap-1' data-aos="flip-right">
                <label htmlFor="message">Message</label>
                <textarea 
                className='bg-transparent border border-accent'
                id='msg' rows={8}>
                </textarea>
             </div>
             <button className='bg-accent p-2 px-6' data-aos="flip-right">Send</button>
        </div>
        </div> 
    </div>
  )
}

export default Contact
