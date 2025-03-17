import ClipCard from "./ClipCard";
import LandingPage from "./LandingPage";

function App() {
    return (
        <>
            <LandingPage />
            <div className="clip-list">
                <ClipCard
                    title="Epic Grenade Fail!"
                    uploader="Sksham"
                    votes={42}
                    videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
                />
            </div>
        </>
    );
}

export default App;
