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
						<Box>
							<Text>Universe</Text>
							<ServerSelect w="300px" />
							{/* <Input type="text" /> */}
						</Box>
						<Box>
							<Text>Nickname</Text>
							<Input type="text" w="300px" />
						</Box>
						<Box>
							<Text>User ID</Text>
							<Input type="text" w="300px" />
						</Box>
					</VStack>
				</ModalBody>
				<ModalFooter justifyContent="center">
					<Button colorScheme="green">Create</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
