import Head from "next/head";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "_context/AuthProvider";
import { Navigation } from "_components/Navigation/Navigation";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
	const queryClient = useRef(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
					refetchOnReconnect: false,
				},
			},
		})
	);

	return (
		<ChakraProvider>
			<QueryClientProvider client={queryClient.current}>
				<AuthProvider>
					<>
						<Head>
							<title>OGame Analytics</title>
						</Head>
						<Navigation />
						<Component {...pageProps} />
					</>
				</AuthProvider>
			</QueryClientProvider>
		</ChakraProvider>
	);
};

export default MyApp;
