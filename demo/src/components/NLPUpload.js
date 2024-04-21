import React from "react";
import { useNavigate } from "react-router-dom";
import "./Upload.css";

const styles = {
  header: {
    backgroundImage: `url("images/9.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

function NLPUpload(props) {
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
      <h1 className="heading">Natural Language Processing</h1>
      <p className="firstPara">
        Natural Language Processing (NLP) is a field of study that focuses on
        the interactions between computers and human languages. NLP is used in
        many applications, such as text classification, sentiment analysis,
        machine translation, speech recognition, and more.
      </p>
      <p className="para">
        First, you'll need to identify the specific NLP tasks that you want to
        perform. This may involve tasks such as tokenization, part-of-speech
        tagging, named entity recognition, sentiment analysis, or machine
        translation. Next, you'll need to select appropriate NLP tools and
        libraries to perform these tasks. There are many open-source NLP
        libraries available, such as NLTK, spaCy, and Stanford CoreNLP, that
        provide a wide range of NLP functionality. You'll also need to
        preprocess your data to ensure that it's in a format that can be
        processed by your NLP tools.
      </p>
      <p className="para">
        By carefully planning and executing your NLP project, you can create
        powerful applications that enable new insights and discoveries in
        text-based data. Contact us today to learn more about how our NLP
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

export default NLPUpload;
