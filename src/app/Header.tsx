import React from 'react'
import Image from 'next/image'
import DuggupLogo from './logo.svg'
import { IoBookOutline } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";
import { PiChartBarHorizontalFill } from "react-icons/pi";
import { CgAddR } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import Sam from "./assets/sam.jpeg";
import myprof from "./assets/68045075.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


function Header() {
  return (
    <div className='md:flex flex-col h-full '>
      <div className='p-5 md:ml-[10rem] md:mr-[10rem] flex justify-between align-middle items-center border-b-2 border-dotted '>
        <div className='logo flex text-center items-center md:items-center md:justify-start justify-center  align-middle md:gap-1'>
          <Image
            priority
            src={DuggupLogo}
            width={60}
            height={60}
            alt='Duggup log'
          />
          <span className='font-extrabold md:text-2xl text-xl'>duggup</span>
        </div>
        <div className='nav_components flex justify-between align-middle items-center gap-10 text-lg '>
          <div className='nav_comp flex align-middle justify-center drop-shadow-md items-center gap-8 md:relative  bottom-0 bg-gray-50 md:bg-transparent w-full left-0 h-16 fixed z-20'>
            <span className='home flex align-middle items-center justify-between text-center gap-2'>
              <RiHomeLine /> <span>Home</span>
            </span>
            <span className='explore flex align-middle items-center justify-between text-center gap-2'>
              <PiChartBarHorizontalFill /> <span>Explore</span>
            </span>
            <span className='learn flex align-middle items-center justify-between text-center gap-2'>
              <IoBookOutline /> <span>Learn</span>
            </span>
          </div>
          <button className='post_button flex align-middle items-center md:border rounded-md text-xl md:pl-5 md:pr-5 pl-2 ml-14  pt-2 pb-2 md:border-slate-600 md:shadow-[0px_0px_rgba(0,0,0),0px_0px_rgba(0,0,0),0px_5px_rgba(80,80,80)] gap-2'>
            <CgAddR /> <span className='text-[15px]'>Post</span>
          </button>
          <div className='profile flex align-middle md:justify-between justify-center items-center md:gap-3 '>
            <div className='profile_pic md:flex align-middle items-center justify-center   rounded-full '>
              <div className='profile_picture rounded-full'>
                <Image
                  src={myprof.src}
                  width={120}
                  height={120}
                  alt='Profile Image'
                  className='rounded-full'
                />
              </div>
            </div>
            <div className='username text-sm hidden  md:block'>
              Ankit Mishra
            </div>
            <div className='dropdown_icon text-lg '>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <RiArrowDropDownLine />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log Out</DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header