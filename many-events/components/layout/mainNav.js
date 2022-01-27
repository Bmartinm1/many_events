import Link from 'next/link';
import Image from 'next/image'
import classes from './MainNav.module.css';

function MainNav() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
        <Image src='/MW_logo-white@2x.png' width={300} height={60} />
      </div>
			<nav>
				<ul>
					<li>
						<Link href='/enlist'>Enlist</Link>
					</li>
					<li>
						<Link href='/rank-select'>Log Tasks</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNav;
