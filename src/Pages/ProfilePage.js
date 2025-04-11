import React from 'react';

function ProfilePage({ account }) {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">👤 Profile</h2>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Connected Wallet Address:</p>
          <p className="text-lg font-mono text-blue-600 break-all">{account || "Not connected"}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Total Uploads:</p>
          <p className="text-xl font-bold text-green-600">[dynamic count]</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Last Upload Time:</p>
          <p className="text-md text-gray-700">[timestamp]</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
