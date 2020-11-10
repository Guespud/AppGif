import React from "react";
import '../index.css'

const GifGridItem = ({ title, url }) => {

  return (
    <div className="card animate__zoomInDown">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  )
};

export default GifGridItem;
