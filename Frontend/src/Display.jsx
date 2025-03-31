import { React, useEffect, useState } from "react";
import axios from "axios";
import "./Display.css";

const Display = () => {
  const [moments, setfirst] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/moments")
      .then((res) => {
        const save = res.data;
        setfirst(save);
      })
      .catch((error) => console.error("error", error));
  }, []);

  return (
    <div className="display-container">
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

export default Display;