import { Container, ContainerProps, Heading, Tag, useDisclosure } from "@chakra-ui/react";
import { ProfileData } from "_types/data";
import { ProfileModal } from "./ProfileModal";

interface Props extends ContainerProps {
	profile: ProfileData;
	isActive?: boolean;
}

export const ProfileCard = ({ profile, ...props }: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Container
			w="300px"
			h="280px"
			borderRadius="18"
			centerContent
			justifyContent="center"
			cursor="pointer"
			transition="transform 400ms"
			transform="scale(0.98)"
			p="4"
			backgroundColor="rgba(128, 128, 128, 0.1)"
			border="2px solid transparent"
			backdropFilter="blur(40px)"
			backgroundClip="padding-box"
			boxShadow="10px 10px 10px rgba(46, 54, 68, 0.03)"
			_hover={{ backgroundColor: "lightgray", transform: "scale(1)" }}
			onClick={onOpen}
			{...props}
		>
			<Heading p="4">{profile.serverName}</Heading>
			<Tag>{profile.userName}</Tag>
			<ProfileModal isOpen={isOpen} onClose={onClose} profile={profile} />
		</Container>
	);
};
