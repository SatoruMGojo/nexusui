import './Banner.css'
import BtnPrimary from "../BtnPrimary/BtnPrimary.tsx";
import BtnOutline from "../BtnOutline/BtnOutline.tsx";
export default function Banner() {
    return (<section className="shell hero">
            <div className="hero__frame">
                <div className="hero__bg" role="img" aria-label="Metrópolis futurista de noche iluminada por neones cian y púrpura, con un protagonista cibernético en un saliente." data-alt="A breathtaking, cinematic ultra-wide promotional artwork for a sci-fi action video game. The scene depicts a sprawling futuristic cityscape at night, illuminated by glowing neon cyan and electric purple signs. A solitary, highly detailed cybernetic protagonist stands on a precipice overlooking the city. The aesthetic is extremely high-fidelity, matching a premium AAA gaming launcher 'kinetic' style, with deep shadow contrast." />
                <div className="hero__scrim" />

                <div className="hero__content">
                    <span className="hero__badge t-label-caps">FEATURED LAUNCH</span>
                    <h1 className="hero__title t-display">NEON CYNDICATE: OMEGA</h1>
                    <p className="hero__text t-body-lg">Dive into the sprawling metropolis of Neo-Veridia. Master fluid combat, hack corporate mainframes, and unravel a conspiracy that threatens the fragile peace of the cyberpunk underworld in this highly anticipated Action RPG.</p>
                    <div className="hero__actions">
                        <BtnPrimary price={49.99}/>
                        <BtnOutline content={"WATCH TRAILER"}/>
                    </div>
                </div>
            </div>
        </section>
    );
}