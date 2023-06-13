
import User from "../models/User";

const searchUser = async(email:string, password:string)=>{
  
        return await User.findOne({
        where: {
            email: email,
            password: password
        }
    })

}
export default searchUser

