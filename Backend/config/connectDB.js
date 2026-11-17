import mongoose from "mongoose"

export const connectDB  = async() => {
    await mongoose.connect('mongodb+srv://harshalshardpatil2004_db_user:Ywj7f1wldVNLORkV@cluster0.0w7lgyi.mongodb.net/food-app').then(() => console.log("Database Connected"))
}

