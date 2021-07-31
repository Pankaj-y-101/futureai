import React from 'react';
import about1 from './image/about1.jpg';
import about2 from './image/about2.jpg';


const About=()=>{
    return(
        <>
       <div className="about-prime">
    <p className=" container "><b><h1>Who we are</h1></b>
    <h6>We envisaged to commend the web plans and deploy technologies to build brands over the 
Internet. We took initiative in 2001 and started our Web Design and Development services 
and named our advent as Orange Mantra, where the hue “Orange ” stands for innovativeness 
and Mantra for “The Magic “. Our ultimate goal is to get your business intelligent, unique,
and direct in the online world to bring a high Return on Investment (ROI).</h6></p>
       <div className="container">
       <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
       <div className="col">
      <img className="card-img-top" src={about1} alt={about1} />
    </div>
    </div>
  </div>
  <div class="card bg-dark text-white">
  <img class="card-img" src={about2} alt="Card image"/>
  <div class="card-img-overlay">
    <h1 class="card-title">Success Stories</h1>
    <p class="card-text"><h5>Voice-based Companion Bot for Elderly People’s Healthcare</h5>
We developed a bot that provides companionship to elderly people and manages the user’s 
health-related tasks. Users can converse with the bot. The bot follows the user’s schedule 
and reminds users of tasks and activities such as medication time, and a doctor’s 
appointment. The elderly healthcare bot also enables caregivers to view the user’s 
activity history.
</p>
    <p class="card-text"><h5>Chatbot Improves Customer Service of a Leading Bank</h5>
    We developed a customer service chatbot with advanced banking features. The bot helped the 
bank’s branches across the country to promptly resolve queries and process service requests. 
Bank customers can use the chatbot with both text and voice inputs. Following the deployment,
response time dramatically reduced in all areas of customer queries and service requests.</p>
    <p class="card-text"><h5>Sales Incentive Compensation Management For A Retail Giant</h5>
    The client had a sales incentive process for motivating its sales staff through 
performance-based incentive compensation plans. However, the sales team lacked clarity 
related to performance measurement and complex compensation plans. Also, the calculation of 
incentive was handled manually. The objective of the project was to address these challenges 
with the automation of the incentive management system.
</p>
    <p class="card-text"><h5>Smart TV App For A Client In Entertainment Industry</h5>
    This Smart TV app is capable of running across multiple devices and territories. The 
objective of the app is to ensure that the client’s brand is available to the viewers on 
diverse platform. At the same time, it has been tailored to deliver an exceptional viewing 
experience on television so that the customer stays loyal to the brand.</p>
    <p class="card-text"><h5>E-learning portal for an enterprise client</h5>
    This is an employee e-learning portal which is accessible through the web and mobile 
devices, bringing advanced learning and training to the fingertips of the users. 
It involved the creation of a portal of HTML5-based courses which integrated a broad range 
of the traditional learning resources of the enterprise and made them accessible with a 
single sign-in from website/mobile device.
</p>
  </div>
</div>
    </div>
       
       
       
       
        </>
    );
}
export default About;