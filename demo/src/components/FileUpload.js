// import React from 'react';
import React, { useState, useRef } from "react";
import axios from "axios";
import { Button } from "rsuite/";
import "./reg.css";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

function FileUpload() {
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [file1, setFile1] = useState("");
  const navigate = useNavigate();

  async function save(event) {
    event.preventDefault();
    try {
      console.log(file1, to, cc, subject, body);
      await axios.post("http://localhost:8090/mail/send", {
        to: to,
        cc: cc,
        subject: subject,
        body: body,
        file1: file1,
      });
      alert("Mail with Attachments send Successfully");
      navigate("/");
    } catch (err) {
      alert(err);
    }
  }

  const onChange = (event) => {
    // Handle the first event
    handleChange1(event);
    // Handle the second event
    handleChange2(event);
  };

  const handleChange1 = (event) => {
    setFile([event.target.files[0]]);
    // Logic for the first event
    // e.g., setFile(event.target.value);
  };

  const handleChange2 = (event) => {
    setFile1(event.target.value);
    //   // Logic for the second event
    //   // e.g., setFile1(event.target.value);
  };

  const [file, setFile] = useState([]);
  const inputFile = useRef(null);

  return (
    <MDBContainer
      fluid
      className="p-4 background-radial-gradient overflow-hidden"
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            The best offer <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>
              for your Queries...
            </span>
          </h1>
          <p className="note">
            Cc Mail-ID: <i className="mail">srijayunique@gmail.com</i>
          </p>
        </MDBCol>

        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard className="my-5 w-75 bg-glass">
            <MDBCardBody className="p-3 ">
              <label>
                Expert Mail-ID :
                <MDBInput
                  wrapperClass="mb-3"
                  id="form1"
                  type="email"
                  required
                  value={to}
                  onChange={(event) => {
                    setTo(event.target.value);
                  }}
                />
              </label>

              <label>
                Cc Mail-ID :
                <MDBInput
                  wrapperClass="mb-3"
                  id="form2"
                  type="email"
                  required
                  value={cc}
                  onChange={(event) => {
                    setCc(event.target.value);
                  }}
                />
              </label>

              <label>
                Subject
                <MDBInput
                  wrapperClass="mb-3"
                  id="form3"
                  type="text"
                  required
                  value={subject}
                  onChange={(event) => {
                    setSubject(event.target.value);
                  }}
                />
              </label>

              <label>
                Body
                <MDBInput
                  wrapperClass="mb-3"
                  id="form4"
                  type="textarea"
                  required
                  value={body}
                  onChange={(event) => {
                    setBody(event.target.value);
                  }}
                />
              </label>
              <br />

              <Button
                className="uploadBtn"
                appearance="secondary"
                onClick={() => inputFile.current.click()}
              >
                Upload here
              </Button>
              <label className="label">
                Uploaded files:&nbsp;
                <MDBInput
                  wrapperClass="mb-1 "
                  id="form5"
                  type="file"
                  value={file1}
                  onChange={onChange}
                  ref={inputFile}
                />
              </label>

              {file.map((x) => x.name).join(",")}
              <br />

              <Button
                className="submitBtn"
                appearance="primary"
                color="green"
                onClick={save}
              >
                Submit your question
              </Button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default FileUpload;
