import './App.css';
import {Header} from "./components/Header/Header.tsx";
import {Footer} from "./components/Footer/Footer.tsx";
import minecraftImg from './assets/cinematic_landscape_of_minecraft_voxel_art_style_sunset_over_a_blocky_forest.png';
import overwatchImg from './assets/overwatch_2_hero_lineup_futuristic_action_scene_vibrant_colors_blizzard_art.png';
import valorantImg from './assets/valorant_tactical_shooter_scene_stylized_character_art_neon_accents_sharp_edges.png';
import cs2Img from './assets/counter_strike_2_tactical_combat_scene_realistic_military_shooter_style_dust2.png';
import { GameCard, type Game } from './components/GameCard/GameCard';
import Suscripcion from './components/suscripcion/suscripcion.tsx';
import Banner from './components/Banner/Banner.tsx';

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
          <Banner />

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
          <Suscripcion/>
        </main>

        {/* Footer */}
        <Footer />
      </div>
  );
}
