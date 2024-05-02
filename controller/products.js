const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    const { company, name, feature, sort, select } = req.query;
    const queryObject = {};

    if ( company ) {
        queryObject.company = company;
    }
    if (name) {
        // queryObject.name = name;
        queryObject.name = { $regex: name, $options: "i"};
    }
    if (feature) {
        queryObject.feature = feature;
    }

    let apiData = Product.find(queryObject);

    if (sort) {
        // let sortFix = sort.replace(","," ");
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        // let selectFix = select.replace(","," ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject);
    const myData = await apiData;
    res.status(200).json({myData, nbHits: myData.length});
};

const getAllProductsTesting = async (req, res) => {
    // const myData = await Product.find(req.query).sort("name -price"); /*req.query is use for filter*/
    const myData = await Product.find(req.query).select("name company"); /*req.query is use for filter*/
    
    res.status(200).json({myData});
};

module.exports = { getAllProducts, getAllProductsTesting};