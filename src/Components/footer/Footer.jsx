import React from 'react'

const Footer = () => {
  return (
    <>
    <section className="main-clr py-5">
    <div className="container ">
        <div className="row ">
            <div className="col-4">
                <div className="inner text-white fw-bold">
                    <h2>LOCATION</h2>
                    <p>2215 John Daniel Drive
                        <br />Clark, MO 65243</p>
                </div>
            </div>

              <div className="col-4">
                <div className="inner">
                    <h2 className="text-center text-white fw-bold">AROUND THE WEB</h2>
                    <div className="icons text-center">
                    <i className="fa-brands fa-facebook fa-lg px-3"></i>
                    <i className="fa-brands fa-twitter  fa-lg px-3"></i>
                    <i className="fa-brands fa-linkedin fa-lg px-3"></i>
                    <i className="fa-solid fa-globe fa-lg  px-3"></i>
                    </div>
                    
                </div>
            </div>

              <div className="col-4">
                <div className="inner">
                    <h2 className="text-center text-white fw-bold">ABOUT FREELANCER</h2>
                    <p className="text-center text-white fw-bold">reelance is a free to use, licensed Bootstrap theme created by Route</p>
                    
                </div>
            </div>
        </div>
    </div>
    </section>

    <section className="py-3 sec-clr">
       <p className="text-center text-white fw-bold">Copyright © Your Website 2021</p> 
    </section>
    </>
  )
}

export default Footer