import User from "../models/User.js";

export const createUser = async(req,res)=>{

    const {name, email, password, cellphone} = req.body;

     try {
          //Saves a new user on DB

          const user = await User.create({
            name,
            email,
            cellphone,
            password,
          });

          res.status(200).json(user);

     } catch (error) {
        res.status(500).json({error: 'Something went wrong ' + error})
     }

};