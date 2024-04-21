import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "rsuite/";
import axios from "axios";
import "./Register.css";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  // MDBRadio
} from "mdb-react-ui-kit";
// import Select from 'react-select';

// const options = [
//   { value: 'one', label: 'Artificial Intelligence' },
//   { value: 'two', label: 'Block Chain' },
//   { value: 'three', label: 'Cloud Computing' },
//   { value: 'four', label: 'Cyber Security' },
//   { value: 'five', label: 'Deep Learn' },
//   { value: 'six', label: 'Full Stack' },
//   { value: 'seven', label: 'Image Processing' },
//   { value: 'eight', label: 'Machine Learning' },
//   { value: 'nine', label: 'NLP' }
// ]

function SignIn() {
  const [employeename, setEmployeename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8090/api/v1/employee/save", {
        employeename: employeename,
        email: email,
        password: password,
      });
      alert("USER Registered Successfully");
      navigate("/login");
    } catch (err) {
      alert(err);
      console.log('erroe : ', err);
    }
  }

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5">
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-left"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user ms-5" size="lg" />
                <MDBInput
                  placeholder="Your Name"
                  id="form1"
                  type="text"
                  className="ms-4 p-2"
                  value={employeename}
                  onChange={(event) => {
                    setEmployeename(event.target.value);
                  }}
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope ms-5" size="lg" />
                <MDBInput
                  placeholder="Your Email"
                  id="form2"
                  type="email"
                  className="ms-4 p-2"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock ms-5" size="lg" />
                <MDBInput
                  placeholder="Password"
                  id="form3"
                  type="password"
                  className="ms-4 p-2"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key ms-5" size="lg" />
                <MDBInput
                  placeholder="Repeat your password"
                  id="form4"
                  type="password"
                  className="ms-4 p-2"
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="phone-alt ms-5" size="lg" />
                <MDBInput
                  placeholder="Phone Number"
                  id="form5"
                  type="number"
                  className="ms-4 p-2"
                />
              </div>
              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' inline className="ms-5 p-2"
                
                />Student
                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' inline className="ms-5 p-2" 
                
                />Developer
              </div>
              
              <b>Select Your Domain:</b>
              <Select options={options} className='select' disabled/> */}
              <Button
                appearance="primary"
                color="green"
                id="submit"
                onClick={save}
              >
                Register
              </Button>
              <p className="loginData">
                If already registered?
                <small onClick={navigateLogin} className="link">
                  {" "}
                  Login here
                </small>
              </p>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignIn;
