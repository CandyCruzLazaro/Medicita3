import RatingStars from "./RatingStars";
import "./Results.css";

function CommentCard({ comment }) {

    return (
        <div className="comment-card">

            <img
                src={comment.avatar}
                alt={comment.name}
                className="comment-avatar"
            />

            <div className="comment-content">
                <div className="comment-name">{comment.name}</div>
                <div className="comment-text">{comment.comment}</div>
            </div>

            <div className="comment-right">
                <RatingStars value={comment.rating} />
                <div className="comment-author">{comment.author}</div>
            </div>

        </div>
    );
}

export default CommentCard;
