import "./Results.css";

function RatingStars({ value = 0 }) {

    const totalStars = 5;

    return (
        <div className="rating-stars">
            {[...Array(totalStars)].map((_, index) => {
                return (
                    <span key={index}>
                        {index < value ? "★" : "☆"}
                    </span>
                );
            })}
        </div>
    );
}

export default RatingStars;
