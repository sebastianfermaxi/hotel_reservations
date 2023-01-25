import {Router} from "express";
import { createUser } from "../controllers/user.controller.js";
import {
  newPendingReservation,
  payReservation,
  deleteReservation,
  getReservations
} from "../controllers/reservation.controller.js";


const router = Router();

//Register user
router.post("/login", createUser);

//CRUD reservations

router.get("/bookings", getReservations);
router.post("/bookings", newPendingReservation);
router.put("/bookings/:id", payReservation);
router.delete("/bookings/:id", deleteReservation);



export default router;