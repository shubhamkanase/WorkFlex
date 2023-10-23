
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";


export const verifyToken = (req, res, next) => {


    const token = req.cookies.accessToken;
    if (!token) return next(createError(401,"you are not authenticad!"));

    jwt.verify(token,process.env.JWT_KEY, async (err, payload) => {
        if (err) return next(createError(401,"you are not authenticad!"));
        req.userId = payload.id;
        req.isSeller = payload.isSeller;    
        next();
    });
};