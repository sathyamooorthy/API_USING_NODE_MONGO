var express = require('express')
var router = express.Router()

const mongoose = require('mongoose');


let Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: String
},{
    timestamp: true
}) ;
const user = mongoose.model('user',userSchema);

router.get('/',(req,res)=>{
    res.send    ("hello user");
});

module.exports.userRouter = router