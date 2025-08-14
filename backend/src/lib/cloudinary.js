import {v2 as cloudinary} from "cloudinary"

import {config} from  "dotenv"

config()

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});

//tAIwbjP3g2xQGD37pMQ55xJs1ec
export default cloudinary;