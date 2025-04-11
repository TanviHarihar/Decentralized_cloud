import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProfilePage from './Pages/ProfilePage';
import UploadPage from './Pages/UploadPage';
import MyFilesPage from './Pages/MyFilesPage';
import SettingsPage from './Pages/SettingsPage';


function App() {
  const [account, setAccount] = useState('');

  // You’ll update connectWallet later for actual MetaMask connection
  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="space-x-4">
            <Link to="/" className="font-semibold hover:text-blue-600">Home</Link>
            <Link to="/profile" className="font-semibold hover:text-blue-600">Profile</Link>
            <Link to="/upload" className="font-semibold hover:text-blue-600">Upload</Link>
            <Link to="/my-files" className="font-semibold hover:text-blue-600">My Files</Link>
            <Link to="/settings" className="font-semibold hover:text-blue-600">Settings</Link>



          </div>
          <button
            onClick={connectWallet}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
          </button>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/profile" element={<ProfilePage account={account} />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/my-files" element={<MyFilesPage />} />
          <Route path="/settings" element={<SettingsPage />} />



          <Route path="/" element={<div className="text-center mt-10 text-lg">Welcome to Decentralized Cloud Storage 🌥️</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
