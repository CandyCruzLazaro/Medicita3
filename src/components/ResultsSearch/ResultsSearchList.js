import "./ResultsSearch.css";

import ResultSearchCard from "./ResultSearchCard";

import { useNavigate } from "react-router-dom";


function ResultsSearchList() {

    const navigate = useNavigate();

    return (
        <div className="results-search-list">

            <ResultSearchCard
                image="https://picsum.photos/401/300"
                title="Clínica CEFEMI C.A."
                price="100"
                buttonText="Ver horarios"
                nextPath="/selectdate"
            />


            <ResultSearchCard
                image="https://picsum.photos/402/300"
                title="Clínica CEFEMI C.A."
                price="100"
                buttonText="Ver horarios"
                nextPath="/selectdate"
            />


            <ResultSearchCard
                image="https://picsum.photos/403/300"
                title="Clínica CEFEMI C.A."
                price="100"
                buttonText="Ver horarios"
                nextPath="/selectdate"
            />


        </div>
    );
}

export default ResultsSearchList;

