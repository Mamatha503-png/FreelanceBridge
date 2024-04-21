import React from "react";
import { useNavigate } from "react-router-dom";
import "./Upload.css";

const styles = {
  header: {
    backgroundImage: `url("images/6.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

function FSUpload(props) {
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
      <h1 className="heading">Full Stack</h1>
      <p className="firstPara">
        Full stack development is a term used to describe the process of
        developing software applications that involve multiple layers, or
        "stacks", of technology. A full stack developer is someone who has the
        skills and knowledge to work with all of these layers, from the
        front-end user interface to the back-end server infrastructure.
      </p>
      <p className="para">
        If you're looking to incorporate full stack development into your
        project, there are several things to consider. First, you'll need to
        identify the specific technologies and tools that you'll be using for
        each layer of your application stack. This may include front-end
        technologies like HTML, CSS, and JavaScript, as well as back-end
        technologies like databases, server-side languages like Python or
        Node.js, and web frameworks like Django or Ruby on Rails.
      </p>
      <p className="para">
        Full stack development requires a broad range of technical skills and
        knowledge, as well as the ability to work collaboratively and
        iteratively. Contact us today to learn more about how our Full stack
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

export default FSUpload;
