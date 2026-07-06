import mongoose from 'mongoose';

const connectDb = () => { mongoose.connect("mongodb+srv://vanshika:vanshika@cluster0.fm7difs.mongodb.net/?appName=Cluster0")
.then(() => console.log("mongodb connected"));
}

export default connectDb;