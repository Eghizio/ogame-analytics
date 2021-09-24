import { ProfileProvider } from "../context/ProfileProvider";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<ProfileProvider>
			<Component {...pageProps} />
		</ProfileProvider>
	);
};

export default MyApp;
