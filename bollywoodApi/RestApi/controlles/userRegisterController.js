import { hasshPassword, passwordbcrypt } from "../aouthantication/hashPassord.js";
import UserModel from "../model/UserSchema.js";
import { createUserService, loginService } from "../services/userRegisterService.js";


let userRegistration = async (req, res) => {
    let { username, email, password } = req.body
    console.log(req.body);
    // res.send('success')
    try {
        let hashdpassword = await hasshPassword(password)
        // console.log(hashdpassword);
        let status = await createUserService(username, email, hashdpassword)
        if (status) {
            res.status(200).send('create register successfully')
        } else {
            res.status(401).send('invalid register')
        }
        // return 'success'
    } catch (error) {
        console.log(error);
    }
}

let userLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send('Email and password are required');
        }

        const dbpass = await loginService(email);

        if (!dbpass) {
            return res.status(404).send('Email not found'); // Assuming loginService returns null when email is not found
        }

        const status = await passwordbcrypt(password, dbpass);

        if (status) {
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid login credentials');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}



export { userRegistration, userLoginController }
