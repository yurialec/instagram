import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Post from '../images/Post.jpg'

export default function ProfilePosts() {

    const [showOverlay, setShowOverLay] = useState(false);

    return (
        <div className="relative overflow-hidden w-full pt-[100%]"
        onMouseEnter={() => setShowOverLay(true)}>
            <a href='#'>
                <div className={`bg-gray-800 bg-opacity-60 h-full absolute inset-0 z-10 flex items-center justify-center text-white ${showOverlay ? "" : "hidden"} `} onMouseLeave={() => setShowOverLay(false)}>
                    <FontAwesomeIcon icon="heart" />
                    <span>200</span>
                    <FontAwesomeIcon icon="comment" className='ml-8' />
                    <span className='ml-2'>200</span>
                </div>
            </a>
            <img
                className='absolute inset-0 object-cover w-full h-full'
                src={Post}
                alt="Post"
            />
        </div>
    );
}