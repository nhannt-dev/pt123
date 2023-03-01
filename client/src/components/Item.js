import React, { memo, useState } from 'react'
import icons from "../ultils/icons";

const indexs = [0, 1, 2, 3]

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons

const Item = ({ images, address, attributes, description, star, title, user }) => {
  const [isHoverHeart, setIsHoverHeart] = useState(false)
  return (
    <div className='w-full flex my-2 border-t border-orange-600 py-4'>
        <div className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'>
          {images.length > 0 && images.filter((i, index) => indexs.some(i => i === index))?.map((i, index) => (
            <img key={index} src={i} className='w-[140px] h-[120px] object-cover' />
          ))}
            <span className='bg-overlay-70 text-white px-2 rounded-md absolute left-1 bottom-3'>{images.length} ảnh</span>
            <span className='text-white absolute right-5 bottom-1' onMouseEnter={() => setIsHoverHeart(true)} onMouseLeave={() => setIsHoverHeart(false)}>
              {isHoverHeart ? <RiHeartFill size={26} color='red' /> : <RiHeartLine size={26} />}
            </span>
        </div>
        <div className='w-3/5'>
            <div className='flex justify-between gap-4 w-full'>
              <div className='text-red-600 font-medium break-all'>
                  <GrStar className='star-item' color='yellow' size={24} />
                  <GrStar className='star-item' color='yellow' size={24} />
                  <GrStar className='star-item' color='yellow' size={24} />
                  <GrStar className='star-item' color='yellow' size={24} />
                  <GrStar className='star-item' color='yellow' size={24} />
                {title}
              </div>
              <div className='w-[10%] flex justify-end'>
                <BsBookmarkStarFill size={24} color='orange'/>
              </div>
            </div>
            <div className='my-2 flex items-center justify-between'>
              <span className='font-bold text-green-700'>{attributes?.price}</span>
              <span>{attributes?.acreage}</span>
              <span>{address}</span>
            </div>
            <p className='text-gray-500 w-full h-[50px] whitespace-nowrap text-ellipsis overflow-hidden'>{description}</p>
            <div className='flex items-center my-5 justify-between'>
              <div className='flex items-center'>
                <img src='https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png' className='w-[30px] h-[30px] object-cover rounded-full' />
                <p>{user?.name}</p>
              </div>
              <div className='flex items-center gap-1'>
                <button type='button' className='bg-blue-700 text-white p-1 rounded-md'>
                  Gọi {user?.phone}
                </button>
                <button type='button' className='text-blue-700 px-1 rounded-md border border-blue-700'>
                Nhắn zalo
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default memo(Item)