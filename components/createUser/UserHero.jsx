import React from 'react'
import UserProfile from '../forms/UserProfile'
import { Button } from '@nextui-org/react'
import { FaBackward } from 'react-icons/fa'

const UserHero = () => {
  return (
    <div className='relative h-screen bg-[url("/hero-img.jpg")] bg-no-repeat bg-cover flex bg-blend-overlay bg-black/40'>
      <UserProfile/>
      
    </div>
  )
}

export default UserHero