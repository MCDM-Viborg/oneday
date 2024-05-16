import { useEffect, useState } from "react";
import "./Profile.css";
import Image from "../components/image/Image";
import ProfileHeaderComp from "../components/profile/profileHeader/profileHeader.jsx";
import ProfileImagesComp from "../components/profile/profileImages/profileImages.jsx";

import { useParams } from "react-router-dom";

export function Profile() {
  const { id } = useParams();

  const [result, setResult] = useState(null);

  let fecthString =
    "https://onedayviborg.webmcdm.dk/api/moments?profileId=" + id;

  useEffect(() => {
    fetch(fecthString)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResult(data);
      });
  }, [id]);

  return (
    <div className="profileContainer">
      {result && (
        <>
          <ProfileHeaderComp foundImage={result}></ProfileHeaderComp>
          <ProfileImagesComp foundImage={result}></ProfileImagesComp>
        </>
      )}
    </div>
  );
}
