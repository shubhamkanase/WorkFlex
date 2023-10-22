import User from "../models/user.model.js";
import bcrypt from "bcrypt";  
import jwt from "jsonwebtoken";


export const register = async (req, res)=>{

    try{
        const hash = bcrypt.hashSync(req.body.password, 5) 
        const newUser = new User({
            ...req.body,
            password: hash,
        });

        await newUser.save();
        res.status(200).send("user has been created!");

    }catch(err){
        res.status(500).send(err.message);
    }
}

export const login = async (req, res)=>{
    try{
        const user = await User.findOne({ username: req.body.username});
        if(!user) return res.status(404).send("user not found!")

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isCorrect) return res.status(400).send("Wrong password or uername!");

        const {password, ...info} = user
        res.status(200).send(info)

    }catch(err){
        res.status(500).send(err.message);
    }


}
export const logout = async (req, res)=>{

}