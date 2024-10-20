const shortid = require("shortid");
const URL = require('../models/url')

async function handleGenerateShortURL(req, res) {
    const body = req.body;
    
    if(!body.url){
        return res.status(400).json({msg:"URL is required"})
    }



    const ShortID = shortid();
    await URL.create({
        shortId: ShortID,
        redirectUrl: body.url,
        visitHistory: [],
    });

    return res.json({id:ShortID});

}

async function handleGetAnalytics(req, res) {    
    const shortId = req.params.shortId;

    const result = await URL.findOne({shortId});
    return res.json({totalClicks:result.visitHistory.length, 
                      analytics:result.visitHistory,
                    });
}

module.exports = {
    handleGenerateShortURL,
    // handleGetURL,
    handleGetAnalytics,
}