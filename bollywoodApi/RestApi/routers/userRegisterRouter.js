import  express  from "express";
import { userRegistration,userLoginController } from "../controlles/userRegisterController.js";

const userRouter=express.Router()


userRouter.post('/registration',userRegistration)
userRouter.post('/login',userLoginController)


export default userRouter