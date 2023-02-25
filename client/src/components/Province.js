import React from 'react'
import { location } from '../ultils/constant'
import ProvinceBtn from './ProvinceBtn'

const Province = () => {
  return (
    <div className='flex items-center justify-center gap-5 py-5 shadow-md'>
        {location.map((item) => (
          <ProvinceBtn key={item.id} name={item.name} image={item.image} />
        ))}
    </div>
  )
}

export default Province