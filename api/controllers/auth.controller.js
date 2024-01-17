import User from "../models/user.model.js";
import createError from "../utils/createError.js";
<<<<<<< HEAD
import bcrypt from "bcrypt";  
=======
import bcrypt from "bcrypt";
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
import jwt from "jsonwebtoken";



<<<<<<< HEAD
export const register = async (req, res, next)=>{

    try{
        const hash = bcrypt.hashSync(req.body.password, 5) 
=======
export const register = async (req, res, next) => {

    try {
        const hash = bcrypt.hashSync(req.body.password, 5)
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
        const newUser = new User({
            ...req.body,
            password: hash,
        });

        await newUser.save();
        res.status(201).send("user has been created!");

<<<<<<< HEAD
    }catch(err){
       next(err)
=======
    } catch (err) {
        console.log(err)
        next(err)
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
    }

}

<<<<<<< HEAD
export const login = async (req, res, next)=>{
    try{
        const user = await User.findOne({ username: req.body.username});
         
        if(!user) return next(createError(404,"user not found!"));

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isCorrect) 
        return next(createError(400, "Wrong password or uername!"));

        const token = jwt.sign(
            {
              id: user._id,
              isSeller: user.isSeller,
            },
            process.env.JWT_KEY
          );
      
          const { password, ...info } = user._doc;
          res
            .cookie("accessToken", token, {
              httpOnly: true,
=======
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) return next(createError(404, "user not found!"));

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect)
            return next(createError(400, "Wrong password or uername!"));

        const token = jwt.sign(
            {
                id: user._id,
                isSeller: user.isSeller,
            },
            process.env.JWT_KEY
        );

        const { password, ...info } = user._doc;
        res
            .cookie("accessToken", token, {
                httpOnly: true,
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
            })
            .status(200)
            .send(info);

<<<<<<< HEAD
    }catch(err){
=======
    } catch (err) {
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
        next(err);
    }


}
<<<<<<< HEAD
export const logout = async (req, res)=>{
=======
export const logout = async (req, res) => {
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7

    res.clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
    })
<<<<<<< HEAD
    .status(200)
    .send("user has been logged out.");
=======
        .status(200)
        .send("user has been logged out.");
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7

};