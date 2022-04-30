import Link from "next/dist/client/link";
import data from '../../../data.json';
import Image from 'next/image'
const Humbermenu=({setMenu})=>{

    return(
        <>
        <div className="fixed top-0 z-10 bg-white right-0 h-screen w-full">
           <span className="flex justify-end">
            <Image alt="vaishnavi logo" className="h-4 mt-5 pr-5" onClick={()=>setMenu(false)} src="https://www.vaishnavigroup.com/wp-content/uploads/2021/09/close.svg" />
            </span>
            <ul className="text-[#1F1D5E] text-1xl md:text-3xl  h-full font-bold  pt-10 px-16">

{data.menus.map((menu,index)=>{ 
    return(
        <li key={index} className="py-4"><Link href={menu.path} ><a className="hover:text-[#bda588]" onClick={()=>setMenu(false)} >{menu.menuName}</a></Link></li>
               
    );
})}
               
            
           </ul>
        </div> 
 </>

    )
};

export default Humbermenu;

