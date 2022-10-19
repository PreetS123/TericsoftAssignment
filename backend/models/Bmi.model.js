const mongoose= require('mongoose');


const BmiSchema= mongoose.Schema({
    height:{type:Number,required:true},
    weight:{type:Number,required:true}
});


const BmiModel= mongoose.model('bmi',BmiSchema);

module.exports= BmiModel;
