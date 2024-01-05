import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'



const hasshPassword=async(password)=>{
    try {
        let hashdpassword=await bcrypt.hash(password,10)
        return hashdpassword
    } catch (error) {
        console.log(error);
    }
}

const passwordbcrypt=async(password,dbpass)=>{
    try {
        let status=await bcrypt.compare(password,dbpass)
        return status
    } catch (error) {
        console.log(error);
        
    }
}


export {hasshPassword,passwordbcrypt}

