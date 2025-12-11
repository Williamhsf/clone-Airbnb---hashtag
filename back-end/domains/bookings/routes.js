import { Router } from "express";
import Booking from "./model.js";

const router = Router();

router.post("/", async (req, res) => {
  const { place, user, price, total, checkin, checkout, guests, nights } =
    req.body;

  try {
    const newBookingDoc = await Booking.create({
      place,
      user,
      price,
      total,
      checkin,
      checkout,
      guests,
      nights,
    });

    res.json(newBookingDoc)
  } catch (error) {
    console.error(error);
    res.status(500).json("Deu erro ao criar a Reserva.");
  }
});

export default router;
