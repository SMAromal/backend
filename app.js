const express=require("express")
const app=new express();
const cors=require('cors')
const PORT=4000;

const UserModel=require('./model/UserData');

require('./connection');

app.use(express.json());
app.use(cors());

// POST

app.post('/adduser',async (req,res)=>{
    try {
        var item=req.body;
        const datasave=new UserModel(item);
        const savedata= await datasave.save();
        res.send('Post Successful')
    } catch (error) {
        console.log(error)
    }
})


app.listen(4000,()=>{
    console.log('The server is running on Port 4000')
})