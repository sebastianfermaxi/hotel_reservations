import Reservation from "../models/Reservation.js";

export const newPendingReservation = async (req, res) => {
  const { room_no, room_details, days, price, user_id } = req.body;

  try {
    //Saves a new reservation on DB

    const reservation = await Reservation.create({
      room_no,
      room_details,
      days,
      price,
      status: 'pending',
      user_id, 
    });

    res.status(200).json(reservation);

  } catch (error) {
    res.status(500).json({ error: "Something went wrong " + error });
  }
};

export const payReservation = async (req, res) => {

  const id = req.params.id;
  const { payment_method, payment_ticket, user_id } = req.body;

  try {

    //Updates payment on selected reservation

    const reservation = await Reservation.findOne({where:{user_id: user_id, id:id}});
    reservation.status = "payed";
    reservation.payment_method = payment_method;
    reservation.payment_ticket = payment_ticket;
    reservation.payment_amount = reservation.price * reservation.days;
    await reservation.save();
    res.status(200).json(reservation);

  } catch (error) {
    res.status(500).json({ error: "Something went wrong " + error });
  }
};

export const deleteReservation = async (req, res) => {

    const {id} = req.params;
  try {
    //Change status on a reservation

    const reservation = await Reservation.findByPk(id);
    reservation.status= 'deleted';
    await reservation.save();

    res.status(200).json({Deleted:'Successfully'});
  } catch (error) {
    res.status(500).json({ error: "Something went wrong " + error });
  }
};

export const getReservations = async (req, res) => {
    const {user_id} = req.body;
  try {
    //Return all reservations

    const reservations = await Reservation.findAll({where:{
      status:['pending', 'payed'], user_id:user_id}});

    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong " + error });
  }
};