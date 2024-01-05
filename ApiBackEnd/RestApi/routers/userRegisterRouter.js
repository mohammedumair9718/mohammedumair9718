import  express  from "express";
import { userRegistration,userLogin} from "../controlles/userRegisterController.js";

const userRouter=express.Router()


userRouter.post('/registration',userRegistration)
userRouter.post('/login',userLogin)


export default userRouter