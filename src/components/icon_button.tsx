import { MdOutlineFlag, MdOutlineSend, MdChatBubbleOutline, MdOutlineStickyNote2, MdSend } from "react-icons/md";

interface IIConButtonProps {
    label: string,
    icon: string,
    onClick : () => void,
    focus? : boolean
}
export function IconButton({label, icon, onClick, focus} : IIConButtonProps) {
    let finalIcon;
    
    switch(icon) {
    
        case "send" :
            finalIcon = <MdOutlineSend className="w-6 h-6"/>;
            break;
        case "note" :
            finalIcon = <MdOutlineStickyNote2 className="w-6 h-6"/>;
            break;
        case "chat" :
            finalIcon = <MdChatBubbleOutline className="w-6 h-6"/>;
            break;
        case "report" :
            finalIcon = <MdOutlineFlag className="w-6 h-6"/>;
            break;
        default:
            finalIcon = <MdOutlineFlag className="w-6 h-6"/>;
            break;
    }

    return (
        <div className={`cursor-pointer mb-4 border border-solid border-[#EBEBEB94] items-center w-full justify-between flex flex-row px-2 py-2 rounded-md ${focus ? ` bg-[#ED5959] bg-opacity-25 text-[#ED5959]` : `bg-white text-[#797979]`}`}>
            <p className="text-md">{label}</p>

            {finalIcon}
        </div>
    );
}