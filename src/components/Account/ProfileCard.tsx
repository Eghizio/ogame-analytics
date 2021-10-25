import { Container, ContainerProps, Heading, Tag } from "@chakra-ui/react";
import { ProfileData } from "_types/data";

interface Props extends ContainerProps {
	profile: ProfileData;
	isActive?: boolean;
}

export const ProfileCard = ({ profile, ...props }: Props) => {
	return (
		<Container
			w="300px"
			h="280px"
			borderRadius="18"
			centerContent
			justifyContent="center"
			cursor="pointer"
			transition="transform 400ms"
			transform="scale(0.97)"
			_hover={{ backgroundColor: "lightgray", transform: "scale(1)" }}
			backgroundColor="rgba(128, 128, 128, 0.1)"
			border="2px solid transparent"
			backdropFilter="blur(40px)"
			backgroundClip="padding-box"
			boxShadow="10px 10px 10px rgba(46, 54, 68, 0.03)"
			{...props}
		>
			<Heading p="4">{profile.serverName}</Heading>
			<Tag>{profile.userName}</Tag>
		</Container>
	);
};
