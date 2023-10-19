
import User from "../models/user.model.js";


export const register = async (req, res)=>{

    try{
        const newUser = new User({
            username: "test",
            email: "test",
            password: "test",
            conutry: "test",
        });

        await newUser.save();
        res.status(201).send("user has been created!");

    }catch(err){
        res.status(500),send("something went wrong!")
    }

}
export const login = async (req, res)=>{

}
export const logout = async (req, res)=>{

}