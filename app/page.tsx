import AboutUs from "@/components/AboutUs";
import Bod from "@/components/Bod";
import Cosa from "@/components/Cosa";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";


export default function Home() {
  return (
    <div className="overflow-hidden dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <Navbar/>
      <Cosa/>
      <div className="relative">
        <AboutUs/>
      </div>
      <div className="relative">
        <Bod/>
      </div>
      <div className="relative">
        <Events/>
      </div>
      <div className="relative">
        <Socials/>
      </div>
      <div className="relative">
        <Footer/>
      </div>
    </div>
  )
}
