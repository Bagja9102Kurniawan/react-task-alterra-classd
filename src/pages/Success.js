import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Success = props => {
  const { nama, phone, negara, email, description } =
    (props.location && props.location.state) || {};
  return (
    <div>
      
      <div className="card border-primary" style={{width: "50rem", left: "350px", top: "100px"}}>
        <div className="card-body ml-4 mt-4">
            <p className="card-text">Full Name <span className="ml-5">:</span> <span className="ml-5">{nama}</span></p>
            <p className="card-text">Email Address  <span className="ml-5">:</span> <span className="ml-5">{email}</span></p>
            <p className="card-text">Phone Number  <span className="ml-5">:</span> <span className="ml-5">{phone}</span></p>
            <p className="card-text ">Nationality  <span className="ml-5">:</span> <span className="ml-5">{negara}</span></p>
            <p className="card-text " style={{fontStyle: "italic"}}>{description}</p>
            <hr style={{width: "50%"}}></hr>
            <h4>Thanks for contacting us! </h4>
            <h4>We will be in touch with you shortly.</h4>
            <NavLink to="/" className="btn btn-primary" activeClassName="active">
        Go Back
      </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Success;