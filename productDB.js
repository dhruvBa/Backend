const connectDB = require("./db/connectD");
const Product = require("./models/product");
const ProductJson = require("./product.json");

uri = "mongodb+srv://dhruvbarejadb15:6KCAAdlwLgDEyVkS@svastsysapi.tsnuaa6.mongodb.net/SvastsysApi?retryWrites=true&w=majority&appName=SvastsysApi";

const start = async () => {
    try {
        await connectDB(uri);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
};


start();