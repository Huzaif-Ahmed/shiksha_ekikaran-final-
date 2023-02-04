import React,{useState} from "react";
import { Link } from "react-router-dom";



export default function LoginRest() {
    const [log,setlog]=useState({
        username:"",
        password:""
    })

    function onset(e){
        e.preventDefault();
        fetch("http://localhost:4500/login",{method:'POST'})
    }
    return (
        <section className="vh-100">
            <div className="container  mt-5 border border-1 border-dark rounded-1 px-3 " style={{ "height": "80%" }}>
                <div className="row h-400 mt-5" style={{ height: "100%", "marginTop": "auto" }}>
                    <div className="col-6 align-items-center" >
                        <img className="ms-5" src="MYLOGO1.png" alt="logo" />
                    </div>
                    <div className="col-6 align-items-center" >
                        <div className="mt-5">
                            <form className="mt-auto mb-auto" onSubmit={e=>{
                                onset(e)
                            }}>
                                <div className="form-outline mt-4">
                                    <input type="username" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid User ID"  onChange={e=>{
                                          setlog({...log,username:e.target.value})  
                                        }} />
                                    <label className="form-label mt-3" htmlFor="form3Example3">User Id</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" onChange={e=>{
                                            setlog({...log,password:e.target.value})
                                        }} />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                </div>

                                <div className="text-center text-lg-center mt-4 pt-2">
                                    {/* <Link to="/instituteanalytics">
                                        <button type="button" className="btn btn-primary btn-md  ms-auto me-auto"style={{ "padding-left": "2.5rem", "padding-right": "2.5rem" }}> Login </button>
                                  </Link> */}
                                    
                                        <button type="submit" className="btn btn-primary btn-md  ms-auto me-auto"style={{ "paddingLeft": "2.5rem", "paddingRight": "2.5rem" }}> Login </button>
        
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
);
}
                

