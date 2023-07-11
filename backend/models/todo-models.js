const mongoose=require('mongoose');

const toDoSchema=mongoose.Schema({
    text: {
        type: String,
        required: true
    }
})

const ToDo=mongoose.model('ToDo',toDoSchema)
module.exports=ToDo
