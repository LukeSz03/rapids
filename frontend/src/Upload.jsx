import { useState } from "react";

function Upload() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    setSelectedFiles(Array.from(files));
  };

  return (
    <div className="container">
      <div className="content">
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
          <div>
            <h3>Uploaded files:</h3>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload;
