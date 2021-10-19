import { Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { Link } from "_components/Link";

const pages = [
	{ href: "/", label: "Home" },
	{ href: "/login", label: "Login" },
	{ href: "/account", label: "Account" },
] as const;

export const Navigation = () => {
	return (
		<Flex as="nav" p="4" bg="teal.400" marginBottom="4px">
			<Heading>OGame Analytics</Heading>
			<Spacer />
			<HStack as="ul" px="16" spacing="4">
				{pages.map(({ href, label }) => (
					<Link key={href} href={href}>
						{label}
					</Link>
				))}
			</HStack>
		</Flex>
	);
};
