import React from 'react'
import { Link } from 'react-router-dom'

export default function InstituteData() {
  return (
    <div>
      <div className="container-fluid h-100 vh-100">
        <div className="row h-100">
            <div className=" col-lg-2 col-md-4 col-sm-6 col-12 rounded-end shadow" style={{"backgroundColor": "rgb(75, 75, 177)"}}>
                <b><h2 className="px-2 py-4 text-light">DASHBOARD</h2></b>
                {/* <!-- Navigation links in sidebar--> */}
                <p className="py-3"><Link to="/instituteanalytics" className="text-dark text-decoration-none"><img src="analytics_symbol.png" alt=""/><b className="ms-3 fs-6 text-light" >Analytics</b></Link></p>
                <p className="py-3"><Link to="#" className="text-dark text-decoration-none"><img src="data_logo.png" alt=""/><b className="ms-3 fs-4 text-light" >Data</b></Link></p>
                
            </div>
            {/* <!--Contains the main content
                    of the webpage--> */}
            <div className="col-12 col-lg-10 col-md-8 col-sm-6">
                {/* <!-- OFFCANVAS --> */}
                <p className="text-end">
                    <button className="btn btn-primary btn-outline-light fs-5 mt-5 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">FILTER</button>
                </p>
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header">
                      <p className="offcanvas-title tex" id="offcanvasScrollingLabel">FILTERS</p>
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body overflow-scroll">
  
                      <div className="input-group row ms-0 my-2 border  py-2">
                        <div>
                          <h5>CLASS</h5>
                        </div>
                        
                        <div className="dropdown" data-control="checkbox-dropdown">
                          <button className="btn btn-secondary dropdown-toggle btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select
                          </button>
                          
                          <div className="dropdown-menu ">
                            <ul>
                              <li className="dropdown-item"><input type="radio"/> label 1</li>
                              <li className="dropdown-item"><input type="radio"/> label 2</li>
                              <li className="dropdown-item"><input type="radio"/> label 3</li>
                              <li className="dropdown-item"><input type="radio"/> label 4</li>
                              <li className="dropdown-item"><input type="radio"/> label 5</li>
                              <li className="dropdown-item"><input type="radio"/> label 6</li>
                            </ul>     
                          </div>
                        </div>
                        <b>To</b>
                        <div className="dropdown" data-control="checkbox-dropdown">
                          <button className="btn btn-secondary dropdown-toggle btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select
                          </button>
                          
                          <div className="dropdown-menu ">
                            <ul>
                              <li className="dropdown-item"><input type="radio"/> label 1</li>
                              <li className="dropdown-item"><input type="radio"/> label 2</li>
                              <li className="dropdown-item"><input type="radio"/> label 3</li>
                              <li className="dropdown-item"><input type="radio"/> label 4</li>
                              <li className="dropdown-item"><input type="radio"/> label 5</li>
                              <li className="dropdown-item"><input type="radio"/> label 6</li>
                            </ul>     
                          </div>
                        </div>
                      </div>
                      
                      
                    </div>
                  
                  </div>
                {/* <!-- OFFCANVAS ENDS --> */}


                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Accordion Item #1
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapse" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Accordion Item #2
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                      <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Accordion Item #3
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                      <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                        Accordion Item #4
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                      <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                        Accordion Item #5
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                      <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                        Accordion Item #6
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                      <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body though the transition does limit overflow.
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
