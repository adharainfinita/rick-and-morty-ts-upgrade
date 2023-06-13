import User from "../models/User";

const createUser = async(email:string, password:string)=>{
   return await User.create({
        email: email,
        password: password
    });
}

export default createUser