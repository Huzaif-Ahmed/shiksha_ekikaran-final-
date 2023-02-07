import React from "react";
import { useForm } from "react-hook-form";


function Fileuploader() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        const res = await fetch(//localhost:5000/upload-file",
         {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    };

    return (
        <div className="App">
            <div className="container rounded border border-dark align-items-center " style={{height:"40vh",width:"50vw"}}>
                <div className="align-self-center">
            <form onSubmit={handleSubmit(onSubmit)} >
                <p><img src="excelsheet-uploader-green-logo.png" className="mt-5" style={{height:"150px"}}></img></p>
                <input type="file" {...register("file")} />

                <input type="submit" />
            </form>

                </div>

            </div>
            <div className="container rounded border border-dark align-items-center mt-5 mb-5" style={{height:"40vh",width:"50vw"}}>
                <div className="align-self-center">
            <form onSubmit={handleSubmit(onSubmit)} >
                <p><img src="excel-blue-logo-cloud.png" className="mt-5" style={{height:"150px"}}></img></p>
                <input type="file" {...register("file")} />

                <input type="submit" />
            </form>

                </div>

            </div>
        </div>
    );
}

export default Fileuploader;