import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Required for SSL connections on some services like Render
    },
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
})();

export default sequelize;
