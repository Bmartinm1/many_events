import '../styles/globals.css';
import Layout from "../components/layout/Layout"

function EventsApp({ Component, pageProps }) {
	return <Layout><Component {...pageProps} /></Layout>;
}

export default EventsApp;
