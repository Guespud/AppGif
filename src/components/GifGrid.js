import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";
import "../index.css";
import { getGifs } from "../helpers/GetGifs";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

const {data:images,loading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading&& <p>Cargando..</p>}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
