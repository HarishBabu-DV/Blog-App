const mongoose=require('mongoose');

const connectionString=process.env.MONGODBURL;

export const connectDB=async () => {
    try {
        await mongoose.connect(connectionString);
        console.log('MongoDB is connected');
    } catch (error) {
        console.log(`Database error : ${error}`);
    }
}