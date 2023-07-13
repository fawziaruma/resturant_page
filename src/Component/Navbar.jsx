import { useState } from "react"
import Logo from "../assets/Logo.svg"
import {BsCart2} from "react-icons/bs"
import HomeIcon  from "@mui/icons-material/Home";
import  InfoIcon  from "@mui/icons-material/Info";
import  CommentRoundedIcon   from "@mui/icons-material/CommentRounded";
import  PhoneRoundIcon  from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import  Drawer  from "@mui/material/Drawer";
import Box  from "@mui/material/Box";

import { HiOutlineBars3 } from 'react-icons/hi2'
import  List  from "@mui/material/List";
import  ListItem  from "@mui/material/ListItem";
import  ListItemButton  from "@mui/material/ListItemButton";
import ListItemIcon  from "@mui/material/ListItemIcon";
import  ListItemText   from "@mui/material/ListItemText";
import  Divider  from "@mui/material/Divider";




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
<div className="navabar-menu-container">
<HiOutlineBars3 onClick={()=> setOpenMenu(true) } />
</div>
<Drawer open={openMenu} onClose={()=> setOpenMenu(false)} anchor="right">
    <Box 
    sx={{width:250}}
    role="presentation"
    onClick={ () => setOpenMenu(false) }
    onKeyDown={() => setOpenMenu(false) }
    >
      <List>
        {menuOptions.map((item) => (
          <ListItem key={item.text} disablePadding >
          <ListItemButton>
              <ListItemIcon> {  item.icon }</ListItemIcon>
              <ListItemText primary={ item.text } />
          </ListItemButton>
          </ListItem>
        )) }
      </List>
      <Divider/>

    </Box>
</Drawer>



    </nav>
  )
}

export default Navbar