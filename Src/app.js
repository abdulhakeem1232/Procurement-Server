require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan');

const connectDB = require('./Config/dbConnections')
const itemsRouter = require('./App/Routes/itemsRoutes')
const supplierRouter = require('./App/Routes/supplierRoutes')
const orderRouter = require('./App/Routes/purchaseOrderRoutes')

const app=express()

const corsOptions = {
   origin: 'http://localhost:5173', 
   credentials: true, 
   optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('combined'));

app.use('/items',itemsRouter)
app.use('/supplier',supplierRouter)
app.use('/order',orderRouter)



const startServer=async()=>{
    try{
       await connectDB();

       const port=process.env.SERVER_PORT||3000
     
      app.listen(port, () => {
      console.log(`Server Running on ${port}`);
    });
    }catch (error) {
       console.error('Failed to start the server:', error);
  }  
}

module.exports = {
    app,
    startServer,
  };
