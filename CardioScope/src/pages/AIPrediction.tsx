import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from 'react';

const AIPrediction = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Iframe to display the HTML served by the Python script */}
      <iframe
        src="http://127.0.0.1:5000/"  // Replace with the URL where your Python script is running
        title="Heart Health Analysis"
        style={{
          width: '100%',
          height: '100%',
          border: 'none', // Remove the border for a cleaner look
        }}
      />
    </div>
  );
};

export default AIPrediction;
