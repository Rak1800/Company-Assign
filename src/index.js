const express= require('express');
const bodyParser=require('body-parser');
const mongoose= require ('mongoose');
const route=require ('./routes/route.js');


const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://Rak18000:Rakesh123@cluster0.xntrj.mongodb.net/Assignment-2',{
     useNewUrlParser:true
})
.then(()=>console.log('mongoDb is connected'))
.catch(err=>console.log(err))

app.use('/',route);

app.listen(process.env.PORT || 3000, function(){
    console.log('express is running on port '+(process.env.PORT || 3000))
});
