const { MongoClient } = require("mongodb");

require('dotenv').config();

    // URL / URI
    const uri = process.env.MONGODB_LOCAL;
    
    // Database Name
    const dbName = process.env.MONGODB_DATABASE;

    // Declaracion conexión
    const client = new MongoClient(uri);




module.exports = async () => {
    await client.connect() 
    return client.db(dbName)
}
