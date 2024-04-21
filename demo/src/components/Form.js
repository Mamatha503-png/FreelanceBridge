// import React from "react";
// import { Icon } from "@iconify/react";
// import sendCircle from "@iconify/icons-mdi/send-circle";

// import "./form.css";

// const formInputs = [
//   { id: "name", type: "text", label: "Your name", placeholder: "John Doe" },
//   {
//     id: "tel",
//     type: "tel",
//     label: "Phone number",
//     placeholder: "08656-235147",
//   },
//   {
//     id: "email",
//     type: "email",
//     label: "Email address",
//     placeholder: "you@example.com",
//   },
//   {
//     id: "message",
//     type: "textarea",
//     label: "Your message",
//     placeholder: "How can we help you? Or you us?",
//   },
// ];

// const Form = () => (
//   <form className="form">
//     <h2 className="form-h2">Send us a message</h2>

//     {formInputs.map((input) => (
//       <label key={input.label} id={input.id} className="form-label">
//         {input.label}

//         {input.type === "textarea" ? (
//           <textarea className="form-textarea" placeholder={input.placeholder} />
//         ) : (
//           <input
//             className="form-input"
//             type={input.type}
//             placeholder={input.placeholder}
//           />
//         )}
//       </label>
//     ))}

//     <Icon className="form-submit" icon={sendCircle} />
//   </form>
// );

// export default Form;

// import React from "react";
import React, { useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import sendCircle from "@iconify/icons-mdi/send-circle";

import "./form.css";

// import React from 'react';

function Form() {
  const [subject, setSubject] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");

  async function sendEmail(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8090/mail/send-email", {
        subject: subject,
        message: message,
      });

      await axios.post("http://localhost:8090/mail/send-emailToUser", {
        to: to,
      });
      alert("Mails Send Successfully");
      // console.log("task1");
    } catch (err) {
      alert(err);
    }
  }

  // async function sendEmailToUser(event) {
  //   event.preventDefault();
  //   try {
  //     await axios.post("http://localhost:8090/mail/send-emailToUser", {
  //       to: to,
  //     });
  //     // console.log("task1");
  //   } catch (err) {
  //     alert(err);
  //   }
  // }

  return (
    <div>
      <form className="form">
        <h2 className="form-h2">Send us a message</h2>
        <label className="form-label" id="name">
          Your name{" "}
          <input
            type="text"
            className="form-input"
            placeholder="John Doe"
            value={subject}
            onChange={(event) => {
              setSubject(event.target.value);
            }}
          />
        </label>

        <label className="form-label" id="tel">
          Phone number{" "}
          <input type="tel" className="form-input" placeholder="08656-235147" />
        </label>

        <label className="form-label" id="email">
          Email address{" "}
          <input
            type="email"
            className="form-input"
            placeholder="you@example.com"
            value={to}
            onChange={(event) => {
              setTo(event.target.value);
            }}
          />
        </label>

        <label className="form-label" id="message">
          Your message{" "}
          <input
            type="textarea"
            className="form-textarea"
            placeholder="How can we help you? Or you us?"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
        </label>

        <Icon
          className="form-submit"
          icon={sendCircle}
          onClick={sendEmail}
          // onClick={} onClick={}
        />
      </form>
    </div>
    // <div>
    //   <form className="form">
    //     <h2 className="form-h2">Send us a message</h2>
    //     {formInputs.map((input) => (
    //       <label key={input.label} id={input.id} className="form-label">
    //         {input.label}

    //         {input.type === "textarea" ? (
    //           <textarea
    //             className="form-textarea"
    //             placeholder={input.placeholder}
    //           />
    //         ) : (
    //           <input
    //             className="form-input"
    //             type={input.type}
    //             placeholder={input.placeholder}
    //           />
    //         )}
    //       </label>
    //     ))}
    //     <Icon className="form-submit" icon={sendCircle} />
    //   </form>
    // </div>
  );
}

export default Form;
