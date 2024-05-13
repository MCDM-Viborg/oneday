
import "./GalleryImage.css"

const GalleryImage = (data) => {
     
    if(data){
        return <div className="gallery-image-container-image">
         {<img className="gallery-image-container-img" src={data.data.picture} alt="" />}
         <div className="gallery-image-container-inner">
            <p className="gallery-image-container-inner-paragraph">{data.data.time}</p>
            <p className="gallery-image-container-inner-paragraph-second">{data.data.title}</p>
         </div>
    </div>
    }
};

export default GalleryImage;