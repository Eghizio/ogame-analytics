import { Box, Heading, Link } from "@chakra-ui/layout";
import NextLink from "next/link";

const Home = () => {
	return (
		<Box>
			<Heading>Home</Heading>
			<NextLink href="/profile">
				<Link>Profile</Link>
			</NextLink>
		</Box>
	);
};

export default Home;
