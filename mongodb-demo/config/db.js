import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        await mongoose.connect("");
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}


export default connectDb;
