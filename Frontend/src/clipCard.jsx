import React from "react";

function ClipCard({ title, uploader, votes, videoUrl }) {
    return (
        <div className="clip-container">
            <video className="clip-video" src={videoUrl} controls />
            <div className="clip-title">{title}</div>
            <div className="clip-uploader">Uploaded by {uploader}</div>
            <div className="clip-actions">
                <div className="clip-votes">{votes} Votes</div>
                <button className="vote-button">Vote</button>
            </div>
        </div>
    );
}

export default ClipCard;
