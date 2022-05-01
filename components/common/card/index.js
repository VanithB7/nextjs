 import Image from 'next/image'
 const Card=({portfolio})=>{

    return(
<div className="rounded-md border border-gray-300 shadow-sm w-full">
   <Image alt={portfolio.projectTitle}  width={100}
        height={50}  layout="responsive" className="rounded-t-md   object-cover h-72  w-full" src={portfolio.projectImage} />
   <div className="p-5">
    <h2 className="font-bold text-2xl  text-[#1F1D5E]">{portfolio.projectTitle}</h2>
    <p className="mb-5 mt-4">{portfolio.projectLocation}</p>
    {portfolio.projectNoOfUnit && (<div className="grid grid-cols-4 border-b-grey-400 mt-2"><p  className="col-span-1">No of units</p><p  className="col-span-3">{portfolio.projectNoOfUnit}</p></div>)}
    {portfolio.type && (<div className="grid grid-cols-4 mt-2"><p className="col-span-1">Type</p> <p className="col-span-3 break-words ">{portfolio.type}</p></div>)}
    {portfolio.rera && ( <div  className="grid grid-cols-4 mt-2 "><p  className="col-span-1"> RERA</p><p  className="col-span-3 break-words ">{portfolio.rera}</p> </div>)}
   </div>
</div>
    );

 };

 export default Card;