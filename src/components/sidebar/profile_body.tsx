import { AvatarGenerator } from "random-avatar-generator";
import { MdKeyboardBackspace } from "react-icons/md";
import { Dropdown } from "../dropdown";
import { IconButton } from "../icon_button";
import { Input } from "../input";

interface IBodyProps {
    onClose : () => void;
    profile : any
}
export function ProfileBody({onClose, profile} : IBodyProps) {
    const generator = new AvatarGenerator();
    let avatar = generator.generateRandomAvatar();
   
    return(
        <div className="border-0 max-h-full  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        {/* */}
       
        <div className="flex flex-row items-center p-5">
          <MdKeyboardBackspace className='fill-[#636363] w-8 h-8 mr-4 cursor-pointer' onClick={onClose}/>
          <h3 className="text-xl font-semibold">
          {profile.name ?? 'Alex Smith'}
          </h3>
        </div>

        {/*body*/}
        <div className="relative flex flex-col p-6 flex-auto">
            <div className="flex flex-col items-center">
                <img className="w-40 h-40 rounded-md shadow-md" src={avatar} alt="Profile Image" />
                <p className="text-base text-slate-900 font-bold mt-2">{profile.name ?? 'Alex Smith'}</p>
                <p className="text-sm text-slate-400 mb-8">{profile.profession ?? 'Doctor'}</p>

                <IconButton label={"Send Offer"} focus={true} icon={"send"} onClick={() => {console.log('click');}}/>
                <IconButton label={"Add Note"} icon={"note"} onClick={() => {console.log('click');}}/>
                <IconButton label={"Chat"} icon={"chat"} onClick={() => {console.log('click');}}/>
                <IconButton label={"Report"} icon={"report"} onClick={() => {console.log('click');}}/>
            </div>      
        </div>
      </div>
    );
}