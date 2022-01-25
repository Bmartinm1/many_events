import { useRouter } from 'next/router';

import SNCODailyForm from '../../components/tasks/SNCODaily';

function SNCODailyPage() {
	const router = useRouter();

	async function addTaskHandler(enteredTaskData) {
		const response = await fetch('/api/SNCO-tasks', {
			method: 'POST',
			body: JSON.stringify(enteredTaskData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		router.push('/');
	}

	return <SNCODailyForm onAddTasks={addTaskHandler} />;
}

export default SNCODailyPage;
