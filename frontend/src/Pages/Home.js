import Stories from "../components/Stories";

export default function Home() {

    return (
        <div className="container pt-8 max-w-5xl">
            <main className="grid grid-cols-3">
                <div className="md:px-12 lg:px col-span-3 lg:col-span-2">
                    <Stories />
                </div>
                <div className="col-spa-1 hidden lg:block">Sidebar</div>
            </main>
        </div>
    );
}