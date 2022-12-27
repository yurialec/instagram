import UserProfile from '../images/UserProfile.jpg'

export default function BasicProfile() {

    return (
        <div className="flex flex-row">
            <a href="">
                <img
                    className="rounded-full"
                    src={UserProfile}
                    width="100"
                />
            </a>
            <div className='w-72 pl-2 m-auto'>
                <div className='text-sm font-medium'>
                    <a href=''>yuri_alec</a>
                </div>
                <div className='text-gray text-sm'>
                    Yuri Alec - Web Dev
                </div>
            </div>
            <div className='w-32 text-right m-auto'>
                <a className='text-xs text-sky-500 font-bold cursor-pointer' href=''>
                    Sign Out
                </a>
            </div>
        </div>
    );
}