import AboutHeader from "../components/aboutHeader/AboutHeader";
import AboutSection from "../components/aboutSection/AboutSection";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import "./About.css"
import { useEffect, useState } from "react";

export function About(){
    const [result, setResult] = useState(null);

    useEffect(() => {
       fetch("https://api.airtable.com/v0/appbRtIH6rJjNwhwm/tbl2zWf8jfWQXrgTd", {
              headers: {
                  "Authorization": "Bearer patkleiDSWlp3fOBz.926f75fecc4bc80829215bf817248bfd42ab4bfe386b4eb53a68712bb26f4bff"
              }}).then((res) => {return res.json();}).then((data) => {setResult(data);});
      }, []);

    if(result){
        return (
            <div className="aboutContainer">
                <Navigation></Navigation>
                <div className="aboutContainer-inner">
                    <AboutHeader></AboutHeader>
                    {result.records.map((obj) => <AboutSection key={obj.id} data={obj.fields}></AboutSection>)}
                </div>
                <Footer></Footer>
            </div>
        )
    }
    
     
}