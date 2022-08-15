import React from "react";
import { MdRepeat } from "react-icons/md";
import background_img from "../Home/e-commerce.jpg";

const Home = () => {
    return (
        <div>
            <img style={{ backgroundImage: `url(${background_img})`, backgroundSize:'cover', backgroundPosition:'center center', backgroundRepeat:'no-repeat', height:'500px', width:'100%' }} />
            {/* <img src={background_img} style={{height:'500px', width:'100%'}}></img> */}
        </div>
    )
}

export default Home;
