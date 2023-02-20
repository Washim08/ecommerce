const express = require("express");
const req = require("express/lib/request");
const async = require("hbs/lib/async");
const path = require("path");
const app = express();
require("./src/db/conn");
const Register = require("./src/models/register");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "/public");
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));

app.get("/register",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
})

app.get("/login",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
})


app.post("/register" ,async (req,res)=>{
    try {
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;

        if(password==confirmpassword){
            const registerEmployee = new Register({
                firstname : req.body.firstname,
                
                email : req.body.email,
                password : password,
                confirmpassword : confirmpassword,
                address : req.body.address
                
            });

            const registed = await registerEmployee.save();
            return res.redirect('index.html')


        }else{
            req.send("Password not matching");
        }
        
    } catch (error) {
        res.status(400).send(error);
    }
})

// login
app.post("/login",async(req,res)=>{
    try {
            const email = req.body.email;
            const password = req.body.password;

        const useremail = await Register.findOne({email:email})

        if(useremail.password === password){
            return res.redirect('index.html');
        }else{
            res.send("password is not matching");
        }

    } catch (error) {
        res.status(400).send("invalid Email")
    }
})

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
});