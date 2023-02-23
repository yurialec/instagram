import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import UserProfile from '../images/UserProfile.jpg'

export default function ProfileHeader( props ) {
    return (
        <div className="grid grid-cols-3 mb-10">
            <div className="bg-green p-3 rounded flex items-start justify-center">
                <img
                    className="rounded-full"
                    alt='Profile'
                    src={UserProfile}
                    width="150"
                />
            </div>
            <div className='p-3 text-gray-600 cols-span-2'>
                <div className='flex items-center'>
                    <h1 className='inline-block text-3xl align-bottom block'>
                        yuri_alec
                    </h1>
                    <Link
                        as="button"
                        to="/accounts/edit"
                        className="bg-white ml-3  text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded text-sm"
                    >
                        Edit Profile
                    </Link>
                    <a
                        className="ml-3 cursor-pointer"
                        onClick={() => props.setIsSettingsModalOpen(true)}
                    >
                        <FontAwesomeIcon
                            icon="gear"
                            className="text-2xl leading-6"
                        />
                    </a>
                </div>
                <div className="flex-row py-5 max-w-sm hidden lg:flex">
                    <div className="basis-1/2 ">
                        <strong>230</strong> posts
                    </div>
                    <div className="basis-1/2">
                        <strong className="mr-1">1050</strong> followers
                    </div>
                    <div className="basis-1/2">
                        <strong className="mr-1">30</strong>following
                    </div>
                </div>
                <h3 className='font-bold'>Yuri Alec | Web Dev</h3>
                <p>velit sed ullamcorper morbi tincidunt</p>
                <p>turpis in eu mi bibendum</p>
                <a href='https://www.linkedin.com/in/yuri-alec-3976b227/' target="_blank" className='text-blue-900 font-bold'>My Linkedin</a>
            </div>
        </div>
    );
}