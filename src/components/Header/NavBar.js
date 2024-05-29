import React from 'react'
import { Link } from 'react-router-dom'
import icons from '../../assets'
const NavBar = ({ setShowNav }) => {
  return (
    <div className="absolute top-0 left-0 w-screen z-50 h-screen bg-[#00000079]">
      <div className="w-64 bg-white z-20 h-screen">
        <div className="flex justify-between items-center p-4  ">
          <Link>
            <img
              src="https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/logo/nav-log.png"
              alt="Logo"
            />
          </Link>
          <icons.Close
            size={30}
            onClick={(e) => {
              e.stopPropagation()
              setShowNav(false)
            }}
          />
        </div>
        <ul className="flex flex-col gap-2 mt-5 text-base justify-center text-tGrayColor">
          <li className=" border-y-2 p-2">
            <Link className="ml-4">Home</Link>
          </li>
          <li className=" border-y-2 p-2">
            <Link className="ml-4">Shop</Link>
          </li>
          <li className=" border-y-2 p-2">
            <Link className="ml-4">About</Link> US
          </li>
          <li className=" border-y-2 p-2">
            <Link className="ml-4">Blog</Link>
          </li>
          <li className=" border-y-2 p-2">
            <Link className="ml-4">Categories</Link>
          </li>
          <li className="flex justify-between items-center border-y-2 p-2">
            <span className="ml-4 ">Pages</span>
            <icons.Plus className="mr-2" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
