const express = require('express');
const urlRouter = require('./routes/urlRoute');
const{ connectMongoDB } = require('./connectMongoDB');
const URL = require('./models/url');
const app = express();
PORT = 8001;


app.use(express.json());

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

}),






app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
});


