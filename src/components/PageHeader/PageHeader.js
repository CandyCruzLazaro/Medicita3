import "./PageHeader.css";

function PageHeader({ backLabel, currentLabel, onBack }) {
    return (
        <div className="page-header">

            <button className="page-back" onClick={onBack}>
                ←
            </button>

            <div className="page-title">
                <span className="page-link">{backLabel}</span>
                <span className="page-separator"> / </span>
                <span className="page-current">{currentLabel}</span>
            </div>

        </div>
    );
}

export default PageHeader;
