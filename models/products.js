const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  
    image: {type: String,
        required: true},

    ProductName : {
        type : String,
        required: [true, 'Please Enter Product Name ']
    },

    ProductId : { type : mongoose.Types.ObjectId },

    CategoryId:{ type: mongoose.Types.ObjectId, ref: "categories"},
    CategoryName : { type : String, required: [true, 'Please Enter Category Name']}


    
})

module.exports = mongoose.model('Product', productSchema);

