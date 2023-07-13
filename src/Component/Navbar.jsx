import { useState } from "react"
import Logo from "../assets/Logo.svg"
import {BsCart2} from "react-icons/bs"
import HomeIcon  from "@mui/icons-material/Home";
import  InfoIcon  from "@mui/icons-material/Info";
import  CommentRoundedIcon   from "@mui/icons-material/CommentRounded";
import  PhoneRoundIcon  from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';



const Navbar = () => {
    const [openMenu , setOpenMenu ] = useState(false)
    const menuOptions = [
        {
          text: "Home",
          icon: <HomeIcon />,
        },
        {
          text: "About",
          icon: <InfoIcon />,
        },
        {
          text: "Testimonials",
          icon: <CommentRoundedIcon />,
        },
        {
          text: "Contact",
          icon: <PhoneRoundIcon />,
        },
        {
          text: "Cart",
          icon: <ShoppingCartRoundedIcon />,
        },
      ]
  return (
    <nav>
<div className="navbar-logo-containner">
    <img src={Logo} alt="" />
</div>
<div className="navbar-link-container">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Testmonials</a>
    <a href="">Contact</a>
    <a href="">
        <BsCart2 className="navbar-cart-button" ></BsCart2>
    </a>
    <button className="primary-button" >Booking Now</button>
</div>


    </nav>
  )
}

export default Navbar