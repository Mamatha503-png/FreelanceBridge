import React from "react";
import { useNavigate } from "react-router-dom";
import "./Upload.css";

const styles = {
  header: {
    backgroundImage: `url("images/3.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

function CCUpload(props) {
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
      <h1 className="heading">Cloud Computing</h1>
      <p className="firstPara">
        Cloud computing is a technology that allows users to access and manage
        data, software, and other resources over the internet, without the need
        for physical infrastructure or hardware. It offers many benefits, such
        as scalability, flexibility, and cost savings, and is increasingly being
        used by businesses of all sizes and industries.
      </p>
      <p className="para">
        If you're looking to incorporate cloud computing into your project,
        there are several things to consider. First, you'll need to identify the
        specific cloud computing services that you need, such as
        Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), or
        Software-as-a-Service (SaaS). Next, you'll need to choose a cloud
        provider that offers the services you need and fits your budget and
        requirements.
      </p>
      <p className="para">
        Once you have your cloud infrastructure in place, you can start
        migrating your applications, data, and other resources to the cloud.
        Contact us today to learn more about how our Cloud Computing solutions
        can help your organization achieve its goals.
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
        {/* <button className='upload' onClick={() => inputFile.current.click()}>Upload</button>
                <input
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

export default CCUpload;
