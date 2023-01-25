import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import Reservation from "./Reservation.js";

const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  cellphone: {
    type: DataTypes.INTEGER,
  },
  password: {
    type:DataTypes.STRING
  }
});

User.hasMany(Reservation,{
    foreignKey: "user_id",
    sourceKey: "id"
})

Reservation.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id"
});

export default User;
