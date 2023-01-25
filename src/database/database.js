import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres", "postgres", "secret-password", {
  host: "db",
  dialect: "postgres",
  port: 5432
});

export default sequelize;