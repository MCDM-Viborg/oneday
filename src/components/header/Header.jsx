import "./Header.css";

const Header = () => {
  return (
    <div className='header-container'>
      <video
        src='https://player.vimeo.com/progressive_redirect/playback/946905222/rendition/1080p/file.mp4?loc=external&log_user=0&signature=bc015b88aa8ac439e2f7eb160c1c1751ef36bc3d170833a169514193ae792307'
        className='bg-video'
        controls
        autoPlay
        muted
        loop></video>

{/*       <div className='header-content'>
        <div className='header-logo'>
            <img src='/logo-oneday-2-lines-fff.svg' alt='OneDayViborg Logo' />
          </div>
                   <div className="heading">
            <h3>Et døgn i Viborg</h3>
          </div> 

         <div className='header-paragraph'>
            <p>
              En hel masse facetter fra livet i Viborg dokumenteret d. 16. maj
              2024 af fotograf- og webudviklerstuderende ved Media College
              Denmark / Medieskolerne
            </p>
          </div>
      </div> */}
    </div>
  );
};

export default Header;
