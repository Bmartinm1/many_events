import { Fragment } from 'react';
import { MongoClient } from 'mongodb';

import EventList from '../components/events/EventList';

function EventsPage(props) {
  return (
		<Fragment>
			<div className='section-hero'>
				<h1>Hello from the Hero section!</h1>
			</div>
			<div className='section-links'>
				<ul>
					<li>
						<a href='https://www.manyworldstoken.com'>Home</a>
					</li>
					<li>
						<a href='dApp'>dApp</a>
					</li>
				</ul>
			</div>
			<div className='section-events'>
				<EventList events={props.events} />
			</div>
			<div className='section-faq'>
				<h2>Hello from the FAQ section!</h2>
			</div>
		</Fragment>
	);
}

export async function getStaticProps() {
	const client = await MongoClient.connect(
		'mongodb+srv://ben_m_squared:Thetrinity1@cluster0.fwv4v.mongodb.net/eventsDatabase?retryWrites=true&w=majority'
	);
	const db = client.db();

	const eventsCollection = db.collection('events');

	const events = await eventsCollection.find().toArray();

	client.close();

	return {
		props: {
			events: events.map((event) => ({
				title: event.title,
				image: event.image,
				id: event._id.toString(),
			})),
		},
		revalidate: 1,
	};
}

export default EventsPage;
