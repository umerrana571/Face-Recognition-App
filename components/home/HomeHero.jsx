import { Button } from '@nextui-org/react'
import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import Wrapper from '../Wrapper'
import NextLink from 'next/link';
const HomeHero = () => {
  return (
    <div className='h-screen bg-[url("/hero-img.jpg")] bg-no-repeat bg-cover flex bg-blend-overlay bg-black/50 items-center justify-center'>
       <Wrapper>
       <div className='text-white max-w-3xl mx-auto w-full text-center space-y-5 md:space-y-10'>
        <h1 className='text-3xl/snug text-balance font-bold sm:text-4xl/snug md:text-5xl/[1.3] lg:text-6xl/[1.3]'>Image Recognition System For School</h1>
        <p className='text-balance'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea cumque iusto, tempore quas provident.</p>
        <Button as={NextLink} href="create-user" color='warning' variant='shadow' endContent={<FaArrowRight/>} >Create User</Button>
        <p className='text-balance font-bold text-center  text-white flex'>Umar Uz Zaman</p>
        
        </div>
       </Wrapper>
    </div>
  )
}

export default HomeHero