import NextLink from "next/link";
import { ReactNode } from "react";
import { Link as ChakraLink, LinkBox } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface Props {
	href: string;
	children: ReactNode;
	external?: boolean;
}

// gotta figure this out, how it should look and behave in diff scenarios
// maybe 3 diff components: Link, LinkExternal, LinkButton/CTA
export const Link = ({ href, children, external = false }: Props) => {
	// const router = useRouter();

	// external = external || !href.startsWith("/");
	// const isActive = router.pathname === href;

	return (
		<LinkBox>
			<NextLink href={href} passHref={external}>
				<ChakraLink isExternal={external}>{children}</ChakraLink>
			</NextLink>
		</LinkBox>
	);
};
