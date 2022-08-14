import React from "react";
import background_img from "../Home/e-commerce.jpg";

const Home = () => {
    return (
        <div>
            <img style={{ backgroundImage: `url(${background_img})`, height:"500px", width:"100%" }} />
        </div>
    )
}

export default Home;