'use client'

import { FaFacebook, FaGithub, FaGooglePlusG } from "react-icons/fa"
import { Button, Flex } from "@mantine/core"

export default function SSOButtons() {
    return (
        <Flex direction="column" flex={1} gap={8}>
            <Button color="red" leftSection={<FaGooglePlusG size={24}/>}>Continue with Google</Button>
            { /* <Button color="black" leftSection={<FaGithub size={20}/>}>Continue with Github</Button> */ }
            { /* <Button color="blue"  leftSection={<FaFacebook size={20}/>}>Continue with Facebook</Button> */ }
        </Flex>
    )
}
