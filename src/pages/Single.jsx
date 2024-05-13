import { useParams } from "react-router-dom";
import "./Single.css"
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import SingleHeader from "../components/singleHeader/SingleHeader";
import SingleGallery from "../components/singleGallery/SingleGallery";
import { useEffect, useState } from "react";

export function Single(){

  window.scrollTo(0, 0);

    const {id} = useParams();

    const [result, setResult] = useState(null);

    let fecthString = "https://onedayviborg.webmcdm.dk/api/moment?id=" + id;
    

    useEffect(() => {
       fetch(fecthString).then((res) => {return res.json();}).then((data) => {setResult(data);});
      }, []);
  
  if(result){
    return (
      <div className="singleContainer">
        <Navigation></Navigation>
        <div className="singleContainer-inner">
          <SingleHeader foundImage={result.moment}></SingleHeader>
          <SingleGallery foundImage={result.moment}></SingleGallery>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}