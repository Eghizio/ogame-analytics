import { ReactNode } from "react";
import {
	ModalProps,
	Modal as ChakraModal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";

interface Props extends ModalProps {
	isOpen: boolean;
	onClose: () => void;
	header?: ReactNode;
	children: ReactNode;
	footer?: ReactNode;
}

// change it to compound component with Modal.Body and Modal.Footer
export const Modal = ({ isOpen, onClose, header, children, footer, ...props }: Props) => {
	return (
		<ChakraModal isOpen={isOpen} onClose={onClose} isCentered {...props}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{header}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{children}</ModalBody>
				<ModalFooter>{footer}</ModalFooter>
			</ModalContent>
		</ChakraModal>
	);
};
