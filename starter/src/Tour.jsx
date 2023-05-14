import React from "react";
import { useState } from "react";

const Tour = ({ image, info, name, price, handleDelete, id }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name} </h5>
        <p>
          {readMore ? `${info.substring(0, 200)} ...` : info}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "read more" : "see less"}
          </button>
        </p>
        <button
          type="button"
          className="delete-btn btn-block btn"
          onClick={() => handleDelete(id)}
        >
          Not intrested
        </button>
      </div>
    </article>
  );
};

export default Tour;
