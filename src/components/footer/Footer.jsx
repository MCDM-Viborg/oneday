import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-flex-container'>
          <div className='about-container'>
            <div className='about_heading'>
              <h3 className='about_h3'>Om Sitet</h3>
            </div>
            <div className='about-p'>
              Fotograf- og webudviklereleverne fra Medieskolerne i Viborg står
              bag hjemmesiden. <br />
              Over 40 fotografelever har optaget 800 billeder fra Viborg over
              hele døgnet d. 16 maj 2024, mens skolens webudviklere har
              produceret hjemmesiden.
            </div>
          </div>

          <div className='mcdm-container'>
            <div className='mcdm-logo-container'>
              <img
                src='../MCDM_Logo-Full_Negative-White.png'
                alt='Media College Denmark Logo'
                className='mcdm-logo-img'
              />
            </div>

            <div className='mcdm-info-container'>
              <p className='mcdm-info-p'>
                mail@mediacollege.dk <br />
                mcdm.dk
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='copyright-container'>
        <p className='copyright-p'>
          © Powered by students at Media College Denmark / Medieskolerne in DK
          8800 Viborg 16th of May 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
