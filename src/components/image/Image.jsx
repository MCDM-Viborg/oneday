
import "./Image.css"

const Image = (data) => {
     
        return <div className="image-container-image">
         {<img className="image-container-img" src={data.data.picture} alt="" />}
         <div className="image-container-inner">
            <p className="image-container-inner-paragraph">{data.data.name}</p>
            <p className="image-container-inner-paragraph-second">{data.data.position}</p>
         </div>
    </div>

};

export default Image;