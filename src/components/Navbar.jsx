import logo from "../assets/logo-no-background.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-20" src={logo} alt="" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl" >
          <a href="https://www.linkedin.com/in/ravi-teja-alikanti/"><FaLinkedin/></a>
          <a href="https://github.com/R-A-V-I-T-E-J-A"><FaGithub/></a>
          <a href="https://join.skype.com/invite/tQGxvunYoOex"><FaSkype/></a>
          <a href="https://x.com/RAVI_TEJA08?t=KmaD1Rmyu5NQtXU7T_0Ztw&s=08&mx=2"><FaSquareXTwitter/></a>
          <a href="https://www.instagram.com/lostinthoughtssssssss?igsh=dDA4anRqNTVsaTI="><FaInstagram/></a>
            
        </div>
    </nav>
  )
}

export default Navbar