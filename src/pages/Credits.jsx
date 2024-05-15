import { useEffect, useState } from "react";
import "./Credits.css";
import Image from "../components/image/Image";

export function Credits() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("https://onedayviborg.webmcdm.dk/api/profiles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResult(data);
      });
  }, []);

  return (
    <div className='creditsContainer'>
      <div className='creditsContainer-inner'>
        <h1 className='creditsContainer-heading'>
          Fotograf- og webudviklerelever - One Day Viborg
        </h1>

        <div className='credits-section-container-images'>
          {result?.map((obj) => (
            <Image key={obj._id} data={obj}></Image>
          ))}
        </div>
      </div>
    </div>
  );
}
