import { VStack, HStack, Container, Heading, Text, Tooltip, Tag, Button } from "@chakra-ui/react";
import { Modal } from "_components/shared/Modal";
import { ProfileData } from "_types/data";

interface Props {
	isOpen: boolean;
	onClose: () => void;
	profile: ProfileData;
}

// tooltip with IDs
export const ProfileModal = ({ isOpen, onClose, profile }: Props) => {
	const { serverID, serverName, userID, userName } = profile;
	// alliance from profile or hook
	const allianceID = "1337";
	const allianceName = "Best alliance ever";
	const allianceTag = "BAE";

	// do we store/create profileID or just use serverID with userID?
	const profileID = serverID + "_" + userID;

	const handleDeleteProfile = () => {
		console.log(`Deleted profile: ${profileID}`);
		// toast, alert or some UI
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			header={<Heading>Profile</Heading>}
			footer={
				<VStack>
					<Button colorScheme="red" leftIcon={<Text>Trash icon</Text>} onClick={handleDeleteProfile}>
						Delete profile
					</Button>
				</VStack>
			}
		>
			<VStack>
				<Container>
					<Heading>Universe</Heading>
					<Tooltip label={serverID} aria-label="Universe ID tooltip">
						<Text>{serverName}</Text>
					</Tooltip>
				</Container>
				<Container>
					<Heading>Player</Heading>
					<Tooltip label={userID} aria-label="Player ID tooltip">
						<Text>{userName}</Text>
					</Tooltip>
				</Container>
				<Container>
					<Heading>Alliance</Heading>
					<Tooltip label={allianceID} aria-label="Alliance ID tooltip">
						<HStack wrap="wrap-reverse">
							<Tag colorScheme="purple">{allianceTag}</Tag>
							<Text>{allianceName}</Text>
						</HStack>
					</Tooltip>
				</Container>
			</VStack>
		</Modal>
	);
};
