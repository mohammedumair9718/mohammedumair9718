import { hasshPassword, passwordbcrypt } from "../aouthantication/hashPassord.js";
import UserModel from "../model/UserSchema.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


let userRegistration = async (req, res) => {
    let { username, email, password ,password_confirmation} = req.body
    console.log(req.body)
    const user = await UserModel.findOne({ email: email })
    if (user) {
      res.send({ "status": "failed", "message": "Email already exists" })
    } else {
      if (username && email && password && password_confirmation) {
        if (password === password_confirmation) {
          try {
            // const salt = await bcrypt.genSalt(10)
            // const hashPassword = await bcrypt.hash(password, salt)
            let hashdpassword = await hasshPassword(password)

            const doc = new UserModel({
                username: username,
              email: email,
              password: hashdpassword
            })
            await doc.save()
            const saved_user = await UserModel.findOne({ email: email })
            // Generate JWT Token
            const token = jwt.sign({ userID: saved_user._id }, process.env.SECRETKEY, { expiresIn: '5d' })
            res.status(201).send({ "status": "success", "message": "Registration Success", "token": token })
          } catch (error) {
            console.log(error)
            res.send({ "status": "failed", "message": "Unable to Register" })
          }
        } else {
          res.send({ "status": "failed", "message": "Password and Confirm Password doesn't match" })
        }
      } else {
        res.send({ "status": "failed", "message": "All fields are required" })
      }
    }
  }

  let userLogin = async (req, res) => {
    console.log(req.body);
    try {
      const { email, password } = req.body
      if (email && password) {
        const user = await UserModel.findOne({ email: email })
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password)
          if ((user.email === email) && isMatch) {
            // Generate JWT Token
            const token = jwt.sign({ userID: user._id }, process.env.SECRETKEY, { expiresIn: '5d' })
            res.send({ "status": "success", "message": "Login Success", "token": token })
          } else {
            res.send({ "status": "failed", "message": "Email or Password is not Valid" })
          }
        } else {
          res.send({ "status": "failed", "message": "You are not a Registered User" })
        }
      } else {
        res.send({ "status": "failed", "message": "All Fields are Required" })
      }
    } catch (error) {
      console.log(error)
      res.send({ "status": "failed", "message": "Unable to Login" })
    }
  }
    

// let userLoginController = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).send('Email and password are required');
//         }

//         const dbpass = await loginService(email);

//         if (!dbpass) {
//             return res.status(404).send('Email not found'); // Assuming loginService returns null when email is not found
//         }

//         const status = await passwordbcrypt(password, dbpass);

//         if (status) {
//             res.status(200).send('Login successful');
//         } else {
//             res.status(401).send('Invalid login credentials');
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Internal Server Error');
//     }
// }



export { userRegistration,userLogin}
