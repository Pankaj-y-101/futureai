import React from 'react';
import home1 from './image/home1.jpg';
import home2 from './image/home2.jpg';
import home3 from './image/home3.jpg';
import homecard1 from './image/home card1.jpg'; 
import homecard2 from './image/home card2.jpg'; 
import homecard3 from './image/home card3.jpg'; 
import homecard4 from './image/home card4.jpg'; 
import homecard5 from './image/home card5.jpg'; 
import homecard6 from './image/home card6.jpg'; 
const Home=()=>{
    return(
      <div className="home-parent bg-secondary">
       <div className="container-fluid">
               <img className=" home-img1 h-31 w-100" src={home1} alt="IMAGE" />
           <div className="container-fluid">
           <div className="info-para1 text-dark">
           <p ><b>Welcome to Future AI</b><br />
            If we do it right, we might be able to evolve a form of work that 
           taps into our uniquely human capabilities and restores our humanity. 
           The ultimate paradox is that this technology may become a powerful 
           catalyst that we need to reclaim our humanity.</p>
           </div>
           <div className="info-para2 text-warning">
            <p><b>AI that is ready to work</b><br/>
            Change Your vision enjoy your life.Whether you’re new to the wonders 
            of AI, or a machine learning, you’ve come to the right place.We made 
            AI fast, affordable, simple.Unlock the value of your data with 
            flexible AI solutions that give you the scalability, performance and 
            cost controls you need.</p>
           </div>
           </div>
           </div>
  <span className="container-fluid">
  <img className="image-fluid home-mid-img" src={home2} alt="Card image cap" />
  <img className="image-fluid home-mid-img" src={home3} alt="Card image cap" />
  </span>
       <div className="home-child1">
       <div className="container">
       <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
       <div className="col home-card-info">
    <img className="card-img-top" src={homecard1} alt={homecard1} />
    <div className="row g-2">
    <div className="p-3"><b>Solutions for Enterprise</b></div>
    <p>From small businesses to medium enterprises to globally leading 
      multinational corporations,we build flawless software solutions for 
      businesses of all kinds.</p>
    </div>
    </div>
       <div className="col home-card-info">
    <img className="card-img-top" src={homecard2} alt={homecard2} />
    <div className="row g-2">
    <div className="p-3"><b>Solutions for eCommerce</b></div>
    <p>Whether you run an independent FMCG business, a supermarket chain, or a 
    big online retail company, we have solutions for all your eCommerce needs.</p>
    </div>
    </div>
       <div className="col home-card-info">
    <img className="card-img-top" src={homecard3} alt={homecard3} />
    <div className="row g-2">
    <div className="p-3"><b>Solutions for Mobile Apps</b></div>
    <p>Our award-winning app development team can address everything mobile app, 
    from m-Commerce to movie ticket booking apps to AR/VR-enabled e-learning 
    apps.</p>
    </div>
    </div>
       <div className="col home-card-info">
    <img className="card-img-top" src={homecard4} alt={homecard4} />
    <div className="row g-2">
    <div className="p-3"><b>Solutions for Start-ups</b></div>
    <p>We cater to early-stage start-ups and innovation-driven tech giants alike. 
    Be it foundational tech infrastructure or advanced software capabilities, you 
    can count on us.</p>
    </div>
    </div>
       <div className="col home-card-info">
    <img className="card-img-top" src={homecard5} alt={homecard5} />
    <div className="row g-2">
    <div className="p-3"><b>Solutions for Automation</b></div>
    <p>Our automation solutions help businesses promptly respond to changing 
      market demands. Be it process automation or customer service, we got you 
      covered.</p>
    </div>
    </div>
       <div className="col home-card-info">
    <img className="card-img-top" src={homecard6} alt={homecard6} />
    <div className="row g-2">
    <div className="p-3"><b>Solutions for Community</b></div>
    <p>Digital and social media communities are redefining the way people 
      socialize. From shared-interest communities to faith-based groups, we 
      build solutions for all kinds of communities.</p>
    </div>
    </div>
       
    
     </div>
     </div>
        </div>
        </div>
  
    );
}
export default Home;