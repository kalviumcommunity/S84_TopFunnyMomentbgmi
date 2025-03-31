import ClipCard from "./ClipCard";
import LandingPage from "./LandingPage";
import Display from "./Display";
import vidurl from './assets/bgmi clip.mp4';

function App() {
    return (
        <div className="app-container">
            <LandingPage />
            <div className="clip-list">
                <ClipCard
                    title="Epic Grenade Fail!"
                    uploader="Sksham"
                    votes={42}
                    videoUrl={vidurl}
                />
            </div>
            <Display />
        </div>
    );
}

export default App;
