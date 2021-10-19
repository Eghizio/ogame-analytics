import { Box, Heading, Text } from "@chakra-ui/layout";
import { Divider, VStack } from "@chakra-ui/react";
import { ServerSelect } from "_components/Account/ServerSelect";
import { Link } from "_components/Link";

const Account = () => {
	return (
		<Box p="4">
			<Heading>Account</Heading>
			<Divider my="4" />
			<VStack align="stretch">
				<Link href="/account/user">User</Link>
				<Box>
					<Text>Selected Server ID:</Text>
					<ServerSelect maxWidth="300px" />
				</Box>
			</VStack>
		</Box>
	);
};

export default Account;
