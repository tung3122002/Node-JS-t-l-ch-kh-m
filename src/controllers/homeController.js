
import db from '../models/index'
import CRUDServicies from '../servicies/CRUDServicies'
let getHomePage = async (req, res) => {
   
    try {
        let data= await db.Users.findAll()
        // console.log(data)
        return res.render('homepage.ejs',{
            data:JSON.stringify(data)
        });
    } catch (error) {
        console.log("error")
    }
   
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
let postCrud =  async(req, res) => {
   let message = await CRUDServicies.createdNewUser(req.body)
  console.log(message)
    return res.send('aaaaaaaaaaa');
}
let listCrud =  async(req, res) => {
    let data = await CRUDServicies.getAllUsers()
    console.log(data)
   return res.render('listcrud.ejs',{
    dataTable: data
   })
 }
// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    postCrud:postCrud,
    listCrud:listCrud
}
