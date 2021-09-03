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

    //    console.log(email);
    //    console.log(subscribed);

    return (
        subscribed
        ? <span>Enviaremos las ofertas a {email}</span>        
        : <form onSubmit={handleSubmit} className="newsletter-form">
            <h3>Suscríbete a nuestra newsletter para recibir las mejores ofertas.</h3>
            <input
                onChange={handleInputChange}
                type="email"
                name="email"
                placeholder="tumejorcorreo@email.com"
                required
            />

            <input type="submit" value="Subscribir"/>
      </form>
    )
}
