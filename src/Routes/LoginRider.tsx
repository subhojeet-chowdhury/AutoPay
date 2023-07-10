import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const LoginRider = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(false);

  const handleSubmit = () => {
    if (!values.email || !values.password) {
      setError("Please fill all the fields");
      return;
    }
    setError("");

    setDisable(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setDisable(false);
        navigate("/rider/:id/home");
      })
      .catch((err) => {
        setDisable(false);
        setError(err.message);
      });
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to travel in a smarter way ✌️
          </Text>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Text color={"red"}>{error}</Text>
              <a href="/rider/:id/home">
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  width={"100%"}
                  disabled={disable}
                >
                  Sign in
                </Button>
              </a>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Don't have an account?{" "}
                <Link color={"blue.400"} href="/signup-rider">
                  Sign up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginRider;
