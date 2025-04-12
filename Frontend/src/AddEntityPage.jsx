import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Display.css";

const AddEntityPage = () => {
  // State to store the form data and list of moments
  const [moments, setMoments] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    videoUrl: "",
  });

  // Fetch the list of entities (moments) from the server
  const fetchMoments = () => {
    axios
      .get("http://localhost:8080/api/moments")
      .then((res) => {
        setMoments(res.data); // Store the fetched moments in state
      })
      .catch((error) => console.error("Fetch moments error:", error));
  };

  useEffect(() => {
    fetchMoments(); // Fetch moments when the component mounts
  }, []);

  // Handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission to add a new entity
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading
    axios
      .post("http://localhost:8080/api/moments", formData) // Send the form data to the server
      .then(() => {
        setFormData({
          title: "",
          description: "",
          imageUrl: "",
          videoUrl: "",
        }); // Reset form data
        fetchMoments(); // Refresh the list of moments after adding a new one
      })
      .catch((error) => console.error("Add moment error:", error));
  };

  return (
    <div className="display-container">
      {/* Form to add a new moment */}
      <h1 className="display-heading">Add a New Moment</h1>
      <form className="moment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL (optional)"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <input
          type="text"
          name="videoUrl"
          placeholder="Video URL (optional)"
          value={formData.videoUrl}
          onChange={handleChange}
        />
        <button type="submit">Add Moment</button>
      </form>

      {/* List of added moments */}
      <h1 className="display-heading">Moments</h1>
      <ul className="moments-list">
        {moments.map((moment) => (
          <li key={moment._id} className="moment-item">
            <h2 className="moment-title">{moment.title}</h2>
            <p className="moment-description">{moment.description}</p>
            {moment.imageUrl && (
              <img className="moment-image" src={moment.imageUrl} alt={moment.title} />
            )}
            {moment.videoUrl && (
              <video className="moment-video" src={moment.videoUrl} controls></video>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddEntityPage;
