import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";
import "../index.css";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=pikachu&limit=10&api_key=NfHrr5IahGXW1yDeZ4BgGWiagIuyGZrH";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    setImages(gifs);
  };

  //   getGifs();

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
