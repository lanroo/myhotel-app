import { MdKeyboardBackspace } from "react-icons/md";
import { Chip } from "@material-tailwind/react";
import { Button } from "../button";
import { Dropdown } from "../dropdown";
import { Input } from "../input";
import { ChipItem } from "../chip_item";

interface IBodyProps {
    onClose : () => void;
}
export function OfferBody({onClose} : IBodyProps) {
    const facilities = [
        "AC", "Gym", "Wifi", "Pool", "Parking", "Laundry", "Restaurant", "Bar", "Spa", "Garden"
      ]; 

      const room_types = [
        "Single", "Coupled"
      ];
    const validities = ["1 Day", "5 Days", "1 Week", "1 Month"];

    return(
        <div className="border-0 max-h-full rounded-lg shadow-lg relative flex flex-col w-auto bg-white outline-none focus:outline-none">
        {/* */}
       
        <div className="flex flex-row items-center p-5">
          <MdKeyboardBackspace className='fill-[#636363] w-8 h-8 mr-4 cursor-pointer' onClick={onClose}/>
          <h3 className="text-xl font-semibold">
            Make an amazing offer
          </h3>
        </div>

        {/*body*/}
        <div className="relative flex flex-col p-6 flex-auto">
         <form>
         <Input type={'text'} label={"Price"} placeholder={"Enter Price"}/>

          <div className="flex-row flex">
          <Input type={'datePicker'} style='mr-4' label={"Date"} placeholder={"--/--/----"}/>
         <Dropdown label={"Validity"} placeholder={"1 Day"} items={validities}/>
          </div>
        
          <Dropdown label={"Room Type"} placeholder={""} items={room_types}/>
          <small>Facilities</small>
          <div className="grid lg:grid-cols-6 sm:grid-cols-2 md:grid-cols-3">
            { 
                facilities.map((e, index) => {
                  return (
                    <ChipItem key={index} label={e}/>
                  );
                })
            }
          </div>

            <Input type={'textarea'} label={"Message (Optional)"} placeholder={"Enter Message"}/>
         </form>
          

        </div>
        {/*footer*/}
        <div className="flex justify-between items-center p-6 border-t border-solid border-slate-200 rounded-b">
          <p className="text-[#ED5959]">Assign Guests (Optional)</p>
          <Button label={"Send"} onClick={onClose}/>
        </div>
      </div>
    );
}