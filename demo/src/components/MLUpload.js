import React from "react";
import { useNavigate } from "react-router-dom";
import "./Upload.css";

const styles = {
  header: {
    backgroundImage: `url("images/8.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

function MLUpload(props) {
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
      <h1 className="heading">Machine Learning</h1>
      <p className="firstPara">
        Machine learning is a subset of artificial intelligence that involves
        training algorithms to learn from data and make predictions or decisions
        based on that data. It has become increasingly popular in recent years
        and has been used in many applications, such as image and speech
        recognition, natural language processing, fraud detection, and more.
      </p>
      <p className="para">
        First, you'll need to identify the problem you're trying to solve and
        determine whether machine learning is the appropriate solution.Next,
        you'll need to collect and preprocess the data that you'll use to train
        your machine learning model.
      </p>
      <p className="para">
        Machine learning has the potential to revolutionize many industries by
        enabling machines to learn and make decisions like humans. By carefully
        planning and executing your machine learning project, you can harness
        the power of this cutting-edge technology to achieve your goals and
        drive your business forward. Contact us today to learn more about how
        our Image processing solutions can help your organization achieve its
        goals.
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

export default MLUpload;
