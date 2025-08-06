import React from 'react'
import avt  from "./../../assets/images/avataaars.svg"

const Home = () => {
  return (
    
    <>
    
    <header className="clr">
        <div className="vh-100  home-item d-flex flex-column justify-content-center align-items-center">
            <div className="inner-home">
    <img src={avt} alt="" className="w-100"/>
    <h1 className="text-white fs-1 fw-bold">START FRAMEWORK</h1>
    


    <div className="d-flex justify-content-center align-items-center my-4">
      <div className="line border border-2 border-bottom border-white w-25 mx-2"></div>
      <i className="fa-solid fa-star"></i>
     <div className="line border border-2 border-bottom border-white w-25 mx-2"></div>

    </div>
    <p className="text-white text-center mt-3">Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </div>
    </header>
    </>
  )
}

export default Home