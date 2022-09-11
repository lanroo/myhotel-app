import { Menu } from "@headlessui/react";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

interface IDropdownProps {
    label : string,
    placeholder: string,
    items: string[]
}

export function Dropdown({label, items, placeholder} : IDropdownProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected, setSelected] = useState(items[0]);
    // 
    return (
        <Menu>
            <div onClick={() => setDropdownOpen(!dropdownOpen)} className={`my-2 w-full border border-solid rounded-sm border-[#EBEBEB] bg-[#FDFDFD] px-2 py-1 flex flex-col`}>
              <div className="flex flex-row justify-between">
              <small className="text-[#505050] ">{label}</small>
                
                <Menu.Button className={'flex flex-row justify-between items-center'}>
                   
                    <MdArrowDropDown className="w-6 h-6"/>
                </Menu.Button>
              </div>
                
                <Menu.Items className={'flex flex-col relative'}>
                    {
                    items.map((e, index) => {
                        return <Menu.Item key={index}>
                            {({active}) => (
                                <a onClick={() => setSelected(e)} href="javascript:void(0)" className={`${active ? 'bg-[#ED5959] bg-opacity-30' : 'bg-white text-black'}`}>
                                    {e}
                                </a>
                            )}
                        </Menu.Item>
                    })   
                    }
                    
                </Menu.Items>

                <p>{selected}</p>
    
            </div>
        </Menu>
    );
}