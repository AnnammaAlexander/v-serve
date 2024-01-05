import Chat from "../components/user/chat/Chat"
import { FooterWithSitemap } from "../components/user/home/Footer"
import { NavbarDefault } from "../components/user/home/Navbar"
import Reviews from "../components/user/home/Reviews"
 import { HeadPage } from "../components/user/visaDetails/VisaDetails"

function VisaDetailsPage() {
  return (
    <div className="overflow-x-hidden no-scrollbar relative">
        <NavbarDefault/>
        <HeadPage/>
        <Reviews/>
        <FooterWithSitemap/>
        <Chat />

    </div>
  )
}

export default VisaDetailsPage
