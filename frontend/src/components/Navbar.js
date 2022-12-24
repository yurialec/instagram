import { faFontAwesome } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {

    return (
        <nav className="sticky top-0 w-full border border-b-1 z-50">
            <div className="container max-w-5xl">
                <div className="flex flex-row py-1 items-center">
                    <div className="basis-1/3">
                        <img
                            src="/images/logo-instagram.png"
                            alt="Logo"
                            width="120" />
                    </div>
                    <div className="basis-1/3">
                        <faMagnifyingGlass icon="magnifying-glass" className="absolute left-3 top-3 text-gray-300"/>
                        <input type="text" />
                    </div>
                    <div className="basis-1/3">Icons</div>
                </div>
            </div>
        </nav>
    )
}