import Link from "next/link";
const ProjectTab=({projectTabData})=>{
    return(
     <div className="bg-white-500 shadow  mb-5 w-full lg:w-1/2  m-auto">
          <ul className="flex justify-around  h-24 items-center">

             {projectTabData.map((projecttabdata,index)=>{

                 return(
                      <li key={index} className="font-bold text-1xl lg:text-2xl ">
                  
                  <Link  href={projecttabdata.path}><a className={projecttabdata.active?'text-[#bda588]':'text-[#1f1d5e] hover:text-[#21ace2]'} >{projecttabdata.menuName}</a></Link>
              </li>
                 );

             })
            }
              
           
          </ul>

      </div>

    );
};

export default ProjectTab;