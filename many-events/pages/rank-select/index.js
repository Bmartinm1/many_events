import { Link } from 'next';

function RankSelect() {
  return (
		<div>
			<h1>Please select your rank:</h1>
			<div>
				<button href='/pages/rank-select/tasks-daily/sNCO-daily.js'>SNCO</button>
			</div>
			<div>
				<button href='/pages/rank-select/tasks-daily/NCO-daily.js'>NCO</button>
			</div>
			<div>
				<button href='/pages/rank-select/tasks-daily/JE-daily.js'>Jr Enlisted</button>
			</div>
		</div>
	);
}

export default RankSelect;
