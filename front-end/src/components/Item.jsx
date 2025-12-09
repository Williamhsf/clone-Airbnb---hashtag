import React from "react";
import { Link } from "react-router-dom";

const Item = ({ place }) => {
  return (
    <Link to={`/place/${place._id}`} href="#" className="flex flex-col gap-2">
      <img
        src={place.photos[0]}
        alt="imagem da acomodação"
        className="aspect-square object-cover rounded-2xl"
      />

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{place.city}</h3>
        <p className="truncate text-gray-600">
            {place.description}
        </p>
        <p>
            <span className="font-semibold">R$ {place.price}</span> por noite
        </p>
      </div>
    </Link>
  );
};

export default Item;
