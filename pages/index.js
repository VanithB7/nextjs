import Carousel from "../components/common/carousel";
const HomePage =()=>{

const carouselData=[
    {
        url:'https://www.vaishnavigroup.com/wp-content/uploads/2021/06/Frame-18-1400x630-3.jpg',
    },
    {
        url:'https://www.vaishnavigroup.com/wp-content/uploads/2022/04/Artboard-1-1-min.png',
    },
    {
        url:'https://www.vaishnavigroup.com/wp-content/uploads/2021/12/Premiere-1400x630-1.jpg',
    },
    {
        url:'https://www.vaishnavigroup.com/wp-content/uploads/2021/06/vaishnavi_icon_slider.jpg',
    }
];

    return (
<div>
<Carousel carouselData={carouselData} />
</div>
    );
};

export default  HomePage;