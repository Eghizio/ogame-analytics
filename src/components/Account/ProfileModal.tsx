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
import { ServerSelect } from "_components/Account/ServerSelect";

interface Props {
	isOpen: boolean;
	onClose: (...args: any) => any;
}

export const ProfileModal = ({ isOpen, onClose }: Props) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Add new profile</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<VStack>
						<FormControl isRequired>
							<FormLabel>Universe</FormLabel>
							<ServerSelect w="300px" />
						</FormControl>
						<FormControl>
							<FormLabel>Nickname</FormLabel>
							<Input type="text" w="300px" />
						</FormControl>
						<FormControl>
							<FormLabel>User ID</FormLabel>
							<Input type="text" w="300px" />
						</FormControl>
					</VStack>
				</ModalBody>
				<ModalFooter justifyContent="center">
					<Button colorScheme="green">Create</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
