import "./Upload.css";
import { useState } from 'react';

function Upload() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImport = (event) => {
    const newFiles = Array.from(event.target.files);
    setSelectedFiles(selectedFiles.concat(newFiles));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files);
    setSelectedFiles(selectedFiles.concat(newFiles));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  }

  const handleButtonClick = () => {
    console.log(selectedFiles); //for testing purpose
  };

  return (
    <div className="center">
      <div className="dropzone-border">
        <div className="dropzone" onClick={() => document.getElementById('fileInput').click()} onDrop={handleDrop} onDragOver={handleDragOver}>
          <img src="./upload-icon.png" alt="upload-icon" width="100px" />
          <p>Click or drag and drop to upload files</p>
          <input type="file" id="fileInput" onChange={handleImport} style={{ display: 'none' }} multiple /> 
        </div>
      </div>
      <button className="send button" onClick={handleButtonClick}>
        Create link
      </button>
    </div>
  );
}

export default Upload;