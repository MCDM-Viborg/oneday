import { useEffect, useState } from "react"
import "./Slider.css"


const Slider = () => {
    const [moments, setMoments] = useState(null);

    useEffect(() => {
       fetch("https://onedayviborg.webmcdm.dk/api/moments")
       .then((res) => {return res.json();}).then((data) => {setMoments(data);});
      }, []);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * moments.length)
            setIndex(randomNumber);
        }, 5000);
 
        
        return () => clearInterval(interval);
    },[index, moments]);

      if(moments){
          return <div className="sliderContainer">
                    <img className="sliderimage" src={moments[index].picture} alt=""></img>
                    <p className="slidertext">{moments[index].title}</p>
                </div>
      }

  
}
 export default Slider;