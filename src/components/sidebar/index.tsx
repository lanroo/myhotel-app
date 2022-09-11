import { MdKeyboardBackspace } from "react-icons/md";
import { Dropdown } from "../dropdown";
import { Input } from "../input";

interface ISidebarProps {
onClose : () => void;
}

export function Sidebar({onClose} : ISidebarProps) {

  const facilities = [
  "AC", "Gym", "Wifi", "Pool", "Parking", "Laundry", "Restaurant", "Bar", "Spa", "Garden"
]; 
const validities = ["1 Day", "5 Days", "1 Week", "1 Month"];
console.log('Modal Chamado');
    return(
        <>
        <div
          className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="fixed right-0 top-0 max-h-full overflow-y-auto w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 max-h-full  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* */}
             
              <div className="flex flex-row items-center p-5">
                <MdKeyboardBackspace className='fill-[#636363] w-8 h-8 mr-4' onClick={onClose}/>
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
              
                <Input type={'text'} label={"Room Type"} placeholder={"Single"}/>
                <small>Facilities</small>
                <div className="grid grid-cols-6">
                  { 
                      facilities.map((e, index) => {
  
                        return (
                        <div key={index} className='m-2 w-content p-2 border border-solid border-[#505050]-[.3] rounded-xl bg-slate-200-[.6]'>
                          <p>{e}</p>
                        </div>
                        );
                      })
                  }
                </div>


<Input type={'textarea'} label={"Message (Optional)"} placeholder={"Enter Message"}/>
               </form>
                
   
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={onClose}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
}