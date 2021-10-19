import NextLink from "next/link";
import { FormEventHandler, useState } from "react";
import { Box, Center, Stack } from "@chakra-ui/layout";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useAuth } from "../context/AuthProvider";
import { debounce } from "../utils/debounce";
import { useRouter } from "next/dist/client/router";

const Login = () => {
	const router = useRouter();
	const { login } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();

		// add debounce on input
		// console.log(email, password);
		// validate email and pwd

		await login(email, password);
		router.push("/account"); // test if logged in
	};

	return (
		<Box>
			<Center>
				<Box border="1px solid blue" borderRadius="0.5em" p="5">
					<form onSubmit={handleSubmit}>
						<Stack>
							<FormControl isRequired>
								<FormLabel>Email</FormLabel>
								<Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
							</FormControl>
							<FormControl isRequired>
								<FormLabel>Password</FormLabel>
								<Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
							</FormControl>
							<Button colorScheme="blue" type="submit">
								Login
							</Button>
						</Stack>
					</form>
				</Box>
			</Center>
		</Box>
	);
};

export default Login;
