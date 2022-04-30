import Card from "../components/common/card";
import ProjectTab from "../components/common/ProjectTab/ProjectTab";
import data from '../data.json';

 const ResidentialCurrentProject=()=>{
 const residentialCurrentLists= data.portfolios.filter((portfolio)=>{
     return ((portfolio.projectType =="residential") &&(portfolio.projectStatus =="current"));
   });
    const projectTabData=[
     {
      menuName:"Current Projects",
      path:"/residential-current-projects",
      active:true
     },
     {
      menuName:"Completed Projects",
      path:"/residential-completed-projects",
      active:false
     }
   ];

    return(
 <div className="container mt-5">
    <ProjectTab active="current" projectTabData={projectTabData} />
    
   <h1 className="text-center font-bold text-2xl lg:text-4xl  pb-5 text-[#1F1D5E]">Current Residential Projects</h1>
   <div className="grid grid-cols-1 gap-y-8 gap-x-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
       { residentialCurrentLists.map((portfolio,index)=> <Card key={index} portfolio={portfolio} />)}
   </div>
</div>
    );

 };

 export default ResidentialCurrentProject;