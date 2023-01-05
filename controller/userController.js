const {Flight} = require ("../model/User");
const {v4:uuid} = require("uuid");

//get all flight
exports.getUsers = async (req, res)=>{
     try{
        const users = Flight;
        res.status(200).json({
            message:"All flight",
            Users: users
        });
     }catch (err){
        res.status(500).json({message:err}); 
     }
}

//get single user

exports.getUser = async(req,res)=>{
    try {
        let id = req.params.id;
        const user = Flight.find((user)=> user.id === id);
        res.status(200).json({
            message:"Flight found",
            user,
        })
    } catch (error) {
        
    }
}
//create new flight
exports.createUser = async (req,res) =>{
    try {
        const {title, price} = await req.body;
        const newUser = {
            id:uuid(), 
            title,
            time:new Date().toLocaleTimeString(),
            price,
            date:new Date().toLocaleDateString()
        }
        // user.id = uuid();

        Flight.push(newUser);

        res.status(201).json({
            message:"Flight created",
            newUser
        });
        
    } catch (err) {
        res.status(500).json({message:err.message});
    }
}

//update/edit flight
exports.updateUser = async (req,res)=>{
    try {
        let id = req.params.id;
        const user = Flight.find((user)=> user.id === id);
        const  {title, price} = await req.body;
        user.title = title;
        user.price = price;
        res.status(200).json({
            message: "Flight updated",
            user,
        });

    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

//delete flight
exports.deleteUser = async(req,res) =>{
    try {
        let id = req.params.id;
        const user = Flight.find((user) => user.id === id);
        Flight.splice(Flight.indexOf(user),1);
        res.status(200).json({
            message:"Flight deleted",
            user,
        })
    } catch (error) {
        
    }
}
