import React, { memo, useState } from 'react'
import icons from "../ultils/icons";

const indexs = [0, 1, 2, 3]

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons

const img = [
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/12/12/acfe5ec5-27ca-4864-80d5-045097e95b83_1639324508.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/12/12/411fcef9-6d2e-45e1-acd7-94579d55b9e5_1639324407.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/12/12/8d0ddefe-48fd-4941-8995-45fc5335a5c8_1639324506.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/12/12/847160b1-9cfd-462c-a764-f542945d6ba6_1639324401.jpg"
]

const Item = () => {
  const [isHoverHeart, setIsHoverHeart] = useState(false)
  return (
    <div className='w-full flex my-2 border-t border-orange-600 p-4'>
        <div className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'>
            <img src={img[0]} className='w-[140px] h-[120px] object-cover' />
            <img src={img[1]} className='w-[140px] h-[120px] object-cover' />
            <img src={img[2]} className='w-[140px] h-[120px] object-cover' />
            <img src={img[3]} className='w-[140px] h-[120px] object-cover' />
            <span className='bg-overlay-70 text-white px-2 rounded-md absolute left-1 bottom-1'>4 ảnh</span>
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
                DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
              </div>
              <div className='w-[10%] flex justify-end'>
                <BsBookmarkStarFill size={24} color='orange'/>
              </div>
            </div>
            <div className='my-2 flex items-center justify-between'>
              <span className='font-bold text-green-700'>3.7 trieu/thang</span>
              <span>28m2</span>
              <span>ajsdadaslkdjlksj</span>
            </div>
            <p className='break-all'>sdjlhvlafjshvlaihfighlsjhjSHDfljahsdjifakdjfksdhlakjdhsfklajshlhalkfhljhlishrlawuhaihfjvnlakjfdnlgakjhrgjerj;oie;ogj</p>
            <div className='flex items-center my-5 justify-between'>
              <div className='flex items-center'>
                <img src='https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png' className='w-[30px] h-[30px] object-cover rounded-full' />
                <p>nhannt-dev</p>
              </div>
              <div className='flex items-center gap-1'>
                <button type='button' className='bg-blue-700 text-white p-1 rounded-md'>
                  Goi 0356035625
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