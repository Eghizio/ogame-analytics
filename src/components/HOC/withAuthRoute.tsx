import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
import { Center, Text } from "@chakra-ui/react";
import { useAuth } from "_context/AuthProvider";

// need Component type
export const withAuthRoute = (Component: ComponentType, redirectTo = "/login") => {
	const AuthRoute = (props) => {
		const { user } = useAuth();
		const router = useRouter();

		useEffect(() => {
			if (user === null) router.push(redirectTo);
		}, []);

		if (!user)
			return (
				<Center>
					<Text>Loading</Text>
				</Center>
			);
		return <Component {...props} />;
	};

	return AuthRoute;
};
