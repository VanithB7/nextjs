const ContactUs =()=>{
    return (
<section className="container">
    <h1 className="text-[#1F1D5E] text-3xl font-bold text-center mb-10">Contact Us</h1>
    <div className="block lg:grid grid-cols-12 gap-x-8">
        <div className="lg:col-span-4 xl:col-span-3 mt-5">
<h2 className="text-[#1F1D5E] text-2xl text-center"> leave a message. We love to hear from you!</h2>
<form className="mt-5">
    <input type="text" className="border border-[#bda588] px-2 py-4 w-full mb-5" placeholder="Name" id="name" />
        <input type="email" className="border border-[#bda588] px-2 py-4 w-full mb-5" placeholder="Email id" id="email" />
          <input type="text" className="border border-[#bda588] px-2 py-4 w-full mb-5" placeholder="Mobile" id="mobile" />
             <input type="text" className="border border-[#bda588] px-2 py-4 w-full mb-5" placeholder="Phone" id="phone" />
             <select className="border border-[#bda588] px-2 py-4 w-full mb-5" name="">
                <option value="">I am interested to know more about</option><option value="Vaishnavi Serene">Vaishnavi Serene</option><option value="Vaishnavi Oasis">Vaishnavi Oasis</option><option value="Vaishnavi Life">Vaishnavi Life</option><option value="Upcoming Projects">Upcoming Projects</option><option value="Other Enquiries">Other Enquiries</option>
             </select>
             <textarea className="border border-[#bda588] px-2 py-4 w-full mb-5" placeholder="Message">

             </textarea>
             <input type="submit" className="text-black bg-[#bda588] px-6 py-2" value="submit" />
</form>
        </div>
         <div  className="lg:col-span-8 xl:col-span-9 mt-5">
            <iframe
            width="100%"
          height="600"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.993628620751!2d77.59575911413513!3d12.972259118375275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1460e51c5111%3A0x7726317a3c7628aa!2sVaishnavi%20Group!5e0!3m2!1sen!2sin!4v1602343331772!5m2!1sen!2sin"></iframe>
        </div>
    </div>

</section>
    );
};

export default  ContactUs;