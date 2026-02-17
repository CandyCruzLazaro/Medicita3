import "./AboutPage.css";

function AboutPage() {
    return (
        <>
            <div className="about-page">
                <header className="about-header">
                    <p><span className="about-logo-text">MediCita</span></p>
                    <button className="about-close-btn">✕</button>
                </header>

                <main className="about-main">
                    <h1 className="about-title">
                        Med<span className="about-title-highlight">i</span>Cita
                    </h1>

                    <section className="about-content">
                        <h2 className="about-subtitle">Sobre Nosotros</h2>
                        <p className="about-description">
                            Entendemos por lo que pasan las personas hablando de utilizar el sistema de salud en
                            Venezuela y empatizamos con ellos. Por ello, hemos creado este producto digital que
                            reúna todas las soluciones y que puedan estar a disposición de todos y todas.
                        </p>
                    </section>
                </main>
            </div>

            <footer className="about-footer">
                <div className="about-footer-content">
                    <div className="footer-column">
                        <h3>Servicio</h3>
                        <p>Contacto</p>
                        <p>Términos y condiciones</p>
                    </div>

                    <div className="footer-column">
                        <p>Privacidad y cookies</p>
                        <p>País de origen Venezuela</p>
                        <p>Contacto 0800 medici</p>
                    </div>
                </div>

                <p className="footer-copy">www.medicita.com.mx</p>
            </footer>
        </>
    );
}


export default AboutPage;
