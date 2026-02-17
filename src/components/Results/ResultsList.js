import { useState } from "react";
import ResultsTabs from "./ResultsTabs";
import CommentCard from "./CommentCard";
import "./Results.css";
import avatarJuan from "../../assets/avatars/doc1.png";
import avatarAntonia from "../../assets/avatars/doc4.png";
import avatarMarcos from "../../assets/avatars/doc3.png";
import avatarCele from "../../assets/avatars/doc5.png";


function ResultsList() {

    const [activeTab, setActiveTab] = useState("opinions");

    const opinionsMock = [
        {
            id: 1,
            name: "Dr. Juan Tovar",
            comment: "Comentario de aproximadamente 10 palabras",
            author: "María Eugenia",
            rating: 5,
            avatar: avatarJuan
        },
        {
            id: 2,
            name: "Dra. Antonia Noé",
            comment: "Comentario de aproximadamente 10 palabras",
            author: "María Eugenia",
            rating: 4,
            avatar: avatarAntonia
        }
    ];

    const topMock = [
        {
            id: 3,
            name: "Dr. Marcos Tomi",
            comment: "Excelente atención médica",
            author: "Luis García",
            rating: 5,
            avatar: avatarMarcos
        },
        {
            id: 4,
            name: "Dra. Celeste Ruiz",
            comment: "Muy recomendable",
            author: "Ana Torres",
            rating: 5,
            avatar: avatarCele
        }
    ];

    const data = activeTab === "opinions" ? opinionsMock : topMock;

    return (
        <div className="results-container">

            <h2 className="results-title">
                Explora lo que otros usuarios tienen para ti
            </h2>

            <ResultsTabs onChange={setActiveTab} />

            <div className="results-grid">
                {data.map(item => (
                    <CommentCard
                        key={item.id}
                        comment={item}
                    />
                ))}
            </div>

        </div>
    );
}

export default ResultsList;
