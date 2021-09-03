import React, { useState } from 'react'

export default function Calculator() {

    const [packagesQty, setPackagesQty] = useState(1);
    const [weight, setWeight] = useState(1);

    console.log(packagesQty)
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
                {weight > 0.25 &&
                <p  onClick={() => setWeight(weight-0.5)}> 
                    -
                </p>} 
                <span>{weight} Kg.</span>
                <p  onClick={() => setWeight(weight+0.5)}> 
                    +
                </p> 
            </div>
        </>
    )
}
