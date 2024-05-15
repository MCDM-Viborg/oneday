
import "./Header.css"

const Header = () => {

    return <div className="header-container">
                <section>
                    <video src="https://player.vimeo.com/progressive_redirect/playback/933639142/rendition/1080p/file.mp4?loc=external&log_user=0&signature=c6628dbb26a769b03107505512da4bbac6cb045197a6fe318b813b9a62e6709d" className="bg-video" autoPlay muted>
                
                    </video>

                    <div className="header-content">
                        <div className="header-logo">
                            <img src="./public/logo-oneday-2-lines-fff.svg" alt="OneDayViborg Logo" />
                        </div>
                        <div className="header-paragraph">
                            <p>
                                En hel masse facetter fra livet i Viborg dokumenteret d. 16. maj 2024 af fotograf- og webudviklerstuderende ved Media College Denmark / Medieskolerne
                            </p>
                        </div>

                    </div>
                    
                    
                </section>
        
            </div>
};

export default Header;