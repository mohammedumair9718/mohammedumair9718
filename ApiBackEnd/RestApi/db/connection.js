import mongoose from "mongoose";


const dbConnect=async(dburl,dbname)=>{
    try {
        await mongoose.connect(dburl+dbname)
        console.log('connection estibilshed to database');
        
    } catch (error) {
        console.log(`error in dbconnect ${error}`);
    }

}

export default dbConnect

