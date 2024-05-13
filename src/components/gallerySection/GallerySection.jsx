import { Link} from "react-router-dom";
import GalleryImage from "./GalleryImage/GalleryImage";
import "./GallerySection.css"

const GallerySection = ({data, time, description}) => {
    


    return <div className="gallerySection-container">
        <div className="gallerySection-container-inner">
            <h1 className="gallerySection-container-heading">{time}</h1>
            <h1 className="gallerySection-container-heading-second">{description}</h1>
        </div>
        <div className="gallery-section-container-images">
           
            {data.map((obj) => <Link to={`single/${obj._id}`} key={obj._id}><GalleryImage data={obj}></GalleryImage></Link>)}
        </div>
    </div>

};

export default GallerySection;