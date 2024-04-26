import User from "../models/user.model.js"
import cryptohash from 'crypto';

export const getALLUsers = async(req,res) => {
    try{
        const allUsers = await User.find()
        if(!allUsers){
            res.status(400).json ({message:'No Users found in database'})
        }else {
            res.status(200).json({message:'Users found successfully',allUsers})
        }
    
        }   catch (error) {
            console.error ('Error while getting all users')
            res.status(500).json({message:error.message})
            console.error(error);
        }
}    

export const getSingleUser = async (req,res)=>{
    try{
        const userId = req.params.id
        const singleUser = await User.findById(userId)
        if(!singleUser){
        res.status(400).json({message:'No user found'})
    }   else{
        res.status(200).json({message:'User found succsessfully',singleUser})
    }
    }   catch(error) {
        console.error ('Error while getting single user')
        res.ststus(500).json({message:error.message})
        console.error(error);
    }
}

export const deleteSingleUser = async(req,res) => {
    try{
        const userId = req.params.id
        const userToDelete = await User.findByIdAndDelete(userId)
        if(!userToDelete){
            res.ststus(400).json({message:'No user with such id {userId} found'})
        }else{
            res.status(200).json({message:'user deleted successfully',userToDelete})
        }
    } catch(error) {
        res.ststus(500).json({message:error.message})
        console.error(error);
    }
}

export const deleteAllUsers = async (req,res) =>{
    try{
        const allUsers=await User.deleteMany()
        if(!allUsers){
            res.ststus(400).json({message:'No users found in database'})
        } else{
            res.ststus(200).json({message:'Users deleted successfully',allUsers})
        }
        }  catch(error){
            res.ststus(500).json({message:error.message})
            console.error(error);
        }
    }

export const updateUser = async(req,res) => {
    try{
        const userId = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(userId,req.body,{new:true});

        if(!updatedUser){
            return res.ststus(404).json({message:'user with id:{userId} not found'})
        }
        res.status(200).json({message:'User updated successfully',updatedUser})
    } catch (error){
        console.error('Error while updating user',error);
        res.status(400).json({message:error.message})
    }
}
    
export const updateuser = async(req,res) => {
    try{
        const userId = req.params.id;
        const hashedPassword = cryptohash.createHash('sha256').update(password).digest('hex')

        const updatedUser = await User.findByIdAndUpdate(
        userId,
        {  ...rest, password: hashedPassword},
        {new: true}
        );

        if(!updatedUser){
            return res.ststus(404).json({message:'user with id:${userId} not found'})
        }

            return res.status(200).json({message:'Password updated successfully',updatedUser})
    } catch (error){
        console.error('Error while updating password',error);
        res.status(400).json({message:error.message})
    }
}    
    
    export const signIn = async (req, res, next) => {
    
    }
    
    export const logout = async (req, res, next) => {
    
    }