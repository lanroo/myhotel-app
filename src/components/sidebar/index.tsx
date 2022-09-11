import { MdKeyboardBackspace } from "react-icons/md";
import internal from "stream";
import { Dropdown } from "../dropdown";
import { Input } from "../input";
import { OfferBody } from "./offer_body";
import { ProfileBody } from "./profile_body";

interface ISidebarProps {
  onClose : () => void;
  body: number,
  profile? : any
}

export function Sidebar({onClose, body, profile} : ISidebarProps) {

function renderBody() {
  switch(body) {
      case 1:
        //Offer
        return <OfferBody onClose={onClose}/>
      case 2:
          //Profile
        return <ProfileBody onClose={onClose} profile={profile}/>
  }

  return <></>
}

    return(
        <>
        <div
          className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="fixed right-0 top-0 max-h-full overflow-y-auto w-auto my-6 mx-auto max-w-3xl">
          {
            renderBody()
          }
              
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
}