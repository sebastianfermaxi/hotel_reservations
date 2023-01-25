import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Reservation = sequelize.define("reservations", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  room_no: {
    type: DataTypes.INTEGER,
  },
  room_details: {
    type: DataTypes.STRING,
  },
  days: {
    type: DataTypes.INTEGER,
  },
  payment_method: {
    type: DataTypes.STRING,
  },
  payment_ticket:{
    type: DataTypes.INTEGER,
  },
  payment_amount:{
    type: DataTypes.FLOAT
  },
  price: {
    type: DataTypes.FLOAT,
  },
  status: {
    type: DataTypes.STRING,
  },
});

export default Reservation;
