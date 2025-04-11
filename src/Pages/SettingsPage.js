import React, { useEffect, useState } from 'react';

function SettingsPage() {
  const [name, setName] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme === 'dark'
      ? 'bg-gray-900 text-white'
      : 'bg-white text-black';
  }, [theme]);
  
  useEffect(() => {
    const savedName = localStorage.getItem('display_name');
    const savedTheme = localStorage.getItem('theme');

    if (savedName) setName(savedName);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const handleSave = () => {
    localStorage.setItem('display_name', name);
    localStorage.setItem('theme', theme);
    alert('Preferences saved! 🎉');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">⚙️ Settings</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Theme</label>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">☀️ Light</option>
          <option value="dark">🌙 Dark</option>
        </select>
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Save Settings
      </button>
    </div>
  );
}

export default SettingsPage;
