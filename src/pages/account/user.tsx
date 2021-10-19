import { Box, Heading, Text, Center } from "@chakra-ui/layout";
import { Divider, Input, VStack } from "@chakra-ui/react";
import { withAuth } from "_components/HOC/withAuth";


const User = () => {
    return (
        <Box p="4">
            <Heading>Account</Heading>
            <Divider my="4"/>
            <VStack align="stretch">	
                <Box>
                    <Text>Email:</Text>
                    <Input type="text" maxWidth="300px"/>
                </Box>
                <Box>
                    <Text>Password:</Text>
                    <Input type="text" maxWidth="300px"/>
                </Box>
                <Box>
                    <Text>Confirm password:</Text>
                    <Input type="text" maxWidth="300px"/>
                </Box>
            </VStack>
        </Box>
    );
};

// export default withAuth(User);
export default User;