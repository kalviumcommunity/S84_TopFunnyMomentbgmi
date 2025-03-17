function ClipCard({ title, uploader, votes, videoUrl }) {
    return (
        <div className="clip-container">
            <video className="clip-video" src={videoUrl} controls />
            <h3 className="clip-title">{title}</h3>
            <p className="clip-uploader">Uploaded by: {uploader}</p>
            <div className="clip-actions">
                <span className="clip-votes">Votes: {votes}</span>
                <button className="vote-button">Vote</button>
            </div>
        </div>
    );
}

export default ClipCard;
