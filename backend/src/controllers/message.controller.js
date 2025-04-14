import User from "../models/user.model.js";
import Message from "../model/message.model.js";
import cloudinary from "../lib/cloudinary.js";

export const getUsersForSidebar = async (req, res) => {
  try{
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password");

    res.status(200).json(filteredUsers);
  }catch(error){
   console.log("Error in getUsersForSidebar:", error.message);
   res.status(500).json({error:"Internal server error"});
  }
};

export const getMesssages = async (req, res) => {
    try{
        const { id:userToChatId } = req .params
        const MyId = req.user._id;

        const message = await Message.find({
          $or:[
            {senderId: MyId, receiverId:userToChatId},
            { senderId:userToChatId,receiverId:MyId}
          ]
        })

        res.status(200).json(message);
    }catch(error){
      console.log("Error in getMesssages controller :", error.message);
      res.status(500).json({error:"Internal server error"});
    }
};

export const sendMessage = async (req, res) => {
  try{
    const {text,image} = req.body;
    const { id: receiverId } =req.params;
    const senderId = req.user._id;

    let imageUrl;
    if(image){
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage =new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });
   
    await newMessage.save();
    //todo
    res.status(200).json(newMessage);

  }catch (error){
    console.log("Error in sendMesssages controller :", error.message);
    res.status(500).json({error:"Internal server error"});
  }
};