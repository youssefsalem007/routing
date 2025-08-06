import React from 'react'
import ph1 from "./../../assets/images/ph1.jpeg"
import ph2 from "./../../assets/images/ph2.jpeg"
import ph3 from "./../../assets/images/ph3.jpeg"

const Portfolio = () => {
  return (
    <>
     <section className="py-5">
        <div className="container">
            <div className="port-item  d-flex flex-column justify-content-center ">
               <div className="inner-port  text-center mb-3">
                <h2 className="main-txt">PORTFOLIO COMPONENT</h2>
                  <div className="d-flex justify-content-center align-items-center my-4">
      <div className="line border border-2 border-bottom border-black wp mx-2"></div>
  <i className="fa-solid fa-star" style={{ color: '#2C3E50' }}></i>
     <div className="line border border-2 border-bottom border-black wp mx-2"></div>

    </div>
                
               </div>

               <div className="inner-port">
                <div className="row g-5">
                    <div className="col-4">
            <img src={ph1} alt="" className="w-100" data-bs-toggle="modal" data-bs-target="#exampleModal"></img>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-body">
       <img src={ph1} alt="photo1" className="w-100"/>
      </div>
      
    </div>
  </div>
  </div>
  </div>

                      <div className="col-4">
            <img src={ph2} alt="" className="w-100" data-bs-toggle="modal" data-bs-target="#exampleModal2"></img>
    <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-body">
       <img src={ph2} alt="photo2" className="w-100"/>
      </div>
      
    </div>
  </div>
  </div>
  </div>



                    <div className="col-4">
            <img src={ph3} alt="" className="w-100" data-bs-toggle="modal" data-bs-target="#exampleModal3"></img>
    <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-body">
       <img src={ph3} alt="photo3" className="w-100"/>
      </div>





      
      
    </div>
  </div>
  </div>
  </div>


           <div className="col-4">
            <img src={ph1} alt="" className="w-100" data-bs-toggle="modal" data-bs-target="#exampleModal"></img>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-body">
       <img src={ph1} alt="photo4" className="w-100"/>
      </div>

      





      
      
    </div>
  </div>
  </div>
  </div>

        <div className="col-4">
            <img src={ph2} alt="" className="w-100" data-bs-toggle="modal" data-bs-target="#exampleModal"></img>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-body">
       <img src={ph2} alt="photo5" className="w-100"/>
      </div>

      





      
      
    </div>
  </div>
  </div>
  </div>
        <div className="col-4">
            <img src={ph3} alt="" className="w-100" data-bs-toggle="modal" data-bs-target="#exampleModal"></img>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-body">
       <img src={ph3} alt="photo6" className="w-100"/>
      </div>

      





      
      
    </div>
  </div>
  </div>
  </div>
 </div>           
               </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Portfolio