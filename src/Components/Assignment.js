import React from 'react'
import data from '../data_json/sample.json'
export default function Assignment() {
    return (
        <div className='container'>
            <table class="table tavle-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">NAME</th>
                        <th scope="col">LATITUDE</th>
                        <th scope="col">LONGITUDE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d) => {
                            return (<tr key={d.id} >
                                <td>{d.name}</td> 
                                <td>{d.lati}</td> 
                                <td>{d.lon}</td> 
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
