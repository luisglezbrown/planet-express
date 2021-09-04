import React, { useState } from 'react';
import { PACKAGE_FEE, PRICE_PER_KG } from '../config/config';

export default function Calculator() {

    const [packagesQty, setPackagesQty] = useState(1);
    const [weight, setWeight] = useState(1);
    const price = (packagesQty * PACKAGE_FEE) + (weight * PRICE_PER_KG);

    return (
        <section className="hero-banner">
            <div className="details-container">

                <div className="details-card">
                    <h4>¿Cuántos paquetes?</h4>
                    {packagesQty > 1 &&
                    <button onClick={() => setPackagesQty(packagesQty-1)}> - </button>}
                    <span> {packagesQty} {packagesQty === 1 ? "paquete" : "paquetes"} </span>
                    <button onClick={() => setPackagesQty(packagesQty+1)}> + </button>
                </div>
                
                <div className="details-card">
                    <h4>¿Cuánto {packagesQty === 1 ? "pesa" : "pesan"}?</h4>
                    {weight > 0.5 &&
                    <button onClick={() => setWeight(weight-0.5)}> - </button>}
                    <span> Hasta {weight} Kg </span>
                    <button onClick={() => setWeight(weight+0.5)}> + </button>
                </div>
            </div>

            <div className="price-card">
                <h2>📦 Tu envío por solo {price.toFixed(2)}€</h2>    
            </div>
        </section>
    )
}
