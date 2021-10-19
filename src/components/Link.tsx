import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/layout";

interface Props {
	href: string;
	children: string;
	external?: boolean;
}

export const Link = ({ href, children, external = false }: Props) => {
	return (
		<NextLink href={href}>
			<ChakraLink>{children}</ChakraLink>
		</NextLink>
	);
};

// const ExternalLink = () => {

// };

// export const Link = {
//     Internal: InternalLink,
//     External: ExternalLink
// };
