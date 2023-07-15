import "./Upload.css";
import { useState } from 'react';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="center">
      <div className="dropzone-border">
        <div className="dropzone" onClick={() => document.getElementById('fileInput').click()}>
          <img src="./upload-icon.png" alt="upload-icon" width="100px" />
          <p>Click or drag and drop to upload files</p>
          <input type="file" id="fileInput" onChange={handleFileInputChange} style={{ display: 'none' }} />
        </div>
      </div>
      <button className="send button" disabled={!selectedFile}>
          Create link
      </button>
    </div>
  );
}

export default Upload;