// src/pages/AddEntityPage.js

import React, { useState } from "react";

const AddEntityPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [entityList, setEntityList] = useState([]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleVideoLinkChange = (e) => setVideoLink(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && email && videoLink) {
      const newEntity = { name, email, videoLink };
      setEntityList([...entityList, newEntity]);
      setName("");
      setEmail("");
      setVideoLink(""); // Clear input fields after submission
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#4CAF50" }}>Add New Entity</h2>
      <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", width: "300px", margin: "0 auto" }}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter Name"
          style={{
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter Email"
          style={{
            
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />
        <input
          type="text"
          value={videoLink}
          onChange={handleVideoLinkChange}
          placeholder="Enter Video Link"
          style={{
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Add Entity
        </button>
      </form>

      <h3 style={{ textAlign: "center", color: "#333" }}>Entity List</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {entityList.map((item, index) => (
          <li key={index} style={{ margin: "10px 0", padding: "10px", border: "1px solid #ddd", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
            <strong>{item.name}</strong> ({item.email}) -{" "}
            <a
              href={item.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1E90FF", textDecoration: "none" }}
            >
              Watch Video
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddEntityPage;
