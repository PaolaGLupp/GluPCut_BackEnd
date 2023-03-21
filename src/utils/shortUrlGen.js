const connection = require('../config/connectionDB')
const { nanoid } = require('nanoid'); // NANOID V3 - IMPORTANTE 
require('dotenv').config();


const shortUrlGen = async (length) => {

    // we call nanoid to make a random string 
    let shortStr = nanoid(length);

    // We create the complete url
    const shortUrl = `${shortStr}` // ${process.env.HOST}

    const db = await connection();

    // Checking for repeated URLS in the database
    try {
        const repeatedUrl = await db.collection('urlList').findOne({ _id: shortUrl })

        // if there are any, we repeat the process
        if (repeatedUrl) {
            shortUrlGen(6);
        }

        return shortUrl;

    } catch (err) {
        console.error(err)
    }

}

module.exports = { shortUrlGen };