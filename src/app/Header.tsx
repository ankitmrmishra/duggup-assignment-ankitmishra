import React from 'react'
import Image from 'next/image'
import DuggupLogo from './logo.svg'
import { IoBookOutline } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";
import { PiChartBarHorizontalFill } from "react-icons/pi";
import { CgAddR } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";

function Header() {
  return (
    <div className="flex flex-col ">
      <div className='p-5 ml-[10rem] mr-[10rem] flex justify-between align-middle items-center border-b-2 border-dotted'>
          
          <div className="logo flex text-center items-center gap-1">
              <Image priority src={DuggupLogo} width={35} height={35} alt='Duggup log' /> 
              <span className='font-extrabold text-2xl'>duggup</span>
          </div>
          <div className="nav_components flex justify-between align-middle items-center gap-10 text-lg">
              <div className="nav_comp flex align-middle items-center gap-8">
                  <span className="home flex align-middle items-center justify-between text-center gap-2">
                      <RiHomeLine/> <span>Home</span>
                  </span>
                  <span className="explore flex align-middle items-center justify-between text-center gap-2">
                      <PiChartBarHorizontalFill/> <span>Explore</span>
                  </span>
                  <span className="learn flex align-middle items-center justify-between text-center gap-2">
                      <IoBookOutline/> <span>Learn</span>
                  </span>
              </div>
              <button className="post_button flex align-middle items-center border rounded-md text-xl pl-5 pr-5 pt-2 pb-2 border-slate-600 shadow-[0px_0px_rgba(0,0,0),0px_0px_rgba(0,0,0),0px_5px_rgba(80,80,80)] gap-2">
                  {/* <button className="px-8 py-0.5 rounded-lg  border-2 border-black uppercase bg-white text-neutarl-700 text-sm transition duration-200">
  Brutal
</button> */}
                  <CgAddR/> <span>Post</span>
              </button>
              <div className="profile flex align-middle items-center gap-3">
                  <div className="profile_pic rounded-full">
                      <Image src={DuggupLogo} width={50} height={50} alt='profile pic'/>
                  </div>
                  <div className="username">
                      Ankit Mishra
                  </div>
                  <div className="dropdown_icon text-lg">
                      <RiArrowDropDownLine/>
                  </div>
              </div>
          </div>

          </div>
         
          </div>
  )
}

export default Header