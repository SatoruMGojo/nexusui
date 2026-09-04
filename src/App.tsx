import './App.css';
import {Header} from "./components/Header/Header.tsx";
import {Footer} from "./components/Footer/Footer.tsx";
import minecraftImg from './assets/cinematic_landscape_of_minecraft_voxel_art_style_sunset_over_a_blocky_forest.png';
import overwatchImg from './assets/overwatch_2_hero_lineup_futuristic_action_scene_vibrant_colors_blizzard_art.png';
import valorantImg from './assets/valorant_tactical_shooter_scene_stylized_character_art_neon_accents_sharp_edges.png';
import cs2Img from './assets/counter_strike_2_tactical_combat_scene_realistic_military_shooter_style_dust2.png';
import Suscripcion from './componentes/suscripcion/suscripcion';

/**
 * NEXUS GAMING — catálogo de juegos.
 */

type Game = {
  title: string;
  genre: string;
  /** Valoración sobre 5; los medios puntos se dibujan con star_half. */
  rating: number;
  tags: string[];
  price: string;
  free: boolean;
  image: string;
};

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

/** Convierte una valoración numérica en los cinco iconos de estrella. */
function starsFor(rating: number): Array<'full' | 'half' | 'empty'> {
  return Array.from({ length: 5 }, (_, index) => {
    if (rating >= index + 1) return 'full';
    if (rating >= index + 0.5) return 'half';
    return 'empty';
  });
}

export default function App() {
  return (
      <div className="app">
        {/* TopNavBar */}
        <Header />

        <main className="main">
          {/* Hero */}
          <Banner />

          {/* Explora el Catálogo */}
          <section className="shell section">
            <div className="section__head">
              <h2 className="section__title t-headline-lg">Explora el Catálogo</h2>
              <a className="section__link t-label-caps" href="#">VIEW ALL</a>
            </div>

            <div className="game-grid">
              {GAMES.map((game) => (
                  <div className="game-card" key={game.title}>
                    <div className="game-card__media">
                      <img className="game-card__img" src={game.image} alt={game.title} />
                      <div className="game-card__overlay" />
                      <span className="game-card__genre">{game.genre}</span>
                    </div>

                    <div className="game-card__body">
                      <h3 className="game-card__title t-headline-md">{game.title}</h3>

                      <div className="game-card__rating" aria-label={`Valoración ${game.rating} de 5`}>
                        {starsFor(game.rating).map((star, index) => (
                            <span key={index} className={`material-symbols-outlined${star === 'full' ? ' material-symbols-outlined--filled' : ''}`} aria-hidden="true">{star === 'half' ? 'star_half' : 'star'}</span>
                        ))}
                      </div>

                      <div className="game-card__tags">
                        {game.tags.map((tag) => (
                            <span className="game-card__tag" key={tag}>{tag}</span>
                        ))}
                      </div>

                      <div className="game-card__foot"><span></span><span className={`t-headline-md ${game.free ? 'game-card__price--free' : 'game-card__price--paid'}`}>{game.price}</span></div>
                    </div>
                  </div>
              ))}
            </div>
          </section>
          <Suscripcion/>
        </main>

        {/* Footer */}
        <Footer />
      </div>
  );
}
