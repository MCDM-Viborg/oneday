import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import GallerySection from "../components/gallerySection/GallerySection";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";


export function Home(){
  const [night, setNight] = useState(null);

    useEffect(() => {
       fetch("https://onedayviborg.webmcdm.dk/api/moments?start=00:00&end=03:00&date=2022-05-11")
       .then((res) => {return res.json();}).then((data) => {setNight(data);});
      }, []);

      const [morningone, setMorningone] = useState(null);

    useEffect(() => {
       fetch("https://onedayviborg.webmcdm.dk/api/moments?start=03:00&end=06:00&date=2022-05-11")
       .then((res) => {return res.json();}).then((data) => {setMorningone(data);});
      }, []);

      const [morning, setMorning] = useState(null);

    useEffect(() => {
       fetch("https://onedayviborg.webmcdm.dk/api/moments?start=06:00&end=09:00&date=2022-05-11")
       .then((res) => {return res.json();}).then((data) => {setMorning(data);});
      }, []);

      const [beforedinner, setBeforedinner] = useState(null);

    useEffect(() => {
       fetch("https://onedayviborg.webmcdm.dk/api/moments?start=09:00&end=12:00&date=2022-05-11")
       .then((res) => {return res.json();}).then((data) => {setBeforedinner(data);});
      }, []);

      const [midday, setMidday] = useState(null);

    useEffect(() => {
       fetch("https://onedayviborg.webmcdm.dk/api/moments?start=12:00&end=15:00&date=2022-05-11")
       .then((res) => {return res.json();}).then((data) => {setMidday(data);});
      }, []);

      const [afternoon, setAfternoon] = useState(null);

    useEffect(() => {
       fetch("https://onedayviborg.webmcdm.dk/api/moments?start=15:00&end=18:00&date=2022-05-11")
       .then((res) => {return res.json();}).then((data) => {setAfternoon(data);});
      }, []);

      const [evening, setEvening] = useState(null);

    useEffect(() => {
       fetch("https://onedayviborg.webmcdm.dk/api/moments?start=18:00&end=21:00&date=2022-05-11")
       .then((res) => {return res.json();}).then((data) => {setEvening(data);});
      }, []);

      const [lateevening, setLateevening] = useState(null);

    useEffect(() => {
       fetch("https://onedayviborg.webmcdm.dk/api/moments?start=21:00&end=24:00&date=2022-05-11")
       .then((res) => {return res.json();}).then((data) => {setLateevening(data);});
      }, []);

    if(night && morningone && morning && beforedinner && midday && afternoon && evening && lateevening){

      return (
          <div>
          <Navigation></Navigation>
          <Header></Header>
          <GallerySection  data={night} time={"00:00 - 03:00"} description={"NAT I VIBORG"}></GallerySection>
          <GallerySection  data={morningone} time={"03:00 - 06:00"} description={"MORGEN"}></GallerySection>
          <GallerySection data={morning} time={"06:00 - 09:00"} description={"MORGEN"}></GallerySection>
          <GallerySection data={beforedinner} time={"09:00 - 12:00"} description={"FORMIDDAG"}></GallerySection>
          <GallerySection data={midday} time={"12:00 - 15:00"} description={"MIDDAGSTIMERNE"}></GallerySection>
          <GallerySection data={afternoon} time={"15:00 - 18:00"} description={"EFTERMIDDAG"}></GallerySection>
          <GallerySection data={evening} time={"18:00 - 21:00"} description={"TIDLIG AFTEN"}></GallerySection>
          <GallerySection data={lateevening} time={"21:00 - 24:00"} description={"SEN AFTEN"}></GallerySection>
          <Footer></Footer>
          </div>
      )
    }
     
     
    
  }