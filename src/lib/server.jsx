"use client"
import { useEffect, useState } from "react";

export function FetchData() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      async function fetchDataFromApi() {
        try {
          const response = await fetch("https://api.airtable.com/v0/appbRtIH6rJjNwhwm/tbl2zWf8jfWQXrgTd", {
            headers: {
                "Authorization": "Bearer patkleiDSWlp3fOBz.926f75fecc4bc80829215bf817248bfd42ab4bfe386b4eb53a68712bb26f4bff"
            }});
          const responseData = await response.json();
          setData(responseData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchDataFromApi();
    }, []);
  
    return data;
  }
