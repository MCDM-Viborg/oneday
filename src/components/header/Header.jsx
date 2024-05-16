import "./Header.css";

const Header = () => {
  return (
    <div className='header-container'>
      
      <section className="header-grid">
        <video
          src='https://player.vimeo.com/progressive_redirect/playback/946905222/rendition/1080p/file.mp4?loc=external&log_user=0&signature=bc015b88aa8ac439e2f7eb160c1c1751ef36bc3d170833a169514193ae792307'
          className='bg-video'
          controls
          autoPlay
          muted
          loop>
        </video>

                    
        <div className='header-paragraph'>
          <p>
            En hel masse facetter fra livet i Viborg dokumenteret d. 16. maj
            2024 af fotograf- og webudviklerstuderende ved Media College
            Denmark / Medieskolerne
          </p>
        </div>
          


      </section>
      
    </div>
  );
};

export default Header;
