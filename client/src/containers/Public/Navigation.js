import React from 'react'
import { NavLink } from "react-router-dom";

const notActive = 'hover:bg-secondary2 px-4 h-full flex items-center bg-secondary1'
const active = 'hover:bg-secondary2 px-4 h-full flex items-center bg-secondary2'

const nav = [
    {
        name: 'trang chu',
        path: '/'
    },
    {
        name: 'cho thue phong tro',
        path: 'cho-thue-phong-tro'
    },
    {
        name: 'nha cho thue',
        path: 'nha-cho-thue'
    },
    {
        name: 'cho thue can ho',
        path: 'cho-thue-can-ho'
    },
    {
        name: 'cho thue mat bang',
        path: 'cho-thue-mat-bang'
    }
]

const Navigation = () => {
    return (
        <div className='w-screen flex justify-center items-center h-[40px] bg-secondary1 text-white'>
            <div className='w-1100 flex items-center text-sm font-medium h-full'>
                {nav.length > 0 && nav.map((item, index) => {
                    return (
                        <div key={index} className='h-full flex justify-center items-center'>
                            <NavLink to={item.path} className={({ isActive }) => isActive ? active : notActive}>
                                {item.name}
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Navigation