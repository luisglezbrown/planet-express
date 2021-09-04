import React, { useEffect, useState } from 'react';
import { COUNTDOWN_INITIAL_MINUTES, COUNTDOWN_INITIAL_SECONDS } from '../config/config';


export default function OfferCountdown () {

    const [minutesRemaining, setMinutesRemaining] = useState(COUNTDOWN_INITIAL_MINUTES);
    const [secondsRemaining, setSecondsRemaining] = useState(COUNTDOWN_INITIAL_SECONDS);
    
    useEffect(()=>{
        let offerInterval = setInterval(() => {

            if (secondsRemaining > 0) {
                setSecondsRemaining(secondsRemaining - 1);
            }

            if (secondsRemaining === 0) {
                if (minutesRemaining === 0) {
                    clearInterval(offerInterval)
                } else {
                    setMinutesRemaining(minutesRemaining - 1);
                    setSecondsRemaining(59);
                }
            } 

        }, 1000);

        return ()=> {
            clearInterval(offerInterval);
        };
    });

    return (
        <>
            { minutesRemaining === 0 && secondsRemaining === 0
                ? null
                : <section className="offer">
                    <h3> La oferta expira en {minutesRemaining}:{secondsRemaining < 10 ?  `0${secondsRemaining}` : secondsRemaining}</h3> 
                </section>
            }
        </>
    )
}

