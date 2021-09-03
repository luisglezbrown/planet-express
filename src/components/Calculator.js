import React, { useState } from 'react';
import { PACKAGE_FEE, PRICE_PER_KG } from '../config/config';

export default function Calculator() {

    const [packagesQty, setPackagesQty] = useState(1);
    const [weight, setWeight] = useState(1);
    const price = (packagesQty * PACKAGE_FEE) + (weight * PRICE_PER_KG);

    return (
        <>
            <h4>¿Cuántos paquetes?</h4>
            <div>
                {packagesQty > 1 &&
                <p  onClick={() => setPackagesQty(packagesQty-1)}> 
                    -
                </p>} 
                <p>{packagesQty}</p>
                <p  onClick={() => setPackagesQty(packagesQty+1)}> 
                    +
                </p> 
            </div>

            <h4>¿Cuánto {packagesQty === 1 ? "pesa" : "pesan"}?</h4>
            <div>
                {weight > 0.5 &&
                <p  onClick={() => setWeight(weight-0.5)}> 
                    -
                </p>} 
                <span>Menos de {weight} Kg.</span>
                <p  onClick={() => setWeight(weight+0.5)}> 
                    +
                </p> 
            </div>

            <h2>Tu envío por solo {price.toFixed(2)}€</h2>    
        </>
    )
}
