import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './EventItem.module.css';

function EventItem(props) {
  const router = useRouter();

  function logTasksHandler() {
    router.push('/rank-select/');
  }

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt={props.title} />
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
				</div>
				<div className={classes.actions}>
					<button onClick={logTasksHandler}>Log a task</button>
				</div>
			</Card>
		</li>
	);
}

export default EventItem;
