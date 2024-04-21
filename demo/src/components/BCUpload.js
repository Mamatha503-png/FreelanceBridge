import React from "react";
import { useNavigate } from "react-router-dom";
import "./Upload.css";

const styles = {
  header: {
    backgroundImage: `url("images/2.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

function BCUpload(props) {
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
      <h1 className="heading">Block Chain</h1>
      <p className="firstPara">
        Blockchain is a decentralized, digital ledger technology that enables
        secure, transparent and tamper-proof transactions. It is often
        associated with cryptocurrencies, such as Bitcoin, but it has many other
        potential applications, such as supply chain management, voting systems,
        and more.
      </p>
      <p className="para">
        At our solutions, we are using Block chain to develop innovative
        solutions for our clients. By carefully planning and implementing your
        blockchain project, you can take advantage of this innovative technology
        to achieve your business goals and drive your project forward.By
        leveraging the power of Block chain, we are able to deliver solutions
        that are faster, more accurate, and more efficient than traditional
        approaches.
      </p>
      <p className="para">
        We are committed to staying at the forefront of Block Chain research and
        development,and are constantly exploring new ways to harness the power
        of this technology for the benefit of our clients. Contact us today to
        learn more about how our Block Chain solutions can help your
        organization achieve its goals.
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

export default BCUpload;
