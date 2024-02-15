// This is conosole.log
console.log("Happy Coding");

import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Perform upload logic here, e.g., using fetch API or axios
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      
      fetch('upload_url', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        // Handle response from server
      })
      .catch(error => {
        // Handle error
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
