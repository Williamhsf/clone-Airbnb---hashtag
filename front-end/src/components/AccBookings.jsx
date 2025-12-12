import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AccBookings = () => {
    const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const axiosGet = async () => {
      const { data } = await axios.get("/bookings/owner");
      setBookings(data);
    };

    axiosGet();
  }, []);


  return (
    <div className="flex w-full max-w-7xl flex-col items-center">
      {bookings.map((booking) => (
        <Link
          to={`/account/bookings/new/${booking._id}`}
          className="flex items-center gap-6 rounded-2xl bg-gray-100 p-6"
          key={booking._id}
        >
          <img
            className="aspect-square max-w-56 rounded-2xl object-center"
            src={booking.photos[0]}
            alt="Foto da Acomodação"
          />

          <div className="flex flex-col gap-2">
            <p className="text-2xl font-medium">{booking.title}</p>
            <p>{booking.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AccBookings;
