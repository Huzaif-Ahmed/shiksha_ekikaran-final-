import React from 'react'
import { Link } from 'react-router-dom'

export default function GovernmentRest() {
  return (
    <div>
      <div class="container-fluid h-100 vh-100">
      <div class="row h-100">
        
        <div class="col-lg-2 col-md-4 col-sm-6 col-12 rounded-end shadow" style={{"backgroundColor": "rgb(75, 75, 177)"}}>
                <b><h2 class="px-2 py-4 text-light" >DASHBOARD</h2></b>
                {/* <!-- Navigation links in sidebar--> */}
                <p class="py-3"><Link to="/governmentdashboard" class="text-dark text-decoration-none"><img  src="analytics_symbol.png" alt=""/><b class="ms-3 fs-4 text-light" >Analytics</b></Link></p>
                
            </div>
            {/* <!--Contains the main content
                    of the webpage--> */}
            <div class="col-lg-10 col-md-8 col-sm-6" >

              <p class= "text-end">
                  <button class="btn btn-primary btn-outline-light fs-5 mt-5 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">FILTER</button>
              </p>
              <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                  <div class="offcanvas-header">
                    <p class="offcanvas-title tex" id="offcanvasScrollingLabel">FILTERS</p>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body overflow-scroll">
                    <div class="input-group row ms-0 my-2 border py-2">
                      <div>
                        <h5>DATE</h5>
                      </div>
                      <span class="my-1"><input type="date"/></span>
                      <span class="my-1"><strong>To</strong></span>
                      <span><input type="date"/></span>
                    </div>
                    <div class="input-group row ms-0 my-2 border  py-2">
                        <div>
                          <h5>STATE</h5>
                        </div>
                        
                        <div class="dropdown" data-control="checkbox-dropdown">
                          <button class="btn btn-secondary dropdown-toggle btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select
                          </button>
                          
                          <div class="dropdown-menu ">
                            <ul>
                              <li class="dropdown-item"><input type="checkbox"/> label 1</li>
                              <li class="dropdown-item"><input type="checkbox"/> label 2</li>
                              <li class="dropdown-item"><input type="checkbox"/> label 3</li>
                              <li class="dropdown-item"><input type="checkbox"/> label 4</li>
                              <li class="dropdown-item"><input type="checkbox"/> label 5</li>
                              <li class="dropdown-item"><input type="checkbox"/> label 6</li>
                            </ul>     
                          </div>
                        </div>
                      </div>

                    <div class="input-group row ms-0 my-2 border  py-2">
                    <div>
                        <h5>EDUCATION LEVEL</h5>
                    </div>
                    
                    <div class="dropdown" data-control="checkbox-dropdown">
                        <button class="btn btn-secondary dropdown-toggle btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select
                        </button>
                        
                        <div class="dropdown-menu ">
                        <ul>
                            <li class="dropdown-item"><input type="radio"/> SCHOOL</li>
                            <li class="dropdown-item"><input type="radio"/> INTERMEDIATE</li>
                            <li class="dropdown-item"><input type="radio"/> UNDER GRADUATION</li>
                            <li class="dropdown-item"><input type="radio"/> POST GRADUATION</li>
                            <li class="dropdown-item"><input type="radio"/> PHD</li>
                            <li class="dropdown-item"><input type="radio"/> POLYTECNIC</li>
                            <li class="dropdown-item"><input type="radio"/> OTHERS</li>
                        </ul>     
                        </div>
                    </div>
                    </div>

                    

                    <div class="input-group row ms-0 my-2 border  py-2">
                        <div>
                          <h5>CASTE</h5>
                        </div>
                        
                        <div class="dropdown" data-control="checkbox-dropdown">
                          <button class="btn btn-secondary dropdown-toggle btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select
                          </button>
                          
                          <div class="dropdown-menu ">
                            <ul>
                              <li class="dropdown-item"><input type="radio"/> OBC</li>
                              <li class="dropdown-item"><input type="radio"/> OBC-NCL</li>
                              <li class="dropdown-item"><input type="radio"/> EWS</li>
                              <li class="dropdown-item"><input type="radio"/> BC-A</li>
                              <li class="dropdown-item"><input type="radio"/> BC-B</li>
                              <li class="dropdown-item"><input type="radio"/> BC-C</li>
                              <li class="dropdown-item"><input type="radio"/> BC-D</li>
                              <li class="dropdown-item"><input type="radio"/> BC-E</li>
                              <li class="dropdown-item"><input type="radio"/> SC</li>
                              <li class="dropdown-item"><input type="radio"/> ST</li>
                              <li class="dropdown-item"><input type="radio"/> OTHERS</li>
                              <li class="dropdown-item"><input type="radio"/> ALL</li>
                            </ul>     
                          </div>
                        </div>
                    </div>

                    <div class="input-group row ms-0 my-2 border  py-2">
                        <div>
                          <h5>PHYSICALLY ABLED</h5>
                        </div>
                        
                        <div class="dropdown" data-control="checkbox-dropdown">
                          <button class="btn btn-secondary dropdown-toggle btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select
                          </button>
                          
                          <div class="dropdown-menu ">
                            <ul>
                              <li class="dropdown-item"><input type="radio"/> YES</li>
                              <li class="dropdown-item"><input type="radio"/> NO</li>
                              <li class="dropdown-item"><input type="radio"/> ALL</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    <div class="input-group row ms-0 my-2 border  py-2">
                      <div>
                        <h5>CLASS</h5>
                      </div>
                      
                      <div class="dropdown" data-control="checkbox-dropdown">
                        <button class="btn btn-secondary dropdown-toggle btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Select
                        </button>
                        
                        <div class="dropdown-menu ">
                          <ul>
                            <li class="dropdown-item"><input type="radio"/> label 1</li>
                            <li class="dropdown-item"><input type="radio"/> label 2</li>
                            <li class="dropdown-item"><input type="radio"/> label 3</li>
                            <li class="dropdown-item"><input type="radio"/> label 4</li>
                            <li class="dropdown-item"><input type="radio"/> label 5</li>
                            <li class="dropdown-item"><input type="radio"/> label 6</li>
                          </ul>     
                        </div>
                      </div>
                      <b>To</b>
                      <div class="dropdown" data-control="checkbox-dropdown">
                        <button class="btn btn-secondary dropdown-toggle btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Select
                        </button>
                        
                        <div class="dropdown-menu ">
                          <ul>
                            <li class="dropdown-item"><input type="radio"/> label 1</li>
                            <li class="dropdown-item"><input type="radio"/> label 2</li>
                            <li class="dropdown-item"><input type="radio"/> label 3</li>
                            <li class="dropdown-item"><input type="radio"/> label 4</li>
                            <li class="dropdown-item"><input type="radio"/> label 5</li>
                            <li class="dropdown-item"><input type="radio"/> label 6</li>
                          </ul>     
                        </div>
                      </div>
                    </div>
                    <div class="input-group row ms-0 my-2 border  py-2">
                        <div>
                          <h5>GENDER</h5>
                        </div>
                        
                        <div class="dropdown" data-control="checkbox-dropdown">
                          <button class="btn btn-secondary dropdown-toggle btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select
                          </button>
                          
                          <div class="dropdown-menu ">
                            <ul>
                              <li class="dropdown-item"><input type="radio"/> MALE</li>
                              <li class="dropdown-item"><input type="radio"/> FEMALE</li>
                              <li class="dropdown-item"><input type="radio"/> OTHERS</li>
                              
                            </ul>     
                          </div>
                        </div>
                    </div>
                    
                    
                  </div>
                
                </div>
          </div>
        </div>
    </div>
    </div>
  )
}

