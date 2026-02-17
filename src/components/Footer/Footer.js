import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                {/* COLUMN LEFT */}
                <div className="footer-col">

                    <h4 className="footer-title">
                        Servicio
                    </h4>

                    <a href="/contacto" className="footer-link">
                        Contacto
                    </a>

                    <a href="/terminos" className="footer-link">
                        Términos y condiciones
                    </a>

                </div>

                {/* COLUMN RIGHT */}
                <div className="footer-col">

                    <a href="/privacidad" className="footer-link">
                        Privacidad y cookies
                    </a>

                    <p className="footer-text">
                        País de origen México
                    </p>

                    <a href="tel:08006334248" className="footer-link">
                        Contacto 0800 Medicita
                    </a>

                </div>

            </div>

            {/* BOTTOM CENTER */}
            <div className="footer-bottom">
                WWW.Medicita.com.mx
            </div>

        </footer>
    );
}

export default Footer;
