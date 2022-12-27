import BasicProfile from "../components/BasicProfile";
import Footer from "../components/Footer";
import Stories from "../components/Stories";
import Suggestions from "../components/Suggestions";

export default function Home() {

    return (
        <div className="container pt-8 max-w-5xl">
            <main className="grid grid-cols-3">
                <div className="md:px-12 lg:px col-span-3 lg:col-span-2">
                    <Stories />
                </div>
                <div className="col-spa-1 hidden lg:block">
                    <div className="fixed p-5 w-80">
                        <BasicProfile />
                        <Suggestions />
                        <Footer />
                    </div>
                </div>
            </main>
        </div>
    );
} 