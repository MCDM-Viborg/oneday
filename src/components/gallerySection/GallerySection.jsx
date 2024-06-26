import { Link } from "react-router-dom";
import GalleryImage from "./GalleryImage/GalleryImage";
import "./GallerySection.css";

const GallerySection = ({ data, description, time }) => {
  return (
    <div id="ident" className='gallerySection-container'>
      {/* Render kun headeren hvis der er data */}
      {data.length > 0 ? (
        <>
          <header className='gallerySection-container-inner'>
            <h2 className='gallerySection-time'>{time}</h2>
            <h1 className='gallerySection-container-heading'>{description}</h1>
          </header>

          <div className='gallery-section-container-images'>
            {data.map((obj) => (
              <Link to={`single/${obj._id}`} key={obj._id}>
                <GalleryImage data={obj} />
              </Link>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default GallerySection;
