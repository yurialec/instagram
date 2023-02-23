import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from '../images/Image.jpg'
import Image2 from '../images/Image2.jpg'

export default function Stories() {

    return (
        <div className="relative mb-5">
            <div className="absolute left-3 absolute top-1/2 -translate-y-1/2 z-10">
                <a className="bg-white text-gray-400 flex items-center justify-center rounded-full text-sm w-6 h-6 text-xs shadow-md cursor-pointer" href="">
                    <FontAwesomeIcon icon="chevron-left" />
                </a>
            </div>
            <div className="absolute right-3 top-1/2">
                <a className="bg-white text-gray-400 flex items-center justify-center rounded-full text-sm w-6 h-6 text-xs shadow-md cursor-pointer" href="">
                    <FontAwesomeIcon icon="chevron-right" />
                </a>
            </div>
            <ul className="border rounded-lg border-slate-200 p-4 flex space-x-4 overflow-x-auto">
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img
                                class="rounded-full w-16 h-16"
                                src={Image}
                            />
                        </a>
                    </div>
                    <a className="cursor-pointer" href="">
                        <div className="text-xs text-center overflow-hidden text-elipsis w-20">
                            User262525
                        </div>
                    </a>
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img
                                class="rounded-full w-16 h-16"
                                src={Image2}
                            />
                        </a>
                    </div>
                    <a className="cursor-pointer" href="">
                        <div className="text-xs text-center overflow-hidden text-elipsis w-20">
                            User659865
                        </div>
                    </a>
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img
                                class="rounded-full w-16 h-16"
                                src={Image}
                            />
                        </a>
                    </div>
                    <a className="cursor-pointer" href="">
                        <div className="text-xs text-center overflow-hidden text-elipsis w-20">
                            User262525
                        </div>
                    </a>
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img
                                class="rounded-full w-16 h-16"
                                src={Image2}
                            />
                        </a>
                    </div>
                    <a className="cursor-pointer" href="">
                        <div className="text-xs text-center overflow-hidden text-elipsis w-20">
                            User659865
                        </div>
                    </a>
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img
                                class="rounded-full w-16 h-16"
                                src={Image}
                            />
                        </a>
                    </div>
                    <a className="cursor-pointer" href="">
                        <div className="text-xs text-center overflow-hidden text-elipsis w-20">
                            User262525
                        </div>
                    </a>
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img
                                class="rounded-full w-16 h-16"
                                src={Image2}
                            />
                        </a>
                    </div>
                    <a className="cursor-pointer" href="">
                        <div className="text-xs text-center overflow-hidden text-elipsis w-20">
                            User659865
                        </div>
                    </a>
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img
                                class="rounded-full w-16 h-16"
                                src={Image}
                            />
                        </a>
                    </div>
                    <a className="cursor-pointer" href="">
                        <div className="text-xs text-center overflow-hidden text-elipsis w-20">
                            User262525
                        </div>
                    </a>
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img
                                class="rounded-full w-16 h-16"
                                src={Image2}
                            />
                        </a>
                    </div>
                    <a className="cursor-pointer" href="">
                        <div className="text-xs text-center overflow-hidden text-elipsis w-20">
                            User659865
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}