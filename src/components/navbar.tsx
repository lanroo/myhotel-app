import Image from 'next/image';
import { MdNotificationsNone, MdOutlineSettings } from 'react-icons/md';
import { Button } from './button';
// import logo from 'logo.svg';
export function Navbar() {
    return (
        <div className='flex flex-row justify-between fixed items-center content-center top-0 left-0 w-screen h-16 bg-white px-10'>
            {/* <img src={logo}/> */}
            <Image src={require("../assets/logo.png").default} className='h-4'/>
            {/* <h2 className='text-[#ED5959] text-lg'>Hotel</h2> */}

            <div className='flex flex-row content-center items-center'>
                <Button label={'New Offer'} onClick={() => {}}/>
                <MdNotificationsNone className='fill-[#636363] w-6 h-6 mx-4'/>
                <MdOutlineSettings className='fill-[#636363]  w-6 h-6'/>
            </div>
        </div>
    );
}