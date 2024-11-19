const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const User=require('../model/user');
require('dotenv').config();

const authController={
    register:async(req,res)=>{
         try{
            const {username,email,password}=req.body;
            const userExits=await User.findOne({email});
            if(userExits){
                return res.status(400).json({message:"User already exits"});

            }
            const hassedPassword=await bcrypt.hash(password,10);
            const newUser=new User({
                username,
                email,
                password:hassedPassword
            })

            await newUser.save();
            return res.status(201).json({message:"User Created successfully"});
            
         }
         catch(error){
            res.status(500).json({error:error.message});
         }
    },
    login:async(request,response)=>{
        try{
            const { email, password } = request.body;

           
            const user = await User.findOne({ email: email });

           
            if (!user) {
                return response.status(400).json({ message: 'User does not exist' });
            }

            
            const passwordIsValid = await bcrypt.compare(password, user.password);

           
            if (!passwordIsValid) {
                return response.status(400).json({ message: 'Invalid password' });
            }

            // generate a token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

            // return a success message
            return response.status(200).json({ message: 'Login successful', token });
        }
        catch(error){
            res.status(500).json({error:error.message});
        }  
        },
        me: async (request, response) => {
            try {
               
                const userId = request.userId;
    
                const user = await User.findById(userId).select('-password -__v -createdAt -updatedAt -_id');
    
                // return the user details
                return response.status(200).json(user);
            } catch (error) {
                return response.status(500).json({ message: error.message });
            }
        }
    }


module.exports=authController;