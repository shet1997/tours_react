import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, handleDelete, handleRefresh }) => {
  return (
    <section>
      <div className="title">
        <h2> Our Tours</h2>
        <div className="title-underline"></div>
      </div>

      <div className="tours">
        {tours.length > 0 ? (
          tours.map((tour) => {
            return <Tour {...tour} key={tour.id} handleDelete={handleDelete} />;
          })
        ) : (
          <button
            type="button"
            className="info-btn btn-block btn"
            onClick={handleRefresh}
          >
            Refresh
          </button>
        )}
      </div>
    </section>
  );
};

export default Tours;
