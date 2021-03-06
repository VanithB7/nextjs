import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination,Autoplay } from "swiper";

const Carousel= ({carouselData})=>{

 return (
    <>
      <Swiper pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      modules={[Pagination, Autoplay]} 
      
      className="mySwiper">
          {carouselData.map((carouseldata,index)=>{
              return(
<SwiperSlide key={index} >
    <Image  width={1400}
        height={600} layout="responsive" alt="vaishnavi" className="w-full xl:h-[calc(100vh_-_90px)] object-cover" src={carouseldata.url} />
</SwiperSlide>
              );
          })}
   
        
      </Swiper>
    </>
  );

};
export default Carousel;