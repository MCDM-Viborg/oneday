import "./AboutSection.css"

const AboutSection = ({data}) => {

    let authorSpan = data.author ? <span className="history-text-span">{data.author}</span> : "";
    
    return <div className="aboutContainer-section" style={{flexDirection: data.direction}}>
        <div className="aboutContainer-section-left">
            <h2 className="aboutContainer-section-heading">{data.heading}</h2>
            <div className="aboutContainer-section-text">{data.text}</div>
            {authorSpan}
        </div>
        <div className="aboutContainer-section-right"><img src={data.img[0].url} alt="" /></div>
    </div>

};

export default AboutSection;