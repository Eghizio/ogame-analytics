import { Box, Heading, Link, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import NextLink from "next/link";
import { ChangeEventHandler, useEffect } from "react";
import { Dropdown } from "../components/Dropdown";
import { ServerSelect } from "../components/ServerSelect";
import { KEYS } from "../constants/localStorageKeys";
import { useAuth } from "../context/AuthProvider";
import { useAPI } from "../hooks/useAPI";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Profile = () => {
	const { user } = useAuth();

	return (
		<Box>
			<Heading>Settings</Heading>
			<NextLink href="/">
				<Link>Home</Link>
			</NextLink>
			<Box>
				<Text>Selected Server ID: {user?.lastServerID || ""}</Text>
				<ServerSelect />
			</Box>
		</Box>
	);
};

export default Profile;
