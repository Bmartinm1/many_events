import { Link } from 'next';

function RankSelect() {
  return (
		<div>
			<h1>Please select your rank:</h1>
			<ul>
				<li href='localhost:3000/pages/rank-select/tasks-daily/SNCO-daily.js'>
					SNCO
				</li>
			</ul>
			<ul>
				<li href='localhost:3000pages/rank-select/tasks-daily/NCO-daily.js'>
					NCO
				</li>
			</ul>
			<ul>
				<li href='localhost:3000/pages/rank-select/tasks-daily/JE-daily.js'>
					Junior Enlisted
				</li>
			</ul>
		</div>
	);
}

export default RankSelect;
