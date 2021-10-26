import { Box, Heading, Button, Divider, Flex, Spacer, WrapItem, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { ProfileCard } from "_components/Account/ProfileCard";
import { AddProfileModal } from "_components/Account/AddProfileModal";
import { Link } from "_components/shared/Link";
import { mockedProfiles } from "_constants/data/mocks";

const Account = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	// maybe decouple ProfilesList?

	return (
		<Box p="4">
			<Flex>
				<Heading>Account</Heading>
				<Spacer />
				<Link href="/account/user">
					<Button>User</Button>
				</Link>
			</Flex>
			<Divider my="4" />

			<SimpleGrid minChildWidth="300px" spacing="12" p="16">
				<ProfileCard
					profile={{
						serverID: "",
						serverName: "Add profile",
						userID: "",
						userName: "NEW",
					}}
					onClick={onOpen}
					border="2px dashed gray"
				/>
				{mockedProfiles.map((profile) => (
					<WrapItem key={profile.serverID}>
						<ProfileCard profile={profile} />
					</WrapItem>
				))}
			</SimpleGrid>
			<AddProfileModal isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};

export default Account;
