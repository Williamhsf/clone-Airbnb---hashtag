import React from "react";

const Item = ({ place }) => {
  return (
    <a href="#" className="flex flex-col gap-2">
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
    </a>
  );
};

export default Item;
