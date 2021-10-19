import { Box, Heading } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { Link } from "../components/Link";


const pages = [
	{ href: "/", label: "Home" },
	{ href: "/login", label: "Login" },
	{ href: "/account", label: "Account" },
] as const;

const Home = () => {
	return (
		<Box>
			<Heading>Home</Heading>
			<VStack>
			{pages.map(({ href, label }) => 			
				<Link href={href}>{label}</Link>
			)}
			</VStack>
		</Box>
	);
};

export default Home;
