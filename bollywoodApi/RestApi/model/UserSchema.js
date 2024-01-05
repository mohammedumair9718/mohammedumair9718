import mongoose from "mongoose";


const UserSchema=mongoose.Schema({

   username:{type:String ,required:true},
   email:{type:String,required:true ,unique:true},
   password:{type:String ,required:true}

})

let UserModel=mongoose.model('userRegiterDetail',UserSchema)


export default UserModel