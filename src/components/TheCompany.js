import React, { useEffect, useState } from 'react';
import { OFFICE_URL, FLEET_URL, API_URL } from "../config/config";

export default function TheCompany() {
    const [index, setIndex] = useState(0);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setEmployees(data))
    }, []);

    return (
        <section className="the-company grid">

            <article className="card">
                <h2>LA NAVE</h2>
                <div className="card-img">
                    <img src={FLEET_URL} alt="The Planet Express ship"/>
                </div>
                <p>La nave Planet Express, llamada Old Bessie por el profesor, es una nave espacial de entrega verde brillante propiedad de Planet Express. Se utiliza para llevar varios paquetes por toda la galaxia.</p>
            </article>

            <article className="card">
                <h2>LA OFICINA</h2>
                <div className="card-img">
                    <img src={OFFICE_URL} alt="The Planet Express building"/>
                </div>
                <p>El edificio Planet Express, está ubicado en Nueva Nueva York. El edificio se divide en dos secciones. La parte más pequeña consta de varios pisos y alberga las oficinas y laboratorios del Profesor. La sección más grande del edificio es un hangar.</p>
            </article>

            <article className="card">
                <div className="employee-menu">
                    {index > 0 && <span onClick={() => setIndex(index-1)}> Anterior </span>}
                    <h2>{employees[index]?.Name}</h2>
                    {index < 19 && <span onClick={() => setIndex(index+1)}> Siguiente </span>}
                </div>
                <div className="card-img">
                    <img src={employees[index]?.PicUrl} alt={employees[index]?.Name}/>
                </div>
                <p>Powered by <a href="http://futuramaapi.herokuapp.com/" target="_blank" rel="noreferrer">Futurama API</a></p>
            </article>  
        </section>
    )
}
