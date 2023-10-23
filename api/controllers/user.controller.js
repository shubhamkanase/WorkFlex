
import userModel from "../models/user.model.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";    
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next)=>{

    const user = await User.findById(req.params.id);
   

        if (req.userId !== user._id.toString()) {

           return next(createError(403, "you can delete only your acount!"));
        }  
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("deleted!")
     


};
export const fn = (req, res)=>{

}
