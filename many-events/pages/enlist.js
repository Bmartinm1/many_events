import { useRouter } from 'next/router';

import EnlistForm from '../components/users/EnlistForm';

function EnlistPage() {
	const router = useRouter();

	async function addUserHandler(enteredUserData) {
		const response = await fetch('/api/new-user', {
			method: 'POST',
			body: JSON.stringify(enteredUserData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();
		console.log(enteredUserData);
		console.log(data);

		router.push('/login');
	}

	return <EnlistForm onAddUser={addUserHandler} />;
}

export default EnlistPage;
