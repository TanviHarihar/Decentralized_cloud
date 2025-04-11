import React, { useState } from 'react';
import { create } from 'ipfs-http-client';

// Init IPFS client (Infura)
const ipfsClient = create('https://ipfs.infura.io:5001/api/v0');

function UploadPage() {
  const [file, setFile] = useState(null);
  const [ipfsUrl, setIpfsUrl] = useState('');
  const [status, setStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setStatus('');
    setIpfsUrl('');
  };

  const uploadToIPFS = async () => {
    if (!file) {
      setStatus("No file selected.");
      return;
    }

    try {
      setStatus("Uploading to IPFS...");
      const added = await ipfsClient.add(file);
      setIpfsUrl(`https://ipfs.io/ipfs/${added.path}`);
      setStatus("Upload successful ✅");
    } catch (error) {
      setStatus("Upload failed ❌");
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">📤 Upload File</h2>

      <label className="block mb-3">
        <span className="text-gray-600">Choose a file:</span>
        <input 
          type="file" 
          onChange={handleFileChange}
          className="mt-1 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </label>

      {file && (
        <p className="text-sm text-gray-500 mb-2">Selected file: <span className="font-medium">{file.name}</span></p>
      )}

      <button 
        onClick={uploadToIPFS}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Upload to IPFS
      </button>

      {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}

      {ipfsUrl && (
        <div className="mt-3">
          <p className="text-sm text-green-700">IPFS Link:</p>
          <a href={ipfsUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline text-sm break-all">{ipfsUrl}</a>
        </div>
      )}
    </div>
  );
}

export default UploadPage;
