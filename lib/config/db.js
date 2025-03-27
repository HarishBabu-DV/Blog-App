const mongoose=require('mongoose');

const connectionString=process.env.MONGODB_URL;

export const connectDB=async () => {
    try {
        await mongoose.connect(connectionString);
        console.log('MongoDB is connected');
    } catch (error) {
        console.log(`Database error : ${error}`);
    }
}