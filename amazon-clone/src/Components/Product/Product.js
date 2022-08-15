import React from "react";
import './Product.css';
import bag_img from "../Product/bag.jpg";
import oven_img from "../Product/oven.jfif";
import book_img from "../Product/book.jfif";
import alexa_img from "../Product/alexa.jfif";
import iPad_img from "../Product/iPad.jfif";
import Led_img from "../Product/Led.jfif";

const Product = () => {
    return (
        <div class="product-div">
            <div className="top-div">
                <div className="first-div">
                    <p>Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)</p>
                    <p>$11.96</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <img src={bag_img} style={{height:"400px", width:"50%"}}/>
                    <p><button type="button" className="btn">Add to Basket</button></p>
                    
                </div>

                <div className="second-div">
                    <p>IFB 30 LConvection Microwave Oven (30BRC2, Black, With Starter Kit)</p>
                    <p>$239</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <img class="oven-img" src={oven_img} style={{height:"300px", width:"60%"}}/>
                    <p><button type="button" className="btn">Add to Basket</button></p>
                    
                </div>

            </div>

            <div className="middle-div">
                <div className="third-div">
                    <p>All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback</p>
                    <p>$199.99</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <img class="book-img" src={book_img} style={{height:"300px", width:"50%"}}/>
                    <p><button type="button" className="btn">Add to Basket</button></p>
                </div>

                <div className="fourth-div">
                    <p>Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric</p>
                    <p>$98.99</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <img class="alexa-img" src={alexa_img} style={{height:"300px", width:"50%"}}/>
                    <p><button type="button" className="btn">Add to Basket</button></p>
                </div>

                <div className="fifth-div">
                    <p>New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th generation)</p>
                    <p>$598.99</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <img class="iPad-img" src={iPad_img} style={{height:"300px", width:"60%"}}/>
                    <p><button type="button" className="btn">Add to Basket</button></p>
                </div>

            </div>

            <div className="bottom-div">
                <div className="sixth-div">
                    <p>Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440</p>
                    <p>$1094.98</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <img class="Led-img" src={Led_img} style={{height:"300px", width:"50%"}}/>
                    <p><button type="button" className="btn">Add to Basket</button></p>
                </div>
                    
            </div>
        
        </div>
    )
}

export default Product;
