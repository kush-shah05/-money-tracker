const mongoose= require('mongoose');
const {Schema,model}=mongoose;


const Trans_schema=new Schema({
    product:{type:String,required:true},
    desc:{type:String,required:true},
    date:{type:Date,required:true},
    price:{type:Number,required:true}
});

const trans_Model=model('Transaction',Trans_schema);

module.exports=trans_Model;