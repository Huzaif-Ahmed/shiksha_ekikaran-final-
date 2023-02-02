import React from 'react';
import {Link} from 'react-router-dom';

export default function RegisterRest() {
  return (
    <div>
      <section className="vh-100" >
        <div className="container h-100 "  >
          <div className="row d-flex justify-content-center align-items-center h-100" >
            <div className="col-lg-12 col-xl-11" >
              <div className="card text-black" style={{borderRadius: "25px",backgroundColor:"rgb(127, 127, 211)"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center" style={{backgroundColor:"rgb(127, 127, 211)"}}>
                  {/* backgroundImage: "url(MYLOGO2.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center",backgroundColor:"rgb(127, 127, 211)" */}
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" />
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" />
                            <label className="form-label" htmlFor="form3Example3c">Institution Id</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" className="form-control" />
                            <label className="form-label" htmlFor="form3Example4c">pincode</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="date" id="form3Example4cd" className="form-control" />
                            <label className="form-label"htmlfor="form3Example4cd">Institution Establishment year</label>
</div>
</div>
</form>
</div>
<div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
<form className="mx-1 mx-md-4">
<div className="d-flex flex-row align-items-center mb-4">
<i className="fas fa-user fa-lg me-3 fa-fw"></i>
<div className="form-outline flex-fill mb-0">
<input type="number" id="form3Example1c" className="form-control" />
<label className="form-label" htmlFor="form3Example1c">number of rooms</label>
</div>
</div>
<div className="d-flex flex-row align-items-center mb-4">
<i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
<div className="form-outline flex-fill mb-0">
<input type="email" id="form3Example3c" className="form-control" />
<label className="form-label" htmlFor="form3Example3c">email</label>
</div>
</div>
<div className="d-flex flex-row align-items-center mb-4">
<i className="fas fa-lock fa-lg me-3 fa-fw"></i>
<div className="form-outline flex-fill mb-0">
<input type="password" id="form3Example4c" className="form-control" />
<label className="form-label" htmlFor="form3Example4c">password</label>
</div>
</div>
<div className="d-flex flex-row align-items-center mb-4">
<i className="fas fa-key fa-lg me-3 fa-fw"></i>
<div className="form-outline flex-fill mb-0">
<input type="password" id="form3Example4cd" className="form-control" />
<label className="form-label" htmlFor="form3Example4cd">Confirm password</label>
</div>
</div>
<div className="form-group">
<Link to="/governmentdashboard" className="btn btn-primary btn-lg btn-block">Register</Link>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
)
}



// import React from 'react';
// import {Link} from 'react-router-dom';

// export default function RegisterRest() {
//   return (
//     <div>
//       <section className="vh-100" >
//         <div className="container h-100 "  >
//           <div className="row d-flex justify-content-center align-items-center h-100" >
//             <div className="col-lg-12 col-xl-11">
//               <div className="card text-black" style={{"border-radius": "25px;"}}>
//                 <div className="card-body p-md-5">
//                   <div className="row justify-content-center" style={{"background-image": "url(MYLOGO1.png)","background-repeat": "no-repeat","background-position-x": "center;"}}>
//                     <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
      
//                       <form className="mx-1 mx-md-4">
      
//                         <div className="d-flex flex-row align-items-center mb-4">
//                           <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input type="text" id="form3Example1c" className="form-control" />
//                             <label className="form-label" for="form3Example1c">Your Name</label>
//                           </div>
//                         </div>
      
//                         <div className="d-flex flex-row align-items-center mb-4">
//                           <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input type="email" id="form3Example3c" className="form-control" />
//                             <label className="form-label" for="form3Example3c">Institution Id</label>
//                           </div>
//                         </div>
      
//                         <div className="d-flex flex-row align-items-center mb-4">
//                           <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input type="password" id="form3Example4c" className="form-control" />
//                             <label className="form-label" for="form3Example4c">pincode</label>
//                           </div>
//                         </div>
      
//                         <div className="d-flex flex-row align-items-center mb-4">
//                           <i className="fas fa-key fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input type="date" id="form3Example4cd" className="form-control" />
//                             <label className="form-label" for="form3Example4cd">Institution Establishment year</label>
//                           </div>
//                         </div>
      
                        
      
//                       </form>
      
//                     </div>
//                     <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                        
        
//                         <form className="mx-1 mx-md-4">
        
//                           <div className="d-flex flex-row align-items-center mb-4">
//                             <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                             <div className="form-outline flex-fill mb-0">
//                               <input type="number" id="form3Example1c" className="form-control" />
//                               <label className="form-label" for="form3Example1c">number of rooms</label>
//                             </div>
//                           </div>
        
//                           <div className="d-flex flex-row align-items-center mb-4">
//                             <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                             <div className="form-outline flex-fill mb-0">
//                               <input type="email" id="form3Example3c" className="form-control" />
//                               <label className="form-label" for="form3Example3c">Institution mail id</label>
//                             </div>
//                           </div>
        
//                           <div className="d-flex flex-row align-items-center mb-4">
//                             <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
//                             <div className="form-outline flex-fill mb-0">
//                               <input type="password" id="form3Example4c" className="form-control" />
//                               <label className="form-label" for="form3Example4c">password</label>
//                             </div>
//                           </div>
        
//                           <div className="d-flex flex-row align-items-center mb-4">
//                             <i className="fas fa-key fa-lg me-3 fa-fw"></i>
//                             <div className="form-outline flex-fill mb-0">
//                               <input type="password" id="form3Example4cd" className="form-control" />
//                               <label className="form-label" for="form3Example4cd">Repeat your password</label>
//                             </div>
//                           </div>
        
        
        
//                         </form>
        
//                       </div>
//                       <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                         <div className="form-check d-flex justify-content-center mb-5">
//                             <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
//                             <label className="form-check-label" for="form2Example3">
//                               I agree all statements in <Link to="/">Terms of service</Link>
//                             </label>
//                           </div>
        
//                           <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                             <Link to="/governmentdashboard"><button type="button" className="btn btn-primary btn-lg">Register</button></Link>
//                           </div>
//                       </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
