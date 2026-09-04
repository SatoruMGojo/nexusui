import './App.css';
import {Header} from "./components/Header/Header.tsx";
import {Footer} from "./components/Footer/Footer.tsx";
import minecraftImg from './assets/cinematic_landscape_of_minecraft_voxel_art_style_sunset_over_a_blocky_forest.png';
import overwatchImg from './assets/overwatch_2_hero_lineup_futuristic_action_scene_vibrant_colors_blizzard_art.png';
import valorantImg from './assets/valorant_tactical_shooter_scene_stylized_character_art_neon_accents_sharp_edges.png';
import cs2Img from './assets/counter_strike_2_tactical_combat_scene_realistic_military_shooter_style_dust2.png';
import { GameCard, type Game } from './components/GameCard/GameCard';

/**
 * NEXUS GAMING — catálogo de juegos.
 */

const GAMES: Game[] = [
  {
    title: 'Minecraft',
    genre: 'Sandbox',
    rating: 5,
    tags: ['Supervivencia', 'Creativo'],
    price: '$29.99',
    free: false,
    image: minecraftImg,
  },
  {
    title: 'Overwatch 2',
    genre: 'Hero Shooter',
    rating: 4.5,
    tags: ['Competitivo', 'Acción'],
    price: 'Gratis',
    free: true,
    image: overwatchImg,
  },
  {
    title: 'Valorant',
    genre: 'Tactical FPS',
    rating: 4.5,
    tags: ['E-sports', 'Habilidades'],
    price: 'Gratis',
    free: true,
    image: valorantImg,
  },
  {
    title: 'Counter-Strike 2',
    genre: 'Tactical FPS',
    rating: 5,
    tags: ['Clásico', 'Táctico'],
    price: 'Gratis',
    free: true,
    image: cs2Img,
  },
];

export default function App() {
  return (
      <div className="app">
        {/* TopNavBar */}
        <Header />

        <main className="main">
          {/* Hero */}
          <section className="shell hero">
            <div className="hero__frame">
              <div className="hero__bg" role="img" aria-label="Metrópolis futurista de noche iluminada por neones cian y púrpura, con un protagonista cibernético en un saliente." data-alt="A breathtaking, cinematic ultra-wide promotional artwork for a sci-fi action video game. The scene depicts a sprawling futuristic cityscape at night, illuminated by glowing neon cyan and electric purple signs. A solitary, highly detailed cybernetic protagonist stands on a precipice overlooking the city. The aesthetic is extremely high-fidelity, matching a premium AAA gaming launcher 'kinetic' style, with deep shadow contrast." />
              <div className="hero__scrim" />

              <div className="hero__content">
                <span className="hero__badge t-label-caps">FEATURED LAUNCH</span>
                <h1 className="hero__title t-display">NEON CYNDICATE: OMEGA</h1>
                <p className="hero__text t-body-lg">Dive into the sprawling metropolis of Neo-Veridia. Master fluid combat, hack corporate mainframes, and unravel a conspiracy that threatens the fragile peace of the cyberpunk underworld in this highly anticipated Action RPG.</p>
                <div className="hero__actions">
                  <button className="btn btn--primary" type="button">PLAY NOW - $59.99</button>
                  <button className="btn btn--outline" type="button">WATCH TRAILER</button>
                </div>
              </div>
            </div>
          </section>

          {/* Explora el Catálogo */}
          <section className="shell section">
            <div className="section__head">
              <h2 className="section__title t-headline-lg">Explora el Catálogo</h2>
              <a className="section__link t-label-caps" href="#">VIEW ALL</a>
            </div>

            <div className="game-grid">
              {GAMES.map((game) => (
                  <GameCard key={game.title} game={game} />
              ))}
            </div>
          </section>

          {/* Newsletter */}
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
        </main>

        {/* Footer */}
        <Footer />
      </div>
  );
}
