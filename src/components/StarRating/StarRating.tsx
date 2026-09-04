type Star = 'full' | 'half' | 'empty';

function starsFor(rating: number): Star[] {
    return Array.from({ length: 5 }, (_, index) => {
        if (rating >= index + 1) return 'full';
        if (rating >= index + 0.5) return 'half';
        return 'empty';
    });
}

type StarRatingProps = {
    rating: number;
};

export function StarRating({ rating }: StarRatingProps) {
    return (
        <div className="game-card__rating" aria-label={`Valoración ${rating} de 5`}>
            {starsFor(rating).map((star, index) => (
                <span
                    key={index}
                    className={`material-symbols-outlined${star === 'full' ? ' material-symbols-outlined--filled' : ''}`}
                    aria-hidden="true"
                >
                    {star === 'half' ? 'star_half' : 'star'}
                </span>
            ))}
        </div>
    );
}