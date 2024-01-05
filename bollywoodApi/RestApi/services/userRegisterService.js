import UserModel from "../model/UserSchema.js"


let createUserService =async(username,email,password) => {
    try {
        let user =await new UserModel({ username:username, email:email, password:password })
        if(user){
            res.send({"status":"faild","message":"Email already exists "})
        }
        else{
            
        }
      await  user.save()    
        return "success"
    } catch (error) {
        console.log(error);
        return "error"
    }
}
let loginService = async (email) => {
    try {
        let user = await UserModel.findOne({ email });

        if (!user) {
            // Handle the case where the user is not found
            return null;
        }

        let dbpass = user.password;
        return dbpass;
    } catch (error) {
        // Handle database errors
        console.log(`Error in loginService: ${error}`);
        throw error; // Throw the error for higher-level handling, or handle it as needed
    }
}


export {createUserService,loginService}