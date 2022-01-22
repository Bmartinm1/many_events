import Link from 'next/link';
import classes from './MainNav.module.css';

function MainNav() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>ManyEvents</div>
			<nav>
				<ul>
					<li>
						<Link href='/enlist'>All Events</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNav;
