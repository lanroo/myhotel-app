import { useState } from "react";

interface IChipItemProps {
    label:string,
}

export function ChipItem({label} : IChipItemProps) {
    const [selected, setSelected] = useState(false);

    //color selected on/off 
    return( 
        <div onClick={() => setSelected(!selected)} className={`${selected ? 'bg-[#ED5959] bg-opacity-30 text-[#ED5959]' : 'bg-white'} cursor-pointer m-2 w-content p-2 border border-solid border-[#505050]-[.3] rounded-xl bg-slate-200-[.6] ease-in transition-all`}>
                      <p>{label}</p>
                    </div> 
    );
}