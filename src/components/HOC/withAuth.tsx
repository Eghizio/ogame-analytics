import { Center, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "_context/AuthProvider";

export const withAuth = (Component, redirectTo = "/login") => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if(user === null) router.push(redirectTo);
    }, []);

    if(!user) return (<Center><Text>Loading</Text></Center>);
    return <Component/>;
};