import { useState } from "react";
import "./Upload.css";

function Upload() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    setSelectedFiles((prevSelectedFiles) => [
      ...prevSelectedFiles,
      ...Array.from(files),
    ]);
  };

  return (
    <div className="center">
      <label htmlFor="upload-input" className="button">
        ⬆ Upload files
        <input
          id="upload-input"
          type="file"
          multiple
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
      </label>
      {selectedFiles.length > 0 && (
        <div className="color">
          <h3>Uploaded files:</h3>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Upload;
