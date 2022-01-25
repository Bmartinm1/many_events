import { useRouter } from 'next/router';

import JEDailyForm from '../../components/tasks/JEDaily';

function JEDailyPage() {
	const router = useRouter();

	async function addDailyHandler(enteredTaskData) {
		const response = await fetch('/api/JE-tasks', {
			method: 'POST',
			body: JSON.stringify(enteredTaskData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		router.push('/');
	}

	return <JEDailyForm onAddDaily={addDailyHandler} />;
}

export default JEDailyPage;
