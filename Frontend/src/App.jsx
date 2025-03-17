import ClipCard from "./ClipCard";
import LandingPage from "./LandingPage";
import vidurl from './assets/bgmi clip.mp4'

function App() {
    return (
        <>
            <LandingPage />
            <div className="clip-list">
                <ClipCard
                    title="Epic Grenade Fail!"
                    uploader="Sksham"
                    votes={42}
                    videoUrl={vidurl}
                />
            </div>
        </>
    );
}

export default App;
