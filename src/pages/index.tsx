import { Box, Heading, Link } from "@chakra-ui/layout";
import NextLink from "next/link";

const Home = () => {
	return (
		<Box>
			<Heading>Home</Heading>
			<NextLink href="/settings">
				<Link>Settings</Link>
			</NextLink>
		</Box>
	);
};

export default Home;
