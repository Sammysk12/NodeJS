const express = require('express');
const urlRouter = require('./routes/urlRoute');
const staticRouter = require("./routes/staticRouter")
const{ connectMongoDB } = require('./connectMongoDB');
const path = require("path");
const URL = require('./models/url');
const app = express();
PORT = 8001;


app.use(express.json());
app.use(express.urlencoded({extended:false}));

connectMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(()=>{
    console.log("MongoDB Connected !")
})
.catch((err)=>{
    console.log("Error Occured " + err)
});



app.use("/url", urlRouter);
 app.get("/:shortId", async(req, res)=>{
   
    
    const shortId =req.params.shortId;

    const orgURL = await URL.findOneAndUpdate({
        shortId,
    }, 
    {
        $push:{
            visitHistory:{
                timestamp:Date.now()
            },
        },
    });

    console.log(shortId);
    res.redirect(orgURL.redirectUrl);       

});


app.set('view engine' , "ejs");
app.set('views', path.resolve('./views'));


app.get('/url/test' ,async(req,res) =>{
    const allUrls = await URL.find();
    res.render('home', {
        urls: allUrls, 
    });
})

app.use('/', staticRouter);



app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
});


