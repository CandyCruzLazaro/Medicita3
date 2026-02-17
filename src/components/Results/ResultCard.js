import RatingStars from "./RatingStars";
import "./Results.css";

function ResultCard({ item }) {

    return (
        <div className="result-card">

            <div className="result-card-content">

                <img
                    src={item.image}
                    alt={item.name}
                    className="result-avatar"
                />

                <div className="result-info">

                    <div className="result-name-rating">
                        <h3>{item.name}</h3>
                        <RatingStars value={item.rating} />
                    </div>

                    <p className="result-comment">
                        {item.comment}
                    </p>

                    <p className="result-author">
                        {item.author}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default ResultCard;
