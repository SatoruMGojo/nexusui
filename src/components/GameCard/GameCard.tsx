import { StarRating } from '../StarRating/StarRating';

export type Game = {
    title: string;
    genre: string;
    rating: number;
    tags: string[];
    price: string;
    free: boolean;
    image: string;
};

type GameCardProps = {
    game: Game;
};

export function GameCard({ game }: GameCardProps) {
    return (
        <div className="game-card">
            <div className="game-card__media">
                <img className="game-card__img" src={game.image} alt={game.title} />
                <div className="game-card__overlay" />
                <span className="game-card__genre">{game.genre}</span>
            </div>

            <div className="game-card__body">
                <h3 className="game-card__title t-headline-md">{game.title}</h3>

                <StarRating rating={game.rating} />

                <div className="game-card__tags">
                    {game.tags.map((tag) => (
                        <span className="game-card__tag" key={tag}>{tag}</span>
                    ))}
                </div>

                <div className="game-card__foot">
                    <span></span>
                    <span className={`t-headline-md ${game.free ? 'game-card__price--free' : 'game-card__price--paid'}`}>
                        {game.price}
                    </span>
                </div>
            </div>
        </div>
    );
}