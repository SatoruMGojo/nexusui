import './App.css';
import {Header} from "./components/Header/Header.tsx";
import {Footer} from "./components/Footer/Footer.tsx";

/**
 * NEXUS GAMING — catálogo de juegos.
 *
 * Las imágenes locales (*.png) viven junto a este archivo. Si tu bundler no
 * resuelve rutas relativas dentro del JSX, muévelas a /public o impórtalas.
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

const HERO_BACKGROUND =
    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbPFowraOfZCY-eQZ2MFxFoelIDp36sIUqtR7tTIheW6tRf-teQYTRjXykWQKPs1Xw_CE2v3WB4qI1CKwdNxXX0bl_XwW2269tudSe5qYLTVWoyAvRzHA23Ne1ZhCwNm5kq7NZ_YvdRXLwNpIwC-bh0KBRvtiv9wcHWu5GTOyb2i_BV0zP8u2c3AtHKkJT_uaCV-dhcdXZEEHLIXUwwH8yc62DmZfo0W47DDLUbMNT-0PlKlNfJ6xY')";

const GAMES: Game[] = [
  {
    title: 'Minecraft',
    genre: 'Sandbox',
    rating: 5,
    tags: ['Supervivencia', 'Creativo'],
    price: '$29.99',
    free: false,
    image:
        'cinematic_landscape_of_minecraft_voxel_art_style_sunset_over_a_blocky_forest.png',
  },
  {
    title: 'Overwatch 2',
    genre: 'Hero Shooter',
    rating: 4.5,
    tags: ['Competitivo', 'Acción'],
    price: 'Gratis',
    free: true,
    image:
        'overwatch_2_hero_lineup_futuristic_action_scene_vibrant_colors_blizzard_art.png',
  },
  {
    title: 'Valorant',
    genre: 'Tactical FPS',
    rating: 4.5,
    tags: ['E-sports', 'Habilidades'],
    price: 'Gratis',
    free: true,
    image:
        'valorant_tactical_shooter_scene_stylized_character_art_neon_accents_sharp_edges.png',
  },
  {
    title: 'Counter-Strike 2',
    genre: 'Tactical FPS',
    rating: 5,
    tags: ['Clásico', 'Táctico'],
    price: 'Gratis',
    free: true,
    image:
        'counter_strike_2_tactical_combat_scene_realistic_military_shooter_style_dust2.png',
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
          <section className="shell hero">
            <div className="hero__frame">
              <div
                  className="hero__bg"
                  style={{ backgroundImage: HERO_BACKGROUND }}
                  role="img"
                  aria-label="Metrópolis futurista de noche iluminada por neones cian y púrpura, con un protagonista cibernético en un saliente."
              />
              <div className="hero__scrim" />

              <div className="hero__content">
                <span className="hero__badge t-label-caps">FEATURED LAUNCH</span>
                <h1 className="hero__title t-display">NEON CYNDICATE: OMEGA</h1>
                <p className="hero__text t-body-lg">
                  Dive into the sprawling metropolis of Neo-Veridia. Master fluid
                  combat, hack corporate mainframes, and unravel a conspiracy that
                  threatens the fragile peace of the cyberpunk underworld in this
                  highly anticipated Action RPG.
                </p>
                <div className="hero__actions">
                  <button className="btn btn--primary" type="button">
                    PLAY NOW - $59.99
                  </button>
                  <button className="btn btn--outline" type="button">
                    WATCH TRAILER
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Explora el Catálogo */}
          <section className="shell section">
            <div className="section__head">
              <h2 className="section__title t-headline-lg">Explora el Catálogo</h2>
              <a className="section__link t-label-caps" href="#">
                VIEW ALL
              </a>
            </div>

            <div className="game-grid">
              {GAMES.map((game) => (
                  <div className="game-card" key={game.title}>
                    <div className="game-card__media">
                      <img
                          className="game-card__img"
                          src={game.image}
                          alt={game.title}
                      />
                      <div className="game-card__overlay" />
                      <span className="game-card__genre">{game.genre}</span>
                    </div>

                    <div className="game-card__body">
                      <h3 className="game-card__title t-headline-md">{game.title}</h3>

                      <div
                          className="game-card__rating"
                          aria-label={`Valoración ${game.rating} de 5`}
                      >
                        {starsFor(game.rating).map((star, index) => (
                            <span
                                key={index}
                                className={`material-symbols-outlined${
                                    star === 'full' ? ' material-symbols-outlined--filled' : ''
                                }`}
                                aria-hidden="true"
                            >
                        {star === 'half' ? 'star_half' : 'star'}
                      </span>
                        ))}
                      </div>

                      <div className="game-card__tags">
                        {game.tags.map((tag) => (
                            <span className="game-card__tag" key={tag}>
                        {tag}
                      </span>
                        ))}
                      </div>

                      <div className="game-card__foot">
                    <span
                        className={`t-headline-md ${
                            game.free
                                ? 'game-card__price--free'
                                : 'game-card__price--paid'
                        }`}
                    >
                      {game.price}
                    </span>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* Newsletter */}
          <section className="shell section">
            <div className="newsletter">
              <div className="newsletter__glow" />

              <div className="newsletter__body">
                <h2 className="newsletter__title t-headline-lg">
                  Suscripción Newsletter
                </h2>
                <p className="newsletter__text t-body-md">
                  Mantente al día con los últimos lanzamientos, actualizaciones de
                  parches y ofertas exclusivas. Sin spam, solo gaming de alto nivel.
                </p>
              </div>

              <div className="newsletter__form">
                <input
                    className="newsletter__input"
                    type="email"
                    placeholder="Ingresa tu email..."
                    aria-label="Email"
                />
                <button className="btn btn--primary btn--compact" type="button">
                  SUSCRIBIRSE
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
  );
}
