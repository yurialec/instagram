import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../images/logo.png'
import UserProfile from '../images/UserProfile.jpg'
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const classNames = (...classes) =>{
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {

    return (
        <nav className="sticky top-0 w-full border border-b-1 z-50 bg-white">
            <div className="container max-w-xl">
                <div className="flex flex-row py-1 items-center">
                    <Link to="/">
                        <img
                            className=""
                            src={Logo}
                            alt="Logo"
                            width={120}
                        />
                    </Link>
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
                                <Link to="/">
                                    <FontAwesomeIcon icon="house" />
                                </Link>
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
                    <Menu
                        as="div"
                        className="relative inline-block text-left"
                    >
                        <div>
                            <Menu.Button className="inline-block w-8 h-8 justify-center bg-white text-sm font-medium text-gray-700">
                                <img
                                    className="rounded-full"
                                    src={UserProfile}
                                    width="24"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({active }) => (
                                            <Link
                                                to={"/yuri_alec"}
                                                className={`${
                                                    classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700'
                                                    , 'block px-4 py-2 text-sm text-gray-700')
                                                    }`}
                                            >
                                                <FontAwesomeIcon
                                                    icon="fa-solid fa-user"
                                                    className="mr-3"
                                                />
                                                Profile
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active }) => (
                                            <Link
                                                to={"/yuri_alec"}
                                                className={`${
                                                    classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700'
                                                    , 'block px-4 py-2 text-sm text-gray-700')
                                                    }`}
                                            >
                                                <FontAwesomeIcon
                                                    icon="fa-solid fa-bookmark"
                                                    className="mr-3"
                                                />
                                                Saved
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active }) => (
                                            <Link
                                                to={"/yuri_alec"}
                                                className={`${
                                                    classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700'
                                                    , 'block px-4 py-2 text-sm text-gray-700')
                                                    }`}
                                            >
                                                <FontAwesomeIcon
                                                    icon="fa-solid fa-gear"
                                                    className="mr-3"
                                                />
                                                Settings
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active }) => (
                                            <Link
                                                to={"/yuri_alec"}
                                                className={`${
                                                    classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700'
                                                    , 'block px-4 py-2 text-sm text-gray-700')
                                                    }`}
                                            >
                                                Logout
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </nav>
    );
}