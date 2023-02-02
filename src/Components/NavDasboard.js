import React from 'react'
import {Link} from 'react-router-dom';

export default function NavDasboard() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid " style={{backgroundColor:" rgb(43, 43, 170)"}}>
          <Link className="navbar-brand ms-3" to="/"><img src="NAV_LOGO1.png" alt="logo" style={{height:"70px"}}/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                 <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link> 
              </li>
              <li className="nav-item">
                 <Link className="nav-link text-light" to="/contactus">Contact us</Link> 
              </li>
              <li className="nav-item">
                 <Link className="nav-link text-light" to="/aboutus">About Us</Link> 
              </li>
            </ul>
               {/* <Link className="nav-item btn btn-light btn-sm btn-outline-primary me-2 d-none"  to="/login">Login</Link> */}
              <Link className="nav-item btn btn-primary btn-sm btn-outline-light me-2 d-none" to="/register">Sign-out</Link> 
          </div>
        </div>
      </nav>
    </div>
  )
}


// import React from 'react'
// import {Link} from 'react-router-dom';

// export default function NavDasboard() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-light">
//       <div className="container-fluid" style={{backgroundColor:"rgb(43, 43, 170)"}}>
//         <Link className="navbar-brand" to="#"><img src="NAV_LOGO1.png" alt="" style={{height:"70px"}}/></Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contactus">Contact us</Link>
//             </li>
            
//             <li className="nav-item">
//               <Link className="nav-link " to="/aboutus">About Us</Link>
//             </li>
//           </ul>
//             <Link className="nav-item btn btn-primary btn-sm btn-outline-light me-4" to="/register">Sign-out</Link>
          
//         </div>
//       </div>
//     </nav>
//     </div>
//   )
// }
