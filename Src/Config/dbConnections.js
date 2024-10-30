const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        const connection= await mongoose.connect( `${process.env.MONGODB_URL}`);
        console.log(`db connected successfully`);
    }catch(error){
        console.error('Database connection error:', error.message);
    if (error.cause) {
      console.error('Cause:', error.cause);
    }
    process.exit(1);
    }
}

module.exports = connectDB
