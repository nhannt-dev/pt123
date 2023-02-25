import React from 'react'
import SearchItem from '../../components/SearchItem'
import { text } from '../../ultils/constant';
import icons from "../../ultils/icons";

const { BsChevronRight, HiOutlineLocationMarker, TbReportMoney, RiCrop2Line, MdOutlineHouseSiding, FiSearch } = icons

const Search = () => {
  return (
    <div className='p-[10px] gap-2 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around'>
      <SearchItem fontWeight={true} IconBefore={<MdOutlineHouseSiding />} IconAfter={<BsChevronRight />} text={'Phòng trọ, nhà trọ'} />
      <SearchItem IconBefore={<HiOutlineLocationMarker />} IconAfter={<BsChevronRight />} text={'Toàn quốc'} />
      <SearchItem IconBefore={<TbReportMoney />} IconAfter={<BsChevronRight />} text={'Chọn giá'} />
      <SearchItem IconBefore={<RiCrop2Line />} IconAfter={<BsChevronRight />} text={'Chọn diện tích'} />
      <button type='button' className='outline-none py-2 px-4 w-full bg-secondary1 text-[13.3px] flex items-center justify-center gap-2 text-white'>
        <FiSearch />
        Tìm kiếm
      </button>
    </div>
  )
}

export default Search