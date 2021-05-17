import React from "react";
import "./home.css";
import "./bn.jpg";
import Product from "./Product";

function Home  ()  {
  return (
    <div className="home">
      <div className="homw__container">
        <img src="https://www.amazon.com/b/?node=20338496011&pf_rd_r=CRYMTB7Q631B7WZMS4D3&pf_rd_p=3958b901-1980-474c-ab9f-2a46a22ba202" alt="BANNER" className="home__image" />
      </div>

      <div className="home__row">
        <Product 
        title="SAMSUNG GALAXY S8+"
        image="ama.jpg"
        price={11.99}
        rating={5}
        
        />
        <Product 
         title="APPLE IPHONE 8+"
         image="ama.jpg"
         price={200.99}
         rating={4}/>
      </div>
      

      <div className="home__row">
        <Product  title="DOGE COIN"
        image="ama.jpg"
        price={1.99}
        rating={3}/>
        <Product title="SAMSUNG GALAXY S9+"
        image="ama.jpg"
        price={111.99}
        rating={5} />
        <Product 
         title="STANDING FAN"
         image="ama.jpg"
         price={11.99}
         rating={2}/>
      </div>

      <div className="home__row">
        <Product />
      </div>
    </div>
  );
};

export default Home;
