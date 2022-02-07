import { MongoClient } from 'mongodb';

async function handler(req, res){
    console.log("Fetch function has been called!")

    if (req.method === "POST"){
        const data = req.body;
        console.log(data);
        const client = await MongoClient.connect('mongodb+srv://scottbromley17:sailing1730@cluster0.knr96.mongodb.net/RestaurantsApp?retryWrites=true&w=majority');
        const db = client.db();
        const publicRestaurantsCollection = db.collection('publicRestaurantsCollection');
        const result = await publicRestaurantsCollection.insertOne(data);
        
        console.log(result);
    
        client.close();
    
        res.status(201).json({message: {message: "Restaurant added sucesfully!", data: data}});
    }

}

export default handler;