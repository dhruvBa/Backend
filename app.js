require("dotenv").config();

const express = require("express");

const connectDB = require("./db/connectD");

const app = express();
const PORT = process.env.PORT || 5000;

const product_routes = require("./routes/products")

app.get("/", (req, resp)=>{
    resp.send("App is created");
});

app.use("/api/products", product_routes);

const start = async () => {

    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`${PORT} YES I AM CONNECT`);
        })
    
    } catch (error) {
        console.log(error)
    }
}
start();