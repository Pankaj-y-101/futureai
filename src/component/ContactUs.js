import React from 'react'
import contact1 from './image/contact1.jpg';
import contact2 from './image/contact2.jpg';
import contact3 from './image/contact3.jpg';

const ContactUs = () => {
    return (
        <div>
            <div className="container bg-dark">
                <h1 className="text-primary">SignUp for more detail</h1>
            <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationTooltip01">First name</label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" required />
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltip02">Last name</label>
      <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" autoComplete="off" required />
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltipUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationTooltipUsername" autoComplete="off" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required />
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationTooltip03">City</label>
      <input type="text" class="form-control" id="validationTooltip03" placeholder="City" autoComplete="off" required />
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip04">State</label>
      <input type="text" class="form-control" id="validationTooltip04" placeholder="State" required />
      <div class="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>
  </div>
  <button class="btn btn-primary mb-2" type="submit">SignUp</button>
</form> 
            </div>

        <div className="container mt-2">
         <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
  <div className="col">
  <div class="card bg-dark text-white">
  <img class="card-img" src={contact1} alt="Card image"/>
  <div class="card-img-overlay">
    <h5 class="card-title">Location</h5>
    <p class="card-text">USA1 : 0003 Golden and Silver park  VA, US, 23156<br/>
    USA2 : 54932 salvago ne-90649, Tawanati, FL 33180<br/>
    UK : Room no. 5014, King House, 60 N square Rd, London , UK<br/></p>
  </div>
</div>
</div>
  <div className="col">
  <div class="card bg-dark text-white">
  <img class="card-img" src={contact2} alt="Card image"/>
  <div class="card-img-overlay">
    <h5 class="card-title">Global</h5>
    <p class="card-text">
future@global.com <br/>+1 009 856 2172 (USA)<br/>+1 450 409 1131 (UK)<br/>+91 2135 380 337 (India)
</p>
  </div>
</div>
</div>
  <div className="col">
  <div class="card bg-dark text-white">
  <img class="card-img" src={contact3} alt="Card image"/>
  <div class="card-img-overlay">
    <h5 class="card-title">Location in India</h5>
    <p class="card-text">India 1 : HB Studio, 5912, 15th Floor, Bhavan, Off G.K. Road, Mumbai, 
Maharshtra – 380051<br/>India 2 : 91 Udyan Complex, off K.G. ground, Katipur- Ahmedabad – 380009</p>
  </div>
</div>
</div>

  </div>  
  </div>  
        </div>
    )
}

export default ContactUs;
