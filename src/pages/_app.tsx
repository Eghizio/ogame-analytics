import { ChakraProvider } from "@chakra-ui/react";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "../context/AuthProvider";
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
					<Component {...pageProps} />
				</AuthProvider>
			</QueryClientProvider>
		</ChakraProvider>
	);
};

export default MyApp;
