import React from "react";
import { useNavigate } from "react-router-dom";
import "./Upload.css";

const styles = {
  header: {
    backgroundImage: `url("images/4.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

function CSUpload(props) {
  const navigate = useNavigate();

  const navigateToProjects = () => {
    navigate("/projects");
  };

  const navigateToUpload = () => {
    navigate("/fileUpload");
  };

  // const [file, setFile] = useState([]);
  // const inputFile = useRef(null);

  // const handleChange = e => {
  //     setFile([...file, e.target.files[0]]);
  // }

  return (
    <div className="container" style={styles.header}>
      <h1 className="heading">Cyber Security</h1>
      <p className="firstPara">
        Cybersecurity is the practice of protecting computer systems and
        networks from unauthorized access, theft, damage, or disruption. With
        the rise of digital technologies and the increasing amount of sensitive
        information being stored online, cybersecurity has become a critical
        concern for businesses of all sizes and industries.
      </p>
      <p className="para">
        If you're looking to incorporate cybersecurity into your project, there
        are several things to consider. First, you'll need to identify the
        specific threats and vulnerabilities that your system may face, such as
        malware, phishing attacks, or data breaches. Next, you'll need to
        implement appropriate security measures to protect your system and data
        from these threats.
      </p>
      <p className="para">
        You'll also need to establish policies and procedures for managing and
        responding to security incidents, such as data breaches or other cyber
        attacks. Contact us today to learn more about how our Cyber Security
        solutions can help your organization achieve its goals.
      </p>{" "}
      <hr />
      <div className="bottom">
        <b className="note">
          <u>Note:-</u>
        </b>
        <li className="list">
          Kindly Upload your file to the designated domain provided.
        </li>
        <li className="list">
          Please Upload your abstract in PDF format here.
        </li>
        <li className="list">
          You may check for updates on your project at this location.
        </li>
        <button className="back" onClick={navigateToProjects}>
          Back
        </button>
        {/* <button className='upload' onClick={() => inputFile.current.click()}>Upload</button> */}
        {/* <input
                    type="file"
                    onChange={handleChange}
                    ref={inputFile} />
 
                <strong>Uploaded Files:</strong> {file.map(x => x.name).join(', ')} */}
        <button className="submit">
          <input type="submit" value="Upload" onClick={navigateToUpload} />
        </button>
        {/* <button className='updates'>Check for updates</button> */}
      </div>
    </div>
  );
}

export default CSUpload;
