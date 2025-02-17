import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const isAuthenticated = async(req, res, next) => {
   try {
     const token=req.cookies.token;

     if(!token){
        return res.status(401).json({message:"Unauthorized"});
     }
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
     if(!decoded){
         return res.status(401).json({
             message: "Unauthorized - Invalid Token",
         });
     }
 
     req.id=decoded.userId
     next();
   } catch (error) {
     throw new Error(error);
   }
};

export default isAuthenticated