import { Textarea } from "@material-tailwind/react";
import { DatePicker } from "./datepicker";
interface IInputProps {
    type: string, 
    label: string,
    placeholder: string,
    style?: string,
}

export function Input({type, style, label, placeholder} : IInputProps) {
    return( 

        <div className={`${`${type == 'datePicker' ?? 'datepicker relative form-floating mb-3 xl:w-96'}`} items-start form-control my-2 w-full border border-solid rounded-sm border-[#EBEBEB] bg-[#FDFDFD] px-2 py-1 flex flex-col transition ease-in-out ${style}`}>
        
            <small className="text-[#505050] ">{label}</small>
        
        {type == 'textarea' ?  <Textarea className="w-full h-32 outline-none border-none" aria-label={label} placeholder={placeholder}/> : <input className="w-full h-full outline-none border-none" aria-label={label} placeholder={placeholder} type='text'/>}
        
        </div>
    );
}