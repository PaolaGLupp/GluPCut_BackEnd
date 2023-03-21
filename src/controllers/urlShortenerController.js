const connection = require('../config/connectionDB')
const { urlSchema } = require('./urlGet');
const {shortUrlGen} = require('../utils/shortUrlGen')
 

const createShortUrl = async  (req, res) => {

    const url = (req.body.longUrl)
    const shortUrl = await shortUrlGen(5);

    const db = await connection();

    try {
        await db.collection('urlList').insertOne({
            _id: shortUrl,
            url: url,

        })

         return res.status(201).json({
            message: 'New url created!',
            shortUrl
        })

    } catch(e) {
        console.error(e);
    }

}

module.exports = createShortUrl;