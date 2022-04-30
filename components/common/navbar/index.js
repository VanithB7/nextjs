import React, { useEffect, useState } from "react";
import {HiMenuAlt2} from 'react-icons/hi'
import Humbermenu from "./Humbermenu";
import Image from 'next/image'

const Navbar =()=>{
const [scroll, setScroll] = useState(0);
const [menu, setMenu] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 90;
      setScroll(scrollCheck);
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);
    return (
      <>
<div className={scroll?'container flex justify-between fixed bg-[#5b6664]  top-0 text-white ':'container flex justify-between text-[#1F1D5E]'}>
    <div className="logo">
        <Image alt="menu close"  width={100}
        height={50} className=" h-20 sm:h-24" src={scroll?'https://www.vaishnavigroup.com/wp-content/uploads/2019/10/vaishnavi-logofinal.svg':'https://www.vaishnavigroup.com/wp-content/uploads/2022/02/logo.svg'} />
    </div>
    <div className="hamburg-icon flex items-center" onClick={()=>setMenu(true)}>
        <span className='text-xl'>MENU</span>
        <HiMenuAlt2 size={32}/>
    </div>
</div>
{menu &&<Humbermenu setMenu={setMenu}/> }
</>
);
};

export default  Navbar;