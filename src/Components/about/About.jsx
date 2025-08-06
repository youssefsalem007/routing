import React from 'react'

const About = () => {
  return (
    <>
    <section className="clr">
        <div className="container">
        <div className="about-item vh-100 d-flex flex-column justify-content-center ">
            <div className="inner-about text-center">
                <h2 className="text-white fs-1  fw-bold">ABOUT COMPONENT</h2>
                    <div className="d-flex justify-content-center align-items-center my-4">
            <div className="line border border-2 border-bottom border-white wp mx-2"></div>
         <i className="fa-solid fa-star"></i>
           <div className="line border border-2 border-bottom border-white wp mx-2"></div>

    </div>
                
               </div>

               

               <div className="inner-about">
                <div className="row g-5 py-5">
                    <div className="col-6">
                        <p className="text-start text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

                    </div>

                    <div className="col-6">
                        <p className="text-start text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        
                    </div>
                </div>
            
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default About