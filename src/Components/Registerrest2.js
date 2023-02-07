import React from 'react'

export default function Registerrest2() {
  return (
    <div>
            <div className="container" id="intermediate">
                <h3>INTERMEDIATE</h3>
                <form className='form' >
                    <div className="row">
                        <div className="col">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">
                                    Institution Name
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                   
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text">Address</span>
                                <textarea
                                    className="form-control"
                                    aria-label="With textarea"
                                    
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">
                                    Established Year
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Year"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">
                                    Registration Number
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Reg. Number"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">
                                    UNIVERSITY AFFILIATED TO
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Board"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">
                                    Username
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">
                                    State
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="State"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">
                                    Students in each class
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Number"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">College's Mail ID</span>
                                <input type="text" className="form-control" placeholder="mail" aria-label="Username"
                                    aria-describedby="basic-addon1"  />
                            </div>
                            <hr />
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">PASSWORD</span>
                                <input type="password" className="form-control" placeholder="Enter atleast 8+ characters" aria-label="Username"
                                    aria-describedby="basic-addon1"  />
                            </div>
                        </div>
                    </div>
                    <div className="text-center  ">
                        <button type="submit " className="btn login btn btn-primary btn-sm btn-outline-light me-2 fs-4">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}
