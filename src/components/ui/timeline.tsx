import React from 'react'
import Image from 'next/image'
import CL from '../../app/logo.svg'
import { RiArrowUpSLine } from "react-icons/ri";
import Steve from '../../app/assets/SteveJobs.jpeg'


interface cardprops{
    srcimage: string,
    alt:string,
    content:string
}
interface dateprops{
    date:string
}

export default function Timeline() {
  return (
    <div className=' px-16 py-20 md:py-0 flex flex-col justify-center align-middle md:block'>
      <JobUpdate />
      <Stories date='December 2023' />

      <JobUpdate />
      <Stories date='September 2023' />

      <JobUpdate />
      
     
    </div>
  );
}

const Stories: React.FC<dateprops> = ({date}) => {
    return (
      <div className='right md:px-6 md:py-2 md:ml-5 flex-grow flex flex-col md:flex-row md:gap-9 max-mobile:flex-wrap max-mobile:justify-center mr-28 md:mr-0  '>
        <div className='py-4  flex items-center border-r-4 border-dotted relative mobile:h-72 max-mobile:h-36 mobile:w-40 ml-4 max-mobile:w-2 '>
          <div className='left ml-auto md:py-7  '>
            <p className='text-xs w-40 text-slate-400 md:flex justify-end py-3 md:px-[20px] mr-4 md:mr-0 '>
              {date}
            </p>
          </div>

          <div className='absolute -right-2.5'>
            <div className='circle w-[17px] h-[17px] flex align-middle justify-center items-center   rounded-full bg-white border-blue-700 border-[3px] left-[279px] '></div>
          </div>
        </div>

        <div className=' md:px-6   py-2 md:ml-5 flex-wrap flex gap-9 justify-center md:justify-start ml-32  '>
          <Cards
            srcimage={Steve.src}
            alt='this is steve jobs'
            content='this is testing blog and i am doing assignment of duggup'
          />
          <Cards
            srcimage={Steve.src}
            alt='this is steve jobs'
            content='this is testing blog and i am doing assignment of duggup'
          />
          <Cards
            srcimage={Steve.src}
            alt='this is steve jobs'
            content='this is testing blog and i am doing assignment of duggup'
          />
          <Cards
            srcimage={Steve.src}
            alt='this is steve jobs'
            content='this is testing blog and i am doing assignment of duggup'
          />
          <Cards
            srcimage={Steve.src}
            alt='this is steve jobs'
            content='this is testing blog and i am doing assignment of duggup'
          />
          <Cards
            srcimage={Steve.src}
            alt='this is steve jobs'
            content='this is testing blog and i am doing assignment of duggup'
          />
        </div>
      </div>
    );
}

export function JobUpdate() {
    return (
      <div className=' flex w-full items-center flex-col md:flex-row'>
        <div className='jobsmalldetails   flex flex-col  items-center md:px-5 border-r-4 border-dotted relative h-40 mr-40 md:mr-0 pr-5 justify-center '>
          <div className='text-right md:py-4 md:mr-5 w-40 items-end flex flex-col  justify-center align-middle'>
            <div className='companyLogo'>
              <Image src={CL} width={40} height={40} alt='cl'></Image>
            </div>
            <div className='companyName'>
              <span className='font-bold capitalize'>Better Up</span>
            </div>
            <div className='companySite'>
              <span className='capitalize text-slate-400 text-[12px]'>
                san francisco Bay area
              </span>
            </div>
            <div className='joined'>
              <span className='capitalize text-slate-400 text-[12px]'>
                Joined
              </span>
            </div>
            <div className='dateofJoin'>
              <span className='capitalize text-slate-400 text-[12px]'>
                12/12/12
              </span>
            </div>
          </div>
          <div className='arrow absolute top-0 md:-right-[12px] -right-[12px] text-xl text-slate-400 md:text-xl'>
            <RiArrowUpSLine />
          </div>
          <div className='absolute -right-2.5 top-20'>
            <div className='circle w-[17px] h-[17px] flex align-middle justify-center items-center   rounded-full border-blue-700 border-[3px] left-[279px] bg-white '></div>
          </div>
        </div>

        <div className='mr-16 md:mr-0 flex-grow'>
          <div className='bg-white drop-shadow-md flex flex-col justify-center md:w-[725px] w-[344px] ml-20 items-start align-middle h-[99px] rounded-lg'>
            <div className='title text-xl px-5 font-bold'>VP Engineeerig</div>
            <div className='jobtype text-sm px-5 font-thin text-slate-400 py-1'>Full Time Remote</div>
          </div>
        </div>
      </div>
    );
}

const Cards :  React.FC<cardprops> = ({srcimage , alt , content}) =>{
    return (
      <div className='cards bg-white w-[344px] h-[226] gap-2 rounded-lg drop-shadow-lg '>
       
        <div className=' rounded-xl gap-2  '>
          <Image
            src={srcimage}
            width={344}
           height={136}
            alt={alt}
            className=' rounded-t-lg h-[136px] object-cover'
          />
        </div>
        <div className='title flex items-center justify-center align-middle '>
          <span className='text-sm w-[296px] flex align-middle text-center p-2 '>
          {content}
          </span>
        </div>
      </div>
    );
}

const DateCard: React.FC<dateprops> = ({date}) =>{
    return (
      <div className='dates flex bg-red-700 flex-col'>
        <div className="dtee"><span>{date}</span></div>
        
      </div>
    );
}