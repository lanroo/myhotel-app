import Avatar from "react-avatar";
import { AvatarGenerator } from 'random-avatar-generator';

interface IItemListProps {
    name: string;
    profession : string;
    created : number;
    punctuation : number;
    avatar : string;
}
export function ItemList({name, profession, created, punctuation, avatar} : IItemListProps) {
    // let name = 'Alex Smith';
    // const generator = new AvatarGenerator();
    // let avatar = generator.generateRandomAvatar('avatar');
    
    return (
        <div className="my-2 p-4 rounded-lg flex flex-row justify-between w-full h-content bg-white shadow-lg">

        <div className="flex flex-row">
            <Avatar name={name} size="48" className="rounded-md"/>
            {/* <img src={avatar} className='w-16 h-16 rounded-md'/> */}

            <div className="flex flex-col px-4">
                <p className="text-base text-slate-900">{name}</p>
                <p className="text-sm text-slate-400">{profession}</p>
            </div>
        </div>

        <div className="flex flex-col items-end">
                <p className="text-sm text-slate-400">{created} days ago</p>
                <p className="px-3 py-1 bg-[#78d27f]/[.3] rounded-2xl text-[#78d27f]">{punctuation}</p>
                
        </div>
        </div>
    );
}