import React from 'react';
import { GiGlassHeart } from "react-icons/gi";
import { FaHeartBroken } from "react-icons/fa";
const Navbar = ({FavVis,setFavVis}) => {
  const xCLick = (e) => {
      setFavVis((k)=>!k)
      
      console.log(FavVis)

  }
  return (
    <>
    
    <div className={"navbar"}>
      <p>ALL-MOVIES</p>
      <p onClick={xCLick} ><i> {FavVis?<FaHeartBroken />:<GiGlassHeart />}</i></p>
    </div>
    </>
  )
  
}

export default Navbar;
