import React from "react";
import "./Home.css";
import Product from "./Product";

function Home (){
    return (
        <div className="home">
            <div className="home_container">
                <img 
                  className="home_image"
                  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                  alt="img"  
                />
            </div>

            <div className="home_row">
                  <Product 
                    id="1"
                    title="The Lean Startup: How Constant innovation Creates Radically Successful Businesses Paperback" price={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                  />
                  <Product 
                    id="2"
                    title=" Cuisinart SM-50R 5.5-Quart Stand Mixer, Ruby Red" price={199} 
                    image="https://m.media-amazon.com/images/I/71BtySVK6kL._AC_UL320_.jpg"
                    rating={4}
                  />
            </div>

            <div className="home_row">
                  <Product
                    id="3"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor " price={199.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    rating={3}
                  />
                  <Product
                    id="4"
                    title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal with Sengled Bluetooth bulb" price={39} 
                    image="https://m.media-amazon.com/images/I/41TCwJH-ZAL._AC_UY218_.jpg"
                    rating={5}
                  />
                  <Product
                    id="5"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={598.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    rating={4}
                  />
            </div>

            <div className="home_row">
                  <Product
                     id="6"
                     title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120X1440" price={1094.98} 
                     image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                     rating={4}
                  />
            </div>
        </div>
    );
}

export default Home;