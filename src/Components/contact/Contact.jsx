import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="py-5">
        <div className="container">
            <div className="contact-item d-flex flex-column  ">
                <div className="inner-contact">
                    <h2 className="text-center  main-txt fs-1 fw-bold  mb-5">CONTACT SECTION</h2>
                                  <div className="d-flex justify-content-center align-items-center my-4">
      <div className="line border border-2 border-bottom border-black wp mx-2"></div>
  <i className="fa-solid fa-star" style={{ color: '#2C3E50' }}></i>
     <div className="line border border-2 border-bottom border-black wp mx-2"></div>

    </div>
                    <div class="mb-5">
 
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="userName" className="border-0 border-bottom rounded-2 w-100" />
</div>
<div class="mb-5">
 
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="userAge" className="border-0 border-bottom rounded-2  w-100" />
</div>
<div class="mb-5">
 
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="userEmail" className="border-0 border-bottom rounded-2  w-100" />
</div>
<div class="mb-5">
 
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="userPassword" className="border-0 border-bottom rounded-2  w-100" />
</div>
<button className="clr border-0 p-2 rounded-3 mb-3 text-white">Send Message</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact