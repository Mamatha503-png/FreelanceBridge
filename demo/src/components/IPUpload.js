import React from "react";
import { useNavigate } from "react-router-dom";
import "./Upload.css";

const styles = {
  header: {
    backgroundImage: `url("images/7.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

function IPUpload(props) {
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
      <h1 className="heading">Image Processing</h1>
      <p className="firstPara">
        Image processing is the use of algorithms and techniques to manipulate
        digital images to improve their quality, enhance their features, or
        extract information from them. It has a wide range of applications in
        various fields, including healthcare, security, entertainment, and more.
      </p>
      <p className="para">
        First, you'll need to identify the specific features of the images that
        you want to extract or enhance. This may involve using techniques such
        as image segmentation, edge detection, or object recognition to identify
        specific regions or objects within the image.Next, you'll need to select
        appropriate algorithms and techniques to process the images.
      </p>
      <p className="para">
        Image processing is a powerful tool for extracting information and
        enhancing the features of digital images. By carefully planning and
        executing your image processing project, you can create powerful
        applications that improve the quality of your images and enable new
        insights and discoveries. Contact us today to learn more about how our
        Image processing solutions can help your organization achieve its goals.
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

export default IPUpload;
