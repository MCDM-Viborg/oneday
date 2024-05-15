import React, { useEffect, useState, useCallback, useMemo } from "react";
import Header from "../components/header/Header";
import GallerySection from "../components/gallerySection/GallerySection";
import Slider from "../components/slider/Slider";
import Video from "../components/Video";

export function Home() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://onedayviborg.webmcdm.dk/api/moments")
  //     .then((res) => res.json())
  //     .then(setData);
  // }, []);

  // Omregn time-strengen til tal
  const timeToMinutes = useCallback((timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  }, []);

  // Omregn tal til time-streng
  const timeFromMinutes = useCallback((minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}`;
  }, []);

  // Filtrer data efter tidspunkt og gør det kun når timeToMinutes-funktionen kaldes
  const thresholds = useMemo(
    () => ({
      night: { start: 0, end: timeToMinutes("03:00"), label: "Nat i Viborg" },
      earlyMorning: {
        start: timeToMinutes("03:00"),
        end: timeToMinutes("06:00"),
        label: "De tidlige morgentimer",
      },
      morning: {
        start: timeToMinutes("06:00"),
        end: timeToMinutes("09:00"),
        label: "Morgen",
      },
      beforeDinner: {
        start: timeToMinutes("09:00"),
        end: timeToMinutes("12:00"),
        label: "Formiddag",
      },
      noon: {
        start: timeToMinutes("12:00"),
        end: timeToMinutes("15:00"),
        label: "Middagstimerne",
      },
      afterNoon: {
        start: timeToMinutes("15:00"),
        end: timeToMinutes("18:00"),
        label: "Eftermiddag",
      },
      earlyEvening: {
        start: timeToMinutes("18:00"),
        end: timeToMinutes("21:00"),
        label: "De tidlige aftentimer",
      },
      lateEvening: {
        start: timeToMinutes("21:00"),
        end: timeToMinutes("24:00"),
        label: "De sene aftentimer",
      },
    }),
    [timeToMinutes]
  );

  // Filtrer data indenfor de bestemte tidsintervaller og gør det kun hvis data ændres
  const filteredData = useMemo(() => {
    const filtered = {};
    Object.keys(thresholds).forEach((period) => {
      const { start, end, label } = thresholds[period];
      filtered[period] = {
        items: data.filter((d) => {
          const itemMinutes = timeToMinutes(d.time);
          return itemMinutes >= start && itemMinutes < end;
        }),
        label,
        time: `${timeFromMinutes(start)} - ${timeFromMinutes(end)}`,
      };
    });
    return filtered;
  }, [data, thresholds]);

  return (
    <>
      <Header />
      {data && (
        <>
          {Object.entries(filteredData).map(([key, { items, label, time }]) => (
            <GallerySection
              key={key}
              data={items}
              description={label}
              time={time}
            />
          ))}
        </>
      )}
    </>
  );
}
