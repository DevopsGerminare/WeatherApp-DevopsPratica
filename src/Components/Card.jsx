import React from "react";
import PropTypes from "prop-types";

function Card({ data }) {
  const { location, current } = data;

  return (
    <div className="p-3 px-10 bg-white mt-10 rounded-lg text-center shadow-lg">
      <div>
        <span className="block text-lg font-bold text-slate-700">
          {location.name}
        </span>
        <span className="text-slate-600 text-sm font-medium">
          {location.region}, {location.country}
        </span>
      </div>

      <div className="flex font-bold text-slate-700 mt-2 justify-center">
        <span className="text-7xl">{current.temp_c}</span>
        <span className="text-2xl mt-2">°C</span>
      </div>

      <div className="font-medium text-slate-700 flex flex-col items-center">
        <span className="block mb-3">
          <img src={current.condition.icon} alt={current.condition.text} />
        </span>
        <span>{current.condition.text}</span>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
