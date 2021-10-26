import { Box, Heading, Button, Divider, Flex, Spacer, SimpleGrid, LinkOverlay, LinkBox } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "_components/shared/Link";

const Profile = () => {
	// select profile card instead of ServerSelect (used within modal)

	return (
		<Box p="4">
			<Flex>
				<Heading>Profile</Heading>
				<Spacer />
				<LinkBox>
					<Link href="/account/user">
						<LinkOverlay>
							<Button>User</Button>
						</LinkOverlay>
					</Link>
				</LinkBox>
			</Flex>
			<Divider my="4" />
		</Box>
	);
};

export default Profile;
