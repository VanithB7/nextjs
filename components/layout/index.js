import Header from "../common/Header";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
const Layout =(props)=>{
    return (
<>
<Header/>
 <main>
<Navbar/>
     <div className="content">
      {props.children}
      </div>
    <Footer/>
</main> 
</>
);
};

export default  Layout;