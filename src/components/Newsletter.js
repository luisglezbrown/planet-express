import React, { useState } from 'react';

export default function Newsletter() {

    const [subscribed, setSubscribed] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setSubscribed(true);
    }

    const handleInputChange = e => {
        setEmail(e.target.value);
    }

    return (
        <section className="newsletter">
            {subscribed 
            ? <h1>Enviaremos las ofertas a {email}</h1>        
            : <>
                <h2>Suscríbete a nuestra newsletter para recibir las mejores ofertas</h2>
                <form onSubmit={handleSubmit} className="newsletter-form">    
                    <input
                        onChange={handleInputChange}
                        type="email"
                        name="email"
                        placeholder="tumejorcorreo@email.com"
                        required
                    />
                    <input type="submit" value="Subscribir"/>
                </form>
            </>}
        </section>
    )
}
