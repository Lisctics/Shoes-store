import React from "react";
import Vector from "../Images/Vector.svg"

function Home() {
    return(
        <> 
            <img src={Vector} alt="" className='Vector'/>
            <div className='Group36'>
                <p className='Home'>Home</p>
                <p className='Product'>Product</p>
                <p className='About'>About</p>
                <p className='Review'>Review</p>
            </div>
            <button className='button1'>Shop now</button>
        </>
    )
}

export default Home