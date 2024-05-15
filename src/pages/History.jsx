import { useEffect, useState } from "react";
import AboutSection from "../components/aboutSection/AboutSection";
import "./History.css";

export function History() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("https://api.airtable.com/v0/appbRtIH6rJjNwhwm/tblI3O6qTfpv7fQ1a", {
      headers: {
        Authorization:
          "Bearer patkleiDSWlp3fOBz.926f75fecc4bc80829215bf817248bfd42ab4bfe386b4eb53a68712bb26f4bff",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResult(data);
      });
  }, []);

  return (
    <div className='historyContainer'>
      <div className='historyContainer-inner'>
        {result?.records.map((obj) => (
          <AboutSection key={obj.id} data={obj.fields}></AboutSection>
        ))}
      </div>
    </div>
  );
}
