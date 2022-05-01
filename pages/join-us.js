import Image from 'next/image'
const JoinUS =()=>{

    return (
        <>
<section className="mainbanner relative">
<Image src="https://www.vaishnavigroup.com/wp-content/uploads/2021/08/v-PIC2.jpg" layout="responsive" width={1400} height={600} />
<h1 className="absolute text-white  text-1xl md:text-3xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">JoinUS</h1>
</section>
<section className="container mt-5">
    <div className="block lg:grid  lg:grid-cols-2 gap-x-8">
        <div>
<Image src="https://www.vaishnavigroup.com/wp-content/uploads/2021/07/youtube-thumbnail.jpg" layout="responsive" width={620} height={420} />
        </div>
        <div className="flex  flex-col justify-center">
<h2 className=" text-[#1F1D5E] font-bold text-1xl md:text-3xl pb-5 pt-5">COME JOIN THE DREAM TEAM!</h2>
<p className='text-1xl pb-5'>
    Life at Vaishnavi resounds with inclusivity and heartfelt care. With a value system that prioritizes employees, the environment at work is like that of a family. Our all-embracing culture binds people together - creating an open, comfortable arena, and a fair opportunity to thrive. 
</p>
<p className='text-1xl pb-5'>
    Here, talent, hard work and sincerity are treasured above all, resulting in constant growth opportunities within the company. With an average employee tenure of 10 years and an attrition rate of less than 0.5%, the numbers speak for our employees’ hearts. 
</p>
<p className='text-1xl pb-5'>
    Vaishnavi Group is where people come to feel valued at work!
</p>
        </div>

        </div>

</section>
</>
    );
};

export default  JoinUS;