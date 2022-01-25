import { MongoClient } from 'mongodb';

async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body;

		const { name, email, walletAddress, discordName } = data;

		const client = await MongoClient.connect(
			'mongodb+srv://ben_m_squared:Thetrinity1@cluster0.fwv4v.mongodb.net/usersDatabase?retryWrites=true&w=majority'
		);
		const db = client.db();

		const usersCollection = db.collection('usersCollection');

		const result = await usersCollection.insertOne(data);
		console.log(result);

		client.close();

		res.status(201).json({ message: 'Successfully enlisted!' });
	}
}

export default handler;
