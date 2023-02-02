import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeRest() {
  return (
    <div>
      <>
    
    <div id="carouselExampleIndicators " className="carousel slide mb-5" data-bs-ride="true">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://school.cambridge.edu.in/wp-content/uploads/2022/10/School-Carousel-2.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item ">
        <img src="" className="d-block w-100 img-fluid" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  <div className="container overflow-hidden text-center">
    <div className="row gy-5 gx-5 mb-5">
      <div className="col-6">
        <Link to="/login" style={{"color": "black", "text-decoration": "none"}}>
            <div className="p-5 border rounded bg-light shadow" style={{"background-image":"linear-gradient(to bottom right,blue, yellow)"}}><img src="login_logo.png" alt="LOGIN!" style={{"height":" 60px;"}}/><br></br>
                <b className="fs4">Sign in</b>
                <br></br>
                If you already have an account please login to proceed 
            </div>

        </Link>
      </div>
      <div className="col-6">
        <Link to="/register" style={{"color": "black", "text-decoration": "none"}}>
            <div className="p-5 border rounded bg-light" style={{"background-image":"linear-gradient(to bottom left,blue, yellow)"}}><img src="register_logo.png" alt="LOGIN!" style={{"height":" 60px;"}}/><br></br>
                <b className="fs4">Sign up</b>
                <br></br>
                If you do not have an account please Register
            </div>

        </Link>
      </div>
      <div className="col-6">
        <Link to="/aboutus" style={{"color": "black", "text-decoration": "none;"}}>
            <div className="p-5 border rounded bg-light" style={{"background-image":"linear-gradient(to top right,blue, yellow) "}}><img src="about_us_logo.png" alt="LOGIN!" style={{"height":" 60px;"}}/><br></br>
                <b className="fs4">About us</b>
                <br></br>
                Know more about us and the working of this structure
            </div>

        </Link>
      </div>
      <div className="col-6">
        <Link to="/contactus" style={{"color": "black", "text-decoration": "none;"}}>
            <div className="p-5 border rounded bg-light" style={{"background-image":"linear-gradient(to bottom right,yellow, blue) "}}><img src="contact_us_logo.png" alt="LOGIN!" style={{"height":" 60px;"}}/><br></br>
                <b className="fs4">Contact us</b>
                <br></br>
                 Contact us if any queries regarding the site issues 
            </div>

        </Link>
      </div>
      
    </div>
  </div>
  </>
    </div>
  )
}
