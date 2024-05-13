import "./SingleHeader.css"

const SingleHeader = (foundImage) => {
  
  return <div className="singleContainer-section-one">
          <div className="singleContainer-section-one-left"><img src={foundImage.foundImage.picture} alt="" /></div>
          <div className="singleContainer-section-one-right">
            <p className="singleContainer-section-one-right-time">{foundImage.foundImage.time}</p>
            <p className="singleContainer-section-one-right-title">{foundImage.foundImage.title}</p>
            <p>{foundImage.foundImage.description}</p>
            <p>{"©" + foundImage.foundImage.profile.name}</p>
          </div>
        </div>
 
  
}
 export default SingleHeader;