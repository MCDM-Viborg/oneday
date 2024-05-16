import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div class='footer-flex-container'>
          <div class='about-container'>
            <div class='about_heading'>
              <h3 class='about_h3'>Om Sitet</h3>
            </div>
            <div class='about-p'>
              Fotograf- og webudviklereleverne fra Medieskolerne i Viborg står
              bag hjemmesiden. <br />
              Over 40 fotografelever har optaget 800 billeder fra Viborg over
              hele døgnet d. 16 maj 2024, mens skolens webudviklere har
              produceret hjemmesiden.
            </div>
          </div>

          <div class='mcdm-container'>
            <div class='mcdm-logo-container'>
              <img
                src='./MCDM_Logo-Full_Negative-White.png'
                alt='Media College Denmark Logo'
                class='mcdm-logo-img'
              />
            </div>

            <div class='mcdm-info-container'>
              <p class='mcdm-info-p'>
                mail@mediacollege.dk <br />
                mcdm.dk
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class='copyright-container'>
        <p class='copyright-p'>
          © Powered by students at Media College Denmark / Medieskolerne in DK
          8800 Viborg 16th of May 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
