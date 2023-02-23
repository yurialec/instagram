import Nature from '../images/Nature.jpg'
import Image from '../images/Image2.jpg'
import Image2 from '../images/Image.jpg'

export default function Highlights() {

    return (
        <div className="flex flex-row p-2 content-center mb-8 space-x-2 md:space-x-10 text-sm font-semibold w-full overflow-auto">
            <div className="w-30">
                <a href="">
                    <div className="border p-1 rounded-full">
                        <img
                            className="rounded-full w-16 h-16"
                            alt='Profile'
                            src={Nature}
                            width="80"
                        />
                    </div>
                    <div className='text-center overflow-hidden text-ellipsis'>
                        Nature
                    </div>
                </a>
            </div>
            <div className="w-30">
                <a href="">
                    <div className="border p-1 rounded-full">
                        <img
                            className="rounded-full w-16 h-16"
                            alt='Profile'
                            src={Image}
                            width="80"
                        />
                    </div>
                    <div className='text-center overflow-hidden text-ellipsis'>
                        Person
                    </div>
                </a>
            </div>
            <div className="w-30">
                <a href="">
                    <div className="border p-1 rounded-full">
                        <img
                            className="rounded-full w-16 h-16"
                            alt='Profile'
                            src={Image2}
                            width="80"
                        />
                    </div>
                    <div className='text-center overflow-hidden text-ellipsis'>
                        Freedom
                    </div>
                </a>
            </div>
        </div>
    );
}