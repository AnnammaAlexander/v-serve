import Banner from '../components/user/home/Banner'
// import NavbarHeader, { NavbarDefault } from '../components/user/home/Navbar'
import { BackgroundBlogCard } from '../components/user/home/Card'
import Reviews from '../components/user/home/Reviews'
import { TimelineWithAvatar } from '../components/user/home/Timeline'
import { FooterWithSitemap } from '../components/user/home/Footer'
import { NavbarDefault } from '../components/user/home/Navbar'
import Chat from '../components/user/chat/Chat'
// import { Button } from '@material-tailwind/react'
function HomePage() {
  return (
    <div className='overflow-x-hidden no-scrollbar relative'>
      <NavbarDefault/>
      <Banner/>
      <BackgroundBlogCard/>
      <Reviews/>
      <TimelineWithAvatar/>
      <FooterWithSitemap/>
      <Chat />
      
    </div>
  )
}

export default HomePage
