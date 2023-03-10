import Highlights from "../components/Highlights";
import ProfileHeader from "../components/ProfileHeader";
import ProfilePost from "../components/ProfilePost";
import Footer from "../components/Footer";

export default function Profile({setIsSettingsModalOpen}) {
    return (
        <div className="container pt-8 max-w-5xl">
            <main className="bg-slate-50">
                <ProfileHeader
                    setIsSettingsModalOpen={setIsSettingsModalOpen}
                />
                <Highlights />
                <ProfilePost />
                <Footer />
            </main>
        </div>
    );
}