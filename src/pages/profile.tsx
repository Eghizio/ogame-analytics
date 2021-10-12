import NextLink from "next/link";
import { Box, Heading, Link, Text } from "@chakra-ui/layout";
import { ServerSelect } from "../components/Profile/ServerSelect";
import { useAuth } from "../context/AuthProvider";

const Profile = () => {
	const { user } = useAuth();

	return (
		<Box>
			<Heading>Settings</Heading>
			<NextLink href="/">
				<Link>Home</Link>
			</NextLink>
			<Box>
				<Text>Selected Server ID: {user?.lastServerID || ""}</Text>
				<ServerSelect />
			</Box>
		</Box>
	);
};

export default Profile;
