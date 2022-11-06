const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/LoginFormDB",{
    useNewUrlParser: true,
	useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
})
.then(()=>{
    console.log("Connection Success");
})
.catch((err)=>{
    console.log(err);
});

const dbSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    city: String,
    age: Number,
    test:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
});

