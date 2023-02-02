import React from "react";
import { Link } from "react-router-dom";

export default function LoginRest() {
    return (
        <section className="vh-100">
            <div className="container  mt-5 border border-1 border-dark rounded-1 px-3 " style={{ height: "80%" }}>
                <div className="row h-400 mt-5" style={{ height: "100%", "margin-top": "auto" }}>
                    <div className="col-6 align-items-center" >
                        <img className="ms-5" src="MYLOGO1.png" alt="logo" />
                    </div>
                    <div className="col-6 align-items-center" >
                        <div className="mt-5">
                            <form className="mt-auto mb-auto">
                                <div className="form-outline mt-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid User ID" />
                                    <label className="form-label mt-3" for="form3Example3">User Id</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                    <label className="form-label" for="form3Example4">Password</label>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                </div>

                                <div className="text-center text-lg-center mt-4 pt-2">
                                    <Link to="/instituteanalytics">
                                        <button type="button" className="btn btn-primary btn-md  ms-auto me-auto"style={{ "padding-left": "2.5rem", "padding-right": "2.5rem" }}> Login </button>
                                  </Link>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
);
}
                

