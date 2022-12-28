import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../images/logo.png'
import UserProfile from '../images/UserProfile.jpg'

export default function Navbar() {

    return (
        <nav className="sticky top-0 w-full border border-b-1 z-50 bg-white">
            <div className="container max-w-xl">
                <div className="flex flex-row py-1 items-center">
                    <img
                        className=""
                        src={Logo}
                        alt="Logo"
                        width={120}
                    />
                    <div className="basis-1/3 hidden md:block">
                        <div className="relative">
                            <FontAwesomeIcon
                                icon="magnifying-glass"
                                className="absolute left-3 top-3 text-gray-300"
                            />
                            <input
                                id="search"
                                className="p-2 bg-gray-100 rounded-lg w-80 pl-10 align-middle focus:outline-0 placeholder:font-light"
                                placeholder="Search"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="basis-1/3">
                        <ul className="flex flex-row space-x-4 p-2 text-2xl justify-end items-center">
                            <li>
                                <a className="cursor-pointer">
                                    <FontAwesomeIcon icon="house" />
                                </a>
                            </li>
                            <li>
                                <a className="cursor-pointer">
                                    <FontAwesomeIcon
                                        icon="comment-dots"
                                    />
                                </a>
                            </li>
                            <li>
                                <a className="cursor-pointer">
                                    <FontAwesomeIcon
                                        icon="square-plus"
                                    />
                                </a>
                            </li>
                            <li>
                                <a className="cursor-pointer">
                                    <FontAwesomeIcon
                                        icon="compass"
                                    />
                                </a>
                            </li>
                            <li>
                                <a className="cursor-pointer">
                                    <FontAwesomeIcon
                                        icon="heart"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                        <img
                            className="rounded-full w-6 w-full"
                            src={UserProfile}
                            alt="User Profile"
                            width="25"
                        />
                </div>
            </div>
        </nav>
    );
}