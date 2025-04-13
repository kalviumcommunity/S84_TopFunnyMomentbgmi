import React, { useState, useEffect } from "react";

const AddEntityPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [entityList, setEntityList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Load saved data from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("entityList");
    if (saved) {
      try {
        setEntityList(JSON.parse(saved));
      } catch (err) {
        console.error("Error parsing localStorage data:", err);
      }
    }
  }, []);

  // Save to localStorage whenever entityList changes
  useEffect(() => {
    localStorage.setItem("entityList", JSON.stringify(entityList));
  }, [entityList]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !videoLink) return;

    const newEntity = { name, email, videoLink };

    if (isEditing) {
      const updatedList = [...entityList];
      updatedList[currentIndex] = newEntity;
      setEntityList(updatedList);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setEntityList([...entityList, newEntity]);
    }

    // Reset form
    setName("");
    setEmail("");
    setVideoLink("");
  };

  const handleDelete = (index) => {
    const updated = entityList.filter((_, i) => i !== index);
    setEntityList(updated);
  };

  const handleEdit = (index) => {
    const item = entityList[index];
    setName(item.name);
    setEmail(item.email);
    setVideoLink(item.videoLink);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#4CAF50" }}>
        {isEditing ? "Update Entity" : "Add New Entity"}
      </h2>

      <form
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          style={inputStyle}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          style={inputStyle}
        />
        <input
          type="text"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          placeholder="Enter Video Link"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          {isEditing ? "Update Entity" : "Add Entity"}
        </button>
      </form>

      <h3 style={{ textAlign: "center", color: "#333" }}>Entity List</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {entityList.map((item, index) => (
          <li
            key={index}
            style={{
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <strong>{item.name}</strong> ({item.email}) —{" "}
            <a
              href={item.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1E90FF", textDecoration: "none" }}
            >
              Watch Video
            </a>
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => handleEdit(index)}
                style={{ ...smallButtonStyle, backgroundColor: "#FFC107" }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                style={{
                  ...smallButtonStyle,
                  backgroundColor: "#F44336",
                  marginLeft: "10px",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles
const inputStyle = {
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  color: "#fff",
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
};

const smallButtonStyle = {
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "3px",
  border: "none",
  fontSize: "14px",
  cursor: "pointer",
};

export default AddEntityPage;
