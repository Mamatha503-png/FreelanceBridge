import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import {
  MDBContainer,
  MDBCard,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function check(event) {
    // alert("Hello");
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8090/api/v1/employee/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message === "Email not exits") {
              alert("Email not exists");
            } else if (res.data.message === "Login Success") {
              alert("You have Successfully Logged in");
              navigate("/");
            } else {
              alert("Incorrect Email and Password not match");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
  }

  return (
    <MDBContainer fluid className="p-3 my-3 h-custom">
      <MDBCard className="text-black m-3 p-3">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample img"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <div
              className="d-flex flex-row align-items-center justify-content-center"
              style={{ marginTop: "20px" }}
            >
              <p className="lead fw-normal mb-0 me-3" id="text">
                Sign in with
              </p>

              <MDBBtn floating size="md" tag="a" className="me-2" id="btn1">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn floating size="md" tag="a" className="me-2" id="btn2">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn floating size="md" tag="a" className="me-2" id="btn3">
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
            </div>
            <div>
              <hr />
              <p style={{ fontSize: "20px", textAlign: "center" }}>or</p>
              <hr />
            </div>

            <div style={{ marginLeft: "50px" }}>
              <h6 style={{ marginBottom: "5px" }}>Email address </h6>
              <MDBInput
                wrapperClass="mb-4"
                id="formControlLg"
                type="email"
                size="lg"
                className="width"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <h6 style={{ marginBottom: "5px" }}>Password</h6>
              <MDBInput
                wrapperClass="mb-4"
                id="formControlLg"
                type="password"
                size="lg"
                className="width"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <div className="d-flex justify-content-around mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <div>
              <button type="button" className="loginBtn" onClick={check}>
                Login
              </button>
              <p className="noAccount">
                Don't have an account?{" "}
                <a href="/sign-in" className="link-danger">
                  Register
                </a>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
