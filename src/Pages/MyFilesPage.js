import React, { useEffect, useState } from 'react';

function MyFilesPage() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('my_uploads') || '[]');
    setUploads(saved.reverse()); // show latest first
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">📁 My Files</h2>

      {uploads.length === 0 ? (
        <p className="text-gray-500">No files uploaded yet.</p>
      ) : (
        <ul className="space-y-4">
          {uploads.map((file, idx) => (
            <li key={idx} className="border border-gray-200 p-4 rounded-xl bg-gray-50 hover:bg-gray-100">
              <p className="font-medium text-gray-800">{file.name}</p>
              <a 
                href={file.url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-blue-600 text-sm underline break-all"
              >
                {file.url}
              </a>
              <p className="text-xs text-gray-500 mt-1">Uploaded on: {file.timestamp}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyFilesPage;
