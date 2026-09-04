import './App.css';
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

const AVATAR_SRC =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD94KRLEtL10rXDn1sTILzxGhqoPK48PrJBx_iMV_I0iMuSsJuPS4RJc073sm9pQ-mNvFtsUhD9EDtyC-6g-8Ow3c2IhdUiodpFOLYjt77luY7zKwzBkVhrZDJ0h_xZLSjDQEj_3v4E9mj-K26YJiulBkRVzFP-IocT4HhSo7y6m-iJhGTYg_lx7pxMu94vB7Tj9S0J6wavYMmzUO3S_3bVSMUWo9wG67eXSN723JpKxLzVqJLb7Fz3';

const NAV_LINKS = ['Home', 'Categories', 'New Releases', 'Deals'];

const NAV_ICONS = ['search', 'notifications', 'settings'];

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

const FOOTER_LINKS = ['About Us', 'Support', 'Privacy Policy', 'Newsletter'];

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
        <nav className="nav">
          <div className="shell nav__inner">
            <div className="nav__brand">NEXUS GAMING</div>

            <div className="nav__links">
              {NAV_LINKS.map((label, index) => (
                  <a key={label} className={`nav__link${index === 0 ? ' nav__link--active' : ''}`} href="#">{label}</a>
              ))}
            </div>

            <div className="nav__actions">
              {NAV_ICONS.map((icon) => (
                  <span className="material-symbols-outlined nav__icon" key={icon} role="button" tabIndex={0} aria-label={icon} data-icon={icon}>{icon}</span>
              ))}
              <img className="nav__avatar" src={AVATAR_SRC} alt="User profile avatar" data-alt="A small, stylized circular avatar image for a user profile in a high-tech gaming interface. The avatar features a stylized cybernetic character silhouette against a dark glowing purple background, consistent with a neon kinetic aesthetic. Deep blacks and vibrant electric purple accents." />
            </div>
          </div>
        </nav>

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
        <footer className="footer">
          <div className="shell footer__inner">
            <div className="footer__brand t-label-caps">NEXUS GAMING</div>

            <div className="footer__links">
              {FOOTER_LINKS.map((link) => (
                  <a className="footer__link t-body-md" href="#" key={link}>{link}</a>
              ))}
            </div>

            <div className="footer__copy t-body-md">© 2024 NEXUS GAMING platform. All rights reserved.</div>
          </div>
        </footer>
      </div>
  );
}
