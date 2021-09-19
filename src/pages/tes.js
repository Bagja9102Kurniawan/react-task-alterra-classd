import React, { useState } from "react";
import {
  ValidationForm,
  TextInput,
  SelectGroup,
} from "react-bootstrap4-form-validation";
import { Link } from "react-router-dom";
import validator from "validator";
import "./contact.css";
const Contact = (props) => {
  const initialState = {
    name: "",
    phone: "",
    negara: "",
    email: "",
    description: "",
  };
  const initialState = {
    name: "",
    phone: "",
    negara: "",
    email: "",
    description: "",
  };
  const [data, setData] = useState({
    name: "",
    phone: "",
    negara: "",
    email: "",
    description: "",
  });

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [negara, setNegara] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setData({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    localStorage.setItem("document", JSON.stringify(formData));
    clearState();
  };

  const handleErrorSubmit = (e, formData, errorInputs) => {
    console.error(errorInputs);
  };
  const clearState = () => {
    setData({ ...initialState });
  };

  return (
    <div className="col-6 peding-30">
      <ValidationForm>
        <h1> Contact us </h1>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <TextInput
            name="name"
            id="name"
            required
            successMessage="Success!"
            validator={validator.isAlpha}
            errorMessage="Please enter a valid name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <TextInput
            name="email"
            id="email"
            type="email"
            validator={validator.isEmail}
            successMessage="Success!"
            errorMessage={{ validator: "Please enter a valid email" }}
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <TextInput
            name="phone"
            id="phone"
            minLength="4"
            validator={validator.isInt}
            successMessage="Success!"
            errorMessage={{ validator: "Please enter a number" }}
            value={data.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="negara">Select a nationality</label>
          <SelectGroup
            name="negara"
            id="negara"
            value={data.negara}
            required
            errorMessage="Please enter your country"
            onChange={handleChange}
          >
            <option value="">--- Please select ---</option>
            <option value="indonesia">Indonesia</option>
            <option value="thailand">Thailand</option>
            <option value="jepang">Jepang</option>
            <option value="australia">Australia</option>
          </SelectGroup>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <TextInput
            name="description"
            id="description"
            multiline
            required
            value={data.description}
            onChange={handleChange}
            rows="10"
          />
        </div>

        <div className="form-group">
          <Link
            className="btn btn-primary posisibut"
            to={{
              pathname: "/thankyou",
              data,
            }}
          >
            Submit
          </Link>
        </div>
      </ValidationForm>
    </div>
  );
};
export default Contact;
