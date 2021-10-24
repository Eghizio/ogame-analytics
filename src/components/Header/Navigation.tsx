import { HStack, useMediaQuery } from "@chakra-ui/react";
import { Link } from "_components/Link";
import { DrawerNavigation } from "_components/Header/DrawerNavigation";

const pages = [
	{ href: "/", label: "Home" },
	{ href: "/login", label: "Login" },
	{ href: "/account", label: "Account" },
];

export const Navigation = () => {
	const [isDesktop] = useMediaQuery("(min-width: 600px)");

	return (
		<nav>
			{isDesktop ? (
				<HStack as="ul" px="16" spacing="4">
					{pages.map(({ href, label }) => (
						<Link key={href} href={href}>
							{label}
						</Link>
					))}
				</HStack>
			) : (
				<DrawerNavigation pages={pages} />
			)}
		</nav>
	);
};
