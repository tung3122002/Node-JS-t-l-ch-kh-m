import bcrypt from 'bcryptjs';
import db from '../models';
const salt = bcrypt.genSaltSync(10);
let createdNewUser =async (data) => {
    return new Promise(async(resolve, reject) => {
    
        try {
            let hashPasswordFromPassword= await hashUserPassword(data.password);
            await db.Users.create({
                email: data.email,
                password: hashPasswordFromPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender ==='1' ? true : false,
                image: data.image,
                roleId:data.roleId,
                phoneNumber: data.phoneNumber,
                
            })
            resolve('ok thanh cong')
        } catch (e) {
         reject(e)
        }
         
     })
   
}
let hashUserPassword = (password) => {
    return new Promise(async(resolve, reject) => {
    
       try {
        let hashPassword = await bcrypt.hashSync(password, salt);
        resolve(hashPassword)
       } catch (e) {
        reject(e)
       }
        
    })
}
let getAllUsers = async()=>{
    return new Promise(async(resolve, reject) => {
        try {
            let users = db.Users.findAll({
                raw: true
            })
            resolve(users)
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    createdNewUser: createdNewUser,
    getAllUsers:getAllUsers
}