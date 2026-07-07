import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://vanshika:<id_pw>@cluster0.fm7difs.mongodb.net/?appName=Cluster0");
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}


export default connectDb;
