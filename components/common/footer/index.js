import {FaFacebook,FaInstagram,FaYoutube,FaLinkedin} from "react-icons/fa";
const Footer =()=>{

    return (
<footer className="container mt-5">
    <div className="hidden  lg:grid lg:grid-cols-3">
<div>
<div className="flex justify-center items-center h-14">
<span className="h-1 w-full bg-[#1F1D5E] "></span>
</div>
    <div>
        <h4 className="text-[#1F1D5E] text-3xl mt-5 mb-5">Email Id</h4>
        <ul className="text-[#1F1D5E]">
            <li><a href="">sales@vaishnavigroup.com</a></li>
            <li><a href="">mail@vaishnavigroup.com</a></li>
        </ul>
    </div>
     <div className="">
        <h4 className="text-[#1F1D5E] text-3xl mt-5 mb-5">Address</h4>
        <ul className="text-[#1F1D5E]">
            <li>#2/2, Walton Road,</li>
            <li>Off Vittal Mallya Road,</li>
            <li>Bengaluru, Karnataka </li>
            <li>India – 560001</li>
        </ul>
    </div>
</div>
<div>
  <ul className="flex justify-center items-center h-14 ">
            
<li className="px-3"><a href="">{<FaFacebook size={42} />}</a></li>
<li className="px-3"><a href="">{<FaInstagram size={42} />}</a></li>
<li className="px-3"><a href="">{<FaYoutube size={42} />}</a></li>
<li className="px-3"><a href="">{<FaLinkedin size={42} />}</a></li>
            
        </ul>
<div className="flex justify-center">
    <div className="h-24 w-1 bg-[#1F1D5E]"></div>
</div>
<div className="mail-listing text-center"> 
<h4 className="text-[#1F1D5E] text-3xl mt-5">Join Our Mailing List</h4>
<div>
<input type="text" className="border px-3 py-4 border-[#bda588] mt-5 w-full" />
</div>
<div>
<input type="submit" className="bg-[#bda588] text-white text-center px-16 py-4 mt-5 " value="SUBSCRIBE" />
</div>
</div>
</div>
<div>
<div>
    <div className="flex justify-center items-center h-14">
<span className="h-1 w-full bg-[#1F1D5E] "></span>
</div>
        <h4 className="text-right text-[#1F1D5E] text-3xl mt-5 mb-5">Useful Links</h4>
        <ul  className="text-right text-[#1F1D5E]">
            
<li><a href="">Residential Projects</a></li>
<li><a href="">Commercial Projects</a></li>
<li><a href="">Director’s Message</a></li>
<li><a href="">Community Outreach</a></li>
<li><a href="">Awards & Recognition</a></li>
            
        </ul>
    </div>
     <div className="flex flex-col">
        <h4 className="text-right text-[#1F1D5E] text-3xl mt-5 mb-5">Phone No</h4>
        <ul className="text-right text-[#1F1D5E]">
            <li>Sales Enquiries : 080 – 46972500</li>
            <li>Other Enquiries : +91-80-6696-6692 / 93 / 69</li>
        </ul>
    </div>

</div>
    </div>
    <div className="copyright mt-5">
        <p className="text-center text-[#1F1D5E]">
Copyright Vaishnavi Group. All Rights Reserved © 2021 | Terms Of Use
</p>
    </div>
</footer>
    );
};

export default  Footer;