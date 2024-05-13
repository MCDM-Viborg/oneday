
import { useEffect, useState } from "react"
import Footer from "../components/footer/Footer"
import Navigation from "../components/navigation/Navigation"
import "./Credits.css"
import Image from "../components/image/Image";

export function Credits(){
  const [result, setResult] = useState(null);

  useEffect(() => {
     fetch("https://onedayviborg.webmcdm.dk/api/profiles").then((res) => {return res.json();}).then((data) => {setResult(data);});
    }, []);

    if(result){

      return (
          <div className="creditsContainer">
              <Navigation></Navigation>
              <div className="creditsContainer-inner">
              <h1 className="creditsContainer-heading">Fotograf- og webudviklerelever - One Day Viborg</h1>
              <div className="credits-section-container-images">
                  {result.map((obj) => <Image key={obj._id} data={obj}></Image>)}
              </div>
              </div>
              <Footer></Footer>
          </div>
      )
    }
    
     
}