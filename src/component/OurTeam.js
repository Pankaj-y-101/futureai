import React from 'react'
import team1 from './image/team1.png';
import team2 from './image/team2.png';

const OurTeam = () => {
    return (
        <div className="team-parent">
         <span className="container team-info">
             <p><b><h1>Leadership</h1></b><br/>
    <b>Message From The CEO</b><br/>
    Future AI reputation is built upon the exceptional work of our people and 
    their dedication to our clients and communities. Future AI makes your business 
    engagements work.AI technology is important because it enables human capabilities – 
    understanding, reasoning, planning, communication and perception – to be undertaken 
    by software increasingly effectively, efficiently and at low cost.</p><br/>
             <p><b>Mission</b><br/>
    To delight our customers and other stakeholders with innovative and collaborative 
    technology solutions. Using high-tech tools, frameworks, languages and more, 
    we strive to be a partner that is easy and flexible to work with.</p><br/>
             <p><b>Objective</b><br/>
    We as a company want to be moving towards adopting new technologies and trends 
    of the industry,which can assist us in providing our clients best services. 
    From artificial intelligence and new changes in the mobile industry, to latest 
    mobile devices, IOT devices, and more, we see ourselves getting abreast with 
    everything new and digitally superior.The central premise is that, given certain 
    constraints in information processing, AI can deliver higher quality, greater 
    efficiency, and better outcomes than human experts</p><br/>
             <p><b>Adopted Practices</b><br/>
    To ensure that our clients receive best services, we hire industries most 
    talented, innovative, experienced and creative individuals. Moreover, our retention 
    rate is exceptionally high, which allows us to work continuously for our clients 
    without compromising the quality of our services. We have built a technology 
    and services platform to enable every organization, small and large, to do more 
    with the power of AI. Our platform solves critical problems facing businesses 
    and industries that were previously intractable either due to high cost or 
    insufficient technical capability.</p><br/>
             <p><b>We Promote</b><br/>
    Integrity, adeptness, diligence, hard work, agility and dedication are some 
    of the qualities that we promote. Our team is never afraid to take up a new 
    challenge and is always ready to help you out with our digital expertise and 
    innovation.</p><br/><br/><br/><br/><br/><br/>
         </span>
         <span className="container team-profile">
         <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
  <div className="col">
    <img className="card-img-top" src={team2} alt={team2} />
    <div className="card-body">
      <h5 className="card-title">Rajveer Kumar<br/>CEO & CTO</h5>
    </div>
    </div>
  <div className="col">
    <img className="card-img-top" src={team2} alt={team2} />
    <div className="card-body">
      <h5 className="card-title">Dr. Rajnikant Sharma<br/>GM & Head of Finance</h5>
    </div>
    </div>
  <div className="col">
    <img className="card-img-top" src={team1} alt={team1} />
    <div className="card-body">
      <h5 className="card-title">Payal Kumari<br/>Head-HR & Contact center</h5>
    </div>
    </div>
  <div className="col">
    <img className="card-img-top" src={team1} alt={team1} />
    <div className="card-body">
      <h5 className="card-title">Kavya Dev<br/>Business Development Manager</h5>
    </div>
    </div>
  <div className="col">
    <img className="card-img-top" src={team1} alt={team1} />
    <div className="card-body">
      <h5 className="card-title">Vinita Mehata<br/>Jr. Hr & Consultant</h5>
    </div>
    </div>
  <div className="col">
    <img className="card-img-top" src={team2} alt={team2} />
    <div className="card-body">
      <h5 className="card-title">Rajesh Kulkarni<br/>Sr. Software Engineer</h5>
    </div>
    </div>
  <div className="col">
    <img className="card-img-top" src={team1} alt={team1} />
    <div className="card-body">
      <h5 className="card-title">Simpi Dayal<br/>Sr. Data Analyst</h5>
    </div>
    </div>
  <div className="col">
    <img className="card-img-top" src={team2} alt={team2} />
    <div className="card-body">
      <h5 className="card-title">Niranjan Mohite<br/>Software Engineer</h5>
    </div>
    </div>
  <div className="col">
    <img className="card-img-top" src={team1} alt={team1} />
    <div className="card-body">
      <h5 className="card-title">Rohini Garg<br/>Business Analyst</h5>
    </div>
    </div>
  <div className="col">
    <img className="card-img-top" src={team2} alt={team2} />
    <div className="card-body">
      <h5 className="card-title">Rahul Shah<br/>Sr. Software Engineer</h5>
    </div>
    </div>
  <div className="col">
    <img className="card-img-top" src={team1} alt={team1} />
    <div className="card-body">
      <h5 className="card-title">Mridula Dhar<br/>SEO Consultant</h5>
    </div>
    </div>
  <div className="col">
    <img className="card-img-top" src={team2} alt={team2} />
    <div className="card-body">
      <h5 className="card-title">Pawan Khattar<br/>Design Consultant</h5>
    </div>
    </div>
  <div className="col">
    <img className="card-img-top" src={team2} alt={team2} />
    <div className="card-body">
      <h5 className="card-title">Mohit Kumar<br/>Software Engineer</h5>
    </div>
    </div>
  
    </div>
         </span>
        </div>
    )
}

export default OurTeam
