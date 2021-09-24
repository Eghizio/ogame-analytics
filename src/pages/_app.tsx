import { ChakraProvider } from "@chakra-ui/react";
import { ProfileProvider } from "../context/ProfileProvider";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<ChakraProvider>
			<ProfileProvider>
				<Component {...pageProps} />
			</ProfileProvider>
		</ChakraProvider>
	);
};

export default MyApp;
