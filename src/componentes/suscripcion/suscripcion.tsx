import './suscripcion.css';

export default function Suscripcion () {
    return(
    <section className="shell section">
         <div className="newsletter">
            <div className="newsletter__glow" />
            <div className="newsletter__body">
                <h2 className="newsletter__title t-headline-lg">Suscripción Newsletter</h2>
                 <p className="newsletter__text t-body-md">Mantente al día con los últimos lanzamientos, actualizaciones de parches y ofertas exclusivas. Sin spam, solo gaming de alto nivel.</p>
                 </div>
                 <div className="newsletter__form">
                    <input className="newsletter__input" type="email" placeholder="Ingresa tu email..." aria-label="Email" />
                    <button className="btn btn--primary btn--compact" type="button">SUSCRIBIRSE</button>
                    </div>
                    </div>
                    </section>
    )}
