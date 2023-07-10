import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";

export default function PartnerProfile(): JSX.Element {
  return (
    <Flex align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }} textAlign={"center"}>
          User Profile Details
        </Heading>
        <FormControl id="userName">
          {/* <FormLabel>User Icon</FormLabel> */}
          <Stack direction={["column", "row"]} spacing={6} justifyContent={"center"}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo"></Avatar>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName">
          <FormLabel>Partner name</FormLabel>
          <Input
            placeholder="Rajpal Yadav"
            _placeholder={{ color: "#000", fontWeight: "bold" }}
            type="text"
            isDisabled
          />
        </FormControl>
        <FormControl id="number">
          <FormLabel>Phone number</FormLabel>
          <Input
            placeholder="+91 8459687548"
            _placeholder={{ color: "#000", fontWeight: "bold" }}
            type="number"
            isDisabled
          />
        </FormControl>
        <FormControl id="account-number">
          <FormLabel>Account number</FormLabel>
          <Input
            placeholder="7845 4758 7458 1245"
            _placeholder={{ color: "#000", fontWeight: "bold" }}
            type="number"
            isDisabled
          />
        </FormControl>
        <FormControl id="ifsc">
          <FormLabel>IFSC code</FormLabel>
          <Input
            placeholder="11750ICICI"
            _placeholder={{ color: "#000", fontWeight: "bold" }}
            type="text"
            isDisabled
          />
        </FormControl>
      </Stack>
    </Flex>
  );
}
