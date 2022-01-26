import { MongoClient } from 'mongodb';

async function userHandler(req, res) {
	if (req.method === 'POST') {
		const data = req.body;

		const { name, email, walletAddress, discord, referredDiscord, socialMedia, respoCheck } = data;

		const client = await MongoClient.connect(
			'mongodb+srv://ben_m_squared:Thetrinity1@cluster0.fwv4v.mongodb.net/usersDatabase?retryWrites=true&w=majority'
		);
		const db = client.db();

		const usersCollection = db.collection('usersCollection');

		const result = await usersCollection.insertOne(data);
    
		client.close();

		res.status(201).json({ message: 'Successfully enlisted!' });
	}
}

export default userHandler;