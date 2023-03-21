const connection = require('../config/connectionDB');



const getUrl = async (req, res) => {

    const db = await connection()

    const id = req.params.id

    try {
        let url = await db.collection("urlList").findOne({ _id: id });

        if (url) {

            return res.status(200).json(
                url.url
            );

        } else {

            res.status(404).json({
                error: 'Url not found'
            })
        }



    } catch (e) {
        console.log(e)
    }


}



module.exports = { getUrl }