import React from 'react'
import data from "../data_json/About_us.json"
export default function ContactUS1() {
    return (
        
        <>
        <div className="container">
        <h1 className="mt-5 mb-3">ContactUs</h1>
        
        <div className="accordion" id="accordionExample">
        {data && data.map(rec=>{
            return(
                <div className="accordion-item">
        <h2 className="accordion-header" id={rec.heading}>
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={rec.collapsetarget} aria-expanded="true" aria-controls={rec.collapse}>
            {rec.name}
          </button>
        </h2>
        <div id={rec.collapse} className="accordion-collapse collapse show" aria-labelledby={rec.heading} data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>{rec.email}.</strong> <br/>
            <strong>{rec.phone_no}</strong>
          </div>
        </div>
      </div>
            )
        })}
    </div>

      </div>
        </>
      )
}
