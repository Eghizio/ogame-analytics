import { useRef } from "react";
import {
	useDisclosure,
	Button,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	VStack,
} from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icon"
import { Link } from "_components/Link";

interface Props {
	pages: {
		href: string;
		label: string;
	}[];
}

// add is current path, maybe decouple Pages Links
export const DrawerNavigation = ({ pages }: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<>
			<Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
				Open
			</Button>
			<Drawer placement="right" isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Menu</DrawerHeader>
					<DrawerBody>
						<VStack as="ul" spacing="4">
							{pages.map(({ href, label }) => (
								<Link key={href} href={href}>
									{label}
								</Link>
							))}
						</VStack>
					</DrawerBody>
					<DrawerFooter>Socials?</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};
