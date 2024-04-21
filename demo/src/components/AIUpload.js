import React from "react";
import { useNavigate } from "react-router-dom";
// import ReactModal from 'react-modal';
import "./Upload.css";

const styles = {
  header: {
    backgroundImage: `url("images/1.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

function AIUpload(props) {
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
      <h1 className="heading">Artificial Intelligence</h1>
      <p className="firstPara">
        Artificial Intelligence, or AI, refers to the development of computer
        systems that can perform tasks that would normally require human
        intelligence, such as learning, reasoning, perception, and
        problem-solving.
      </p>
      <p className="para">
        Incorporating AI into your project can be a complex process, but it has
        the potential to yield significant benefits in terms of efficiency,
        accuracy, and innovation. At our solutions, we are using AI to develop
        innovative solutions for our clients. Our AI-powered projects include
        intelligent chatbots,personalized recommendation engines, predictive
        maintenance systems, and more. By leveraging the power of AI, we are
        able to deliver solutions that are faster, more accurate, and more
        efficient than traditional approaches.
      </p>
      <p className="para">
        We are committed to staying at the forefront of AI research and
        development,and are constantly exploring new ways to harness the power
        of this technology for the benefit of our clients. Contact us today to
        learn more about how our AI solutions can help your organization achieve
        its goals.
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
                    ref={inputFile} /> */}

        {/* <strong>Uploaded Files:</strong> {file.map(x => x.name).join(', ')} */}
        <button className="submit">
          <input type="submit" value="Upload" onClick={navigateToUpload} />
        </button>
        {/* <Popup trigger= {<button> Click to open modal </button>} modal nested>
                    {
                        close => (
                            <div className='modal'>
                                <div className='content'>
                                    Welcome to GFG!!!
                                </div>
                                <div>
                                    <button onClick=
                                        {() => close()}>
                                            Close modal
                                    </button>
                                </div>
                            </div>
                        )
                    }
            </Popup> */}
      </div>
    </div>
  );
}

export default AIUpload;
