import { FormEventHandler, useState } from "react";
import {
	Box,
	Text,
	Button,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	VStack,
	FormControl,
	FormLabel,
} from "@chakra-ui/react";
import { PlayerSelect } from "_components/Account/PlayerSelect";
import { ServerSelect } from "_components/Account/ServerSelect";

interface Props {
	isOpen: boolean;
	onClose: (...args: any) => any;
}

// should i store more data? full ProfileData with serverName, playerName and alliance?
// id's stay the same, playerName can change, alliance can change (both id,name,tag)
export const AddProfileModal = ({ isOpen, onClose }: Props) => {
	const [selectedServerID, setSelectedServerID] = useState("");
	const [selectedPlayerID, setSelectedPlayerID] = useState("");

	const addProfile: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		console.log({ selectedServerID, selectedPlayerID });
	};

	const handleClose = () => {
		setSelectedServerID("");
		setSelectedPlayerID("");
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={handleClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Add new profile</ModalHeader>
				<ModalCloseButton />
				<form onSubmit={addProfile}>
					<ModalBody>
						<VStack>
							<FormControl isRequired>
								<FormLabel>Universe</FormLabel>
								<ServerSelect w="300px" handleChange={setSelectedServerID} />
							</FormControl>
							<FormControl isRequired>
								<FormLabel>Player</FormLabel>
								<PlayerSelect
									w="300px"
									serverID={selectedServerID}
									handleChange={setSelectedPlayerID}
								/>
							</FormControl>
						</VStack>
					</ModalBody>
					<ModalFooter justifyContent="center">
						<Button type="submit" colorScheme="green">
							Add
						</Button>
					</ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	);
};
