interface IButtonProps {
    label: string;
    onClick: () => void;
}
export function Button({label, onClick} : IButtonProps) {
    return(
        <div onClick={onClick} className='cursor-pointer hover:bg-rose-500 transition-all w-auto bg-[#ED5959] rounded-xl px-6 py-2 text-white text-md'>{label}</div>
    );
}