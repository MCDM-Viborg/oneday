import "./Header.css";

const Header = () => {
  return (
    <div className='header-container'>
      <section>
        <video
          src='https://player.vimeo.com/progressive_redirect/playback/946575315/rendition/1080p/file.mp4?loc=external&log_user=0&signature=f5b88a0e50f178da1d9c75f85420b33b57077ae1909eb222931a8ec6d82c6e86'
          className='bg-video'
          controls
          autoPlay
          muted
          loop></video>

        <div className='header-content'>


         {/*  <div className='header-logo'>
            <img src='/logo-oneday-2-lines-fff.svg' alt='OneDayViborg Logo' />
          </div> */}
{/*           <div className="heading">
            <h3>Et døgn i Viborg</h3>
          </div> */}

          <div className='header-paragraph'>
            <p>
              En hel masse facetter fra livet i Viborg dokumenteret d. 16. maj
              2024 af fotograf- og webudviklerstuderende ved Media College
              Denmark / Medieskolerne
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
