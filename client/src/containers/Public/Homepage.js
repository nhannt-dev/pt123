import React from 'react'
import { text } from '../../ultils/constant'
import Search from './Search'

const Homepage = () => {
  return (
    <div className='border border-red-500 w-full flex flex-col gap-3'>
      <Search />
      <div>
        <h1 className='text-[28px] font-bold'>{text.HOME_TITLE}</h1>
        <p className='text-sm text-gray-700'>{text.HOME_DESCRIPTION}</p>
      </div>
    </div>
  )
}

export default Homepage