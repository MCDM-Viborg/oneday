import "./SingleGallery.css"

const SingleGallery = (foundImage) => {
  
  
  return <div className="singleContainer-section-two">
            {foundImage.foundImage.pictures.map((image) => 
                <div className="singleContainer-section-two-div" key={image._id}>
                    <img src={image.picture} alt="" className="singleContainer-section-two-image"/>
                    <p className="singleContainer-section-two-image-p">{image.title}</p>
                </div>
    )}
</div>
 
  
}
 export default SingleGallery;