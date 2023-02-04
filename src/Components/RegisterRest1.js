import React, { useState } from 'react'
import mongoose from 'mongoose';


export default function RegisterRest1() {
    const [data, dataset] = useState({
        Institution_name: "",
        Address: "",
        Established_year: 0,
        Registrationnumber: "",
        Board: "",
        Username: "",
        Numberofcourses: 0,
        studentsineachclass: 0,
        Password: "",
        collegeid: ""


    })
    async function onset(e) {
        e.preventDefault();
        console.log(data)
      
        try {
            await mongoose.connect("mongodb+srv://huzaif_ahmed:huzaif2004@cluster0.lhinep7.mongodb.net/Shikshaekikaran", { useNewUrlParser: true });
            console.log("Connected to MongoDB Atlas");
      
            const db = mongoose.connection;
            const typeSchema = new mongoose.Schema({
                Institution_name: String,
                Address: String,
                Established_year: Number,
                Registrationnumber: String,
                Affiliation: String,
                Username: String,
                Numberofcourses: Number,
                studentsineachclass: Number,
                Password: String,
                collegeid: String
            });
      
            const testreg = mongoose.model('testreg', typeSchema);
            await testreg.create({
                Institution_name: data.Institution_name,
                Address: data.Address,
                Established_year: data.Established_year,
                Registrationnumber: data.Registrationnumber,
                Affiliation: data.Board,
                Username: data.Username,
                Numberofcourses: data.Numberofcourses,
                studentsineachclass: data.studentsineachclass,
                Password: data.Password,
                collegeid: data.collegeid
            });
      
            const type1Schema = new mongoose.Schema({
                Password: String,
                Username: String
            });
      
            const testlog = mongoose.model('testlog', type1Schema);
            await testlog.create({
                Password: data.Password,
                Username: data.Username
            });
      
            console.log("Data added to the database");
        } catch (error) {
            console.error(error);
        } 
    }

    // function onset(e) {
    //     e.preventDefault();
    //         mongoose.connect("mongodb+srv://huzaif_ahmed:huzaif2004@cluster0.lhinep7.mongodb.net/Shikshaekikaran", { useNewUrlParser: true });
    //     const db = mongoose.Connection;
    //     db.on('open',async()=>{
    //         const type = mongoose.Schema({
    //             Institution_name: String,
    //             Address: String,
    //             Established_year: Number,
    //             Registrationnumber: String,
    //             Affiliation: String,
    //             Username: String,
    //             Numberofcourses: Number,
    //             studentsineachclass: Number,
    //             Password: String,
    //             collegeid: String
    //         })

    //         const type1=mongoose.Schema({
    //             Password:String,
    //             Username:String,
    //         })
    
    //         const testreg=mongoose.model('testreg',type)
    //         testreg.insertMany([data],(error,items)=>{
    //             // if(error){
    //             //     console.log("there is an error")
    //             // }
    //             // else{
    //             //     console,log(items);
    //             //     console.log("check atlas")
    //             // }
    //         })
    //         const testlog=mongoose.model('testlog',type1)
    //         testlog.insertMany=([data.Password,data.Username])
    //         testlog.create({ Password: data.Password, Username: data.Username }, (error, item) => {
    //             // Handle errors and check if the data has been successfully inserted
    //           });
            

    //     })


    // }
    return (

        <div>
            <div className="container" id="intermediate">
                <h3>INTERMEDIATE</h3>
                <form className='form' onSubmit={e => { onset(e) }}>
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
                                    onChange={e => { dataset({ ...data, Institution_name: e.target.value }) }}
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
                                    onChange={e => { dataset({ ...data, Address: e.target.value }) }}
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
                                    onChange={e => { dataset({ ...data, Established_year: e.target.value }) }}
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
                                    onChange={e => { dataset({ ...data, Registrationnumber: e.target.value }) }}
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
                                    onChange={e => { dataset({ ...data, Affiliation: e.target.value }) }}
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
                                    onChange={e => { dataset({ ...data, Username: e.target.value }) }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">
                                    Number of Courses
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Courses"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={e => { dataset({ ...data, Numberofcourses: e.target.value }) }}
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
                                    onChange={e => { dataset({ ...data, studentsineachclass: e.target.value }) }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">College's Mail ID</span>
                                <input type="text" className="form-control" placeholder="mail" aria-label="Username"
                                    aria-describedby="basic-addon1" onChange={e => { dataset({ ...data, collegeid: e.target.value }) }} />
                            </div>
                            <hr />
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">PASSWORD</span>
                                <input type="password" className="form-control" placeholder="Enter atleast 8+ characters" aria-label="Username"
                                    aria-describedby="basic-addon1" onChange={e => { dataset({ ...data, Password: e.target.value }) }} />
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
