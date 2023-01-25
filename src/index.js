import app from "./app.js";
import sequelize from "./database/database.js";

const PORT = process.env.PORT || 3000;

const main = async ()=>{
    try {
      //Try database conection

      await sequelize.sync();
      console.log("DB conection success");

      //Start server
      app.listen(PORT, () => console.log("Server is listening on port " + PORT));
      
    } catch (error) {
        console.error('Unable to connect to DB ' + error);
    }
  }

main();