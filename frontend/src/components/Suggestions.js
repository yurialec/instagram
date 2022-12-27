import UserProfile from '../images/UserProfile.jpg'

export default function () {

    return (
        <div>
            <div className="flex flex-row pt-5">
                <div className="w-72 font-bold text-gray-500 text-sm">
                    Suggestions for you
                </div>
                <div className="w-32 text-sm text-right">
                    <a className="text-black-400 font-bold text-xs" href="">
                        See All
                    </a>
                </div>
            </div>
            <div className="flex py-2">
                <div className="flex items-center">
                    <a className="inline-block align-top" href="">
                        <img
                            className="rounded-full"
                            src={UserProfile}
                            width="35"
                        />
                    </a>
                    <div className='inline-block ml-2'>
                        <div className='text-sm font-medium'>
                            User986532
                        </div>
                        <div className='text-gray-500 text-xs'>
                            Suggested for you
                        </div>
                    </div>
                </div>
                <div className='flex-1 items-center flex justify-end'>
                    <a className='text-xs text-sky-500 font-bold' href=''>Follow</a>
                </div>
            </div>
            <div className="flex py-2">
                <div className="flex items-center">
                    <a className="inline-block align-top" href="">
                        <img
                            className="rounded-full"
                            src={UserProfile}
                            width="35"
                        />
                    </a>
                    <div className='inline-block ml-2'>
                        <div className='text-sm font-medium'>
                            User222222
                        </div>
                        <div className='text-gray-500 text-xs'>
                            Suggested for you
                        </div>
                    </div>
                </div>
                <div className='flex-1 items-center flex justify-end'>
                    <a className='text-xs text-sky-500 font-bold' href=''>Follow</a>
                </div>
            </div>
            <div className="flex py-2">
                <div className="flex items-center">
                    <a className="inline-block align-top" href="">
                        <img
                            className="rounded-full"
                            src={UserProfile}
                            width="35"
                        />
                    </a>
                    <div className='inline-block ml-2'>
                        <div className='text-sm font-medium'>
                            User789654
                        </div>
                        <div className='text-gray-500 text-xs'>
                            Suggested for you
                        </div>
                    </div>
                </div>
                <div className='flex-1 items-center flex justify-end'>
                    <a className='text-xs text-sky-500 font-bold' href=''>Follow</a>
                </div>
            </div>
            <div className="flex py-2">
                <div className="flex items-center">
                    <a className="inline-block align-top" href="">
                        <img
                            className="rounded-full"
                            src={UserProfile}
                            width="35"
                        />
                    </a>
                    <div className='inline-block ml-2'>
                        <div className='text-sm font-medium'>
                            User123456
                        </div>
                        <div className='text-gray-500 text-xs'>
                            Suggested for you
                        </div>
                    </div>
                </div>
                <div className='flex-1 items-center flex justify-end'>
                    <a className='text-xs text-sky-500 font-bold' href=''>Follow</a>
                </div>
            </div>
        </div>
    );
}