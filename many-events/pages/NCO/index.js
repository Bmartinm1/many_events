import { useRouter } from 'next/router';

import NCODailyForm from '../../components/tasks/NCODaily';

function NCODailyPage() {
	const router = useRouter();

	async function addTaskHandler(enteredTaskData) {
		const response = await fetch('/api/NCO-tasks', {
			method: 'POST',
			body: JSON.stringify(enteredTaskData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		router.push('/');
	}

	return <NCODailyForm onAddTasks={addTaskHandler} />;
}

export default NCODailyPage;
