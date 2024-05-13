
import "./Footer.css"

const Footer = () => {

    return <div className="footer-container">
        <div className="footer-container-inner">
            <div className="footer-container-inner-container">
                <div>
                    <img className="footer-logo" src="/logo-mcdm.svg" alt="" />
                    <div>
                        <p>mail@medieskolerne.dk</p>
                        <p>medieskolerne.dk</p>
                    </div>
                    <img className="footer-logo-second" src="/viborg_city.svg" alt="" />
                    <p>Member of UNESCO Creative Cities Network since 2019</p>
                </div>
                <div>
                    <p>Om Sitet</p>
                    <p>Fotograf- og webudviklereleverne fra Medieskolerne i Viborg står bag hjemmesiden.</p>
                    <p>Over 60 fotografelever har optaget mere end 1000 billeder fra Viborg over hele døgnet d. 30 maj 2024, mens skolens webudviklere har produceret hjemmesiden. </p>
                </div>
            </div>
            <p className="footer-copyright">&copy; Powered by Students at Media College Denmark / Medieskolerne in DK 8800 Viborg 30. of May 2024</p>
        </div>
    </div>
};

export default Footer;