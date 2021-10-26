import { Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { Link } from "_components/shared/Link";
import { Navigation } from "_components/Header/Navigation";

const pages = [
	{ href: "/", label: "Home" },
	{ href: "/login", label: "Login" },
	{ href: "/account", label: "Account" },
] as const;

export const Header = () => {
	return (
		<HStack as="header" p="4" bg="teal.400" marginBottom="4px">
			<Heading>OGame Analytics</Heading>
			<Spacer />
			<Navigation />
		</HStack>
	);
};
