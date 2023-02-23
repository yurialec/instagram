import { useState } from 'react';
import UserProfile from '../images/UserProfile.jpg'
import Photo from '../images/photo-01.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalPostActions from './ModalPostActions';
import ModalPost from './ModalPost'

export default function Posts() {

    const [isModalOpen, setModalOpen] = useState(false);
    const [isPostModalOpen, setPostModalOpen] = useState(false);

    return (
        <>
            <ModalPostActions
                open={isModalOpen}
                setOpen={setModalOpen}
            />
            <ModalPost
                open={isPostModalOpen}
                setOpen={setPostModalOpen}
            />

            <div className="border rounded-lg border-slate-200 mb-5 bg-white">
                <div className="p-3 flex flex-row">
                    <div className="flex-1">
                        <a href="" className="">
                            <img
                                className="rounded-full w-8 inline"
                                src={UserProfile}
                            />
                            <span className='font-medium text-sm ml-2'>
                                User123
                            </span>
                        </a>
                    </div>
                    <div className="">
                        <a
                            className=""
                            href="#"
                            onClick={() => setModalOpen(true)}
                        >
                            <FontAwesomeIcon icon="ellipsis" />
                        </a>
                    </div>
                </div>
                <img
                    className='w-100'
                    src={Photo}
                    alt='Photo by web developer'
                />
                <div className='p-3 flex-container flex-row text-2xl'>
                    <div className='flex-1'>
                        <a className='mr-3 text-red-600 cursor-pointer' href=''>
                            <FontAwesomeIcon icon="heart" />
                        </a>
                        <a
                            className='mr-3 hover:text-gray cursor-pointer'
                            onClick={() => setPostModalOpen(true)}
                        >
                            <FontAwesomeIcon icon={['fa', 'comment']} />
                        </a>
                        <a className='mr-10 cursor-pointer hover:text-gray-500' href=''>
                            <FontAwesomeIcon icon={['fas', 'paper-plane']} />
                        </a>
                        <a className='ml-10 cursor-pointer hover:text-gray-500' href=''>
                            <FontAwesomeIcon icon={["fas", "bookmark"]} />
                        </a>
                    </div>
                </div>
                <div className='font-medium text-sm px-3'>1.000 Likes</div>
                <div className='px-3 text-sm'>
                    <span className='font-medium'>User101010</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='text-grat-500 uppercase p-3 text-xs tracking-wide mt-2'>
                    10 hours ago
                </div>
                <div className='p-3 flex flex-row border-t'>
                    <div className='flex items-center'>
                        <a className='text-2xl cursor-pointer' href=''>
                            <FontAwesomeIcon icon={["fas", "face-smile"]} />
                        </a>
                    </div>
                    <div className='flex-1 pr-3 py-1'>
                        <input
                            className='w-full px-3 py-1 text-sm outline-0'
                            type="text"
                            placeholder='Add comment'
                        />
                    </div>
                    <div className='flex items-center text-sm'>
                        <a className='text-sky-500 font-medium cursor-pointer' href=''>
                            Post
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}