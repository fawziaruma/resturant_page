import Navbar from "./Navbar"
import BannerBackground from "../assets/home-banner-background.png"
import BannerImage from "../assets/home-banner-image.png"

import { HiArrowRight } from "react-icons/hi"

const Home = () => {
  return (
    <div className="home-container" >
         <Navbar></Navbar>
         <div className="home-banner-container">
                 <div className="home-bannerImage-container">
                   <img src={BannerBackground} alt="" />
                  </div>

             <div className="home-text-section">
                 <h1 className="primary-heading" > Your Favourite Food Delivered Hot & fresh  </h1>

                 <p className="home-text-section" >
                   Healthy switcher chefs do all the prep work, like 
                   peeding, chopping & marinating, so you can cook
                   a fresh food.
                 </p>
                 <button className="secondery-button">
                   Order Now <HiArrowRight />
                 </button>
             </div>

              <div className="home-image-section">
                 <img src={BannerImage} alt="" />
              </div>

             

         </div>

    </div>
  )
}

export default Home