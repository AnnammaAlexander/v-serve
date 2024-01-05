import Applyform from "../components/user/applyForm/Applyform"
import Chat from "../components/user/chat/Chat"
import { NavbarDefault } from "../components/user/home/Navbar"

function ApplyFormpage() {
  return (
    <div className="no-scrollbar relative">
      <NavbarDefault/>
      <Applyform/>
      <Chat />

    </div>
  )
}

export default ApplyFormpage
