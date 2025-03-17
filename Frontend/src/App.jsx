import ClipCard from "./clipCard";
import LandingPage from "./LandingPage";

function App() {
    return (
        <>
            <LandingPage />
            <div className="mt-6">
                <ClipCard
                    title="Epic Grenade Fail!"
                    uploader="Sksham"
                    votes={42}
                    videoUrl="https://youtu.be/ttgAz_UQ9ic?si=fycO5eAU5JVV4Wsy"
                />
            </div>
        </>   
    );
}

export default App;
