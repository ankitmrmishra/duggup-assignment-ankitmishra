import React from 'react';
import Image from 'next/image';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaExternalLinkAlt } from "react-icons/fa";
interface ProfileProps {
  image: string;
  username: string;
  about: string;
  currentCompany: string;
  companyLogo: string;
  designation: string;
  links: string;
}

const Profile: React.FC<ProfileProps> = ({ image, username, about, currentCompany, companyLogo, designation, links }) => {
  return (
      <div className=' grid grid-cols-6  p-8 ml-[13rem] mr-[13rem] '>
         
          <div className="left_side  col-end-2">
              <div className="profile_picture">
                   <Image src={image} width={120} height={120} alt="Profile Image" />
              </div>
              <div className="user_name text-slate-500 w-[120px] h-[56px] flex justify-center align-middle items-center capitalize">
               <p>{username}</p>
              </div> 
          </div>
           <div className="grid grid-cols-6 col-start-2 col-end-7">

          <div className="center col-start-1 col-end-5">
              <div className="about_desc">
                    <p>About: {about}</p>
              </div>

          </div>
          <div className="right_side grid col-start-6 justify-items-end">
              
          <Image src={companyLogo} width={60} height={60} alt="Profile Image" />
          <p className='font-bold capitalize'>{currentCompany}</p>
      <p className='text-slate-400 text-[13px]'> {designation}</p>
              </div>
              <div className="btn grid    col-end-2">
                  <button className="post_button flex align-middle justify-center text-center items-center border rounded-md text-xl pl-5 pr-5 pt-2 pb-2 border-slate-600 shadow-[0px_0px_rgba(0,0,0),0px_0px_rgba(0,0,0),0px_5px_rgba(80,80,80)] gap-2">
                      Follow
                   </button>
              </div>
          
     
     
    
              <div className="link_section col-start-6 gap-10  flex justify-end justify-items-end ">
                  <div className="linkkkk mt-5  gap-1 flex justify-center items-center align-middle ">
                      <a className=' flex justify-center items-center align-middle ' href={links}>{links} </a>
                      <FaExternalLinkAlt />
                  </div>
                <div className='mt-6 justify-items-end grid text-xl text-gray-500'><HiOutlineDotsHorizontal />
                  </div>
              </div>
      
          
       </div>
      
    </div>
  );
};

export default Profile;
