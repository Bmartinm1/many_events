import Head from 'next/head';
import MainNav from './MainNav';
import classes from './Layout.module.css';

function Layout(props) {
	return (
    <>
      <Head>
        <title>Many Worlds Events</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div>
        <MainNav />
        <main className={classes.main}>{props.children}</main>
      </div>
    </>
	);
}

export default Layout;
