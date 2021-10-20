import { Box, Heading, Text } from "@chakra-ui/layout";
import { Button, Divider, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { ProfileModal } from "_components/Account/ProfileModal";
import { ServerSelect } from "_components/Account/ServerSelect";
import { Link } from "_components/Link";

const Account = () => {
	const [isOpened, setIsOpened] = useState(false);

	// select profile card instead of ServerSelect (used within modal)

	return (
		<Box p="4">
			<Heading>Account</Heading>
			<Divider my="4" />
			<VStack align="stretch">
				<Link href="/account/user">User</Link>
				<Box>
					<Text>Selected Server ID:</Text>
					<ServerSelect w="300px" />
				</Box>
			</VStack>
			<Button onClick={() => setIsOpened(true)}>Add profile</Button>
			<ProfileModal isOpen={isOpened} onClose={() => setIsOpened(false)} />
		</Box>
	);
};

export default Account;
