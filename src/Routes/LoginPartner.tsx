import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import VerifyNumber from "../Components/VerifyNumber";

export default function LoginPartner() {
  const [gotOtp, setGotOtp] = useState(false);

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
        flexDirection={"column"}
      >
        {!gotOtp && (
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign in</Heading>
            </Stack>
            <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <FormControl id="phone">
                  <FormLabel>Phone number</FormLabel>
                  <Input type="number" placeholder={"+91 8578485759"} />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={() => {
                      console.log("clicked");
                      setGotOtp(true);
                    }}
                  >
                    Get OTP
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        )}
        {gotOtp && <VerifyNumber />}
      </Flex>
    </>
  );
}
