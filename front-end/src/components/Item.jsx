import React from "react";

const Item = () => {
  return (
    <a href="#" className="flex flex-col gap-2">
      <img
        src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMwMjg1MjA1NTcyNzM2MzcxNw==/original/e4acc330-15cd-41e1-bed5-e7c30065ad89.jpeg?im_w=720"
        alt="imagem da acomodação"
        className="aspect-square object-cover rounded-2xl"
      />

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-600">
            Venha desfrutar de momentos incríveis na serra, neste lugar que oferece
            contato direto com a natureza. É comum a presença de esquilos, tucanos e
            outras tantas aves do nosso bioma. O espaço é um convite ao lazer e ao
            relaxamento. A acomodação fica em um bairro tranquilo, onde pode-se
            fazer caminhadas e observar as belas montanhas do entorno. Quarto
            confortável, arejado, e com uma bela vista do quintal. Televisão e
            ventilador. Chuveiro com aquecimento a gás. A região central está a 3km.
        </p>
        <p>
            <span className="font-semibold">R$ 550</span> por noite
        </p>
      </div>
    </a>
  );
};

export default Item;
