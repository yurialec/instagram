import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePosts from "./ProfilePosts";

export default function ProfilePost() {

    return (
        <>
            <ul className="flex flex-row p-2 text-sm items-center justify-center border-t text-gray-400 h-16 lg:hidden">
                <li className="flex-1 text-center">
                    <strong className="text-black block">107</strong>Posts
                </li>
                <li className="flex-1 text-center">
                    <strong className="text-black block">107</strong>Posts
                </li>
                <li className="flex-1 text-center">
                    <strong className="text-black block">107</strong>Posts
                </li>
                <li className="flex-1 text-center">
                    <strong className="text-black block">107</strong>Posts
                </li>
            </ul>
            <div className="flex flex-row text-2xl items-center justify-center border-t uppercase text-gray-400 tracking-widest h-16 lg:text-xs">
                <a className="text-black border-t border-black flex justify-center items-center h-full mr-16 cursor-pointer">
                    <FontAwesomeIcon icon="table-cells" />
                    <span className="hidden ml-2 lg:inline-block">Posts</span>
                </a>
                <a className="flex justify-center items-center h-full mr-16 cursor-pointer">
                    <FontAwesomeIcon icon="play" />
                    <span className="hidden ml-2 lg:inline-block">Reels</span>
                </a>
                <a className="flex justify-center items-center h-full mr-16 cursor-pointer">
                    <FontAwesomeIcon icon={['fas', 'circle-play']} />
                    <span className="hidden ml-2 lg:inline-block">Videos</span>
                </a>
                <a className="flex justify-center items-center h-full mr-16 cursor-pointer">
                    <FontAwesomeIcon icon={['fas', 'bookmark']} />
                    <span className="hidden ml-2 lg:inline-block">Saved</span>
                </a>
                <a className="flex justify-center items-center h-full mr-16 cursor-pointer">
                    <FontAwesomeIcon icon={['fas', 'user-tag']} />
                    <span className="hidden ml-2 lg:inline-block">Tagged</span>
                </a>
            </div>
            <div className="grid grid-cols-3 gap-1 lg:gap-8">
                <ProfilePosts />
                <ProfilePosts />
                <ProfilePosts />
                <ProfilePosts />
                <ProfilePosts />
                <ProfilePosts />
            </div>
        </>
    );
}