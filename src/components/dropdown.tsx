import { useState } from "react";

interface IDropdownProps {
    label : string,
    placeholder: string,
    items: string[]
}

export function Dropdown({label, items, placeholder} : IDropdownProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <div onClick={() => setDropdownOpen(!dropdownOpen)} className={`my-2 w-full border border-solid rounded-sm border-[#EBEBEB] bg-[#FDFDFD] px-2 py-1 flex flex-col`}>
            <small className="text-[#505050] ">{label}</small>
           <div className={`${dropdownOpen ? `top-full opacity-100 visible` : `top-[110%] invisible opacity-0`} absolute left-0 z-40 mt-2 w-full rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}>
            {
                items.map((e, index) => {
                    return(
                        <a href="javascript:void(0)" className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-slate-200 hover:bg-opacity-5 hover:text-slate-900">
                            {e}
                        </a>
                    );
                })
            }
           </div>
        </div>
    );
}